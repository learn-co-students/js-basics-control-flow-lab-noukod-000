// Write your code in this file!
function scuberGreetingForFeet(feet){

  let greeting;
  switch(true){
    case (feet <= 400):
      greeting="This one is on me!"
    break;
    case (feet >=  2500):
      greeting="No can do."
    break;
    case (feet > 2000):
      greeting="I will gladly take your thirty bucks."
    break;
  }

  return greeting;

}


function ternaryCheckCity(city){
  return city==="NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip){
  if (tip==="generous"){
    return "Thank you so much."
  }else if(tip==="not as generous"){
    return "Thank you."
  }else{
    return "Bye."
  }
}
