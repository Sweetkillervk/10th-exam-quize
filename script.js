//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const start_btn_container = document.querySelector(".start_btn");
const selection_box = document.querySelector(".selection_box");
const selection_title = document.querySelector(".selection_box .title");
const selection_list = document.querySelector(".selection_box .selection_list");
const back_btn = document.querySelector(".selection_box .back_btn");

const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const timer_control_btn = document.querySelector(".timer_control_btn");
const inputName = document.getElementById('studentName');
const nameError = document.getElementById('nameError');
const review_box = document.querySelector(".review_box");
const review_btn = document.querySelector(".review-btn");
const close_review_btn = document.querySelector(".close_review");
const review_content = document.querySelector(".review-content");

const answers_popup = document.querySelector(".answers_popup");
const show_answers_btn = document.querySelector(".show_answers_btn");
const close_answers_btn = document.querySelector(".close_answers");
const answers_list = document.querySelector(".answers_list");
const answerSearch = document.getElementById("answerSearch");

const explanation_box = document.querySelector(".explanation-box");
const explanation_textElement = document.querySelector(".explanation-text");

let studentName = "";
let timeValue = 20;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let isPaused = false;
let currentTimeLeft = 20;
let currentLineWidth = 0;

// State needed for navigation
let currentSubject = null;
let currentChapter = null;
let currentQuestions = [];
let userAnswers = [];

// Selection mode: 'chapter' or 'random'
let selectionMode = 'chapter';
const tab_btns = document.querySelectorAll(".tab_btn");

// Load name from local storage if exists
const storedName = localStorage.getItem('studentName');
if (storedName && inputName) inputName.value = storedName;

// START BUTTON CLICK -> Show Subjects
if (start_btn) {
    start_btn.onclick = () => {
        start_btn_container.classList.add("inactive");
        renderSubjects();
        selection_box.classList.add("activeSelection");
    }
}

// TAB SWITCHING
tab_btns.forEach(btn => {
    btn.onclick = () => {
        tab_btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectionMode = btn.dataset.mode;
        renderSubjects();
    };
});

function renderSubjects() {
    selection_title.textContent = selectionMode === 'chapter' ? "Select Subject" : "Select Subject for Random Test";
    selection_list.innerHTML = "";
    back_btn.style.display = "none";

    quizData.forEach((sub, index) => {
        const div = document.createElement("div");
        div.className = "select-card";
        div.innerHTML = `
            <div class="icon"><i class="${sub.icon}"></i></div>
            <div class="details">
                <div class="name">${sub.subject}</div>
                <div class="meta">${sub.chapters.length} Chapters</div>
            </div>
        `;
        div.onclick = () => {
            currentSubject = sub;
            if (selectionMode === 'chapter') {
                renderChapters(sub);
            } else {
                loadRandomSubjectTest(sub);
            }
        };
        selection_list.appendChild(div);
    });
}

function renderChapters(subject) {
    selection_title.textContent = "Select Chapter";
    selection_list.innerHTML = "";
    back_btn.style.display = "block";

    back_btn.onclick = () => {
        renderSubjects();
    };

    subject.chapters.forEach((chap, index) => {
        // Get locally stored score
        const storageKey = `quiz_score_${chap.id}`;
        const lastData = JSON.parse(localStorage.getItem(storageKey));
        let scoreBadge = '';

        // Count persistence needs questions length? 
        // With separated files, we don't know total questions here without loading them.
        // We can check local storage 'total' if available, otherwise just show 'New' or 'Last: X' without total?
        // Or we rely on stored total.

        if (lastData) {
            const percentage = (lastData.score / lastData.total) * 100;
            let colorClass = percentage >= 70 ? 'good' : (percentage >= 40 ? 'avg' : 'bad');
            scoreBadge = `<div class="score-badge ${colorClass}">Last: ${lastData.score}/${lastData.total}</div>`;
        } else {
            scoreBadge = `<div class="score-badge new">New</div>`;
        }

        const div = document.createElement("div");
        div.className = "select-card chapter-card";
        div.innerHTML = `
            <div class="details">
                <div class="name">${chap.title}</div>
                <!-- Cannot show question count here immediately anymore as it is not loaded yet -->
                <div class="meta">Click to load</div>
            </div>
            ${scoreBadge}
        `;
        div.onclick = () => {
            currentChapter = chap;
            loadQuestionsAndStart(chap);
        };
        selection_list.appendChild(div);
    });
}

function loadQuestionsAndStart(chapter) {
    if (!window.questionRegistry) window.questionRegistry = {};

    // Check if already loaded
    if (window.questionRegistry[chapter.id]) {
        currentQuestions = window.questionRegistry[chapter.id];
        transitionToInfoBox();
    } else {
        // Load script
        const script = document.createElement('script');
        script.src = `questions_data/${chapter.id}.js`;
        script.onload = () => {
            if (window.questionRegistry[chapter.id]) {
                currentQuestions = window.questionRegistry[chapter.id];
                transitionToInfoBox();
            } else {
                alert("Error: Questions could not be loaded.");
            }
        };
        script.onerror = () => {
            alert("Error: Could not find question file.");
        };
        document.body.appendChild(script);
    }
}

