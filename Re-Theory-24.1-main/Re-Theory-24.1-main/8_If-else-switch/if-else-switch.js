if (condition1) {
  // ფრჩხილებში დაწერილი კოდი თუ მართალია შიგნით დაწერილი კოდი შესრულდეს
  // do something
  console.log('You are a child.');
} else if (condition2) {
  // do something else
  console.log('You are a teenager.');
} else if (condition3) {
  console.log('You are an adult.');
  // do another thing
} else {
  // თუ ზემოთ დაწერილი პირობებიდან არცერთი არ არის მართალი შესრულდება else რომელსაც არ ეწერება პირობა
  console.log('You are a senior citizen.');
  // do something else
}

switch (true) {
  case condition1:
    // do something
    break;
  case condition2:
    // do something else
    break;
  case condition3:
    // do another thing
    break;
}

const age = 25;

// Here we're using switch(true) to check multiple conditions based on the age
switch (true) {
  case age < 13: // თუ ფრჩხილებში დაწერილი კოდი ემთხვევა case-ის გვერდზე დაწერილ კოდს მაშინ შესრულდება მასში დაწერილი კოდი. ანუ თუ true ტოლია age < 13, ანუ თუ age < 13 იქნება მართალი მაშინ შესრულდება მასში დაწერილი კოდი.     console.log('You are a child.');
    console.log('You are a child.');
    break;
  case age >= 13 && age < 20:
    console.log('You are a teenager.');
    break;
  case age >= 20 && age < 65:
    console.log('You are an adult.');
    break;
  default:
    console.log('You are a senior citizen.');
}
