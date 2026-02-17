(function () {
    const chapterQuestions = [
        {
            "numb": 1,
            "question": "Who is the author of 'What is Wrong with Indian Film'?",
            "answer": "Satyajit Ray",
            "options": [
                "Satyajit Ray",
                "Mahadevi Verma",
                "Humayun Kabir",
                "Toni Morrison"
            ],
            "explanation": "Satyajit Ray, a world-renowned filmmaker, wrote this essay criticizing the quality of Indian cinema."
        },
        {
            "numb": 2,
            "question": "When was the first short film produced in India?",
            "answer": "1907",
            "options": [
                "1907",
                "1913",
                "1920",
                "1947"
            ],
            "explanation": "India took up film production early; the first short was produced in 1907."
        },
        {
            "numb": 3,
            "question": "When was the first feature film produced in India?",
            "answer": "1913",
            "options": [
                "1907",
                "1913",
                "1930",
                "1925"
            ],
            "explanation": "The first feature film was produced in 1913."
        },
        {
            "numb": 4,
            "question": "In terms of quantity, where does Indian film production stand compared to Hollywood?",
            "answer": "Second",
            "options": [
                "First",
                "Second",
                "Third",
                "Fourth"
            ],
            "explanation": "Quantitatively, Indian film production is second only to Hollywood."
        },
        {
            "numb": 5,
            "question": "Which art form commands the respect accorded to any other form of creative expression today?",
            "answer": "Cinema",
            "options": [
                "Painting",
                "Music",
                "Cinema",
                "Sculpture"
            ],
            "explanation": "Cinema has developed into the century's most potent and versatile art form."
        },
        {
            "numb": 6,
            "question": "What does cinema combine with various arts like poetry and music?",
            "answer": "Cold logic of science",
            "options": [
                "Heat of emotion",
                "Cold logic of science",
                "Speed of light",
                "Depth of ocean"
            ],
            "explanation": "It combines arts with the cold logic of science."
        },
        {
            "numb": 7,
            "question": "Why are Indian films not shown abroad?",
            "answer": "Lack of quality",
            "options": [
                "Language barrier",
                "Lack of quality",
                "Too long",
                "Political reasons"
            ],
            "explanation": "The author implies that the quality is not up to the mark for international standards."
        },
        {
            "numb": 8,
            "question": "What do technicians blame for the poor quality of Indian films?",
            "answer": "The tools",
            "options": [
                "The director",
                "The actors",
                "The tools",
                "The audience"
            ],
            "explanation": "Technicians blame the inadequacy of their tools."
        },
        {
            "numb": 9,
            "question": "What do producers blame for the poor quality?",
            "answer": "The mass (audience)",
            "options": [
                "The government",
                "The mass (audience)",
                "The budget",
                "The actors"
            ],
            "explanation": "Producers blame the 'mysterious entity' the mass, saying they demand such films."
        },
        {
            "numb": 10,
            "question": "What is the most dominant influence on Indian films?",
            "answer": "American Cinema (Hollywood)",
            "options": [
                "British Cinema",
                "American Cinema (Hollywood)",
                "French Cinema",
                "Folk Theatre"
            ],
            "explanation": "Almost every phase of American cinema has had repercussions on Indian film."
        },
        {
            "numb": 11,
            "question": "Why is the average American film a bad model for Indian films?",
            "answer": "It depicts a lifestyle at variance with Indian life",
            "options": [
                "It is too expensive",
                "It depicts a lifestyle at variance with Indian life",
                "It is too violent",
                "It is too short"
            ],
            "explanation": "The lifestyle and culture are completely different."
        },
        {
            "numb": 12,
            "question": "What does Indian cinema need more than gloss?",
            "answer": "Imagination and integrity",
            "options": [
                "Money and fame",
                "Imagination and integrity",
                "Color and dance",
                "Action and sound"
            ],
            "explanation": "It needs imagination, integrity, and intelligent appreciation of the medium."
        },
        {
            "numb": 13,
            "question": "The majority of our films are replete with visual ____________.",
            "answer": "Dissonances",
            "options": [
                "Harmony",
                "Dissonances",
                "Beauty",
                "Effects"
            ],
            "explanation": "Inconsistencies or clashes in visual style."
        },
        {
            "numb": 14,
            "question": "Which film by IPTA is mentioned as an example of an enlightened approach?",
            "answer": "Dharti-Ke-Lal",
            "options": [
                "Mother India",
                "Dharti-Ke-Lal",
                "Sholay",
                "Pather Panchali"
            ],
            "explanation": "IPTA's Dharti-Ke-Lal is cited for its style, honesty, and competence."
        },
        {
            "numb": 15,
            "question": "Which film by Shankar is mentioned for its filmic movement?",
            "answer": "Kalpana",
            "options": [
                "Kalpana",
                "Nagin",
                "Awara",
                "Devdas"
            ],
            "explanation": "Shankar's Kalpana is praised for its grasp of filmic movement and respect for tradition."
        },
        {
            "numb": 16,
            "question": "What is the raw material of cinema?",
            "answer": "Life itself",
            "options": [
                "Books",
                "Life itself",
                "Technology",
                "Actors"
            ],
            "explanation": "Satyajit Ray states that the raw material of cinema is life itself."
        },
        {
            "numb": 17,
            "question": "Indian cinema needs a style that is uniquely ____________.",
            "answer": "Indian",
            "options": [
                "Modern",
                "Western",
                "Indian",
                "Global"
            ],
            "explanation": "It needs an idiom or iconography that is uniquely and recognizably Indian."
        },
        {
            "numb": 18,
            "question": "What practice stands in the way of the evolution of a distinctive style?",
            "answer": "Sandwiching musical numbers in unlyrical situations",
            "options": [
                "Using black and white film",
                "Sandwiching musical numbers in unlyrical situations",
                "Using untrained actors",
                "Shooting outdoors"
            ],
            "explanation": "Forced songs break the narrative flow."
        },
        {
            "numb": 19,
            "question": "The author criticizes the habit of shooting indoors in a country that is all ____________.",
            "answer": "Landscape",
            "options": [
                "Desert",
                "Landscape",
                "Water",
                "Snow"
            ],
            "explanation": "India has beautiful landscapes, but filmmakers often shoot indoors."
        },
        {
            "numb": 20,
            "question": "What does the word 'iconography' mean in the text?",
            "answer": "Visual imagery or style",
            "options": [
                "Study of icons",
                "Visual imagery or style",
                "Science of maps",
                "History of idols"
            ],
            "explanation": "Refers to a specific style or idiom of cinema."
        },
        {
            "numb": 21,
            "question": "Satyajit Ray suggests a drastic ____________ of style and content.",
            "answer": "Simplification",
            "options": [
                "Complication",
                "Simplification",
                "Exaggeration",
                "Modernization"
            ],
            "explanation": "Simplification is key for the hope of Indian cinema."
        },
        {
            "numb": 22,
            "question": "What is the meaning of 'indispensable'?",
            "answer": "Essential",
            "options": [
                "Useless",
                "Essential",
                "Cheap",
                "Available"
            ],
            "explanation": "Something that cannot be dispensed with."
        },
        {
            "numb": 23,
            "question": "According to the author, do we possess the primary tools of filmmaking?",
            "answer": "Yes",
            "options": [
                "No",
                "Yes",
                "Maybe",
                "Only partially"
            ],
            "explanation": "He says, 'After all, we do possess the primary tools of filmmaking'."
        },
        {
            "numb": 24,
            "question": "The background music in Indian films often reveals a penchant for ____________ idiom.",
            "answer": "Jazz",
            "options": [
                "Classical",
                "Jazz",
                "Folk",
                "Rock"
            ],
            "explanation": "Imitating American jazz idioms even in Indian stories."
        },
        {
            "numb": 25,
            "question": "What is the hallmark of standard Hollywood products?",
            "answer": "High technical polish",
            "options": [
                "Good acting",
                "High technical polish",
                "Great stories",
                "Social message"
            ],
            "explanation": "Hollywood films are known for their polished technical quality."
        },
        {
            "numb": 26,
            "question": "Who should keep his eyes and ears open?",
            "answer": "The filmmaker",
            "options": [
                "The politician",
                "The filmmaker",
                "The audience",
                "The critic"
            ],
            "explanation": "To capture the raw material of life."
        },
        {
            "numb": 27,
            "question": "By the ____________, Indian cinema had reached the status of big business.",
            "answer": "Twenties",
            "options": [
                "Forties",
                "Thirties",
                "Twenties",
                "Fifties"
            ],
            "explanation": "By the 1920s."
        },
        {
            "numb": 28,
            "question": "What does 'potent' mean?",
            "answer": "Powerful",
            "options": [
                "Weak",
                "Powerful",
                "Beautiful",
                "Rich"
            ],
            "explanation": "Cinema is a potent (powerful) art form."
        },
        {
            "numb": 29,
            "question": "What does 'versatile' mean?",
            "answer": "Able to adapt to many different functions",
            "options": [
                "Fixed",
                "Able to adapt to many different functions",
                "Slow",
                "Expensive"
            ],
            "explanation": "Cinema is versatile, combining many arts."
        },
        {
            "numb": 30,
            "question": "The author finds it incredible that a country rich in painting and music fails to move the ____________.",
            "answer": "Filmmaker",
            "options": [
                "Government",
                "Filmmaker",
                "Painter",
                "Poet"
            ],
            "explanation": "India's rich artistic tradition should inspire filmmakers is the argument."
        },
        {
            "numb": 31,
            "question": "What stands in the way of a distinctive Indian style?",
            "answer": "Convolutions of plot and counterplot",
            "options": [
                "Simple stories",
                "Convolutions of plot and counterplot",
                "Good actors",
                "Lack of money"
            ],
            "explanation": "Complex, convoluted plots prevent a simple, strong narrative."
        },
        {
            "numb": 32,
            "question": "Movies are often started without adequate ____________.",
            "answer": "Planning",
            "options": [
                "Planning",
                "Money",
                "Actors",
                "Cameras"
            ],
            "explanation": "Sometimes even without a shooting script."
        },
        {
            "numb": 33,
            "question": "What is 'Dharti-Ke-Lal' an instance of?",
            "answer": "Strong simple theme",
            "options": [
                "Complex drama",
                "Strong simple theme",
                "Musical hit",
                "Comedy"
            ],
            "explanation": "It is praised for its simple theme and honesty."
        },
        {
            "numb": 34,
            "question": "What should the Indian film steer clear of?",
            "answer": "Inconsistencies",
            "options": [
                "Music",
                "Inconsistencies",
                "Dance",
                "Drama"
            ],
            "explanation": "Visual dissonances and inconsistencies."
        },
        {
            "numb": 35,
            "question": "The average American film is a bad ____________.",
            "answer": "Model",
            "options": [
                "Actor",
                "Model",
                "Story",
                "Picture"
            ],
            "explanation": "It shouldn't be the model for Indian films."
        },
        {
            "numb": 36,
            "question": "Visual dissonances mean:",
            "answer": "Visual mismatches or lack of harmony",
            "options": [
                "Visual effects",
                "Visual mismatches or lack of harmony",
                "Visual beauty",
                "Visual clarity"
            ],
            "explanation": "Clashing visual elements."
        },
        {
            "numb": 37,
            "question": "Satyajit Ray is associated with which profession?",
            "answer": "Filmmaking",
            "options": [
                "Cricket",
                "Politics",
                "Filmmaking",
                "Singing"
            ],
            "explanation": "He is a legendary director."
        },
        {
            "numb": 38,
            "question": "What does 'penchant' mean?",
            "answer": "A strong or habitual liking",
            "options": [
                "Dislike",
                "A strong or habitual liking",
                "Fear",
                "Anger"
            ],
            "explanation": "A penchant for jazz idiom."
        },
        {
            "numb": 39,
            "question": "Cinema combines the functions of architecture and ____________.",
            "answer": "Music, painting, poetry, drama",
            "options": [
                "Cooking",
                "Music, painting, poetry, drama",
                "Sports",
                "Farming"
            ],
            "explanation": "It is a composite art form."
        },
        {
            "numb": 40,
            "question": "Has India achieved what other countries have achieved in cinema?",
            "answer": "No, only attempted",
            "options": [
                "Yes, surpassed",
                "No, only attempted",
                "Equal",
                "Unknown"
            ],
            "explanation": "Ray argues we have only attempted, often without honesty."
        },
        {
            "numb": 41,
            "question": "What do the directors blame?",
            "answer": "Conditions",
            "options": [
                "Actors",
                "Conditions",
                "Weather",
                "Luck"
            ],
            "explanation": "They say they couldn't achieve their vision due to conditions."
        },
        {
            "numb": 42,
            "question": "What is the synonym of 'phenomena'?",
            "answer": "Happenings",
            "options": [
                "Ghosts",
                "Happenings",
                "Dreams",
                "Lies"
            ],
            "explanation": "Significant phenomena of our time."
        },
        {
            "numb": 43,
            "question": "What is the synonym of 'replete'?",
            "answer": "Filled with",
            "options": [
                "Empty",
                "Filled with",
                "New",
                "Old"
            ],
            "explanation": "Replete with visual dissonances."
        },
        {
            "numb": 44,
            "question": "The text mentions 'gloss'. What does it mean here?",
            "answer": "Superficial shine/polish",
            "options": [
                "Lipstick",
                "Superficial shine/polish",
                "Glass",
                "Gross"
            ],
            "explanation": "Indian cinema needs implies imagination, not just gloss."
        },
        {
            "numb": 45,
            "question": "Who wrote 'Dharti-Ke-Lal'?",
            "answer": "IPTA",
            "options": [
                "IPTA",
                "Satyajit Ray",
                "Raj Kapoor",
                "Shankar"
            ],
            "explanation": "Attributed to IPTA in the text."
        },
        {
            "numb": 46,
            "question": "What is 'jazz'?",
            "answer": "A type of American music",
            "options": [
                "Indian fruit",
                "A type of American music",
                "A dance form",
                "A fast car"
            ],
            "explanation": "Associated with American culture."
        },
        {
            "numb": 47,
            "question": "The essay advocates for a ____________ narrative.",
            "answer": "Simple unidirectional",
            "options": [
                "Complex multidirectional",
                "Simple unidirectional",
                "Confusing",
                "Backwards"
            ],
            "explanation": "Rather than convolutions of plot."
        },
        {
            "numb": 48,
            "question": "India offers a ____________ market for her own film products.",
            "answer": "Potential",
            "options": [
                "Small",
                "Potential",
                "Zero",
                "Bad"
            ],
            "explanation": "Large domestic market."
        },
        {
            "numb": 49,
            "question": "The essay states that cinema was effectively a ____________ at the turn of the century.",
            "answer": "Mechanical toy",
            "options": [
                "Weapon",
                "Mechanical toy",
                "God",
                "Monster"
            ],
            "explanation": "Developed from a mechanical toy."
        },
        {
            "numb": 50,
            "question": "What is the antonym of 'indispensable'?",
            "answer": "Dispensable/Unnecessary",
            "options": [
                "Crucial",
                "Dispensable/Unnecessary",
                "Vital",
                "Key"
            ],
            "explanation": "Something that can be done without."
        }
    ];

    if (typeof window !== 'undefined') {
        if (!window.questionRegistry) {
            window.questionRegistry = {};
        }
        window.questionRegistry['english_ch4_wrong_with_indian_film'] = chapterQuestions;
    }
})();