async function loadRandomSubjectTest(subject) {
    // Show loading state if needed
    selection_list.innerHTML = `<div style="text-align:center; padding: 20px; width: 100%; grid-column: 1/-1;">
        <i class="fas fa-spinner fa-spin" style="font-size: 30px; margin-bottom: 10px;"></i>
        <p>Loading questions from all chapters...</p>
    </div>`;

    let allQuestions = [];
    if (!window.questionRegistry) window.questionRegistry = {};

    const loadChapter = (chapterId) => {
        return new Promise((resolve, reject) => {
            if (window.questionRegistry[chapterId]) {
                resolve(window.questionRegistry[chapterId]);
            } else {
                const script = document.createElement('script');
                script.src = `questions_data/${chapterId}.js`;
                script.onload = () => resolve(window.questionRegistry[chapterId]);
                script.onerror = () => reject(`Could not load ${chapterId}`);
                document.body.appendChild(script);
            }
        });
    };

    try {
        const results = await Promise.all(subject.chapters.map(chap => loadChapter(chap.id)));
        results.forEach(questions => {
            if (questions) allQuestions = allQuestions.concat(questions);
        });

        if (allQuestions.length === 0) {
            alert("No questions found for this subject.");
            renderSubjects();
            return;
        }

        // Shuffle and pick 30
        currentQuestions = shuffleQuestions(allQuestions).slice(0, 30);

        // Reset IDs/Numbers for the random set
        currentQuestions.forEach((q, i) => q.numb = i + 1);

        transitionToInfoBox();
    } catch (err) {
        console.error(err);
        alert("Error loading questions. Please try again.");
        renderSubjects();
    }
}

function shuffleQuestions(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function transitionToInfoBox() {
    selection_box.classList.remove("activeSelection");
    info_box.classList.add("activeInfo");
}

// Exit from Info Box
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    // Go back to chapter selection
    selection_box.classList.add("activeSelection");
}

// Continue from Info Box
continue_btn.onclick = () => {
    studentName = inputName.value.trim();
    if (studentName === "") {
        nameError.style.display = "block";
        inputName.style.borderColor = "red";
        return;
    }
    nameError.style.display = "none";
    localStorage.setItem('studentName', studentName); // Save name

    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box

    // Reset Quiz State
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    userAnswers = [];

    showQuestions(0);
    queCounter(1);
    startTimer(20);
    startTimerLine(0);

    // Reset Pause Button State
    isPaused = false;
    timer_control_btn.textContent = "Pause";
    timer_control_btn.disabled = false;
    timer_control_btn.style.opacity = "1";
    timer_control_btn.style.cursor = "pointer";
    timer_control_btn.style.background = "#007bff";
}

// Timer Control Button Click Event
if (timer_control_btn) {
    timer_control_btn.onclick = () => {
        if (!isPaused) {
            // Pause logic
            clearInterval(counter);
            clearInterval(counterLine);
            isPaused = true;
            timer_control_btn.textContent = "Resume";
            timer_control_btn.style.background = "#28a745"; // Green for Resume
        } else {
            // Resume logic
            startTimer(currentTimeLeft);
            startTimerLine(currentLineWidth);
            isPaused = false;
            timer_control_btn.textContent = "Pause";
            timer_control_btn.style.background = "#007bff"; // Blue for Pause
        }
    }
}

let next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");


// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < currentQuestions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue);
        startTimerLine(0);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
        explanation_box.style.display = "none";

        // Reset Pause Button
        isPaused = false;
        timer_control_btn.textContent = "Pause";
        timer_control_btn.style.background = "#007bff";
        timer_control_btn.disabled = false;
        timer_control_btn.style.opacity = "1";
        timer_control_btn.style.cursor = "pointer";
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult();
    }
}

// getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");

    let q_tag = '<span>' + currentQuestions[index].numb + ". " + currentQuestions[index].question + '</span>';
    que_text.innerHTML = q_tag;

    option_list.style.display = "block";

    let option_tag = '<div class="option"><span>' + currentQuestions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + currentQuestions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + currentQuestions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + currentQuestions[index].options[3] + '</span></div>';
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

    userAnswers[index] = {
        question: currentQuestions[index].question,
        selected: null,
        correct: currentQuestions[index].answer,
        status: "skipped",
        score: 0,
        explanation: currentQuestions[index].explanation
    };
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correcAns = currentQuestions[que_count].answer;
    const allOptions = option_list.children.length;

    userAnswers[que_count].selected = userAns;

    if (userAns == correcAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        userAnswers[que_count].status = "correct";
        userAnswers[que_count].score = 1;
    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        userAnswers[que_count].status = "incorrect";
        userAnswers[que_count].score = 0;

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }

    showExplanation();
    next_btn.classList.add("show");

    // Disable Pause Button on answer selection
    timer_control_btn.disabled = true;
    timer_control_btn.style.opacity = "0.6";
    timer_control_btn.style.cursor = "not-allowed";
}

