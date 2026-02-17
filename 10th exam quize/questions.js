// Hierarchical Quiz Data containing Subjects -> Chapters
// Questions are now loaded dynamically from questions_data/<id>.js
const quizData = [
    {
        subject: "Hindi (Godhuli)",
        id: "hindi_godhuli",
        icon: "fas fa-language",
        chapters: [
            {
                title: "1. श्रम विभाजन और जाति प्रथा",
                id: "hindi_ch1_shram_vibhajan"
            },
            {
                title: "2. विष के दाँत",
                id: "hindi_ch2_vish_ke_dant"
            },
            {
                title: "3. भारत से हम क्या सीखें",
                id: "hindi_ch3_bharat_se_hum_kya_sikhe"
            },
            {
                title: "4. नाखून क्यों बढ़ते हैं",
                id: "hindi_ch4_nakhun_kyo_badhte_hai"
            },
            {
                title: "5. नागरी लिपि",
                id: "hindi_ch5_nagari_lipi"
            },
            {
                title: "6. बहादुर",
                id: "hindi_ch6_bahadur"
            },
            {
                title: "7. परंपरा का मूल्यांकन",
                id: "hindi_ch7_parampara_ka_mulyankan"
            },
            {
                title: "8. जित-जित मैं निरखत हूँ",
                id: "hindi_ch8_jit_jit_mai_nirkhat_hu"
            },
            {
                title: "9. आविन्यों",
                id: "hindi_ch9_avinyo"
            },
            {
                title: "10. मछली",
                id: "hindi_ch10_machhli"
            },
            {
                title: "11. नौबतखाने में इबादत",
                id: "hindi_ch11_naubatkhane_mein_ibadat"
            },
            {
                title: "12. शिक्षा और संस्कृति",
                id: "hindi_ch12_shiksha_aur_sanskriti"
            },
            {
                title: "13. राम नाम बिनु बिरथे जगि जनमा",
                id: "hindi_ch13_ram_bin_birthe_jagi_janma"
            },
            {
                title: "14. प्रेम अयनि श्री राधिका",
                id: "hindi_ch14_prem_ayani_shri_radhika"
            },
            {
                title: "15. अति सूधो सनेह को मारग है",
                id: "hindi_ch15_ati_sudho_saneh_ko_marag_hai"
            },
            {
                title: "16. स्वदेशी",
                id: "hindi_ch16_swadeshi"
            },
            {
                title: "17. भारतमाता",
                id: "hindi_ch17_bharat_mata"
            },
            {
                title: "18. जनतंत्र का जन्म",
                id: "hindi_ch18_janatantra_ka_janm"
            },
            {
                title: "19. हिरोशिमा",
                id: "hindi_ch19_hiroshima"
            },
            {
                title: "20. एक वृक्ष की हत्या",
                id: "hindi_ch20_ek_vriksh_ki_hatya"
            },
            {
                title: "21. हमारी नींद",
                id: "hindi_ch21_hamari_neend"
            },
            {
                title: "22. अक्षर-ज्ञान",
                id: "hindi_ch22_akshar_gyan"
            },
            {
                title: "23. लौटकर आऊँगा फिर",
                id: "hindi_ch23_lautkar_aaunga_phir"
            },
            {
                title: "24. मेरे बिना तुम प्रभु",
                id: "hindi_ch24_mere_bina_tum_prabhu"
            },
            {
                title: "25. दही वाली मंगम्मा",
                id: "hindi_ch25_dahi_wali_mangamma"
            },
            {
                title: "26. ढहते विश्वास",
                id: "hindi_ch26_dhahte_vishwas"
            },
            {
                title: "27. माँ",
                id: "hindi_ch27_maa"
            },
            {
                title: "28. नगर",
                id: "hindi_ch28_nagar"
            },
            {
                title: "29. धरती कब तक घूमेगी",
                id: "hindi_ch29_dharti_kab_tak_ghumegi"
            }
        ]
    },
    {
        subject: "Sanskrit",
        icon: "fas fa-om",
        chapters: [
            {
                title: "1. मङ्गलम्",
                id: "sanskrit_ch1_mangalam"
            },
            {
                title: "2. पाटलिपुत्रवैभवम्",
                id: "sanskrit_ch2_pataliputra_vaibhavam"
            },
            {
                title: "3. अलसकथा",
                id: "sanskrit_ch3_alaskatha"
            },
            {
                title: "4. संस्कृतसाहित्ये लेखिकाः",
                id: "sanskrit_ch4_lekhikah"
            },
            {
                title: "6. भारतीयसंस्काराः",
                id: "sanskrit_ch6_bharatiyasanskarah"
            },
            {
                title: "7. नीतिश्लोकाः",
                id: "sanskrit_ch7_nitishlokah"
            },
            {
                title: "8. कर्मवीर कथाः",
                id: "sanskrit_ch8_karmaveer_katha"
            },
            {
                title: "9. स्वामी दयानन्दः",
                id: "sanskrit_ch9_swami_dayananda"
            },
            {
                title: "10. मन्दाकिनीवर्णनम्",
                id: "sanskrit_ch10_mandakini_varnanam"
            },
            {
                title: "11. व्याघ्रपथिककथाः",
                id: "sanskrit_ch11_vyaghrapathikatha"
            },
            {
                title: "12. कर्णस्य दानवीरता",
                id: "sanskrit_ch12_karnasya_danavirata"
            },
            {
                title: "13. विश्वशांतिः",
                id: "sanskrit_ch13_vishwa_shantih"
            },
            {
                title: "14. शास्त्रकाराः",
                id: "sanskrit_ch14_shastrakarah"
            }
        ]
    },
    {
        subject: "Chemistry",
        id: "chemistry",
        icon: "fas fa-flask",
        chapters: [
            {
                title: "1. रासायनिक अभिक्रियाएँ एवं समीकरण",
                id: "chemistry_ch1_chemical_reactions_equations"
            },
            {
                title: "2. अम्ल, क्षारक एवं लवण",
                id: "chemistry_ch2_acids_bases_salts"
            },
            {
                title: "3. धातु एवं अधातु",
                id: "chemistry_ch3_metals_nonmetals"
            },
            {
                title: "4. कार्बन एवं इसके यौगिक",
                id: "chemistry_ch4_carbon_compounds"
            },
            {
                title: "5. तत्वों का आवर्त वर्गीकरण",
                id: "chemistry_ch5_periodic_classification"
            }
        ]
    },
    {
        subject: "Biology",
        id: "biology",
        icon: "fas fa-dna",
        chapters: [
            {
                title: "6. जैव प्रक्रम",
                id: "biology_ch6_life_processes"
            },
            {
                title: "7. नियंत्रण एवं समन्वय",
                id: "biology_ch7_control_coordination"
            },
            {
                title: "8. जीव जनन कैसे करते है",
                id: "biology_ch8_how_do_organisms_reproduce"
            },
            {
                title: "9. अनुवांशिकता एवं जैव विकास",
                id: "biology_ch9_heredity_evolution"
            },
            {
                title: "15. हमारा पर्यावरण",
                id: "biology_ch15_our_environment"
            },
            {
                title: "16. प्राकृतिक संसाधनों का संपोषित प्रबंधन",
                id: "biology_ch16_natural_resources_management"
            }
        ]
    },
    {
        subject: "Physics",
        id: "physics",
        icon: "fas fa-atom",
        chapters: [
            {
                title: "10. प्रकाश-परावर्तन तथा अपवर्तन",
                id: "physics_ch10_light_reflection_refraction"
            },
            {
                title: "11. मानव नेत्र एवं रंगबिरंगा संसार",
                id: "physics_ch11_human_eye"
            },
            {
                title: "12. विद्युत",
                id: "physics_ch12_electricity"
            },
            {
                title: "13. विद्युत धारा का चुम्बकीय प्रभाव",
                id: "physics_ch13_magnetic_effects"
            },
            {
                title: "14. उर्जा के स्रोत",
                id: "physics_ch14_sources_of_energy"
            }
        ]
    },
    {
        subject: "Social Science",
        id: "social_science",
        icon: "fas fa-landmark",
        chapters: [
            {
                title: "1. यूरोप में राष्ट्रवाद",
                id: "social_science_ch1_nationalism_europe"
            },
            {
                title: "2. समाजवाद एवं साम्यवाद",
                id: "social_science_ch2_socialism_communism"
            },
            {
                title: "3. हिन्द-चीन में राष्ट्रवादी आंदोलन",
                id: "social_science_ch3_nationalism_indochina"
            },
            {
                title: "4. भारत में राष्ट्रवाद",
                id: "social_science_ch4_nationalism_india"
            },
            {
                title: "5. अर्थव्यवस्था और आजीविका",
                id: "social_science_ch5_economy_livelihood"
            },
            {
                title: "6. शहरीकरण एवं शहरी जीवन",
                id: "social_science_ch6_urbanization_urban_life"
            },
            {
                title: "7. व्यापार और भूमंडलीकरण",
                id: "social_science_ch7_trade_globalization"
            },
            {
                title: "8. प्रेस एवं सस्कृतिक राष्ट्रवाद",
                id: "social_science_ch8_press_cultural_nationalism"
            }
        ]
    },
    {
        subject: "Political Science",
        id: "political_science",
        icon: "fas fa-balance-scale",
        chapters: [
            {
                title: "1. लोकतंत्र में सत्ता की साझेदारी",
                id: "political_science_ch1_power_sharing_democracy"
            },
            {
                title: "2. सत्ता में साझेदारी की कार्यप्रणाली",
                id: "political_science_ch2_workings_power_sharing"
            },
            {
                title: "3. लोकतंत्र में प्रतिस्पर्धा एवं संघर्ष",
                id: "political_science_ch3_competition_struggle"
            },
            {
                title: "4. लोकतंत्र की उपलब्धियाँ",
                id: "political_science_ch4_achievements_democracy"
            },
            {
                title: "5. लोकतंत्र की चुनौतियाँ",
                id: "political_science_ch5_challenges_democracy"
            }
        ]
    },
    {
        subject: "Economics",
        id: "economics",
        icon: "fas fa-chart-line",
        chapters: [
            {
                title: "1. अर्थव्यवस्था एवं इसके विकास का इतिहास",
                id: "economics_ch1_economy_development_history"
            },
            {
                title: "2. राज्य एवं राष्ट्र की आय",
                id: "economics_ch2_state_national_income"
            },
            {
                title: "3. मुद्रा, बचत एवं साख",
                id: "economics_ch3_money_saving_credit"
            },
            {
                title: "4. हमारी वित्तीय संस्थाएँ",
                id: "economics_ch4_financial_institutions"
            },
            {
                title: "5. रोजगार एवं सेवाएँ",
                id: "economics_ch5_employment_services"
            },
            {
                title: "6. वैश्वीकरण",
                id: "economics_ch6_globalization"
            },
            {
                title: "7. उपभोक्ता जागरण एवं संरक्षण",
                id: "economics_ch7_consumer_protection"
            }
        ]
    },
    {
        subject: "Geography",
        id: "geography",
        icon: "fas fa-globe-asia",
        chapters: [
            {
                title: "1. भारत : संसाधन एवं उपयोग",
                id: "geography_ch1_resources_utilization"
            },
            {
                title: "1A. प्राकृतिक संसाधन",
                id: "geography_ch1a_natural_resources"
            },
            {
                title: "1B. जल संसाधन",
                id: "geography_ch1b_water_resources"
            },
            {
                title: "1C. वन एवं वन्य प्राणी संसाधन",
                id: "geography_ch1c_forest_wildlife"
            },
            {
                title: "1D. खनिज संसाधन",
                id: "geography_ch1d_mineral_resources"
            },
            {
                title: "1E. शक्ति (ऊर्जा) संसाधन",
                id: "geography_ch1e_power_resources"
            },
            {
                title: "2. कृषि",
                id: "geography_ch2_agriculture"
            },
            {
                title: "3. निर्माण उद्योग",
                id: "geography_ch3_manufacturing_industries"
            },
            {
                title: "4. परिवहन, संचार एवं व्यापार",
                id: "geography_ch4_transport"
            },
            {
                title: "5. बिहार : कृषि एवं वन संसाधन",
                id: "geography_ch5_bihar_agriculture"
            },
            {
                title: "5A. बिहार : खनिज एवं ऊर्जा संसाधन",
                id: "geography_ch5a_bihar_minerals"
            },
            {
                title: "5B. बिहार : उद्योग एवं परिवहन",
                id: "geography_ch5b_bihar_industries"
            },
            {
                title: "5C. बिहार : जनसंख्या एवं नगरीकरण",
                id: "geography_ch5c_bihar_population"
            },
            {
                title: "6. मानचित्र अध्ययन",
                id: "geography_ch6_map_study"
            }
        ]
    },
    {
        subject: "Disaster Management",
        id: "disaster_management",
        icon: "fas fa-house-damage",
        chapters: [
            {
                title: "1. प्राकृतिक आपदा : एक परिचय",
                id: "disaster_management_ch1_introduction"
            },
            {
                title: "2. प्राकृतिक आपदा एवं प्रबंधन : बाढ़ और सुखाड़",
                id: "disaster_management_ch2_flood_drought"
            },
            {
                title: "3. प्राकृतिक आपदा एवं प्रबंधन : भूकंप एवं सुनामी",
                id: "disaster_management_ch3_earthquake_tsunami"
            },
            {
                title: "4. जीवन रक्षक आकस्मिक प्रबंधन",
                id: "disaster_management_ch4_contingency_management"
            },
            {
                title: "5. आपदा काल में वैकल्पिक संचार व्यवस्था",
                id: "disaster_management_ch5_alternative_communication"
            },
            {
                title: "6. आपदा और सह-अस्तित्व",
                id: "disaster_management_ch6_coexistence"
            }
        ]
    },
    {
        subject: "English",
        chapters: [
            {
                title: "1. The Pace for Living",
                id: "english_ch1_pace_for_living"
            },
            {
                title: "2. Me and The Ecology Bit",
                id: "english_ch2_ecology_bit"
            },
            {
                title: "3. Gillu",
                id: "english_ch3_gillu"
            },
            {
                title: "4. What is Wrong with Indian Film",
                id: "english_ch4_wrong_with_indian_film"
            },
            {
                title: "5. Acceptance Speech",
                id: "english_ch5_acceptance_speech"
            }
        ]
    },
    {
        subject: "Web Development",
        id: "web_dev",
        icon: "fas fa-code",
        chapters: [
            {
                title: "HTML Basics",
                id: "html_basics"
            },
            {
                title: "CSS Styling",
                id: "css_basics"
            }
        ]
    },
    {
        subject: "Hindi Literature (Old)",
        id: "hindi_lit",
        icon: "fas fa-book-open",
        chapters: [
            {
                title: "Chapter 1: वातचीत",
                id: "hindi_ch1"
            },
            {
                title: "Chapter 2: उसने कहा था",
                id: "hindi_ch2"
            }
        ]
    }
];
