// Export English versions of data
export const principlesDataEn = {
  mainPrinciples: [
    {
      kanji: "精力善用",
      romaji: "Seiryoku Zen'yo",
      meaning: "Maximum Efficiency with Minimum Effort",
      desc: "Best use of energy. Improves body, life, utility in all aspects. Fundamental for a full life, applicable in daily life through philosophy, not just in physical fighting."
    },
    {
      kanji: "自他共栄",
      romaji: "Jita Kyoei",
      meaning: "Mutual Welfare and Benefit",
      desc: "Human solidarity for personal and universal benefit. Individual progress must be linked to helping others, making human beings more complete through efficiency and mutual aid."
    },
    {
      kanji: "柔",
      romaji: "Ju",
      meaning: "Principle of Gentleness",
      desc: "Yielding to force instead of resisting is effective. Uses the opponent's weight and strength against them. YIELD TO WIN - like the willow that bends with the wind."
    }
  ],
  moralCode: [
    { title: "Politeness", kanji: "礼儀", desc: "Respect others with courtesy" },
    { title: "Courage", kanji: "勇気", desc: "Do what is just" },
    { title: "Sincerity", kanji: "誠", desc: "Express yourself without hiding" },
    { title: "Honor", kanji: "名誉", desc: "Keep your word" },
    { title: "Modesty", kanji: "謙虚", desc: "Talk about yourself without vanity" },
    { title: "Self-Control", kanji: "克己", desc: "Control emotions" },
    { title: "Friendship", kanji: "友情", desc: "Cultivate the purest feeling" },
  ],
  ideologies: [
    "To know a little more each day and use it every day for good, that is the way of the true judoka.",
    "He who fears losing has already been defeated.",
    "Only those who seek it with constancy, wisdom and humility approach perfection.",
    "When you verify with sadness that you know nothing, you will have made your first progress.",
    "Never be proud of having won. The only victory that lasts is over one's own ignorance.",
    "The judoka does not perfect himself to fight, he fights to perfect himself.",
    "Knowing oneself is mastering oneself, mastering oneself is triumphing.",
    "Practicing Judo is educating the mind to think with speed and the body to obey with accuracy.",
  ],
  practiceForms: [
    { kanji: '乱取り', romaji: 'Randori', title: 'Free Practice', desc: 'Method to learn attack and defense techniques moving freely, without causing damage to the other.' },
    { kanji: '形', romaji: 'Kata', title: 'Forms', desc: 'Method of applying pre-established techniques. Ex: Nage-no-Kata (Forms of Throwing)' },
    { kanji: '講義', romaji: 'Kogi', title: 'Lecture', desc: 'Oral classes on Judo techniques, spiritual aspects and social life.' },
    { kanji: '問答', romaji: 'Mondo', title: 'Questions and Answers', desc: 'Learning through mutual questions and answers between teacher and student.' },
    { kanji: '試合', romaji: 'Shiai', title: 'Competition', desc: 'Test of technical development in combat situations with scoring.' },
  ],
  benefits: {
    physical: [
      "Increased concentration and fast thinking",
      "Spatial awareness and body mastery",
      "Balance, flexibility and strength",
      "Joint mobility",
      "Fat elimination and conditioning improvement",
    ],
    moral: [
      "Emotional control and patience",
      "Knowing how to win and lose",
      "Sense of responsibility and discipline",
      "Respect for others and character building",
      "Reduction of shyness and improvement of self-esteem",
      "Respect for hierarchy",
    ]
  }
};