function showExplanation() {
    const currentQ = currentQuestions[que_count];
    if (currentQ.explanation) {
        explanation_textElement.innerText = currentQ.explanation;
        explanation_box.style.display = "block";
        explanation_box.classList.add("animate-explanation");
    }
}

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    const studentInfoDisplay = result_box.querySelector(".student-info-display");

    studentInfoDisplay.innerText = "Student: " + studentName;

    let maxScore = currentQuestions.length;
    let displayedScore = userScore;

    let scoreTag = '<span>You got <p>' + displayedScore + '</p> out of <p>' + maxScore + '</p></span>';
    scoreText.innerHTML = scoreTag;

    // SAVE DATA TO LOCAL STORAGE
    if (currentChapter) {
        const dataToSave = {
            score: userScore,
            total: maxScore,
            date: new Date().toISOString()
        };
        localStorage.setItem(`quiz_score_${currentChapter.id}`, JSON.stringify(dataToSave));
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        // Track current time
        currentTimeLeft = time;

        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";

            const allOptions = option_list.children.length;
            let correcAns = currentQuestions[que_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }

            showExplanation();
            next_btn.classList.add("show");

            // Disable Pause Button on Time Off
            timer_control_btn.disabled = true;
            timer_control_btn.style.opacity = "0.6";
            timer_control_btn.style.cursor = "not-allowed";
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 29);
    function timer() {
        time += 1;
        // Track current width
        currentLineWidth = time;

        time_line.style.width = time + "px";
        if (time > 549) {
            clearInterval(counterLine);
        }
    }
}

function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + currentQuestions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}

// Review Logic
review_btn.onclick = () => {
    result_box.classList.remove("activeResult");
    review_box.classList.add("activeReview");
    generateReview();
}

close_review_btn.onclick = () => {
    review_box.classList.remove("activeReview");
    result_box.classList.add("activeResult");
}

function generateReview() {
    review_content.innerHTML = "";
    userAnswers.forEach((ans, index) => {
        let statusClass = ans.status;
        let statusText = "";
        if (ans.status === 'correct') statusText = "Correct";
        else if (ans.status === 'incorrect') statusText = "Wrong";
        else statusText = "Skipped/Time Out";

        let userSelected = ans.selected ? ans.selected : "None";

        let correctHtml = `<div class="correct-ans">Correct Answer: <span>${ans.correct}</span></div>`;

        let explanationHtml = "";
        if (ans.explanation) {
            explanationHtml = `<div class="ai-explanation">Ex: ${ans.explanation}</div>`
        }

        let html = `
        <div class="review-item">
            <div class="q-title">${index + 1}. ${ans.question}</div>
            <div class="q-status ${statusClass}">${statusText}</div>
            <div class="your-ans">Your Answer: <span>${userSelected}</span></div>
            ${correctHtml}
            ${explanationHtml}
        </div>
        `;
        review_content.insertAdjacentHTML("beforeend", html);
    });
}

// Show Answers Logic
if (show_answers_btn) {
    show_answers_btn.onclick = () => {
        answers_popup.classList.add("activeAnswers");
        renderAllAnswers();
        answerSearch.value = ""; // Clear search on open
    }
}

if (close_answers_btn) {
    close_answers_btn.onclick = () => {
        answers_popup.classList.remove("activeAnswers");
    }
}

function renderAllAnswers(filter = "") {
    answers_list.innerHTML = "";
    const filteredQuestions = currentQuestions.filter(q =>
        q.question.toLowerCase().includes(filter.toLowerCase()) ||
        q.answer.toLowerCase().includes(filter.toLowerCase())
    );

    filteredQuestions.forEach((q, index) => {
        let html = `
        <div class="ans-item">
            <div class="ans-q">${q.numb || (index + 1)}. ${q.question}</div>
            <div class="ans-a">Ans: ${q.answer}</div>
        </div>
        `;
        answers_list.insertAdjacentHTML("beforeend", html);
    });

    if (filteredQuestions.length === 0) {
        answers_list.innerHTML = `<div style="text-align:center; padding: 20px; color: rgba(255,255,255,0.5);">No matching questions found.</div>`;
    }
}

// Live Search logic
if (answerSearch) {
    answerSearch.oninput = (e) => {
        renderAllAnswers(e.target.value);
    }
}

// Restart Logic
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = () => {
    // Reloading feels abrupt, let's gracefully go back to chapters
    result_box.classList.remove("activeResult");

    if (selectionMode === 'random') {
        // For random mode, we might want to start a NEW random test immediately
        loadRandomSubjectTest(currentSubject);
    } else {
        // Refresh chapters to show updated score
        renderChapters(currentSubject);
        selection_box.classList.add("activeSelection");
    }
}

quit_quiz.onclick = () => {
    // Go back to Subjects
    result_box.classList.remove("activeResult");
    renderSubjects();
    selection_box.classList.add("activeSelection");
}
