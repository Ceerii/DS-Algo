export const dayRate = (ratePerHour) => (ratePerHour * 8);

export const daysInBudget = (budget, ratePerHour) => (
  Math.floor((budget / (dayRate(ratePerHour))))
);

export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => (

  Math.ceil((dayRate(ratePerHour) *
  (Math.floor(numDays / 22) * 22) *
  (1 - discount)) + (dayRate(ratePerHour) *
  (numDays - (Math.floor(numDays / 22) * 22))))
);
