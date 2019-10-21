// Write your code in this file!
function scuberGreetingForFeet(ride) {
  //  ride = 400
    if (ride <= 400 ) {
        return "This one is on me!";
    }
    
    if (ride > 2000 && ride < 2500) {
        return "I will gladly take your thirty bucks.";
    }
    
    else if(ride > 2500)
    {
        return 'No can do.'
     }

}

function ternaryCheckCity(city) {
      return city == 'NYC' ? 'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(tips) {
    switch (tips) {
        case 'generous':
        return 'Thank you so much.'
            
            break;
        case 'not as generous':
        return 'Thank you.'
            
            break;
    
        default:
        return 'Bye.'
            break;
    }
}
