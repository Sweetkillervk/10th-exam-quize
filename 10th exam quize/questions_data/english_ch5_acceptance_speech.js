(function () {
    const chapterQuestions = [
        {
            "numb": 1,
            "question": "Who delivered the 'Acceptance Speech' for the Nobel Peace Prize?",
            "answer": "Alexander Aris",
            "options": [
                "Aung San Suu Kyi",
                "Alexander Aris",
                "Michael Aris",
                "Javier Perez de Cuellar"
            ],
            "explanation": "Alexander Aris, the son of Aung San Suu Kyi, delivered the speech on her behalf."
        },
        {
            "numb": 2,
            "question": "On whose behalf was the Nobel Peace Prize accepted?",
            "answer": "Aung San Suu Kyi",
            "options": [
                "The people of India",
                "Aung San Suu Kyi",
                "Martin Luther King Jr.",
                "Nelson Mandela"
            ],
            "explanation": "It was accepted on behalf of Aung San Suu Kyi, who was widely detained."
        },
        {
            "numb": 3,
            "question": "The acceptance speech was delivered in which city?",
            "answer": "Oslo",
            "options": [
                "London",
                "New York",
                "Oslo",
                "Paris"
            ],
            "explanation": "The Nobel Peace Prize ceremony takes place in Oslo, Norway."
        },
        {
            "numb": 4,
            "question": "When was the Nobel Peace Prize awarded to Aung San Suu Kyi?",
            "answer": "1991",
            "options": [
                "1990",
                "1991",
                "1992",
                "1989"
            ],
            "explanation": "The award year was 1991."
        },
        {
            "numb": 5,
            "question": "Why could Aung San Suu Kyi not accept the prize personally?",
            "answer": "She was under detention",
            "options": [
                "She was ill",
                "She was under detention",
                "She refused it",
                "She was abroad"
            ],
            "explanation": "She was incarcerated/detained by the Burmese government."
        },
        {
            "numb": 6,
            "question": "Alexander Aris said the prize belongs not to his mother but to ____________.",
            "answer": "All the people of Burma",
            "options": [
                "Her family",
                "All the people of Burma",
                "The United Nations",
                "The Nobel Committee"
            ],
            "explanation": "He emphasized it belongs to all men, women, and children of Burma."
        },
        {
            "numb": 7,
            "question": "What is more precious than diamond, silver, or gold according to the speech?",
            "answer": "Genuine brotherhood and peace",
            "options": [
                "Freedom and liberty",
                "Genuine brotherhood and peace",
                "Democracy and rights",
                "Wealth and power"
            ],
            "explanation": "Quoting/referencing Martin Luther King Jr.'s ideals."
        },
        {
            "numb": 8,
            "question": "The event in Oslo fell on which important day?",
            "answer": "International Human Rights Day",
            "options": [
                "Christmas",
                "International Human Rights Day",
                "New Year's Day",
                "Independence Day"
            ],
            "explanation": "December 10 is International Human Rights Day."
        },
        {
            "numb": 9,
            "question": "Who is Alexander Aris related to as Aung San Suu Kyi?",
            "answer": "Son",
            "options": [
                "Brother",
                "Son",
                "Husband",
                "Father"
            ],
            "explanation": "He speaks as her son."
        },
        {
            "numb": 10,
            "question": "Where was the 'lonely struggle' taking place?",
            "answer": "In a heavily guarded compound in Rangoon",
            "options": [
                "In a prison in Mandalay",
                "In a heavily guarded compound in Rangoon",
                "In the jungles of Burma",
                "In Oslo"
            ],
            "explanation": "Referring to Suu Kyi's house arrest in Rangoon."
        },
        {
            "numb": 11,
            "question": "The Nobel Peace Prize encapsulates the ideals of ____________.",
            "answer": "Humanism",
            "options": [
                "Capitalism",
                "Humanism",
                "Socialism",
                "Nationalism"
            ],
            "explanation": "The speech mentions the 'ideals of humanism which the Nobel Peace Prize encapsulates'."
        },
        {
            "numb": 12,
            "question": "Who was the Secretary-General of the UN mentioned in the speech?",
            "answer": "Javier Perez de Cuellar",
            "options": [
                "Kofi Annan",
                "Javier Perez de Cuellar",
                "Ban Ki-moon",
                "U Thant"
            ],
            "explanation": "He had issued a statement on the award."
        },
        {
            "numb": 13,
            "question": "Burmese people are dying of ____________ in the jungles.",
            "answer": "Malaria",
            "options": [
                "Cholera",
                "Malaria",
                "Hunger",
                "Cold"
            ],
            "explanation": "Young people fleeing to jungles were dying of malaria."
        },
        {
            "numb": 14,
            "question": "The speech mentions the plight of Buddhist ____________ being beaten and dishonored.",
            "answer": "Monks",
            "options": [
                "Nuns",
                "Monks",
                "Priests",
                "Teachers"
            ],
            "explanation": "The extensive persecution included Buddhist monks."
        },
        {
            "numb": 15,
            "question": "The struggle in Burma is for ____________.",
            "answer": "Peace, freedom, and democracy",
            "options": [
                "Wealth and power",
                "Peace, freedom, and democracy",
                "Land and territory",
                "Oil and gas"
            ],
            "explanation": "These are the core goals mentioned."
        },
        {
            "numb": 16,
            "question": "What is meant by 'incarcerated'?",
            "answer": "Imprisoned",
            "options": [
                "Honored",
                "Imprisoned",
                "Exiled",
                "Killed"
            ],
            "explanation": "Many leaders were incarcerated (put in prison)."
        },
        {
            "numb": 17,
            "question": "Alexander Aris thanked the committee from his ____________ for the honor.",
            "answer": "Heart",
            "options": [
                "Mind",
                "Heart",
                "Soul",
                "Family"
            ],
            "explanation": "He thanked them 'from my heart'."
        },
        {
            "numb": 18,
            "question": "Who must not be considered a 'mere dreamer'?",
            "answer": "Martin Luther King Jr.",
            "options": [
                "Gandhi",
                "Martin Luther King Jr.",
                "Lincoln",
                "Mandela"
            ],
            "explanation": "Referring to his vision of brotherhood."
        },
        {
            "numb": 19,
            "question": "Humanity can no longer be bound to the starless midnight of ____________ and war.",
            "answer": "Racism",
            "options": [
                "Poverty",
                "Racism",
                "Ignorance",
                "Slavery"
            ],
            "explanation": "A quote attributed to Martin Luther King Jr."
        },
        {
            "numb": 20,
            "question": "What allows the Burmese people to hold their heads a little higher?",
            "answer": "Knowledge that their suffering has been heard",
            "options": [
                "They won the war",
                "Knowledge that their suffering has been heard",
                "They are rich",
                "They have weapons"
            ],
            "explanation": "The international recognition via the prize gives them dignity."
        },
        {
            "numb": 21,
            "question": "The beauty of genuine brotherhood and peace is more precious than ____________.",
            "answer": "Diamonds, silver, or gold",
            "options": [
                "Land and sea",
                "Diamonds, silver, or gold",
                "Oil and water",
                "Food and shelter"
            ],
            "explanation": "Material wealth vs spiritual values."
        },
        {
            "numb": 22,
            "question": "The prize is intended to honor all those engaged in the struggle for ____________ of the human spirit.",
            "answer": "Emancipation",
            "options": [
                "Destruction",
                "Emancipation",
                "Control",
                "Suppression"
            ],
            "explanation": "Emancipation means setting free."
        },
        {
            "numb": 23,
            "question": "What does 'emancipation' mean?",
            "answer": "Liberation/Freedom",
            "options": [
                "Slavery",
                "Liberation/Freedom",
                "Imprisonment",
                "Peace"
            ],
            "explanation": "Freedom from political tyranny."
        },
        {
            "numb": 24,
            "question": "The United Nations passed a ____________ resolution.",
            "answer": "Unanimous and historic",
            "options": [
                "Weak",
                "Unanimous and historic",
                "Controversial",
                "Secret"
            ],
            "explanation": "Welcoming the statement on the award."
        },
        {
            "numb": 25,
            "question": "Aris hopes that ____________, cynicism, or selfishness do not make us fail.",
            "answer": "Indifference",
            "options": [
                "Love",
                "Indifference",
                "Hope",
                "Faith"
            ],
            "explanation": "Warning against indifference."
        },
        {
            "numb": 26,
            "question": "The struggle is against political tyranny and ____________ subjection.",
            "answer": "Psychological",
            "options": [
                "Physical",
                "Psychological",
                "Economic",
                "Social"
            ],
            "explanation": "Psychological subjection is mentioned."
        },
        {
            "numb": 27,
            "question": "What does 'destitution' mean?",
            "answer": "Extreme poverty",
            "options": [
                "Wealth",
                "Extreme poverty",
                "Happiness",
                "Sickness"
            ],
            "explanation": "Living in poverty and destitution."
        },
        {
            "numb": 28,
            "question": "What does 'plight' mean?",
            "answer": "A dangerous, difficult, or otherwise unfortunate situation",
            "options": [
                "Flight",
                "A dangerous, difficult, or otherwise unfortunate situation",
                "Joy",
                "Plan"
            ],
            "explanation": "The plight of the Burmese people."
        },
        {
            "numb": 29,
            "question": "Many senior and highly respected leaders are ____________ beside his mother.",
            "answer": "Incarcerated",
            "options": [
                "Free",
                "Incarcerated",
                "Dead",
                "Abroad"
            ],
            "explanation": "They are also in prison."
        },
        {
            "numb": 30,
            "question": "The phrase 'Let new age dawn' suggests ____________.",
            "answer": "Hope for a better future",
            "options": [
                "Morning time",
                "Hope for a better future",
                "End of the world",
                "New government"
            ],
            "explanation": "A call for a new era of peace."
        },
        {
            "numb": 31,
            "question": "Aung San Suu Kyi is fighting for a ____________ Burma.",
            "answer": "Democratic",
            "options": [
                "Communist",
                "Democratic",
                "Monarchist",
                "Dictatorial"
            ],
            "explanation": "Pursuit of a democratic Burma."
        },
        {
            "numb": 32,
            "question": "When was the acceptance speech delivered?",
            "answer": "December 10, 1991",
            "options": [
                "September 10, 1991",
                "December 10, 1991",
                "January 1, 1992",
                "August 15, 1991"
            ],
            "explanation": "On Human Rights Day."
        },
        {
            "numb": 33,
            "question": "Did Alexander Aris make the speech personally?",
            "answer": "Yes",
            "options": [
                "No, he sent a video",
                "Yes",
                "No, he sent a letter",
                "No, his brother did"
            ],
            "explanation": "He stood there to deliver it."
        },
        {
            "numb": 34,
            "question": "The award endorsed the appeal for Suu Kyi's early ____________.",
            "answer": "Release from detention",
            "options": [
                "Election",
                "Release from detention",
                "Trial",
                "Exile"
            ],
            "explanation": "Release from house arrest."
        },
        {
            "numb": 35,
            "question": "What does 'encapsulates' mean?",
            "answer": "Expresses/Contains",
            "options": [
                "Hides",
                "Expresses/Contains",
                "Destroys",
                "Modifies"
            ],
            "explanation": "The prize encapsulates ideals."
        },
        {
            "numb": 36,
            "question": "Who is the Chairman addressed in the speech?",
            "answer": "Chairman of the Nobel Committee",
            "options": [
                "Chairman of UN",
                "Chairman of the Nobel Committee",
                "Chairman of Burma",
                "Chairman of India"
            ],
            "explanation": "He addresses Mr. Chairman at the start."
        },
        {
            "numb": 37,
            "question": "The international community has ____________ the choice of the committee.",
            "answer": "Applauded",
            "options": [
                "Criticized",
                "Applauded",
                "Ignored",
                "Rejected"
            ],
            "explanation": "Applauded means praised/approved."
        },
        {
            "numb": 38,
            "question": "What defines the geographical location of the struggle mentioned?",
            "answer": "Rangoon, Burma",
            "options": [
                "Tokyo, Japan",
                "Rangoon, Burma",
                "Delhi, India",
                "Beijing, China"
            ],
            "explanation": "Specific mention of Rangoon."
        },
        {
            "numb": 39,
            "question": "What is the antonym of 'incarcerated'?",
            "answer": "Free/Released",
            "options": [
                "Jailed",
                "Free/Released",
                "Bound",
                "Trapped"
            ],
            "explanation": "Opposite of imprisoned."
        },
        {
            "numb": 40,
            "question": "Aris believes his mother has become a ____________ symbol.",
            "answer": "Worthy",
            "options": [
                "Weak",
                "Worthy",
                "Lost",
                "Forgotten"
            ],
            "explanation": "A worthy symbol through whom the plight is recognized."
        },
        {
            "numb": 41,
            "question": "The young people of Burma are described as the ____________ of Burma.",
            "answer": "Hope",
            "options": [
                "Past",
                "Hope",
                "Enemy",
                "Burden"
            ],
            "explanation": "Tragically dying of malaria."
        },
        {
            "numb": 42,
            "question": "The speech mentions 'starless midnight'. This is a metaphor for ____________.",
            "answer": "Dark times/Ignorance/War",
            "options": [
                "Night time",
                "Dark times/Ignorance/War",
                "Space",
                "Sleep"
            ],
            "explanation": "Of racism and war."
        },
        {
            "numb": 43,
            "question": "Is Alexander Aris one of the brothers of Aung San Suu Kyi?",
            "answer": "No, he is her son",
            "options": [
                "Yes",
                "No, he is her son",
                "He is her nephew",
                "He is her father"
            ],
            "explanation": "Clarification of relationship."
        },
        {
            "numb": 44,
            "question": "What does 'unanimous' mean?",
            "answer": "Fully in agreement",
            "options": [
                "Divided",
                "Fully in agreement",
                "Partial",
                "Unknown"
            ],
            "explanation": "UN passed a unanimous resolution."
        },
        {
            "numb": 45,
            "question": "The prize helps to engage not only the winner but ____________.",
            "answer": "All those engaged in the struggle",
            "options": [
                "Only the rich",
                "All those engaged in the struggle",
                "Only politicians",
                "Only men"
            ],
            "explanation": "It honors the struggle itself."
        },
        {
            "numb": 46,
            "question": "What is 'battered'?",
            "answer": "Injured by repeated blows/punishment",
            "options": [
                "Fried",
                "Injured by repeated blows/punishment",
                "Happy",
                "Lost"
            ],
            "explanation": "Prisoners were battered and tortured."
        },
        {
            "numb": 47,
            "question": "What does 'cynicism' imply in the speech?",
            "answer": "Distrust of human sincerity/virtue",
            "options": [
                "Love",
                "Distrust of human sincerity/virtue",
                "Faith",
                "Hope"
            ],
            "explanation": "Indifference, cynicism, selfishness are negatives."
        },
        {
            "numb": 48,
            "question": "The speech ends with 'Thank you' and ____________.",
            "answer": "Let new age dawn!",
            "options": [
                "Goodbye",
                "Let new age dawn!",
                "Good night",
                "Amen"
            ],
            "explanation": "Concluding remark."
        },
        {
            "numb": 49,
            "question": "Where is the headquarters of the Nobel Peace Prize Committee?",
            "answer": "Oslo (Norway)",
            "options": [
                "Stockholm (Sweden)",
                "Oslo (Norway)",
                "Geneva (Switzerland)",
                "New York (USA)"
            ],
            "explanation": "Peace prize is Oslo, others are Stockholm."
        },
        {
            "numb": 50,
            "question": "The speech is an example of strong ____________ for human rights.",
            "answer": "Advocacy",
            "options": [
                "Rejection",
                "Advocacy",
                "Indifference",
                "Mockery"
            ],
            "explanation": "It advocates for freedom and rights."
        }
    ];

    if (typeof window !== 'undefined') {
        if (!window.questionRegistry) {
            window.questionRegistry = {};
        }
        window.questionRegistry['english_ch5_acceptance_speech'] = chapterQuestions;
    }
})();
