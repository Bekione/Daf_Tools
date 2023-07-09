const zodiacSigns = [
    { 
        id: 1,
        name: 'Aries',
        symbol: 'Ram',
        element: 'Fire',
        planet: 'Mars', 
        matchs: ['Gemini', 'Leo', 'Sagittarius'],
        startDate: '03-21', 
        endDate: '04-19', 
        traits: {
            good: ["confident", "courageous", "passionate", "energetic", "adventurous"],
            bad: ["impulsive", "aggressive", "impatient", "selfish", "short-tempered"]
        },
        description: 'Aries is the first sign of the zodiac and is represented by the symbol of the ram. Aries individuals are known for their boldness, enthusiasm, and passion. They are natural leaders and are not afraid to take risks or blaze new trails. Aries is ruled by Mars, the planet of action and energy, which gives Aries their drive and determination. They are also associated with the fire element, which makes them spontaneous, adventurous, and often impulsive. Aries individuals are known for their competitive nature and their desire to be the best, but they can also be impatient and hot-headed at times. Overall, Aries is a sign that values independence, individuality, and the pursuit of personal goals.' 
    },
    { 
        id: 2,
        name: 'Taurus',
        symbol: 'Bull',
        element: 'Earth',
        planet: 'Venus',
        matchs: ['Cancer', 'Virgo', 'Capricorn'],
        startDate: '04-20', 
        endDate: '05-20',
        traits: {
            good: ["patient", "practical", "reliable", "loyal", "romantic"],
            bad: ["stubborn", "possessive", "materialistic", "lazy", "indulgent"]
        },
        description: 'Taurus is the second sign of the zodiac and is represented by the symbol of the bull. Taureans are known for their practicality, determination, and love of luxury. They are often reliable, patient, and loyal, but can also be stubborn and possessive. Taurus is ruled by Venus, the planet of love and beauty, which gives Taureans an appreciation for art, music, and all things aesthetically pleasing. They are also associated with the earth element, which makes them grounded and connected to the natural world. Overall, Taurus is a sign that values stability, comfort, and security, and strives to create a beautiful, harmonious environment in all aspects of life.'

    },
    { 
        id: 3, 
        name: 'Gemini',
        symbol: 'Twin',
        element: 'Air',
        planet: 'Mercury', 
        matchs: ['Aries', 'Leo', 'Scorpio'], 
        startDate: '05-21', 
        endDate: '06-20', 
        traits: {
            good: ["curious", "adaptable", "sociable", "communicative", "witty"],
            bad: ["superficial", "indecisive", "unreliable", "restless", "gossipy"]
        },
        description: 'Gemini is the third sign of the zodiac and is represented by the symbol of the twins. Geminis are known for their versatility, quick wit, and sociability. They are natural communicators and are often skilled at adapting to different situations and people. Gemini is ruled by Mercury, the planet of communication and intellect, which gives Geminis their love of learning and their curiosity about the world. They are also associated with the air element, which makes them intellectual, analytical, and often detached. However, Geminis have a playful and lighthearted side as well, and they enjoy having fun and being spontaneous. Geminis can sometimes be seen as superficial or flighty, but they are also capable of depth and complexity in their thinking and emotions. Overall, Gemini is a sign that values mental stimulation, variety, and freedom of thought.'
    },
    { 
        id: 4, 
        name: 'Cancer',
        symbol: 'Crab',
        element: 'Water',
        planet: 'Moon', 
        matchs: ['Taurus', 'Virgo', 'Scorpio'], 
        startDate: '06-21', 
        endDate: '07-22', 
        traits: {
            good: ["nurturing", "empathetic", "intuitive", "protective", "loyal"],
            bad: ["moody", "clingy", "manipulative", "oversensitive", "pessimistic"]
        },
        description: 'Cancer is the fourth sign of the zodiac and is represented by the symbol of the crab. Cancers are known for their emotional depth, sensitivity, and nurturing nature. They are natural caregivers and often have a strong connection to family and home. Cancer is ruled by the Moon, which gives Cancers their intuitive and empathetic nature. They are also associated with the water element, which makes them emotional, intuitive, and creative. Cancers can be moody and easily affected by their environment, but they are also adaptable and resilient. They value security and stability, and often seek out close relationships and a sense of belonging. Cancers are known for their strong intuition and their ability to read others\' emotions, but they can also be reserved and protective of their own feelings. Overall, Cancer is a sign that values emotional connection, comfort, and security.' 
    },
    { 
        id: 5, 
        name: 'Leo', 
        symbol: 'Lion',
        element: 'Fire',
        planet: 'Sun', 
        matchs: ['Aries', 'Gemini', 'Libra'], 
        startDate: '07-23', 
        endDate: '08-22', 
        traits: {
            good: ["confident", "generous", "creative", "passionate", "charismatic"],
            bad: ["arrogant", "stubborn", "attention-seeking", "vain", "dramatic"]
        },
        description: 'Leo is the fifth sign of the zodiac and is represented by the symbol of the lion. Leos are known for their confidence, leadership, and dramatic flair. They are often charismatic and enjoy being the center of attention. Leo is ruled by the Sun, which gives Leos their warmth, vitality, and creative energy. They are also associated with the fire element, which makes them passionate, enthusiastic, and sometimes impulsive. Leos can be stubborn and prideful, but they are also generous and loyal to those they care about. They value self-expression, creativity, and living life to the fullest. Leos are often natural leaders and have a strong sense of self, but they can also be ego-driven and need to learn to balance their desire for attention with consideration for others. Overall, Leo is a sign that values creativity, self-expression, and living life with passion and purpose.'  
    },
    { 
        id: 6, 
        name: 'Virgo', 
        symbol: 'Maiden',
        element: 'Earth',
        planet: 'Mercury', 
        matchs: ['Taurus', 'Cancer', 'Scorpio'], 
        startDate: '08-23', 
        endDate: '09-22', 
        traits: {
            good: ["analytical", "practical", "responsible", "intelligent", "detail-oriented"],
            bad: ["critical", "perfectionist", "worrisome", "conservative", "aloof"]
        },
        description: 'Virgo is the sixth sign of the zodiac and is represented by the symbol of the maiden. Virgos are known for their attention to detail, analytical ability, and practicality. They are often precise and organized, and have a natural talent for problem-solving. Virgo is ruled by Mercury, the planet of communication and intellect, which gives Virgos their sharp mind and analytical nature. They are also associated with the earth element, which makes them grounded, reliable, and hardworking. Virgos can be perfectionists and can be critical of themselves and others, but they also have a deep sense of caring and a desire to be of service to others. They value order, cleanliness, and efficiency, and often have a talent for healing and nurturing. Virgos are known for their ability to see the details that others miss, but they can also get bogged down in the minutiae and need to learn to see the bigger picture. Overall, Virgo is a sign that values practicality, attention to detail, and a desire to be of service to others.'  
    },
    { 
        id: 7, 
        name: 'Libra', 
        symbol: 'Scales',
        element: 'Air',
        planet: 'Venus', 
        matchs: ['Gemini', 'Leo', 'Sagittarius'], 
        startDate: '09-23', 
        endDate: '10-22', 
        traits: {
            good: ["diplomatic", "charming", "cooperative", "romantic", "fair-minded"],
            bad: ["indecisive", "passive-aggressive", "superficial", "manipulative", "vain"]
        },
        description: 'Libra is the seventh sign of the zodiac and is represented by the symbol of the scales. Libras are known for their diplomacy, charm, and love of beauty. They are often social, outgoing, and have a talent for bringing people together. Libra is ruled by Venus, the planet of love and beauty, which gives Libras their appreciation for art, music, and aesthetics. They are also associated with the air element, which makes them intellectual, communicative, and often indecisive. Libras value balance, harmony, and fairness, and often have a strong sense of justice. They are natural peacemakers and often seek to find common ground and compromise in their relationships. Libras can sometimes be seen as indecisive or superficial, but they also have a deep desire for connection and a need for partnership. They are often skilled at seeing both sides of an issue and have a talent for finding solutions that work for everyone. Overall, Libra is a sign that values beauty, harmony, and connection, and seeks to create a balanced and fair world.'  
    },
    { 
        id: 8, 
        name: 'Scorpio', 
        symbol: 'Scorpion',
        element: 'Water',
        planet: 'Pluto, Mars', 
        matchs: ['Cancer', 'Virgo', 'Capricorn'], 
        startDate: '10-23', 
        endDate: '11-21', 
        traits: {
            good: ["intense", "passionate", "perceptive", "loyal", "resourceful"],
            bad: ["jealous", "controlling", "vindictive", "secretive", "obsessive"]
        },
        description: 'Scorpio is the eighth sign of the zodiac and is represented by the symbol of the scorpion. Scorpios are known for their intensity, passion, and depth of emotion. They are often seen as mysterious and complex, with a powerful and magnetic presence. Scorpio is ruled by Pluto, the planet of transformation and regeneration, which gives Scorpios their ability to transform themselves and their surroundings. They are also associated with the water element, which makes them emotional, intuitive, and often secretive. Scorpios value honesty, authenticity, and loyalty, and can be fiercely protective of those they care about. They have a strong will and a deep desire for power and control, but they can also be self-destructive if they are not careful. Scorpios are known for their ability to see through others\' hidden motivations and agendas, and often have a talent for digging deep to uncover the truth. Overall, Scorpio is a sign that values transformation, intensity, and deep emotional connection, and seeks to uncover the hidden mysteries of life.'  
    },
    { 
        id: 9, 
        name: 'Sagittarius', 
        symbol: 'Archer',
        element: 'Fire',
        planet: 'Jupiter', 
        matchs: ['Aries', 'Libra', 'Aquarius'], 
        startDate: '11-22', 
        endDate: '12-21', 
        traits: {
            good: ["optimistic", "adventurous", "philosophical", "honest", "generous"],
            bad: ["impulsive", "tactless", "restless", "irresponsible", "careless"]
        },
        description: 'Sagittarius is the ninth sign of the zodiac and is represented by the symbol of the archer. Sagittarians are known for their optimism, enthusiasm, and love of adventure. They are often seen as free-spirited and independent, with a natural curiosity about the world. Sagittarius is ruled by Jupiter, the planet of expansion and abundance, which gives Sagittarians their love of learning, exploration, and freedom. They are also associated with the fire element, which makes them passionate, energetic, and sometimes impulsive. Sagittarians value truth, honesty, and authenticity, and often have a deep desire for spiritual growth and understanding. They have a natural talent for seeing the big picture and for finding meaning in life, but they can also be blunt and tactless at times. Sagittarians are known for their sense of humor and their ability to find joy in life\'s adventures, no matter where they may lead. Overall, Sagittarius is a sign that values freedom, adventure, and the pursuit of truth and meaning in life.'  
    },
    { 
        id: 10, 
        name: 'Capricorn', 
        symbol: 'Sea-Goat',
        element: 'Earth',
        planet: 'Saturn', 
        matchs: ['Taurus', 'Scorpio', 'Pisces'], 
        startDate: '12-22', 
        endDate: '01-19', 
        traits: {
            good: ["ambitious", "responsible", "disciplined", "practical", "self-controlled"],
            bad: ["cold", "calculating", "rigid", "pessimistic", "controlling"]
        },
        description: 'Capricorn is the tenth sign of the zodiac and is represented by the symbol of the mountain goat. Capricorns are known for their ambition, discipline, and practicality. They are often seen as hardworking and responsible, with a natural talent for achieving their goals. Capricorn is ruled by Saturn, the planet of structure and authority, which gives Capricorns their sense of responsibility and their desire for order and stability. They are also associated with the earth element, which makes them grounded, reliable, and often traditional. Capricorns value hard work, achievement, and respectability, and often have a talent for leadership and management. They have a deep sense of duty and often take on heavy responsibilities willingly, but they can also be too focused on work and achievement and need to learn to balance their personal and professional lives. Capricorns are known for their patience, perseverance, and practicality, and often have a talent for building lasting structures and systems. Overall, Capricorn is a sign that values hard work, achievement, and responsibility, and seeks to build a stable and secure foundation for themselves and those around them.'  
    },
    { 
        id: 11, 
        name: 'Aquarius', 
        symbol: 'Water-Bearer',
        element: 'Air',
        planet: 'Uranus', 
        matchs: ['Gemini', 'Libra', 'Sagittarius'], 
        startDate: '01-20', 
        endDate: '02-18', 
        traits: {
            good: ["independent", "innovative", "intellectual", "humanitarian", "friendly"],
            bad: ["detached", "eccentric", "unpredictable", "rebellious", "aloof"]
        },
        description: 'Aquarius is the eleventh sign of the zodiac and is represented by the symbol of the water bearer. Aquarians are known for their individuality, independence, and innovative thinking. They are often seen as progressive and forward-thinking, with a natural talent for creativity and invention. Aquarius is ruled by Uranus, the planet of change and disruption, which gives Aquarians their desire for freedom, innovation, and unconventional thinking. They are also associated with the air element, which makes them intellectual, communicative, and sometimes detached. Aquarians value individuality, equality, and social justice, and often have a strong desire to make the world a better place. They are natural humanitarians and often have a talent for bringing people together for a common cause. Aquarians can sometimes be seen as eccentric or unpredictable, but they also have a deep sense of compassion and a desire to help others. They are known for their ability to see the big picture and to think outside the box, and often have a talent for finding creative solutions to complex problems. Overall, Aquarius is a sign that values individuality, innovation, and social progress, and seeks to make the world a better place through creative and unconventional means.'  
    },
    { 
        id: 12, 
        name: 'Pisces', 
        symbol: 'Fish',
        element: 'Water',
        planet: 'Neptune', 
        matchs: ['Cancer', 'Scorpio', 'Capricorn'], 
        startDate: '02-19', 
        endDate: '03-20', 
        traits: {
            good: ["compassionate", "imaginative", "intuitive", "artistic", "spiritual"],
            bad: ["escapist", "unrealistic", "self-pitying", "indecisive", "gullible"]
        },
        description: 'Pisces is the twelfth sign of the zodiac and is represented by the symbol of the fish. Pisceans are known for their sensitivity, compassion, and artistic nature. They are often seen as dreamy and imaginative, with a natural talent for creativity and intuition. Pisces is ruled by Neptune, the planet of imagination and spirituality, which gives Pisceans their emotional depth and connection to the spiritual realm. They are also associated with the water element, which makes them emotional, intuitive, and often empathetic. Pisceans value compassion, creativity, and spirituality, and often have a strong connection to the natural world. They have a natural talent for art, music, and poetry, and often find solace in creative pursuits. Pisceans can sometimes be seen as overly sensitive or escapist, but they also have a deep sense of kindness and a desire to help others. They are known for their ability to connect with others on a deep emotional level and to see the beauty in the world around them. Overall, Pisces is a sign that values creativity, intuition, and spirituality, and seeks to find meaning and beauty in the world around them.'  
    },
  ];

export default zodiacSigns