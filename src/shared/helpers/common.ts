export const generateRandomValue = (
  min: number,
  max: number,
  numAfterDigit = 0
) => +(Math.random() * (max - min) + min).toFixed(numAfterDigit);

export const getRandomItems = <T>(collection: T[]): T[] => {
  const startIndex = generateRandomValue(0, collection.length - 1);
  const endIndex = generateRandomValue(startIndex, collection.length - 1);
  return collection.slice(startIndex, endIndex);
};

export const getRandomItem = <T>(collection: T[]): T =>
  collection[generateRandomValue(0, collection.length - 1)];
