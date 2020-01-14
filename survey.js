const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

const questionnaire = {
  name: 'What\'s your name? Nicknames are also acceptable :)',

  activity: 'What\'s an activity you like doing?',
  music: 'What do you listen to while doing that?',
  mealtype: 'Which meal is your favourite (eg: dinner, brunch, etc.)',
  mealcontents: 'What\'s your favourite thing to eat for that meal?',
  sport: 'Which sport is your absolute favourite?',
  superpower: 'What is your superpower? In a few words, tell us what you are amazing at!'

};

const profileGen = function (index) {
  const pointer = ['name', 'activity', 'music', 'mealtype', 'mealcontents', 'sport', 'superpower'];
  if (index >= pointer.length) {
    console.log('thanks very much! Here is your profile, hot stuff:');
    console.log(profile);
    return rl.close();
  }
  rl.question(questionnaire[pointer[index]] + ": ", (answer) => {
    console.log(`your answer was: ${answer}. thank you!`);
    profile[pointer[index]] = answer;
    return profileGen(index + 1);
  });
};

profileGen(0);