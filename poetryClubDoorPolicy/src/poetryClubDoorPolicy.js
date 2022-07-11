export const frontDoorResponse = (line) => (
  line.charAt(0)
);

export const frontDoorPassword = (word) => (
  word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase()
);

export const backDoorResponse = (line) => (
  line.trim().charAt(line.trim().length - 1)
);

export const backDoorPassword = (word) => (
  frontDoorPassword(word) + ', please'
);
