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
