(function () {
    const chapterQuestions = [
        {
            "numb": 1,
            "question": "Who is the author of the story 'Gillu'?",
            "answer": "Mahadevi Verma",
            "options": [
                "Joan Lexau",
                "Mahadevi Verma",
                "R. C. Hutchinson",
                "Amrita Pritam"
            ],
            "explanation": "Mahadevi Verma, a renowned Hindi poetess and writer, wrote this touching story about a squirrel."
        },
        {
            "numb": 2,
            "question": "Who was 'Gillu'?",
            "answer": "A squirrel",
            "options": [
                "A cat",
                "A dog",
                "A squirrel",
                "A rabbit"
            ],
            "explanation": "Gillu was a tiny baby squirrel rescued by the narrator."
        },
        {
            "numb": 3,
            "question": "How did Gillu sustain wounds initially?",
            "answer": "Assaulted by two crows",
            "options": [
                "Fell from a tree",
                "Assaulted by two crows",
                "Attacked by a cat",
                "Hit by a stone"
            ],
            "explanation": "Two crows were poking their beaks at him after he fell from a nest."
        },
        {
            "numb": 4,
            "question": "What ointment was applied to Gillu's wounds?",
            "answer": "Penicillin",
            "options": [
                "Iodine",
                "Penicillin",
                "Burnol",
                "Antiseptic cream"
            ],
            "explanation": "The narrator applied Penicillin ointment to his wounds."
        },
        {
            "numb": 5,
            "question": "What was Gillu's favorite food?",
            "answer": "Kaju",
            "options": [
                "Biscuits",
                "Rice",
                "Kaju",
                "Groundnut"
            ],
            "explanation": "Kaju (Cashew) was his favorite food; he would refuse other food if Kaju wasn't available."
        },
        {
            "numb": 6,
            "question": "What is the life span of squirrels according to the story?",
            "answer": "Barely 2 years",
            "options": [
                "1 year",
                "Barely 2 years",
                "5 years",
                "10 years"
            ],
            "explanation": "The story mentions that squirrels have a life span of barely two years."
        },
        {
            "numb": 7,
            "question": "Where was Gillu put to eternal rest?",
            "answer": "Under the Sonjuhi creeper",
            "options": [
                "Under a Mango tree",
                "In a river",
                "Under the Sonjuhi creeper",
                "In the garden"
            ],
            "explanation": "Because he loved this creeper most and the author hoped to see him blossom as a flower there."
        },
        {
            "numb": 8,
            "question": "What sound did Gillu make when hungry?",
            "answer": "Chik-chik",
            "options": [
                "Meow-meow",
                "Chik-chik",
                "Caw-caw",
                "Trill-trill"
            ],
            "explanation": "He would twitter 'chik-chik' to inform he was hungry."
        },
        {
            "numb": 9,
            "question": "Where did the writer see the two crows playfuly poking their beaks?",
            "answer": "At the flowerpots",
            "options": [
                "On the roof",
                "At the flowerpots",
                "In the garden",
                "On the window"
            ],
            "explanation": "They were poking at the flowerpots in the verandah."
        },
        {
            "numb": 10,
            "question": "What does the transformation from common noun to proper noun imply in the story?",
            "answer": "Giving a specific identity (Naming him Gillu)",
            "options": [
                "Grammar lesson",
                "Giving a specific identity (Naming him Gillu)",
                "Changing species",
                "None of these"
            ],
            "explanation": "Calling the squirrel 'Gillu' gave him an individual identity."
        },
        {
            "numb": 11,
            "question": "What was used as Gillu's nest?",
            "answer": "A light-weight flower basket",
            "options": [
                "A wooden box",
                "A light-weight flower basket",
                "A cardboard carton",
                "A cage"
            ],
            "explanation": "Hung on the window with cotton wool lining."
        },
        {
            "numb": 12,
            "question": "How did Gillu attract the writer's attention while she wrote?",
            "answer": "By venturing close to her feet",
            "options": [
                "By biting her",
                "By venturing close to her feet",
                "By making noise",
                "By sleeping"
            ],
            "explanation": "He would venture close to her feet and run up the curtains."
        },
        {
            "numb": 13,
            "question": "What did the writer use to feed Gillu milk initially?",
            "answer": "A thin cotton wool wick",
            "options": [
                "A spoon",
                "A thin cotton wool wick",
                "A dropper",
                "A bottle"
            ],
            "explanation": "He was too small to drink directly, so a wick dipped in milk was used."
        },
        {
            "numb": 14,
            "question": "When did Gillu refuse to eat his favorite food?",
            "answer": "During the narrator's indisposition (illness)",
            "options": [
                "In winter",
                "During the narrator's indisposition (illness)",
                "When he was angry",
                "When he was full"
            ],
            "explanation": "He showed concern for the author's health by eating little."
        },
        {
            "numb": 15,
            "question": "What color were Gillu's eyes described as?",
            "answer": "Blue, glass-beads-like",
            "options": [
                "Black",
                "Red",
                "Blue, glass-beads-like",
                "Green"
            ],
            "explanation": "His eyes were described as blue, glass-beads-like."
        },
        {
            "numb": 16,
            "question": "How did Gillu keep himself cool in summer?",
            "answer": "Lying prostrate on the surahi",
            "options": [
                "Sitting in water",
                "Lying prostrate on the surahi",
                "Sitting near a fan",
                "Eating ice cream"
            ],
            "explanation": "He would lie on the earthen pot (surahi) to stay cool."
        },
        {
            "numb": 17,
            "question": "The writer believed she would find Gillu flowering in the guise of a ____________.",
            "answer": "Juhi flower",
            "options": [
                "Rose",
                "Juhi flower",
                "Lotus",
                "Sunflower"
            ],
            "explanation": "A tiny yellow Juhi flower."
        },
        {
            "numb": 18,
            "question": "What happened to Gillu's swing after his death?",
            "answer": "It was taken off the hook",
            "options": [
                "It was given to another squirrel",
                "It was taken off the hook",
                "It was burnt",
                "It was kept as a souvenir"
            ],
            "explanation": "The swing was removed."
        },
        {
            "numb": 19,
            "question": "Who is the narrator of the story?",
            "answer": "Mahadevi Verma",
            "options": [
                "Jim",
                "Mahadevi Verma",
                "Satyajit Ray",
                "Premchand"
            ],
            "explanation": "The story is a first-person account by Mahadevi Verma."
        },
        {
            "numb": 20,
            "question": "Did Gillu ever eat from the writer's plate?",
            "answer": "Yes",
            "options": [
                "No",
                "Yes",
                "Only once",
                "Sometimes"
            ],
            "explanation": "He was an exception among her pets and would sit in her plate to eat rice."
        },
        {
            "numb": 21,
            "question": "What does 'prostrate' mean in the context of the story?",
            "answer": "Lying on the ground/surface",
            "options": [
                "Standing tall",
                "Lying on the ground/surface",
                "Jumping",
                "Running"
            ],
            "explanation": "Lying flat on the surahi."
        },
        {
            "numb": 22,
            "question": "Gillu's claws were getting ____________ in his near death-like state.",
            "answer": "Cold (Icy)",
            "options": [
                "Warm",
                "Cold (Icy)",
                "Soft",
                "Hard"
            ],
            "explanation": "He clutched her finger with icy claws before dying."
        },
        {
            "numb": 23,
            "question": "What did the writer switch on to give Gillu warmth?",
            "answer": "Heater",
            "options": [
                "Fan",
                "Heater",
                "Bulb",
                "Fire"
            ],
            "explanation": "She switched on the heater as his claws were getting cold."
        },
        {
            "numb": 24,
            "question": "How long did it take for Gillu to get better after the crow attack?",
            "answer": "Three-four months",
            "options": [
                "One week",
                "Three-four months",
                "One year",
                "Two days"
            ],
            "explanation": "He astonished everyone with his recovery in 3-4 months."
        },
        {
            "numb": 25,
            "question": "What game did it seem the crows were playing?",
            "answer": "Hide and seek",
            "options": [
                "Football",
                "Hide and seek",
                "Tag",
                "Chess"
            ],
            "explanation": "The author thought they were engaged in hide and seek."
        },
        {
            "numb": 26,
            "question": "What is 'Sonjuhi'?",
            "answer": "A creeper",
            "options": [
                "A tree",
                "A creeper",
                "A fruit",
                "A vegetable"
            ],
            "explanation": "It is the creeper under which Gillu was buried."
        },
        {
            "numb": 27,
            "question": "What does 'refulgent' mean?",
            "answer": "Very bright/Shining",
            "options": [
                "Dull",
                "Very bright/Shining",
                "Dark",
                "Ugly"
            ],
            "explanation": "His eyes were described as refulgent."
        },
        {
            "numb": 28,
            "question": "What does 'antics' mean?",
            "answer": "Queer and typical behavior (Playful tricks)",
            "options": [
                "Sadness",
                "Queer and typical behavior (Playful tricks)",
                "Anger",
                "Hunger"
            ],
            "explanation": "Everyone was pleasantly astonished at his antics."
        },
        {
            "numb": 29,
            "question": "Mahadevi Verma is a famous poetess in which language?",
            "answer": "Hindi",
            "options": [
                "English",
                "Hindi",
                "Bengali",
                "Tamil"
            ],
            "explanation": "She is a celebrated figure in Hindi literature."
        },
        {
            "numb": 30,
            "question": "The crows were considering the baby squirrel as an ____________.",
            "answer": "Easy prey",
            "options": [
                "Easy prey",
                "Enemy",
                "Friend",
                "Toy"
            ],
            "explanation": "They wanted to eat him."
        },
        {
            "numb": 31,
            "question": "Gillu was buried because he loved the Sonjuhi creeper ____________.",
            "answer": "Most",
            "options": [
                "Least",
                "Most",
                "A little",
                "Not at all"
            ],
            "explanation": "It was his favorite spot."
        },
        {
            "numb": 32,
            "question": "Who tended to Gillu after the attack?",
            "answer": "The narrator",
            "options": [
                "A doctor",
                "The narrator",
                "Her servant",
                "Her mother"
            ],
            "explanation": "Mahadevi Verma herself nursed him back to health."
        },
        {
            "numb": 33,
            "question": "What did Gillu do when the writer came back from the hospital?",
            "answer": "He sat near her head and stroked her forehead",
            "options": [
                "He bit her",
                "He sat near her head and stroked her forehead",
                "He ran away",
                "He ignored her"
            ],
            "explanation": "He acted like a nurse or attendant."
        },
        {
            "numb": 34,
            "question": "Everyone remarked that the squirrel would not ____________.",
            "answer": "Survive",
            "options": [
                "Fly",
                "Survive",
                "Eat",
                "Run"
            ],
            "explanation": "Initially, they thought he would die from the crow wounds."
        },
        {
            "numb": 35,
            "question": "Gillu's tail is described as:",
            "answer": "Bushy",
            "options": [
                "Long",
                "Short",
                "Bushy",
                "Hairless"
            ],
            "explanation": "Upon recovery, he had a bushy tail."
        },
        {
            "numb": 36,
            "question": "Which season is mentioned when Gillu used the surahi?",
            "answer": "Summer",
            "options": [
                "Winter",
                "Summer",
                "Rainy",
                "Spring"
            ],
            "explanation": "To tackle summer heat."
        },
        {
            "numb": 37,
            "question": "When did Gillu die?",
            "answer": "As the first ray of morning touched him",
            "options": [
                "At midnight",
                "As the first ray of morning touched him",
                "At noon",
                "In the evening"
            ],
            "explanation": "He departed with the morning sun."
        },
        {
            "numb": 38,
            "question": "Does the author believe animals have compassionate feelings?",
            "answer": "Yes",
            "options": [
                "No",
                "Yes",
                "Maybe",
                "Only dogs"
            ],
            "explanation": "Suggested by Gillu's behavior during her illness."
        },
        {
            "numb": 39,
            "question": "How did Gillu act when other people saw him?",
            "answer": "He scuttled back to his nest",
            "options": [
                "He attacked them",
                "He scuttled back to his nest",
                "He played with them",
                "He slept"
            ],
            "explanation": "He was shy with strangers."
        },
        {
            "numb": 40,
            "question": "The writer taught Gillu to sit close to her ____________.",
            "answer": "Plate",
            "options": [
                "Chair",
                "Plate",
                "Bed",
                "Table"
            ],
            "explanation": "To eat with her."
        },
        {
            "numb": 41,
            "question": "What is 'twittering'?",
            "answer": "Sound made by birds/Gillu",
            "options": [
                "Walking",
                "Sound made by birds/Gillu",
                "Eating",
                "Flying"
            ],
            "explanation": "Gillu's 'chik-chik' sound."
        },
        {
            "numb": 42,
            "question": "What does 'eternal rest' mean?",
            "answer": "Death",
            "options": [
                "Sleep",
                "Death",
                "Holiday",
                "Coma"
            ],
            "explanation": "Buried for eternal rest means he died."
        },
        {
            "numb": 43,
            "question": "Gillu would eat each grain of ____________ dexterously.",
            "answer": "Rice",
            "options": [
                "Wheat",
                "Rice",
                "Dal",
                "Corn"
            ],
            "explanation": "When eating from her plate."
        },
        {
            "numb": 44,
            "question": "What accident did the author have?",
            "answer": "Motor car accident",
            "options": [
                "Train accident",
                "Motor car accident",
                "Plane crash",
                "Fall from stairs"
            ],
            "explanation": "This caused her indisposition."
        },
        {
            "numb": 45,
            "question": "Who was treated as an exception among the author's pets?",
            "answer": "Gillu",
            "options": [
                "Her dog",
                "Her cat",
                "Gillu",
                "Her parrot"
            ],
            "explanation": "Only Gillu dared to eat from her plate."
        },
        {
            "numb": 46,
            "question": "The wire-mesh opening was made solely for ____________.",
            "answer": "Gillu",
            "options": [
                "Mosquitoes",
                "Gillu",
                "Air",
                "Light"
            ],
            "explanation": "To let him go out and come in."
        },
        {
            "numb": 47,
            "question": "What is the synonym of 'assault'?",
            "answer": "Attack",
            "options": [
                "Love",
                "Attack",
                "Help",
                "Care"
            ],
            "explanation": "The crows assaulted Gillu."
        },
        {
            "numb": 48,
            "question": "The author used a ____________ to put Gillu in for fun sometimes.",
            "answer": "Long envelope",
            "options": [
                "Box",
                "Long envelope",
                "Bag",
                "Pocket"
            ],
            "explanation": "She would put his tiny body in a long envelope playfully."
        },
        {
            "numb": 49,
            "question": "Gillu's moving away from the author's head was like the going away of a ____________.",
            "answer": "Nurse or attendant",
            "options": [
                "Friend",
                "Nurse or attendant",
                "Enemy",
                "Ghost"
            ],
            "explanation": "Describing his gentle care during her illness."
        },
        {
            "numb": 50,
            "question": "The story 'Gillu' beautifully portrays the bond between ____________.",
            "answer": "Human and Animal",
            "options": [
                "Mother and Son",
                "Human and Animal",
                "Two friends",
                "Teacher and Student"
            ],
            "explanation": "It highlights the emotional connection between species."
        }
    ];

    if (typeof window !== 'undefined') {
        if (!window.questionRegistry) {
            window.questionRegistry = {};
        }
        window.questionRegistry['english_ch3_gillu'] = chapterQuestions;
    }
})();
