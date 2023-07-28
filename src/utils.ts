export const fromatCookingTime = (time: number): string => {
  if (time <= 60) return `${time} minutes`;

  if (time < 120) return `${Math.floor(time / 60)} hour ${time % 60} minutes`;

  return `${Math.floor(time / 60)} hours ${time % 60} minutes`;
};
