// Question storage for Sanskrit Chapter 3 - Alaskatha
// This file is dynamically loaded when the user selects this chapter.

(function () {
    const chapterQuestions = [
        // Set 1: Bihar Board Solutions - Set 1
        {
            numb: 1,
            question: "अलसकथा पाठः कुतः संकलितः ?",
            answer: "पुरुषपरीक्षातः",
            options: [
                "अग्निपुराणतः",
                "पुरुषपरीक्षातः",
                "रामायणतः",
                "महाभारतः"
            ],
            explanation: "उत्तर : (B) पुरुषपरीक्षातः"
        },
        {
            numb: 2,
            question: "अलसकथा पाठस्य लेखकः कः ?",
            answer: "विद्यापतिः",
            options: [
                "कालिदासः",
                "विद्यापतिः",
                "नारायणपण्डितः",
                "वेदव्यासः"
            ],
            explanation: "उत्तर : (B) विद्यापतिः"
        },
        {
            numb: 3,
            question: "मिथिलायां मंत्री कः?",
            answer: "वीरेश्वरः",
            options: [
                "कर्मवीरः",
                "धर्मवीरः",
                "वीरेश्वरः",
                "बुद्धिवीरः"
            ],
            explanation: "उत्तर : (C) वीरेश्वरः"
        },
        {
            numb: 4,
            question: "मैथिली कविः कः आसीत् ?",
            answer: "विद्यापतिः",
            options: [
                "भासः",
                "कालिदासः",
                "विद्यापतिः",
                "नारायणपण्डितः"
            ],
            explanation: "उत्तर : (C) विद्यापतिः"
        },
        {
            numb: 5,
            question: "कारुणिकं बिना केषां गति नास्ति ?",
            answer: "अलसानाम्",
            options: [
                "परोपकारिणाम्",
                "धूर्तानाम्",
                "अलसानाम्",
                "विदुषाम्"
            ],
            explanation: "उत्तर : (C) अलसानाम्"
        },
        {
            numb: 6,
            question: "तत्रैव कति पुरुषाः सुप्ताः ?",
            answer: "चत्वारः",
            options: [
                "चत्वारः",
                "एकः",
                "दयम्",
                "दशा"
            ],
            explanation: "उत्तर : (A) चत्वारः"
        },
        {
            numb: 7,
            question: "इयं कथा कस्मात् ग्रंथात् उद्धताऽस्ति ?",
            answer: "पुरुषपरीक्षातः",
            options: [
                "अग्निपुराणतः",
                "पुरुषपरीक्षातः",
                "रामायणतः",
                "महाभारतः"
            ],
            explanation: "उत्तर : (B) पुरुषपरीक्षातः"
        },
        {
            numb: 8,
            question: "अस्यां कथायां कस्य महत्त्वं वर्णितम् अस्ति ?",
            answer: "मानवगुणानाम्",
            options: [
                "परोपकारिणाम्",
                "धूर्तानाम्",
                "मानवगुणानाम्",
                "विदुषाम्"
            ],
            explanation: "उत्तर : (C) मानवगुणानाम्"
        },
        {
            numb: 9,
            question: "विद्यापतिः लोकप्रियः………आसीत् । रिक्त स्थानानि पूरयत।",
            answer: "मैथिली कविः",
            options: [
                "भोजपुरी कविः",
                "मैथिली कविः",
                "अवधी कविः",
                "हिन्दी कविः"
            ],
            explanation: "उत्तर : (B) मैथिली कविः"
        },
        {
            numb: 10,
            question: "नीतिकाराः आलस्यं………..मन्यन्ते । रिक्त स्थानानि पूरयत।",
            answer: "रिपुः", // Text says (B) अलसाः ? No, Question 10 text answer says (B) अलसाः. Wait, Logic: Nitikaras consider laziness as... Answer (B) Alasa? Usually they consider it as 'enemy' (Ripu).
            // Let's re-read the provided text carefully. 
            // "प्रश्न 10. नीतिकाराः आलस्यं ... मन्यन्ते । ... उत्तर : (B) अलसाः " 
            // WAIT. Question 22 in set 3 says "नीतिकाराः आलस्यं ... मन्यन्ते। उत्तर : (A) रिपुः".
            // Question 10 in Set 1 says answer (B) अलसाः. This is suspicious. 'Alasa' means lazy people. 'Ripu' means enemy. 
            // "The moralists consider laziness as..." -> Enemy makes sense.
            // I will check the text again perfectly. 
            // Set 1, Q10: Answer (B). Options: A: Ripu, B: Alasa.
            // Set 3, Q22: Answer (A). Options: A: Ripu, B: Alasa.
            // Set 1 Q10 seems wrong in source or I am misinterpreting. 
            // However, sticking to the provided text is key. But since Set 3 Q22 corrects it to 'Ripu', which is logically correct ("Alasya hi manushyanam sharirastho mahan ripuh"), I will use "रिपुः" (Enemy) if valid, or just follow the text blindly?
            // User said "bs 50 hi nhi" (add all). Maybe I should add both versions or pick the correct one? 
            // I will use the logically correct one which appears in Set 3 (Q22) as it is robust.
            // Actually, for Q10 Set 1, I'll follow the provided key (B) but note the discrepancy in my mind. 
            // WAIT, looking at Set 1 Q10 again. Option A is Ripu, B is Alasa. The answer Key says (B). This might be a typo in the user's source text.
            // In Set 3 Q22, Answer is (A) Ripu. 
            // I will include the Set 3 version which is correct.
            answer: "अलसाः", // Sticking to user text for Set 1 Q10 just in case, but it looks like a typo in source.
            options: [
                "रिपुः",
                "अलसाः",
                "कारुणिकः",
                "धूर्ताः"
            ],
            explanation: "उत्तर : (B) अलसाः"
        },
        {
            numb: 11,
            question: "आसीत् मिथिलायां……………नाम मंत्री। रिक्त स्थानानि पूरयत।",
            answer: "वीरेश्वरो",
            options: [
                "सुरेश्वरो",
                "परमेश्वरो",
                "वीरेश्वरो",
                "रामेश्वरो"
            ],
            explanation: "उत्तर : (C) वीरेश्वरो"
        },
        {
            numb: 12,
            question: "आसीत् मिथिलायां…………..नाम मंत्री । रिक्त स्थानानि पूरयत ।",
            answer: "वीरेश्वरः", // Repeated question, slightly different options format
            options: [
                "कर्मवीरः",
                "धर्मवीरः",
                "वीरेश्वरः",
                "बुद्धिवीरः"
            ],
            explanation: "उत्तर : (C) वीरेश्वरः"
        },

        // Set 2: Hindi Objective Questions
        {
            numb: 13,
            question: "‘अलसकथा’ के रचयिता कौन हैं?",
            answer: "विद्यापति",
            options: [
                "कालिदासः",
                "विद्यापति",
                "विष्णु शर्मा",
                "नारायण पण्डितः"
            ],
            explanation: "उत्तर : (B) विद्यापति"
        },
        {
            numb: 14,
            question: "‘अलसकथा’ पाठ कहाँ से संकलित है?",
            answer: "पुरुषपरीक्षा",
            options: [
                "अग्निपुराण",
                "पुरुषपरीक्षा",
                "रामायण",
                "महाभारत"
            ],
            explanation: "उत्तर : (B) पुरुषपरीक्षा"
        },
        {
            numb: 15,
            question: "वीरेश्वर कौन था?",
            answer: "मिथिला का मंत्री",
            options: [
                "मिथिला का राजा",
                "मिथिला का मंत्री",
                "मिथिला का राजकुमार",
                "मिथिला का संतरी"
            ],
            explanation: "उत्तर : (B) मिथिला का मंत्री"
        },
        {
            numb: 16,
            question: "‘मिथिला का मंत्री कौन था?",
            answer: "वीरेश्वर",
            options: [
                "बुद्धिवीर",
                "कर्मवीर",
                "धर्मवीर",
                "वीरेश्वर"
            ],
            explanation: "उत्तर : (D) वीरेश्वर"
        },
        {
            numb: 17,
            question: "‘मैथिल’ कवि कौन था?",
            answer: "विद्यापति",
            options: [
                "भास",
                "कालिदास",
                "विद्यापति",
                "नारायण पंडित"
            ],
            explanation: "उत्तर : (C) विद्यापति"
        },
        {
            numb: 18,
            question: "‘मैथिल कोकिल’ के नाम से कौन प्रसिद्ध था?",
            answer: "विद्यापति",
            options: [
                "विद्यापति",
                "नारायण पंडित",
                "कालीदास",
                "वेदव्यास"
            ],
            explanation: "उत्तर : (A) विद्यापति"
        },
        {
            numb: 19,
            question: "‘आलसियों’ को कौन अन्न और वस्त्र देते थे?",
            answer: "वीरेश्वर",
            options: [
                "बुद्धिवीर",
                "कर्मवीर",
                "धर्मवीर",
                "वीरेश्वर"
            ],
            explanation: "उत्तर : (D) वीरेश्वर"
        },
        {
            numb: 20,
            question: "आलसी पुरुष कितने थे?",
            answer: "चार",
            options: [
                "दो",
                "तीन",
                "चार",
                "चार" // Repeated option in text, assume second one is intent
            ],
            explanation: "उत्तर : (D) चार"
        },
        {
            numb: 21,
            question: "‘अलसकथा’ पाठ में किस महत्व का वर्णन किया गया है?",
            answer: "मानव गुण",
            options: [
                "मानव गुण",
                "पशु गुण",
                "देवता गुण",
                "उपर्युक्त कोई नहीं"
            ],
            explanation: "उत्तर : (A) मानव गुण"
        },
        {
            numb: 22,
            question: "‘अलसकथा’ पाठ में किस दोष का वर्णन किया गया है?",
            answer: "आलस",
            options: [
                "अर्थ",
                "धर्म",
                "आलस",
                "कोई नहीं"
            ],
            explanation: "उत्तर : (C) आलस"
        },
        {
            numb: 23,
            question: "‘गरीबों और अनाथों’ को प्रतिदिन कौन भोजन कराते थे?",
            answer: "वीरेश्वर",
            options: [
                "बुद्धिवीर",
                "कर्मवीर",
                "धर्मवीर",
                "वीरेश्वर"
            ],
            explanation: "उत्तर : (D) वीरेश्वर"
        },
        {
            numb: 24,
            question: "मनुष्य को कौन नष्ट कर देता है?",
            answer: "आलस",
            options: [
                "धन",
                "धर्म",
                "आलस",
                "कोई नहीं"
            ],
            explanation: "उत्तर : (C) आलस"
        },
        {
            numb: 25,
            question: "वीरेश्वर नाम का मंत्री कहाँ रहता था?",
            answer: "मिथिला में",
            options: [
                "पाटलिपुत्र में",
                "मिथिला में",
                "जनकपुर में",
                "अयोध्या में"
            ],
            explanation: "उत्तर : (B) मिथिला में"
        },
        {
            numb: 26,
            question: "कारुणिक के बिना किसकी गति नहीं है?",
            answer: "आलसियों की",
            options: [
                "धूर्तों की",
                "पतितों की",
                "वाचालों की",
                "आलसियों की"
            ],
            explanation: "उत्तर : (D) आलसियों की"
        },
        {
            numb: 27,
            question: "अलसशाला में आग क्यों लगाई गई?",
            answer: "आलसियों की परीक्षा करने के लिए",
            options: [
                "आलसियों को भगाने के लिए",
                "आलसियों की परीक्षा करने के लिए",
                "अलसशाला की सम्पत्ति को हड़पने के लिए",
                "इनमें से किसी के लिए नहीं"
            ],
            explanation: "उत्तर : (B) आलसियों की परीक्षा करने के लिए"
        },
        {
            numb: 28,
            question: "अलसशाला में लगी आग को देखकर कौन भाग गए?",
            answer: "धूर्त",
            options: [
                "आलसी",
                "धूर्त",
                "अधिकारी",
                "नौकर"
            ],
            explanation: "उत्तर : (B) धूर्त"
        },
        {
            numb: 29,
            question: "असलशाला में आग लगने पर भी कितने लोग नहीं भागे?",
            answer: "चार",
            options: [
                "तीन",
                "पाँच",
                "चार",
                "छ:"
            ],
            explanation: "उत्तर : (C) चार"
        },
        {
            numb: 30,
            question: "भीषण भूख लगने पर भी कौन कुछ नहीं कर सकता?",
            answer: "आलसी",
            options: [
                "आलसी",
                "निर्बल",
                "सच्चरित्र",
                "निर्धन"
            ],
            explanation: "उत्तर : (A) आलसी"
        },

        // Set 3: Sanskrit Objective Questions (Set 3)
        {
            numb: 31,
            question: "कं दृष्ट्वा सर्वे धूर्ताः पलायिता:?",
            answer: "प्रवृद्धमग्निम्",
            options: [
                "नियोगिपुरूषम्",
                "प्रवृद्धमग्निम्",
                "नगररक्षकम्",
                "राजानम्"
            ],
            explanation: "उत्तर : (B) प्रवृद्धमग्निम्"
        },
        {
            numb: 32,
            question: "वीरेश्वरः कः आसीत्?",
            answer: "मन्त्री",
            options: [
                "राजा",
                "प्रजा",
                "मन्त्री",
                "सभापति"
            ],
            explanation: "उत्तर : (C) मन्त्री"
        },
        {
            numb: 33,
            question: "अलसकथायाः कथाकार:/लेखकः कः?",
            answer: "विद्यापतिः",
            options: [
                "कालिदासः",
                "भारवि",
                "रत्नाकारः",
                "विद्यापतिः"
            ],
            explanation: "उत्तर : (D) विद्यापतिः"
        },
        {
            numb: 34,
            question: "वीरेश्वरोनाम मन्त्री कुत्र आसीत्?",
            answer: "मिथिलायाम्",
            options: [
                "बिहारे",
                "बङ्गाले",
                "मिथिलायाम्",
                "जनकपुर्याम"
            ],
            explanation: "उत्तर : (C) मिथिलायाम्"
        },
        {
            numb: 35,
            question: "के कृत्रिमालस्यं दर्शयित्वा भोजनं गृहणन्ति?",
            answer: "धूर्तः",
            options: [
                "अलसाः",
                "धूर्तः",
                "श्रमिकाः",
                "भिक्षुकाः"
            ],
            explanation: "उत्तर : (B) धूर्तः"
        },
        {
            numb: 36,
            question: "चत्वारः अलसाः कैः बहिष्कृताः?",
            answer: "नियोगिपुरषैः",
            options: [
                "नियोगिपुरषैः",
                "राजपुरुषैः",
                "कोटरंक्षकैः",
                "द्वारपालैः"
            ],
            explanation: "उत्तर : (A) नियोगिपुरषैः"
        },
        {
            numb: 37,
            question: "अलसशालायां कति पुरुषाः सुप्ताः?",
            answer: "चतुः",
            options: [
                "एकः",
                "द्वयः",
                "त्रयः",
                "चतुः"
            ],
            explanation: "उत्तर : (D) चतुः"
        },
        {
            numb: 38,
            question: "भीषणबुभुक्षया अपि कः किमपि कर्तुं न क्षमते?",
            answer: "अलसाः",
            options: [
                "धूर्ताः",
                "अनलसाः",
                "अलसाः",
                "राजपुरूषाः"
            ],
            explanation: "उत्तर : (C) अलसाः"
        },
        {
            numb: 39,
            question: "अग्निं दृष्ट्वा के पलायिताः?",
            answer: "धूर्ताः",
            options: [
                "अलसाः",
                " छात्राः",
                "रक्षकाः",
                "धूर्ताः"
            ],
            explanation: "उत्तर : (D) धूर्ताः"
        },
        {
            numb: 40,
            question: "मैथिलकोकिलः कः आसीत्?",
            answer: "विद्यापतिः",
            options: [
                "भासः",
                "भारविः",
                "विद्यापतिः",
                "कालिदासः"
            ],
            explanation: "उत्तर : (C) विद्यापतिः"
        },
        {
            numb: 41,
            question: "अलसानां शरणदः कः?",
            answer: "कारुणिकः",
            options: [
                "दाता",
                "विद्वान",
                "राजा",
                "कारुणिकः"
            ],
            explanation: "उत्तर : (D) कारुणिकः"
        },
        {
            numb: 42,
            question: "स्त्रीणां गतिः कः?",
            answer: "पतिः",
            options: [
                "गति",
                "मतिः",
                "पतिः",
                "विद्यापतिः"
            ],
            explanation: "उत्तर : (C) पतिः"
        },
        {
            numb: 43,
            question: "बालानां गतिः का?",
            answer: "जननी",
            options: [
                "शिक्षकः",
                "रक्षकः",
                "पिता",
                "जननी"
            ],
            explanation: "उत्तर : (D) जननी"
        },
        {
            numb: 44,
            question: "जन्तवः केषाम् सुखं दृष्ट्वा थावन्ति?",
            answer: "सजातीनाम्",
            options: [
                "सजातीनाम्",
                "विजातीनाम्",
                "निर्गतीनाम्",
                "धार्मिकानाम्"
            ],
            explanation: "उत्तर : (A) सजातीनाम्"
        },
        {
            numb: 45,
            question: "पश्चादलसानां सुखं दृष्ट्वा …..” अपि कृत्रिमालस्य दर्शयित्वा भोज्यम् गृह्णन्ति।",
            answer: "धूर्ताः",
            options: [
                "धूर्ताः",
                "भिक्षुकाः",
                "निधनाः",
                "मानवाः"
            ],
            explanation: "उत्तर : (A) धूर्ताः"
        },
        {
            numb: 46,
            question: "अलसकथा पाठः कुत्र संकलितः?",
            answer: "पुरुषपरीक्षातः",
            options: [
                "अग्निपुराणतः",
                "पुरुषपरीक्षातः",
                "रामायणतः",
                "महाभारतः"
            ],
            explanation: "उत्तर : (B) पुरुषपरीक्षातः"
        },
        {
            numb: 47,
            question: "पुरुषपरीक्षायाः रचनाकारः कः?",
            answer: "विद्यापतिः",
            options: [
                "कालिदासः",
                "विद्यापतिः",
                "वेदव्यासः",
                "नारायणपण्डितः"
            ],
            explanation: "उत्तर : (B) विद्यापतिः"
        },
        {
            numb: 48,
            question: "मिथिलायां मंत्री कः?",
            answer: "वीरेश्वरः",
            options: [
                "कर्मवीरः",
                "धर्मवीरः",
                "वीरेश्वरः",
                "बुद्धिवीरः"
            ],
            explanation: "उत्तर : (C) वीरेश्वरः"
        },
        {
            numb: 49,
            question: "मैथिली कविः कः आसीत्?",
            answer: "विद्यापतिः",
            options: [
                "भासः",
                "कालिदासः",
                "विद्यापतिः",
                "नारायणपण्डितः"
            ],
            explanation: "उत्तर : (C) विद्यापतिः"
        },
        {
            numb: 50,
            question: "कारुणिकं बिना केषां गति नास्ति?",
            answer: "अलसानाम्",
            options: [
                "परोपकारिणाम्",
                "धूर्तानाम्",
                "अलसानाम्",
                "विदुषाम्"
            ],
            explanation: "उत्तर : (C) अलसानाम्"
        },
        {
            numb: 51,
            question: "विद्यापतिः लोकप्रियः “…” आसीत्। रिक्त स्थानानि पूरयत।",
            answer: "मैथिली कविः",
            options: [
                "भोजपुरी कविः",
                "मैथिली कविः",
                "अवधी कविः",
                "हिन्दी कविः"
            ],
            explanation: "उत्तर : (B) मैथिली कविः"
        },
        {
            numb: 52,
            question: "नीतिकाराः आलस्यं ……………. मन्यन्ते। रिक्त स्थानानि पूरयत।",
            answer: "रिपुः",
            options: [
                "रिपुः",
                "अलसाः",
                "धूर्ताः",
                "कारुणिकः"
            ],
            explanation: "उत्तर : (A) रिपुः"
        },
        {
            numb: 53,
            question: "आसीत् मिथिलायां …….. नाम मंत्री। रिक्त स्थानानि पूरयत।",
            answer: "वीरेश्वरो",
            options: [
                "सुरेश्वरो",
                "परमेश्वरो",
                "वीरेश्वरो",
                "रामेश्वरो"
            ],
            explanation: "उत्तर : (C) वीरेश्वरो"
        }
    ];

    // Expose the questions globally
    window.questionRegistry = window.questionRegistry || {};
    window.questionRegistry["sanskrit_ch3_alaskatha"] = chapterQuestions;
})();
