function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride<= 400) {
    const freeSample = "This one is on me!";
    return freeSample;
  }
  else if (ride >2000 && ride<2500) {
    const payMe = "I will gladly take your thirty bucks.";
    return payMe;
  }
  else { 
    const nope = "No can do.";
    return nope;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city == 'NYC') { 
    const letsGo = 'Ok, sounds good.';
    return letsGo;
  }
  else {
    const nah = 'No go.';
    return nah;
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if(tip =='generous') { 
    const yay = "Thank you so much.";
    return yay;
  }
  else if (tip == 'not as generous') {
    const ehhh = "Thank you.";
    return ehhh;
  }
  else {
    const goodBye = "Bye.";
    return goodBye;
  }
}