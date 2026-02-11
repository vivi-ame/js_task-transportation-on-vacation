/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayPrice = 40;
  const finalCost = oneDayPrice * days;

  if (days >= 7) {
    return finalCost - 50;
  } else if (days >= 3) {
    return finalCost - 20;
  }

  return finalCost;
}

module.exports = calculateRentalCost;
