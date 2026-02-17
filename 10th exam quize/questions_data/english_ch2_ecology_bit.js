(function () {
    const chapterQuestions = [
        {
            "numb": 1,
            "question": "Who is the author of 'Me and The Ecology Bit'?",
            "answer": "Joan Lexau",
            "options": [
                "R. C. Hutchinson",
                "Joan Lexau",
                "Toni Morrison",
                "Satyajit Ray"
            ],
            "explanation": "Joan Lexau wrote this story highlighting the irony of preaching ecology versus practicing it."
        },
        {
            "numb": 2,
            "question": "What is the narrator's name?",
            "answer": "Jim",
            "options": [
                "John",
                "Jim",
                "Jack",
                "Joe"
            ],
            "explanation": "The narrator identifies himself as Jim in the story."
        },
        {
            "numb": 3,
            "question": "What does the narrator do on Saturdays and Sundays?",
            "answer": "Collects garbage to save ecology",
            "options": [
                "Plays cricket",
                "Collects garbage to save ecology",
                "Watches TV",
                "Goes for a picnic"
            ],
            "explanation": "He has a paper route and also collects garbage to put in good work for ecology."
        },
        {
            "numb": 4,
            "question": "Who does the narrator visit first?",
            "answer": "Mr. Williams",
            "options": [
                "Ms. Greene",
                "Mr. Johnson",
                "Mr. Williams",
                "His mother"
            ],
            "explanation": "He goes to Mr. Williams' house and finds him burning leaves."
        },
        {
            "numb": 5,
            "question": "What does Mr. Williams do that bad for ecology?",
            "answer": "Burns leaves",
            "options": [
                "Wastes water",
                "Burns leaves",
                "Uses plastic",
                "Drives a car"
            ],
            "explanation": "Burning leaves causes air pollution, which Jim points out."
        },
        {
            "numb": 6,
            "question": "What does Jim advise Mr. Williams to make?",
            "answer": "A compost pile",
            "options": [
                "A bonfire",
                "A compost pile",
                "A garbage bin",
                "A garden"
            ],
            "explanation": "He suggests making a compost pile with leaves, garbage, and stuff."
        },
        {
            "numb": 7,
            "question": "Why does Mr. Williams object to the compost pile?",
            "answer": "It smells up the whole street (Nose pollution)",
            "options": [
                "It is too expensive",
                "It smells up the whole street (Nose pollution)",
                "He has no space",
                "He dislikes gardening"
            ],
            "explanation": "He complains that the compost smells bad."
        },
        {
            "numb": 8,
            "question": "What does Jim call polluting the nose?",
            "answer": "Noise pollution (Humorous mistake)",
            "options": [
                "Air pollution",
                "Noise pollution",
                "Smell pollution",
                "Scent pollution"
            ],
            "explanation": "Jim confuses the terms, calling bad smell 'noise pollution' or vice-versa in the argument."
        },
        {
            "numb": 9,
            "question": "Why does Jim call Ms. Greene 'Ms. Greene' instead of 'Mrs. Greene'?",
            "answer": "She says she has no change to pay him if he calls her Mrs.",
            "options": [
                "She is unmarried",
                "It is her name",
                "She says she has no change to pay him if he calls her Mrs.",
                "She gets angry"
            ],
            "explanation": "It's a quirky reason given in the text related to payment."
        },
        {
            "numb": 10,
            "question": "Who messes up Ms. Greene's yard?",
            "answer": "Jim's dog",
            "options": [
                "Mr. Williams' dog",
                "Jim's dog",
                "A stray cat",
                "Children"
            ],
            "explanation": "Ms. Greene complains that Jim's dog digs up her garden."
        },
        {
            "numb": 11,
            "question": "What does Ms. Greene ask Jim to pick up?",
            "answer": "Gum wrapper",
            "options": [
                "Paper balls",
                "Gum wrapper",
                "Plastic bottle",
                "Leaves"
            ],
            "explanation": "She points out a gum wrapper he threw on her lawn."
        },
        {
            "numb": 12,
            "question": "What does Jim advise Ms. Greene to save?",
            "answer": "Papers and aluminum cans",
            "options": [
                "Water and electricity",
                "Papers and aluminum cans",
                "Food and clothes",
                "Money"
            ],
            "explanation": "For the school pickup to be recycled."
        },
        {
            "numb": 13,
            "question": "Why does Jim get tired of Ms. Greene?",
            "answer": "She is hard to convince about ecology",
            "options": [
                "She talks too much",
                "She is hard to convince about ecology",
                "She doesn't pay him",
                "She is rude"
            ],
            "explanation": "The text says, 'I get tired of trying to get Ms. Greene to do something about ecology'."
        },
        {
            "numb": 14,
            "question": "Where was Mr. Johnson going?",
            "answer": "To the post office",
            "options": [
                "To the market",
                "To the post office",
                "To the park",
                "To work"
            ],
            "explanation": "He was making a run for his car to go to the post office."
        },
        {
            "numb": 15,
            "question": "How far is the post office from Mr. Johnson's house?",
            "answer": "Two blocks",
            "options": [
                "Two miles",
                "Two blocks",
                "Five blocks",
                "Ten miles"
            ],
            "explanation": "Jim points out it's only two blocks away, so he should walk."
        },
        {
            "numb": 16,
            "question": "What accusation does Mr. Johnson make against Jim?",
            "answer": "Killing a little tree by jumping over it",
            "options": [
                "Stealing apples",
                "Killing a little tree by jumping over it",
                "Breaking a window",
                "Polluting the water"
            ],
            "explanation": "He says Jim made a shortcut through Ms. Greene's and killed a tree."
        },
        {
            "numb": 17,
            "question": "What vehicle does Jim use in summer?",
            "answer": "Motorbike",
            "options": [
                "Bicycle",
                "Motorbike",
                "Car",
                "Scooter"
            ],
            "explanation": "He drives his motorbike round and round his backyard."
        },
        {
            "numb": 18,
            "question": "What vehicle does Jim use in winter?",
            "answer": "Snowmobile",
            "options": [
                "Sledge",
                "Snowmobile",
                "Skis",
                "Truck"
            ],
            "explanation": "Mr. Johnson points out this wastes power and makes noise."
        },
        {
            "numb": 19,
            "question": "What does Jim say about his motorbike and snowmobile usage?",
            "answer": "It's fun",
            "options": [
                "It's necessary",
                "It's fun",
                "It's work",
                "It's exercise"
            ],
            "explanation": "He defends his non-ecological actions by saying 'But it's fun'."
        },
        {
            "numb": 20,
            "question": "Does Jim succeed in stopping Mr. Johnson from using the car?",
            "answer": "Yes, but only because he made him late",
            "options": [
                "No, he drives away",
                "Yes, Mr. Johnson agrees",
                "Yes, but only because he made him late",
                "Mr. Johnson didn't have a car"
            ],
            "explanation": "Mr. Johnson goes back inside mad because he is now too late for the post office."
        },
        {
            "numb": 21,
            "question": "What does Jim see his mother doing?",
            "answer": "Using an electric mixer",
            "options": [
                "Watching TV",
                "Using an electric mixer",
                "Cooking on gas",
                "Washing clothes"
            ],
            "explanation": "She uses an electric mixer instead of an old egg beater."
        },
        {
            "numb": 22,
            "question": "What is Jim's advice to his mother?",
            "answer": "Use the old egg beater to save electricity",
            "options": [
                "Buy a new mixer",
                "Use the old egg beater to save electricity",
                "Stop cooking",
                "Help him with ecology"
            ],
            "explanation": "He criticizes women for using too many electric things."
        },
        {
            "numb": 23,
            "question": "How does Jim's mother retort?",
            "answer": "She asks who watches TV 27 hours a day",
            "options": [
                "She agrees",
                "She asks who watches TV 27 hours a day",
                "She scolds him",
                "She ignores him"
            ],
            "explanation": "She points out his own wastage of electricity on TV."
        },
        {
            "numb": 24,
            "question": "\"Nobody's willing to do anything about ____________.\"",
            "answer": "Ecology",
            "options": [
                "Work",
                "Ecology",
                "School",
                "Politics"
            ],
            "explanation": "This is the recurring theme and Jim's complaint."
        },
        {
            "numb": 25,
            "question": "What is 'Ecology'?",
            "answer": "Study of relationship between living things and environment",
            "options": [
                "Study of rocks",
                "Study of relationship between living things and environment",
                "Study of economy",
                "Study of stars"
            ],
            "explanation": "Scientific definition provided in common context."
        },
        {
            "numb": 26,
            "question": "According to the author, preaching about ecology is ____________.",
            "answer": "Easy but difficult to practice",
            "options": [
                "Hard",
                "Useless",
                "Easy but difficult to practice",
                "Fun"
            ],
            "explanation": "Everyone talks about it, but no one wants to act."
        },
        {
            "numb": 27,
            "question": "Who says \"I have this paper route\"?",
            "answer": "Jim",
            "options": [
                "Mr. Williams",
                "Jim",
                "Ms. Greene",
                "The author"
            ],
            "explanation": "Jim explains why he is busy."
        },
        {
            "numb": 28,
            "question": "What is a 'compost pit'?",
            "answer": "Manure made from garbage and leaves",
            "options": [
                "A hole for water",
                "Manure made from garbage and leaves",
                "A place for fire",
                "A swimming pool"
            ],
            "explanation": "Used for organic recycling."
        },
        {
            "numb": 29,
            "question": "Does Jim realize he himself violates ecology rules?",
            "answer": "No, or he finds excuses",
            "options": [
                "Yes, he is sorry",
                "No, or he finds excuses",
                "He doesn't care",
                "He is perfect"
            ],
            "explanation": "He justifies his motorbike and TV habits."
        },
        {
            "numb": 30,
            "question": "What is the irony in the story?",
            "answer": "The preacher (Jim) himself does not follow ecology rules",
            "options": [
                "Ecology is bad",
                "The preacher (Jim) himself does not follow ecology rules",
                "People love ecology",
                "Mr. Johnson is an ecologist"
            ],
            "explanation": "Jim lectures everyone but wastes resources himself."
        },
        {
            "numb": 31,
            "question": "The post office was ____________ blocks away.",
            "answer": "Two",
            "options": [
                "One",
                "Two",
                "Three",
                "Four"
            ],
            "explanation": "Specific detail from the text."
        },
        {
            "numb": 32,
            "question": "Mr. Williams was burning ____________ in his backyard.",
            "answer": "Leaves",
            "options": [
                "Plastic",
                "Leaves",
                "Paper",
                "Wood"
            ],
            "explanation": "This was the first ecological offense Jim spotted."
        },
        {
            "numb": 33,
            "question": "Jim says women use too many ____________ things.",
            "answer": "Electric",
            "options": [
                "Plastic",
                "Electric",
                "Expensive",
                "Paper"
            ],
            "explanation": "His generalization about women and appliances."
        },
        {
            "numb": 34,
            "question": "What does 'huffing and puffing' mean?",
            "answer": "Breathing heavily",
            "options": [
                "Running fast",
                "Breathing heavily",
                "Laughing loud",
                "Crying"
            ],
            "explanation": "Mr. Johnson was out of breath trying to reach the car/post office."
        },
        {
            "numb": 35,
            "question": "Did Jim get paid by Mr. Johnson that day?",
            "answer": "No",
            "options": [
                "Yes",
                "No",
                "Half payment",
                "Extra tip"
            ],
            "explanation": "He decided to wait until next Saturday as Mr. Johnson was mad."
        },
        {
            "numb": 36,
            "question": "Who had the 'paper route' before Jim?",
            "answer": "His father (when he was a kid)",
            "options": [
                "His brother",
                "His father",
                "Mr. Williams",
                "Mr. Johnson"
            ],
            "explanation": "His father made him get one."
        },
        {
            "numb": 37,
            "question": "Jim believes he puts in ____________ work on ecology.",
            "answer": "Good",
            "options": [
                "Bad",
                "Good",
                "No",
                "Little"
            ],
            "explanation": "'I put in good work on ecology'."
        },
        {
            "numb": 38,
            "question": "Why does Ms. Greene say she puts garbage out on weekends?",
            "answer": "She goes away on weekends",
            "options": [
                "She is lazy",
                "She goes away on weekends",
                "Pickup is on Sunday",
                "She forgets"
            ],
            "explanation": "Pickup is Monday, but she leaves for the weekend."
        },
        {
            "numb": 39,
            "question": "Jim predicts the tree killed by him was just starting to get ____________.",
            "answer": "Bigger",
            "options": [
                "Smaller",
                "Bigger",
                "Dry",
                "Green"
            ],
            "explanation": "Mr. Johnson mentions it was a little tree getting bigger."
        },
        {
            "numb": 40,
            "question": "What does Jim hold when Ms. Greene scolds him?",
            "answer": "His temper",
            "options": [
                "His nose",
                "His temper",
                "The dog",
                "The bag"
            ],
            "explanation": "'I hold my temper and pick up my gum wrapper'."
        },
        {
            "numb": 41,
            "question": "The story is a ____________ on people's attitude towards ecology.",
            "answer": "Satire",
            "options": [
                "Tragedy",
                "Satire",
                "Horror",
                "Romance"
            ],
            "explanation": "It satirizes the hypocrisy surrounding environmental awareness."
        },
        {
            "numb": 42,
            "question": "What is the meaning of 'litter'?",
            "answer": "Trash/Rubbish",
            "options": [
                "Letter",
                "Trash/Rubbish",
                "Light",
                "Little"
            ],
            "explanation": "To throw rubbish untidily."
        },
        {
            "numb": 43,
            "question": "Jim claims to run faster than ____________.",
            "answer": "Mr. Johnson",
            "options": [
                "His dog",
                "Mr. Johnson",
                "A car",
                "The wind"
            ],
            "explanation": "He races Mr. Johnson to the car."
        },
        {
            "numb": 44,
            "question": "Who says \"That compost pile is your job at home, Jim\"?",
            "answer": "Mr. Williams",
            "options": [
                "Ms. Greene",
                "Mr. Williams",
                "Mr. Johnson",
                "His mother"
            ],
            "explanation": "Mr. Williams deflects the advice back to Jim."
        },
        {
            "numb": 45,
            "question": "Does Jim hate working with compost?",
            "answer": "Yes",
            "options": [
                "No",
                "Yes",
                "He loves it",
                "He doesn't know"
            ],
            "explanation": "He admits, 'Which I do' (hate it)."
        },
        {
            "numb": 46,
            "question": "What does Jim say about ecology work?",
            "answer": "It is boring work",
            "options": [
                "It is exciting",
                "It is boring work",
                "It is easy",
                "It is fast"
            ],
            "explanation": "'It's a very boring work, this ecology bit'."
        },
        {
            "numb": 47,
            "question": "Mr. Johnson suggests walking is good exercise and saves on ____________.",
            "answer": "Gas (Petrol)",
            "options": [
                "Time",
                "Gas (Petrol)",
                "Shoes",
                "Money"
            ],
            "explanation": "Jim suggests this to Mr. Johnson."
        },
        {
            "numb": 48,
            "question": "Which season is mentioned when Jim drives his motorbike?",
            "answer": "Summer",
            "options": [
                "Winter",
                "Summer",
                "Spring",
                "Autumn"
            ],
            "explanation": "Summer for motorbike, winter for snowmobile."
        },
        {
            "numb": 49,
            "question": "What excuse does Ms. Greene give for not saving papers?",
            "answer": "Jim never showed up for the last pickup",
            "options": [
                "She has no space",
                "Jim never showed up for the last pickup",
                "She doesn't read papers",
                "It smells"
            ],
            "explanation": "She blames Jim's unreliability."
        },
        {
            "numb": 50,
            "question": "The essence of the story is: Example is better than ____________.",
            "answer": "Precept (Advice)",
            "options": [
                "Money",
                "Precept (Advice)",
                "Speech",
                "Thought"
            ],
            "explanation": "It's better to do good than just to advise others to do good."
        }
    ];

    if (typeof window !== 'undefined') {
        if (!window.questionRegistry) {
            window.questionRegistry = {};
        }
        window.questionRegistry['english_ch2_ecology_bit'] = chapterQuestions;
    }
})();
