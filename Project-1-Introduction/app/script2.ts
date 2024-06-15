// Type inférence

// Any
let firstName;
firstName = true;
firstName = "red";
firstName = 10;

// String
let lastName = "Dupont";
// Number
let age = 20;
// Boolean
let isLogging = true;

// Modification possible avec des valeurs de même type
lastName = "Dura";
age = 25;
isLogging = false;

// Modification impossible car les nouvelles valeurs ne sont pas de même type
lastName = 20;
age = true;
isLogging = "Dura";
