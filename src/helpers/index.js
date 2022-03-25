export function getYearDifference(year){
  return new Date().getFullYear() - year
}

export function computeMake(make){
  let increment

  switch (make) {
    case "1":
      increment = 1.30
      break;
    case "2":
      increment = 1.15
      break;
    case "3":
      increment = 1.05
      break;
  
    default:
      break;
  }

  return increment
}

export function computePlan(plan) {
  return (plan == "1") ? 1.20 : 1.50
}

export function currencyFormat(quantity){
  return quantity.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}