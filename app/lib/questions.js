export const questions = [
  // SECTION I
  {
    sectionId: 'chrono_landscape',
    title: 'Section I: The Chronological Landscape',
    subsections: [
      {
        subsectionId: 'origins',
        title: '1.1 Origins and Early Years',
        questions: [
          { id: 'birth_story', label: "Let's start at the very beginning. Where and when were you born? What stories have your parents told you about the day you were born?", type: 'textarea', placeholder: 'e.g., I was born in St. Mary\'s Hospital on a rainy Tuesday...' },
          { id: 'ancestors', label: 'Tell me about your ancestors. Where did they come from, and what do you know of their stories?', type: 'textarea', placeholder: 'e.g., My paternal grandparents were from Ireland...' },
          { id: 'childhood_home', label: 'Describe the house you grew up in. What did your bedroom look like? What was the feeling of that home?', type: 'textarea', placeholder: 'e.g., It was a small brick house with a squeaky front door...' },
          { id: 'neighborhood', label: 'Paint a picture for me of the neighborhood you grew up in. What were the sights, sounds, and smells?', type: 'textarea', placeholder: 'e.g., The smell of freshly cut grass, the sound of ice cream trucks...' }
        ]
      },
      {
        subsectionId: 'formative_world',
        title: '1.2 The Formative World',
        questions: [
          { id: 'school_days', label: 'Tell me about your school days. What kind of student were you? Which subjects captured your imagination, and which did you struggle with?', type: 'textarea', placeholder: 'e.g., I was quite studious and loved history...' },
          { id: 'influential_teacher', label: 'Who was your most influential teacher, and what made them so memorable?', type: 'textarea', placeholder: 'e.g., Mrs. Davison in the 6th grade, she taught me to love reading...' },
          { id: 'childhood_friends', label: 'Who were your closest friends as a child? What adventures did you have together?', type: 'textarea', placeholder: 'e.g., My best friend was named Sam. We built a treehouse...' },
          { id: 'hobbies', label: 'What did you do for fun? Describe the games you played, the books you read, or the hobbies that you poured your time into.', type: 'textarea', placeholder: 'e.g., I was obsessed with building model airplanes...' }
        ]
      },
      {
        subsectionId: 'professional_arc',
        title: '1.3 The Professional Arc',
        questions: [
          { id: 'ambitions', label: 'What did you want to be when you grew up, and how does that compare to the path you actually took?', type: 'textarea', placeholder: 'e.g., I dreamed of being an astronaut, but ended up in finance...' },
          { id: 'first_job', label: 'Describe your first job. What did you learn there, not just about the work, but about yourself?', type: 'textarea', placeholder: 'e.g., My first job was at a local grocery store. It taught me patience...' },
          { id: 'career_trajectory', label: 'Walk me through the trajectory of your career. What were the key decisions and transitions that defined your path?', type: 'textarea', placeholder: 'e.g., I started in the mailroom and worked my way up...' },
          { id: 'mentors', label: 'Who were your most important mentors? What crucial lessons did they teach you?', type: 'textarea', placeholder: 'e.g., My first boss, Sarah, taught me the importance of integrity...' },
          { id: 'proud_accomplishment_pro', label: 'Describe a professional accomplishment that you are particularly proud of. What did it take to achieve it?', type: 'textarea', placeholder: 'e.g., Leading the team that launched our flagship product...' }
        ]
      },
      {
        subsectionId: 'building_life',
        title: '1.4 Building a Life',
        questions: [
          { id: 'meet_partner', label: 'How did you meet your spouse/partner? Tell me the story of your courtship.', type: 'textarea', placeholder: 'e.g., We met in college, in a literature class...' },
          { id: 'wedding_day', label: 'Describe your wedding day. What is the most vivid memory you have from that day?', type: 'textarea', placeholder: 'e.g., I remember the look on their face when...' },
          { id: 'parenthood_entry', label: 'When did you become a parent? What was the experience of your first child being born?', type: 'textarea', placeholder: 'e.g., The world seemed to stop when I first held my daughter...' },
          { id: 'adult_homes', label: "Tell me about the different homes you've lived in as an adult. Which one felt most like 'home' and why?", type: 'textarea', placeholder: 'e.g., The little apartment on Elm Street, because it was all ours...' }
        ]
      }
    ]
  },
  // SECTION II
  {
    sectionId: 'social_tapestry',
    title: 'Section II: The Social Tapestry',
    subsections: [
      {
        subsectionId: 'family_origin',
        title: '2.1 The Family of Origin',
        questions: [
            { id: 'mother_personality', label: "Describe your mother's personality. What was your relationship with her like growing up? And as an adult?", type: 'textarea', placeholder: 'e.g., My mother was the heart of our family, very warm and caring...' },
            { id: 'father_personality', label: "Describe your father's personality. In what ways are you similar to him, and in what ways are you different?", type: 'textarea', placeholder: 'e.g., My father was a quiet, hardworking man. I inherited his work ethic...' },
            { id: 'emotional_climate', label: 'What was the emotional climate of your home? How were affection and anger expressed?', type: 'textarea', placeholder: 'e.g., It was a reserved household, affection was shown through actions more than words...' },
            { id: 'sibling_relationships', label: 'Tell me about your relationship with each of your siblings. What roles did you each play in the family?', type: 'textarea', placeholder: 'e.g., As the oldest, I was the responsible one...' },
            { id: 'grandparent_values', label: 'What traditions or values were passed down from your grandparents? What stories do you remember them telling?', type: 'textarea', placeholder: 'e.g., My grandmother taught me how to bake...' }
        ]
      },
      {
        subsectionId: 'family_creation',
        title: '2.2 The Family of Creation',
        questions: [
            { id: 'relationship_longevity', label: 'Beyond the story of how you met, what has been the secret to the longevity of your relationship with your partner?', type: 'textarea', placeholder: 'e.g., A shared sense of humor and endless patience...' },
            { id: 'partnership_joy_challenge', label: "What has been the greatest joy of your partnership? What has been the greatest challenge you've overcome together?", type: 'textarea', placeholder: 'e.g., The greatest joy has been watching our children grow. The biggest challenge was...' },
            { id: 'parenting_change', label: 'How did becoming a parent change you as a person?', type: 'textarea', placeholder: 'e.g., It taught me a level of selflessness I never knew I had...' },
            { id: 'children_relationship_now', label: 'Describe your relationship with each of your children now. What do you hope they learned from you?', type: 'textarea', placeholder: 'e.g., I hope they learned the value of kindness...' },
            { id: 'parenting_proud_regret', label: 'As a parent, what was your proudest moment? What was a moment you wish you could do over?', type: 'textarea', placeholder: 'e.g., My proudest moment was watching them graduate...' }
        ]
      },
      {
        subsectionId: 'friendships_mentorships',
        title: '2.3 The Constellation of Friendships and Mentorships',
        questions: [
            { id: 'best_friend', label: 'Who has been your best friend in life? Tell me about them and what makes that friendship so significant.', type: 'textarea', placeholder: 'e.g., My best friend since childhood is...' },
            { id: 'friendships_over_decades', label: 'How have your friendships changed over the different decades of your life?', type: 'textarea', placeholder: 'e.g., In my 20s, friendship was about adventure. Now, it\'s about support...' },
            { id: 'life_wisdom_guidance', label: 'Aside from professional mentors, who have you looked to for wisdom and guidance in your life?', type: 'textarea', placeholder: 'e.g., My aunt has always been a source of great advice...' },
            { id: 'difficult_relationship_lesson', label: 'Think of a person with whom you had a difficult relationship or rivalry. What did that relationship teach you?', type: 'textarea', placeholder: 'e.g., It taught me about my own boundaries...' }
        ]
      },
      {
        subsectionId: 'community_identity',
        title: '2.4 Community, Belonging, and Social Identity',
        questions: [
            { id: 'community_belonging', label: 'Have you ever felt part of a community that was truly important to you? Describe that group and your place within it.', type: 'textarea', placeholder: 'e.g., My local gardening club has been a wonderful community...' },
            { id: 'historical_events_impact', label: 'How have major historical events (e.g., wars, social movements, economic crises) shaped your sense of identity and your view of the world?', type: 'textarea', placeholder: 'e.g., Living through the fall of the Berlin Wall changed my perspective on...' },
            { id: 'cultural_background_impact', label: 'In what ways has your cultural, ethnic, or religious background been a source of strength or a source of conflict in your life?', type: 'textarea', placeholder: 'e.g., My heritage has always been a great source of pride...' }
        ]
      }
    ]
  },
  // SECTION III
  {
    sectionId: 'inner_world',
    title: 'Section III: The Inner World',
    subsections: [
      {
        subsectionId: 'defining_moments',
        title: '3.1 Defining Moments',
        questions: [
            { id: 'life_high_point', label: 'Looking back over the entire arc of your life, what would you describe as its absolute high point? Describe that scene for me in detail.', type: 'textarea', placeholder: 'e.g., Standing on the mountaintop after a long hike, watching the sunset...' },
            { id: 'life_low_point', label: 'Conversely, what was the lowest point, the most challenging year of your life? What was happening, and how did you get through it?', type: 'textarea', placeholder: 'e.g., The year I lost my job was incredibly difficult, but I learned I was resilient...' },
            { id: 'life_turning_point', label: 'Can you identify a specific turning point—a moment after which nothing was ever the same? What was the decision or realization that changed your path?', type: 'textarea', placeholder: 'e.g., The decision to move to a new city changed everything...' },
            { id: 'first_vivid_memory', label: 'What is your first, most vivid memory?', type: 'textarea', placeholder: 'e.g., I remember the feeling of my father lifting me onto his shoulders...' }
        ]
      },
      {
        subsectionId: 'navigating_adversity',
        title: '3.2 Navigating Adversity',
        questions: [
            { id: 'significant_failure', label: 'Tell me about a time you failed at something significant. How did you define it as a failure, and what did you do in the aftermath?', type: 'textarea', placeholder: 'e.g., My first business failed, but it taught me invaluable lessons...' },
            { id: 'greatest_challenge', label: 'Describe the greatest single challenge you\'ve ever had to face. What resources—internal or external—did you draw upon to meet it?', type: 'textarea', placeholder: 'e.g., Overcoming a serious illness taught me about my own strength...' },
            { id: 'handling_stress', label: 'How do you handle stress and pressure? Can you give me an example of a high-pressure situation and how you navigated it?', type: 'textarea', placeholder: 'e.g., I find that taking a walk helps me clear my head...' },
            { id: 'proudest_accomplishment_hardship', label: 'What has been your proudest accomplishment, not because of the outcome, but because of the difficulty you had to overcome?', type: 'textarea', placeholder: 'e.g., Finishing the marathon, not because of the time, but because I trained for a year...' }
        ]
      },
      {
        subsectionId: 'emotional_self',
        title: '3.3 The Emotional Self',
        questions: [
            { id: 'deepest_joy', label: 'What brings you the deepest sense of joy?', type: 'textarea', placeholder: 'e.g., Spending time with my family, no question...' },
            { id: 'greatest_fear', label: 'What are you most afraid of in life? Has that fear changed over time?', type: 'textarea', placeholder: 'e.g., I used to fear failure, but now I fear not trying...' },
            { id: 'experience_anger', label: 'How do you experience and express anger? Has your relationship with anger evolved?', type: 'textarea', placeholder: 'e.g., I\'ve learned to express it constructively instead of letting it build up...' },
            { id: 'first_love_lesson', label: 'Tell me about your first experience of being in love. What did that teach you about love itself?', type: 'textarea', placeholder: 'e.g., It taught me that love requires vulnerability...' },
            { id: 'most_alive', label: 'When in your life have you felt most alive? What was happening in those moments?', type: 'textarea', placeholder: 'e.g., Traveling to a country where I didn\'t speak the language...' }
        ]
      },
      {
        subsectionId: 'evolving_self_concept',
        title: '3.4 The Evolving Self-Concept',
        questions: [
            { id: 'teenager_vs_today', label: 'If you had to describe yourself as a teenager in three words, what would they be? What three words would you use today?', type: 'textarea', placeholder: 'e.g., Teenager: awkward, idealistic, energetic. Today: calm, thoughtful, grateful.' },
            { id: 'false_self_belief', label: 'What is something you believed to be true about yourself for a long time, only to discover it wasn\'t?', type: 'textarea', placeholder: 'e.g., I thought I was an introvert, but I discovered I love connecting with people...' },
            { id: 'transformative_growth', label: 'What has been the most transformative period of personal growth in your life? What prompted it?', type: 'textarea', placeholder: 'e.g., The years after college, when I had to learn to be independent...' },
            { id: 'public_vs_private_self', label: 'How would you describe the difference between the person you are in public and the person you are when you\'re alone?', type: 'textarea', placeholder: 'e.g., In public I\'m more reserved, but alone I\'m quite silly...' },
            { id: 'most_important_lesson_self', label: 'What is the most important lesson you\'ve learned about yourself?', type: 'textarea', placeholder: 'e.g., That I am more resilient than I give myself credit for...' }
        ]
      }
    ]
  },
  // SECTION IV
  {
    sectionId: 'moral_compass',
    title: 'Section IV: The Moral Compass',
    subsections: [
      {
        subsectionId: 'core_values',
        title: '4.1 Core Values and Guiding Principles',
        questions: [
            { id: 'core_values_origin', label: 'What are the core values that have guided your life? Where did these values come from?', type: 'textarea', placeholder: 'e.g., Honesty, compassion, and hard work. I learned them from my parents...' },
            { id: 'tested_values', label: 'Can you describe a time when you had to make a difficult decision that truly tested your values?', type: 'textarea', placeholder: 'e.g., There was a time at work when I had to choose between...' },
            { id: 'time_money_values', label: 'When you look at how you spend your time and your money, what does that say about what is most important to you?', type: 'textarea', placeholder: 'e.g., It shows that my family and my health are my priorities...' },
            { id: 'success_definition', label: 'What does the word \'success\' mean to you, personally? And how has that definition changed over your lifetime?', type: 'textarea', placeholder: 'e.g., It used to mean career achievements, now it means having strong relationships...' }
        ]
      },
      {
        subsectionId: 'spiritual_journey',
        title: '4.2 Spiritual, Religious, or Philosophical Journeys',
        questions: [
            { id: 'spiritual_life', label: 'Have you had a spiritual or religious life? Tell me about that journey.', type: 'textarea', placeholder: 'e.g., I was raised in a religious household, but my beliefs have evolved...' },
            { id: 'personal_philosophy', label: 'Beyond any formal religion, what is your personal philosophy of life? What do you believe our purpose is here?', type: 'textarea', placeholder: 'e.g., To leave the world a little better than I found it...' },
            { id: 'beliefs_death_evolution', label: 'How have your beliefs about life and death evolved over the years?', type: 'textarea', placeholder: 'e.g., I\'ve become more comfortable with the mystery of it all...' }
        ]
      },
      {
        subsectionId: 'political_social_consciousness',
        title: '4.3 Political and Social Consciousness',
        questions: [
          { id: 'form_political_beliefs', label: 'How did you form your political beliefs? Have they remained consistent or have they changed significantly over time?', type: 'textarea', placeholder: 'e.g., My beliefs were shaped by my upbringing, but have been challenged...' },
          { id: 'social_causes_passion', label: 'Are there any social causes or issues that you feel passionately about? How has this passion shown up in your life?', type: 'textarea', placeholder: 'e.g., I am very passionate about animal welfare...' },
          { id: 'stand_up_for_beliefs', label: 'Was there a time when you felt compelled to stand up for your beliefs, even when it was difficult or unpopular? Tell me about that.', type: 'textarea', placeholder: 'e.g., I once had to challenge a decision at work that I felt was unethical...' }
        ]
      },
      {
        subsectionId: 'moral_reckoning',
        title: '4.4 Moments of Moral Reckoning',
        questions: [
          { id: 'ethical_dilemma', label: 'Can you describe a situation where you faced a significant ethical dilemma, where the right thing to do wasn\'t clear?', type: 'textarea', placeholder: 'e.g., I had to balance a friend\'s trust with a professional responsibility...' },
          { id: 'witness_injustice', label: 'Tell me about a time you witnessed an injustice. What did you do, or what do you wish you had done?', type: 'textarea', placeholder: 'e.g., I wish I had spoken up when I saw someone being treated unfairly...' }
        ]
      }
    ]
  },
  // SECTION V
  {
    sectionId: 'landscape_reflection',
    title: 'Section V: The Landscape of Reflection',
    subsections: [
      {
        subsectionId: 'roads_not_taken',
        title: '5.1 Roads Not Taken: Exploring Regrets and Alternative Life Paths',
        questions: [
            { id: 'do_differently', label: 'Looking back, is there anything you would do differently in your life? A path not taken you sometimes wonder about?', type: 'textarea', placeholder: 'e.g., I sometimes wonder what would have happened if I\'d pursued art...' },
            { id: 'biggest_regret', label: 'What would you say is your biggest regret? What did that experience teach you?', type: 'textarea', placeholder: 'e.g., Not spending enough time with my grandparents. It taught me to cherish time...' },
            { id: 'advice_to_20_year_old', label: 'If you could give your 20-year-old self one piece of advice, what would it be?', type: 'textarea', placeholder: 'e.g., Don\'t worry so much about what other people think...' },
            { id: 'life_vs_imagination', label: 'How has your life been different than what you imagined it would be?', type: 'textarea', placeholder: 'e.g., It\'s been messier, more challenging, and far more beautiful...' }
        ]
      },
      {
        subsectionId: 'search_for_meaning',
        title: '5.2 The Search for Meaning',
        questions: [
            { id: 'life_purpose', label: 'What do you feel has been the purpose of your life?', type: 'textarea', placeholder: 'e.g., To be a good parent and a kind person...' },
            { id: 'important_lessons', label: 'What are the most important lessons life has taught you so far?', type: 'textarea', placeholder: 'e.g., That kindness costs nothing and that you can\'t control everything...' },
            { id: 'how_to_be_remembered', label: 'When you are gone, what do you hope will be the one or two things people remember most about you?', type: 'textarea', placeholder: 'e.g., That I was a loyal friend and that I made a good cup of tea...' },
            { id: 'most_grateful_for', label: 'What are you most grateful for?', type: 'textarea', placeholder: 'e.g., My health, my family, and the simple fact that I get to experience another day...' }
        ]
      },
      {
        subsectionId: 'legacy',
        title: '5.3 The Sum of a Life: Defining a Legacy',
        questions: [
            { id: 'life_book_title', label: 'If your life were a book, what would its title be?', type: 'textarea', placeholder: 'e.g., "An Unfinished Conversation" or "The Accidental Gardener"...' },
            { id: 'ultimate_legacy', label: 'What do you believe your ultimate legacy will be—the impact you\'ve left on the people and the world around you?', type: 'textarea', placeholder: 'e.g., I hope my legacy is in the kindness my children show to others...' },
            { id: 'final_words', label: 'Is there anything else, anything we haven\'t touched upon, that you feel is essential to understanding your life story?', type: 'textarea', placeholder: 'Feel free to add any final thoughts or stories here...' }
        ]
      }
    ]
  }
];