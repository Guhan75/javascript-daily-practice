// =========================================
// JavaScript Practice - Day 1
// Topics:
// Variables, Constants, Number, BigInt,
// String, Boolean, null, undefined
// =========================================


// =========================================
// 1. Student Details (Variables)
// =========================================

let studentName;
let studentId;

studentName = "Guhan";
studentId = "001";

console.log("Student Name :", studentName);
console.log("Student ID   :", studentId);


// =========================================
// 2. Swap Two Numbers
// =========================================

let a = 10;
let b = 20;
let temp;

temp = a;
a = b;
b = temp;

console.log("After Swapping");
console.log("a :", a);
console.log("b :", b);


// =========================================
// 3. Total Marks & Average
// =========================================

let tamil = 90;
let english = 80;
let maths = 95;
let science = 87;
let socialScience = 81;

let totalMarks = tamil + english + maths + science + socialScience;
let averageMarks = totalMarks / 5;

console.log("Total Marks :", totalMarks);
console.log("Average     :", averageMarks);


// =========================================
// 4. Area of Circle
// =========================================

const PI = 3.14;

let radius = 9;
let area = PI * radius * radius;

console.log("Area of Circle :", area);


// =========================================
// 5. GST Calculation
// =========================================

const GST = 18;

let price = 769;
let gstAmount = (price * GST) / 100;
let finalPrice = price + gstAmount;

console.log("Price       :", price);
console.log("GST Amount  :", gstAmount);
console.log("Final Price :", finalPrice);


// =========================================
// 6. Celsius to Fahrenheit
// =========================================

let celsius = 76;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log("Temperature in Fahrenheit :", fahrenheit);


// =========================================
// 7. BigInt Addition
// =========================================

let number1 = 100n;
let number2 = 300n;

let total = number1 + number2;

console.log("BigInt Result :", total);


// =========================================
// 8. String Operations
// =========================================

let firstName = "Guhan";
let lastName = "R";

let fullName = firstName + " " + lastName;

console.log("Full Name :", fullName);
console.log("Length    :", fullName.length);
console.log("Slice     :", fullName.slice(0, 5));


// =========================================
// 9. Student Registration System
// =========================================

// String
let name = "Guhan";
let department = "Computer Science and Engineering";
let bloodGroup = "O+";

// Number
let rollNumber = 101;
let age = 22;

// Constant
const collegeName = "ABC Engineering College";

// BigInt
let fees = 250000n;

// Boolean
let isHosteller = true;

// null
let phoneNumber = null;

// undefined
let email;


// Display Student Details

console.log("\n========== Student Registration ==========");

console.log("Student Name :", name);
console.log("Roll Number  :", rollNumber);
console.log("Age          :", age);
console.log("Department   :", department);
console.log("College      :", collegeName);
console.log("Fees         :", fees);
console.log("Hosteller    :", isHosteller);
console.log("Blood Group  :", bloodGroup);
console.log("Phone Number :", phoneNumber);
console.log("Email        :", email);

function showMessage() {
    alert("JavaScript is running!\n\nOpen the Console (F12) to view the output.");
}