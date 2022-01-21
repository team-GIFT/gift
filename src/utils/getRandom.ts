export const getRandom = (n = 1) => {
  return Math.random() * n;
};

export const getRandomCount = (min = 0, max = 10) => {
  return Math.floor(getRandom(max - min) + min);
};
