function isClean(review) {
  let clean = true;
  if (review.includes("dang")) {
     clean = false; 
  }
  if (review.includes("shoot")) {
    clean = false;
  }
  if (review.includes("heck")) {
    clean = false;
  }
  return clean;   // ✅ return the boolean, not review
}

function getMonthlyPrice(tier) {
  switch (tier) {
    case "basic":
      return 10000;
    case "premium":
      return 15000;
    case "enterprise":
      return 50000;
    default:
      return 0;
  }
}

// don't touch below this line

module.exports = { isClean, getMonthlyPrice };
