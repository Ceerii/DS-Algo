const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
    if(actualMinutesInOven <= EXPECTED_MINUTES_IN_OVEN){
       const difference = EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
       return difference;
    }
}


console.log("Minutes Left In Oven: ", remainingMinutesInOven(30));
console.log("Minutes Left In Oven: ", remainingMinutesInOven(20));
console.log("Minutes Left In Oven: ", remainingMinutesInOven(10));


function preparationTimeInMinutes(numberOfLayers) {
  const multiply = numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
  return multiply;
}

console.log("Preparation Time: ", preparationTimeInMinutes(2));
console.log("Preparation Time: ", preparationTimeInMinutes(5));
console.log("Preparation Time: ", preparationTimeInMinutes(13));


function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
 const preparationTime = preparationTimeInMinutes(numberOfLayers);
 const sum = preparationTime + actualMinutesInOven;
 return sum;
}

console.log("Total Time Spent: ", preparationTimeInMinutes(2, 30));
console.log("Total Time Spent: ", preparationTimeInMinutes(1, 5));
console.log("Total Time Spent: ", preparationTimeInMinutes(15, 15));
