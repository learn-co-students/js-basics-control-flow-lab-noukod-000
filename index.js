// Write your code in this file!

function scuberGreetingForFeet(ride) {

    let result;
    if (ride <= 400) {
       result = 'This one is on me!';
       }
       else if (ride > 2500) {
         result = 'No can do.';
       }
       else if (ride > 2000) {
         result = 'I will gladly take your thirty bucks.';
       }

     return result;
    }

    function ternaryCheckCity(city) {
      let  result = city === "NYC" ? 'Ok, sounds good.' : 'No go.';
      return result;
    }
    function switchOnCharmFromTip(tip) {
      let result;
      if (tip === 'generous') {
          result = "Thank you so much.";
        }
      else if (tip === 'not as generous') {
          result = "Thank you.";
         }
      else {
         result = "Bye.";
       }
      return result;
    }
