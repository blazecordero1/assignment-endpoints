# Assignment API

## Description
API endpoints for mathematical computations: Fibonacci sequence generation, prime number checking, and factorial calculation.

### Purpose
API endpoints that perform basic mathematical operations.

### Features
- Generate the first `n` numbers in the Fibonacci sequence.
- Check if a given number is a prime number.
- Compute the factorial of a given number.

### Tools/Technologies Used
- Node.js
- Express.js
- JavaScript

---

## API Documentation

### Assignment 1: Fibonacci Sequence Generator
Create an endpoint that returns the first `n` numbers in the Fibonacci sequence.

#### Instructions:
1. Create an `AssignmentController` with a GET endpoint: `/assignments/fibonacci/:n`.
2. Implement a method to calculate the Fibonacci sequence up to `n` terms.
3. Return the sequence as an array in the response.

#### Example Request:
**Method:** GET  
**Path URL:** `/assignments/fibonacci/:n` (e.g., `http://localhost:3000/assignments/fibonacci/5`)

#### Example Response:
```json
{ 
  "sequence": [0, 1, 1, 2, 3] 
}
```

---

### Assignment 2: Prime Number Checker
Create an endpoint that checks if a given number is prime.

#### Instructions:
1. Create an `AssignmentController` with a GET endpoint: `/assignments/prime/:number`.
2. Implement a method that checks if the provided number is prime.
3. Return `true` or `false` based on the primality check.

#### Example Request:
**Method:** GET  
**Path URL:** `/assignments/prime/:number` (e.g., `http://localhost:3000/assignments/prime/7`)

#### Example Response:
```json
{
  "isPrime": true
}
```

---

### Assignment 3: Factorial Calculator
Create an endpoint that calculates the factorial of a given number.

#### Instructions:
1. Create an `AssignmentController` with a GET endpoint: `/assignments/factorial/:number`.
2. Implement a method that calculates the factorial of the provided number.
3. Return the result as part of the response.

#### Example Request:
**Method:** GET  
**Path URL:** `/assignments/factorial/:number` (e.g., `http://localhost:3000/assignments/factorial/5`)

#### Example Response:
```json
{
  "factorial": 120
}
```

---


Overall Example Requests:
    Fibonacci Sequence: GET http://localhost:3000/assignments/fibonacci/5
    Prime Number Check: GET http://localhost:3000/assignments/prime/7
    Factorial Calculation: GET http://localhost:3000/assignments/factorial/5

# assignments
# assignments
# assignment-endpoints
