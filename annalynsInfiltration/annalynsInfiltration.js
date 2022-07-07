
 function canExecuteFastAttack(knightIsAwake) {
  return knightIsAwake = !knightIsAwake;
}

console.log("Can Execute Fast Attack If Knight Is Awake: ", canExecuteFastAttack(true)); // expected result: false
console.log("Can Execute Fast Attack If Knight Is Not Awake: ", canExecuteFastAttack(false)); // expected result: true

 function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

console.log("Can Spy If Everyone  Is Not Awake: ", canSpy(false, false, false)); // expected result: true
console.log("Can Spy When Only Prsioner  Is  Awake: ", canSpy(false, false, true)); // expected result: true
console.log("Can Spy When Only Archer  Is  Awake: ", canSpy(false, true, false)); // expected result: true
console.log("Can Spy When Only Knight  Is Not  Awake: ", canSpy(false, true, true)); // expected result: true
console.log("Can Spy When Only Knight  Is  Awake: ", canSpy(true, false, false)); // expected result: true
console.log("Can Spy When Only Archer  Is Not  Awake: ", canSpy(true, false, true)); // expected result: true
console.log("Can Spy If Everyone  Is Awake: ", canSpy(true, true, true)); // expected result: true

 function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
}

console.log("Can Signal If Everyone  Is Not Awake: ", canSignalPrisoner(false, false));// expected result: false
console.log("Can Signal When Only Prisoner  Is Awake: ", canSignalPrisoner(false, true)); // expected result: true
console.log("Can Signal When Only Archer  Is Awake: ", canSignalPrisoner(true, false)); // expected result: false
console.log("Can Signal If Everyone  Is Awake: ", canSignalPrisoner(true, true)); // expected result: false

function canFreePrisoner( knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
   return (petDogIsPresent && !archerIsAwake) || !petDogIsPresent && (prisonerIsAwake && !knightIsAwake && !archerIsAwake );
}

console.log("Can Free Prisoner When Everyone Is Not Awake And Pet Dog Is Not Present: ", canFreePrisoner(false, false, false, false)); // expected result: false
console.log("Can Free Prisoner When Everyone Is Not Awake And Pet Dog Is Present: ", canFreePrisoner(false, false, false, true)); // expected result: true
console.log("Can Free Prisoner When Only Prisoner Is Awake And Pet Dog Is Not Present: ", canFreePrisoner(false, false, true, false)); // expected result: true
console.log("Can Free Prisoner When Only Prisoner Is Awake And Pet Dog Is Present: ", canFreePrisoner(false, false, true, true)); // expected result: true
console.log("Can Free Prisoner When Only Archer Is Awake And Pet Dog Is Not Present: ", canFreePrisoner(false, true, false, false)); // expected result: false
console.log("Can Free Prisoner When Only Archer Is Awake And Pet Dog Is Present: ", canFreePrisoner(false, true, false, true)); // expected result: false
console.log("Can Free Prisoner When Only Knight Is Not Awake And Pet Dog Is Not Present: ", canFreePrisoner(false, true, true, false)); // expected result: false
console.log("Can Free Prisoner When Only Knight Is Not Awake And Pet Dog Is Present: ", canFreePrisoner(false, true, true, true)); // expected result: false
console.log("Can Free Prisoner When Only Knight Is Awake And Pet Dog Is Not Present: ", canFreePrisoner(true, false, false, false)); // expected result: false
console.log("Can Free Prisoner When Only Knight Is Awake And Pet Dog Is Present: ", canFreePrisoner(true, false, false, true)); // expected result: true
console.log("Can Free Prisoner When Only Archer Is Not Awake And Pet Dog Is Not Present: ", canFreePrisoner(true, false, true, false)); // expected result: false
console.log("Can Free Prisoner When Only Archer Is Not Awake And Pet Dog Is Present: ", canFreePrisoner(true, false, true, true)); // expected result: true
console.log("Can Free Prisoner When Only Prisoner Is Not Awake And Pet Dog Is Not Present: ", canFreePrisoner(true, true, false, false)); // expected result: false
console.log("Can Free Prisoner When Only Prsioner Is Not Awake And Pet Dog Is Present: ", canFreePrisoner(true, true, false, true)); // expected result: false
console.log("Can Free Prisoner When Everyone Is Awake And Pet Dog Is Not Present: ", canFreePrisoner(true, true, true, false)); // expected result: false
console.log("Can Free Prisoner When Everyone Is Awake And Pet Dog Is Present: ", canFreePrisoner(true, true, true, true)); // expected result: false