export const extraGokyoDataEn = {
  habukaretaWaza: {
    name: "Habukareta-Waza",
    description: "Excluded Techniques",
    info: "Set of techniques originally included in the first Go-Kyo (Kyu-Gokyō) but removed in 1920 after a revision.",
    techniques: [
      { num: 1, name: "Obi-Otoshi", kanji: "帯落", translation: "Belt drop", group: "Te-waza", originalGroup: "3rd Group" },
      { num: 2, name: "Hikikomi-Gaeshi", kanji: "引込返", translation: "Pulling reversal", group: "Ma-sutemi", originalGroup: "4th Group" },
      { num: 3, name: "O-Soto-Otoshi", kanji: "大外落", translation: "Large outer drop", group: "Ashi-waza", originalGroup: "4th Group" },
      { num: 4, name: "Daki-Wakare", kanji: "抱分", translation: "Hugging separation", group: "Yoko-sutemi", originalGroup: "4th Group" },
      { num: 5, name: "Tawara-Gaeshi", kanji: "俵返", translation: "Rice bag reversal", group: "Ma-sutemi", originalGroup: "4th Group" },
      { num: 6, name: "Seoi-Otoshi", kanji: "背負落", translation: "Back drop", group: "Te-waza", originalGroup: "5th Group" },
      { num: 7, name: "Uchi-Makikomi", kanji: "内巻込", translation: "Inner winding", group: "Yoko-sutemi", originalGroup: "5th Group" },
      { num: 8, name: "Yama-Arashi", kanji: "山嵐", translation: "Mountain storm", group: "Te-waza", originalGroup: "5th Group" },
    ]
  },
  shinmeishoNoWaza: {
    name: "Shinmeisho-no-Waza",
    description: "Newly Named Techniques",
    info: "Techniques added to the official Kodokan catalog after the 1920 revision, with new names or reclassifications.",
    techniques: [
      { num: 1, name: "Morote-Gari", kanji: "双手刈", translation: "Two-hand reap", group: "Te-waza" },
      { num: 2, name: "Kuchiki-Taoshi", kanji: "朽木倒", translation: "Dead tree drop", group: "Te-waza" },
      { num: 3, name: "Kibisu-Gaeshi", kanji: "踵返", translation: "Heel reversal", group: "Te-waza" },
      { num: 4, name: "Uchi-Mata-Sukashi", kanji: "内股透", translation: "Uchi-mata slip", group: "Ashi-waza" },
      { num: 5, name: "Ko-Uchi-Gaeshi", kanji: "小内返", translation: "Ko-uchi counter", group: "Ashi-waza" },
      { num: 6, name: "Obi-Tori-Gaeshi", kanji: "帯取返", translation: "Belt grab reversal", group: "Te-waza" },
      { num: 7, name: "Sode-Tsurikomi-Goshi", kanji: "袖釣込腰", translation: "Sleeve lifting hip", group: "Koshi-waza" },
      { num: 8, name: "Ippon-Seoi-Nage", kanji: "一本背負投", translation: "One-arm shoulder throw", group: "Te-waza" },
      { num: 9, name: "Tsubame-Gaeshi", kanji: "燕返", translation: "Swallow counter", group: "Ashi-waza" },
      { num: 10, name: "O-Soto-Gaeshi", kanji: "大外返", translation: "O-soto counter", group: "Ashi-waza" },
      { num: 11, name: "O-Uchi-Gaeshi", kanji: "大内返", translation: "O-uchi counter", group: "Ashi-waza" },
      { num: 12, name: "Hane-Goshi-Gaeshi", kanji: "跳腰返", translation: "Hane-goshi counter", group: "Ashi-waza" },
      { num: 13, name: "Harai-Goshi-Gaeshi", kanji: "払腰返", translation: "Harai-goshi counter", group: "Ashi-waza" },
      { num: 14, name: "Uchi-Mata-Gaeshi", kanji: "内股返", translation: "Uchi-mata counter", group: "Ashi-waza" },
      { num: 15, name: "Kani-Basami", kanji: "蟹挟", translation: "Crab scissors", group: "Yoko-sutemi" },
      { num: 16, name: "Kawazu-Gake", kanji: "河津掛", translation: "Kawazu hook", group: "Yoko-sutemi" },
      { num: 17, name: "O-Soto-Makikomi", kanji: "大外巻込", translation: "Large outer winding", group: "Yoko-sutemi" },
      { num: 18, name: "Uchi-Mata-Makikomi", kanji: "内股巻込", translation: "Uchi-mata winding", group: "Yoko-sutemi" },
      { num: 19, name: "Harai-Makikomi", kanji: "払巻込", translation: "Sweeping winding", group: "Yoko-sutemi" },
      { num: 20, name: "Ko-Uchi-Makikomi", kanji: "小内巻込", translation: "Small inner winding", group: "Yoko-sutemi" },
      { num: 21, name: "Uki-Gatame", kanji: "浮固", translation: "Floating hold", group: "Osaekomi-waza" },
      { num: 22, name: "Ura-Gatame", kanji: "裏固", translation: "Rear hold", group: "Osaekomi-waza" },
    ]
  }
};