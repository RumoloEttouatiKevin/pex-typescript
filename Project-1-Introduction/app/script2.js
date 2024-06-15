// Type inférence
// Any
var firstName;
firstName = true;
firstName = "red";
firstName = 10;
// String
var lastName = "Dupont";
// Number
var age = 20;
// Boolean
var isLogging = true;
// Modification possible avec des valeurs de même type
lastName = "Dura";
age = 25;
isLogging = false;
// Modification impossible car les nouvelles valeurs ne sont pas de même type
lastName = 20;
age = true;
isLogging = "Dura";
