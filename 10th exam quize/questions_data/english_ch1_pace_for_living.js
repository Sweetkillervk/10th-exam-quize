(function () {
    const chapterQuestions = [
        {
            "numb": 1,
            "question": "Who is the author of 'The Pace for Living'?",
            "answer": "R. C. Hutchinson",
            "options": [
                "Satyajit Ray",
                "R. C. Hutchinson",
                "Toni Morrison",
                "Joan Lexau"
            ],
            "explanation": "R. C. Hutchinson wrote the essay 'The Pace for Living' capturing the agony of modern man."
        },
        {
            "numb": 2,
            "question": "Where did the writer watch the play described in the essay?",
            "answer": "Dublin",
            "options": [
                "London",
                "New York",
                "Dublin",
                "Paris"
            ],
            "explanation": "The writer watched the play in Dublin, a city in Ireland."
        },
        {
            "numb": 3,
            "question": "Who was the chief character in the play?",
            "answer": "An elderly corn-merchant",
            "options": [
                "A young doctor",
                "An elderly corn-merchant",
                "A school teacher",
                "An athlete"
            ],
            "explanation": "The protagonist was an elderly corn-merchant from a small Irish country town."
        },
        {
            "numb": 4,
            "question": "The corn-merchant was a man of many ____________.",
            "answer": "Anxieties",
            "options": [
                "Wives",
                "Friends",
                "Anxieties",
                "Wealth"
            ],
            "explanation": "He was described as a man of many anxieties, with a weak heart and cheating nephew."
        },
        {
            "numb": 5,
            "question": "How much did the corn-merchant's wife want to spend on a holiday?",
            "answer": "£10",
            "options": [
                "£100",
                "£10",
                "£50",
                "£5"
            ],
            "explanation": "His wife had the fantastic notion of spending £10 on a holiday."
        },
        {
            "numb": 6,
            "question": "The corn-merchant's heart was described as ____________.",
            "answer": "Dicky (Weak)",
            "options": [
                "Strong",
                "Dicky (Weak)",
                "Stone",
                "Large"
            ],
            "explanation": "The text says his heart was 'dicky', meaning weak or unsound."
        },
        {
            "numb": 7,
            "question": "What speed of the aeroplane does the corn-merchant mention?",
            "answer": "1000 miles an hour",
            "options": [
                "500 miles an hour",
                "1000 miles an hour",
                "200 miles an hour",
                "2000 miles an hour"
            ],
            "explanation": "He complains about an aeroplane that goes at 1000 miles an hour, calling it 'too fast'."
        },
        {
            "numb": 8,
            "question": "Does the writer dislike rapid movement in every field?",
            "answer": "No",
            "options": [
                "Yes",
                "No",
                "Maybe",
                "Can't say"
            ],
            "explanation": "The writer clarifies, 'Not that I have any dislike of rapid movement myself.'"
        },
        {
            "numb": 9,
            "question": "At what speed does the writer enjoy driving a car?",
            "answer": "Ninety miles an hour",
            "options": [
                "Sixty miles an hour",
                "Ninety miles an hour",
                "One hundred miles an hour",
                "Forty miles an hour"
            ],
            "explanation": "He enjoys driving at ninety miles an hour, provided he is driving and it's not his car."
        },
        {
            "numb": 10,
            "question": "In the cinema, the writer finds himself in a ____________.",
            "answer": "Hopeless thick mist (Fog)",
            "options": [
                "Bright light",
                "Hopeless thick mist (Fog)",
                "Happy mood",
                "Deep sleep"
            ],
            "explanation": "He finds it hard to keep up with the pace of the film scenes."
        },
        {
            "numb": 11,
            "question": "Who does the writer turn to for enlightenment in the cinema?",
            "answer": "His wife",
            "options": [
                "His mother",
                "His friend",
                "His wife",
                "The usher"
            ],
            "explanation": "He whispers to his wife to understand the plot and characters."
        },
        {
            "numb": 12,
            "question": "The writer belongs to the tribe of ____________.",
            "answer": "Slow thinkers",
            "options": [
                "Fast thinkers",
                "Slow thinkers",
                "Smart thinkers",
                "Deep thinkers"
            ],
            "explanation": "He admits he is a slow thinker, cursed with 'l'esprit de l'escalier'."
        },
        {
            "numb": 13,
            "question": "What does the French phrase 'L'esprit de l'escalier' mean in this context?",
            "answer": "Thinking of a witty reply after the opportunity has passed",
            "options": [
                "Living a fast life",
                "Thinking of a witty reply after the opportunity has passed",
                "Staircase wit",
                "Both B and C"
            ],
            "explanation": "It refers to people who light on a devastating repartee hours after the party is over."
        },
        {
            "numb": 14,
            "question": "The writer says he would get the ____________ marks in any intelligence test.",
            "answer": "Lowest",
            "options": [
                "Highest",
                "Average",
                "Lowest",
                "Zero"
            ],
            "explanation": "He believes intelligence tests measure the speed of the mind, which is his weakness."
        },
        {
            "numb": 15,
            "question": "Slow thinkers are terribly handicapped in the business of ____________.",
            "answer": "Getting a living",
            "options": [
                "Getting a wife",
                "Getting a living",
                "Getting a car",
                "Getting marks"
            ],
            "explanation": "Modern urge for speed makes it hard for slow thinkers to earn a livelihood."
        },
        {
            "numb": 16,
            "question": "Dining in London and lunching in New York the next day is a ____________ experience.",
            "answer": "Most satisfactory",
            "options": [
                "Boring",
                "Most satisfactory",
                "Tiring",
                "Dangerous"
            ],
            "explanation": "The writer admits this speed gives a superficial sense of drama and excitement."
        },
        {
            "numb": 17,
            "question": "What sort of excitement did our ancestors lack?",
            "answer": "The excitement of rapid travel",
            "options": [
                "The excitement of war",
                "The excitement of rapid travel",
                "The excitement of hunting",
                "The excitement of reading"
            ],
            "explanation": "Ancestors had to do without the thrill of fast machines like aeroplanes and cars."
        },
        {
            "numb": 18,
            "question": "The writer admits that rapid travel excludes the real ____________ of travel.",
            "answer": "Pleasures",
            "options": [
                "Dangers",
                "Cost",
                "Pleasures",
                "Pain"
            ],
            "explanation": "He says you miss the fun you get from a slow country bus."
        },
        {
            "numb": 19,
            "question": "In the film, how many girls were there according to the writer's wife?",
            "answer": "Three",
            "options": [
                "One",
                "Two",
                "Three",
                "Four"
            ],
            "explanation": "A tall blonde, a short blonde, and a medium-sized brunette."
        },
        {
            "numb": 20,
            "question": "The hero in the film takes his ____________ off when he comes indoors.",
            "answer": "Hat",
            "options": [
                "Shoes",
                "Coat",
                "Hat",
                "Glasses"
            ],
            "explanation": "This was the identifier used by the wife to point out the hero."
        },
        {
            "numb": 21,
            "question": "The hero falls in love with the girls in which order?",
            "answer": "B, C, A",
            "options": [
                "A, B, C",
                "C, B, A",
                "B, C, A",
                "B, A, C"
            ],
            "explanation": "His wife explains the sequence of the hero's romance."
        },
        {
            "numb": 22,
            "question": "The writer's mind is trained to work in ____________ gear.",
            "answer": "High (though he is a slow thinker)",
            "options": [
                "Low",
                "High",
                "Reverse",
                "Neutral"
            ],
            "explanation": "The text says 'There you have a mind which has trained itself to work in high gear', referring to the wife or general modern mind."
        },
        {
            "numb": 23,
            "question": "Who was cheating the corn-merchant?",
            "answer": "His nephew",
            "options": [
                "His son",
                "His nephew",
                "His brother",
                "His clerk"
            ],
            "explanation": "One of his anxieties was that his nephew was cheating him."
        },
        {
            "numb": 24,
            "question": "The corn-merchant lived in a small ____________ country town.",
            "answer": "Irish",
            "options": [
                "English",
                "American",
                "Irish",
                "Scottish"
            ],
            "explanation": "The setting was an Irish country town."
        },
        {
            "numb": 25,
            "question": "What is the central idea of the essay 'The Pace for Living'?",
            "answer": "The agony of modern man due to fast life",
            "options": [
                "The benefits of air travel",
                "The agony of modern man due to fast life",
                "The history of cinema",
                "The life of corn merchants"
            ],
            "explanation": "It illustrates the characteristics and pressures of modern fast-paced life."
        },
        {
            "numb": 26,
            "question": "The corn-merchant found the speed of the aeroplane ____________.",
            "answer": "Too fast",
            "options": [
                "Too slow",
                "Just right",
                "Too fast",
                "Exciting"
            ],
            "explanation": "He exclaimed, 'Now that's too fast!'"
        },
        {
            "numb": 27,
            "question": "The writer finds the corn-merchant's complaint ____________.",
            "answer": "Gloriously irrelevant",
            "options": [
                "Very logical",
                "Gloriously irrelevant",
                "Sad",
                "Angry"
            ],
            "explanation": "He found the complaint irrelevant to the merchant's own situation, which made it comic."
        },
        {
            "numb": 28,
            "question": "What does the writer enjoy about driving at 90 mph?",
            "answer": "It gives a superficial sense of drama",
            "options": [
                "It saves fuel",
                "It gives a superficial sense of drama",
                "It is safe",
                "It allows him to sleep"
            ],
            "explanation": "Speed provides a sense of drama and excitement absent in the past."
        },
        {
            "numb": 29,
            "question": "Mental activities of our time tend to follow the pace of ____________.",
            "answer": "Machines",
            "options": [
                "Nature",
                "Animals",
                "Machines",
                "Children"
            ],
            "explanation": "The writer notes that our minds are forced to keep up with machines."
        },
        {
            "numb": 30,
            "question": "What is 'Battersea' mentioned in the text?",
            "answer": "A place with machines that hurl you about (Funfair)",
            "options": [
                "A type of food",
                "A place with machines that hurl you about (Funfair)",
                "A cinema hall",
                "A town in Ireland"
            ],
            "explanation": "He adores the machines at Battersea."
        },
        {
            "numb": 31,
            "question": "The writer says he speaks with ____________ because he is a slow thinker.",
            "answer": "Prejudice",
            "options": [
                "Pride",
                "Prejudice",
                "Joy",
                "Anger"
            ],
            "explanation": "He admits his bias against speed comes from being a slow thinker."
        },
        {
            "numb": 32,
            "question": "People who do not think fast in the ____________ nowadays may not get another chance.",
            "answer": "High Street",
            "options": [
                "Village",
                "High Street",
                "School",
                "Playground"
            ],
            "explanation": "High Street represents the busy, competitive modern world."
        },
        {
            "numb": 33,
            "question": "What corresponds to 'A' in the film according to the wife?",
            "answer": "A tall blonde",
            "options": [
                "A short blonde",
                "A tall blonde",
                "A medium brunette",
                "The hero"
            ],
            "explanation": "A = Tall blonde, B = Short blonde, C = Medium brunette."
        },
        {
            "numb": 34,
            "question": "The essay captures the ____________ of the modern world.",
            "answer": "Pace",
            "options": [
                "Peace",
                "Pace",
                "Silence",
                "Darkness"
            ],
            "explanation": "The title itself is 'The Pace for Living'."
        },
        {
            "numb": 35,
            "question": "The writer implies that slow thinkers are cursed with what spirit?",
            "answer": "Spirit of the staircase",
            "options": [
                "Spirit of the forest",
                "Spirit of the staircase",
                "Spirit of speed",
                "Spirit of wisdom"
            ],
            "explanation": "'L'esprit de l'escalier' literally translates to 'wit of the staircase'."
        },
        {
            "numb": 36,
            "question": "What does the writer refrain from doing in his car?",
            "answer": "Driving it himself if it is his car (Wait, implies not risking his own car)",
            "options": [
                "Driving at 90 mph",
                "Driving slow",
                "Risking his own car",
                "Listening to music"
            ],
            "explanation": "He enjoys 90 mph 'so long as I am driving and so long as it is not my car'."
        },
        {
            "numb": 37,
            "question": "The corn-merchant's cry was a cry of ____________.",
            "answer": "Despair",
            "options": [
                "Joy",
                "Despair",
                "Victory",
                "Hunger"
            ],
            "explanation": "In a moment of despair, he uttered a great cry."
        },
        {
            "numb": 38,
            "question": "How does the writer checking with his wife in the cinema reflect on him?",
            "answer": "He is a slow thinker",
            "options": [
                "He is deaf",
                "He is blind",
                "He is a slow thinker",
                "He doesn't like films"
            ],
            "explanation": "He cannot keep up with the rapid changes in scenes/characters."
        },
        {
            "numb": 39,
            "question": "Modern life has become too ____________.",
            "answer": "Fast",
            "options": [
                "Slow",
                "Fast",
                "Simple",
                "Cheap"
            ],
            "explanation": "This is the central theme."
        },
        {
            "numb": 40,
            "question": "The writer discusses the practical use of mind vs use for ____________.",
            "answer": "Enjoyment",
            "options": [
                "Calculations",
                "Enjoyment",
                "Fighting",
                "sleeping"
            ],
            "explanation": "He says slow thinkers might survive, but he wonders about the use of mind for enjoyment."
        },
        {
            "numb": 41,
            "question": "The writer's wife seems to be a ____________ thinker.",
            "answer": "Fast",
            "options": [
                "Slow",
                "Fast",
                "Confused",
                "Lazy"
            ],
            "explanation": "She easily tracks the characters and plot, unlike the writer."
        },
        {
            "numb": 42,
            "question": "Where does the writer find 'fun' in travel?",
            "answer": "Country bus in Somerset or Spain",
            "options": [
                "Aeroplane",
                "Country bus in Somerset or Spain",
                "Rocket",
                "Submarine"
            ],
            "explanation": "He contrasts the 'fun' of slow travel with the 'excitement' of fast travel."
        },
        {
            "numb": 43,
            "question": "The corn-merchant's situation illustrates the ____________.",
            "answer": "Subtle truths of Irish life",
            "options": [
                "Stupidity of Irish people",
                "Subtle truths of Irish life",
                "Wealth of merchants",
                "Speed of planes"
            ],
            "explanation": "The writer says the Irish get at subtle truths by unlikely approaches."
        },
        {
            "numb": 44,
            "question": "What is the synonym of 'repartee'?",
            "answer": "Witty reply",
            "options": [
                "Question",
                "Witty reply",
                "Silence",
                "Party"
            ],
            "explanation": "Repartee means a quick, witty reply."
        },
        {
            "numb": 45,
            "question": "What is the synonym of 'prejudice'?",
            "answer": "Bias",
            "options": [
                "Fairness",
                "Bias",
                "Justice",
                "Love"
            ],
            "explanation": "Prejudice means a preconceived opinion or bias."
        },
        {
            "numb": 46,
            "question": "The writer implies that intelligence tests are designed to measure ____________.",
            "answer": "Speed of mind",
            "options": [
                "Depth of mind",
                "Speed of mind",
                "Memory",
                "Knowledge"
            ],
            "explanation": "He says they measure the speed of your mind more than anything else."
        },
        {
            "numb": 47,
            "question": "Who represents the 'slow thinkers' tribe in the essay?",
            "answer": "The writer himself",
            "options": [
                "The corn-merchant",
                "The writer's wife",
                "The writer himself",
                "The nephew"
            ],
            "explanation": "He explicitly states, 'I belong to the tribe of slow thinkers'."
        },
        {
            "numb": 48,
            "question": "\"They tell me there's an aeroplane now that goes at 1000 miles an hour.\" Who said this?",
            "answer": "The corn-merchant",
            "options": [
                "The writer",
                "The corn-merchant",
                "The wife",
                "The nephew"
            ],
            "explanation": "This was the line uttered by the character in the play."
        },
        {
            "numb": 49,
            "question": "The fast life of western society is compelling westerners to turn to ____________ (from Group Discussion).",
            "answer": "India",
            "options": [
                "China",
                "India",
                "Japan",
                "Africa"
            ],
            "explanation": "The text mentions westerners turning to India and Yoga for peace."
        },
        {
            "numb": 50,
            "question": "What does the writer think of his own intelligence test scores?",
            "answer": "He is guaranteed to get the lowest marks",
            "options": [
                "He will top them",
                "He is guaranteed to get the lowest marks",
                "He will get average marks",
                "He will cheat"
            ],
            "explanation": "Due to his slow thinking nature."
        }
    ];

    if (typeof window !== 'undefined') {
        if (!window.questionRegistry) {
            window.questionRegistry = {};
        }
        window.questionRegistry['english_ch1_pace_for_living'] = chapterQuestions;
    }
})();
