// ----------------------------------------------------
// Exercise 2 – Prime Numbers
// Developer: עידן דרור
// Description:
// This program prints all prime numbers smaller than 237.
// A prime number is divisible only by 1 and itself.
// ----------------------------------------------------

// Loop through all numbers from 2 up to 236 (since 237 is excluded)
for (let num = 2; num < 237; num++) {
  let isPrime = true; // Assume the number is prime until proven otherwise

  // Check divisibility from 2 up to the square root of the number
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false; // If divisible, it's not a prime number
      break; // No need to check further
    }
  }

  // If still prime → print it
  if (isPrime) {
    console.log(num);
  }
}
