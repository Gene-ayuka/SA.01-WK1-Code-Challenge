# Speed Detector

Description
This JavaScript program implements a simple speed detector that calculates demerit points for speeding. It prompts the user to input a speed, compares it to a predefined speed limit, and provides feedback based on the speed entered.
Features

Prompts user for speed input
Compares input speed to a set speed limit (70 km/h)
Calculates demerit points for speeds exceeding the limit
Provides different outputs based on the severity of speeding

How it works

The program asks the user to input a speed.
If the speed is less than or equal to the speed limit (70 km/h), it returns "Ok".
For speeds above the limit, it calculates demerit points:

One point is given for every 5 km/h above the speed limit.
If the total points are less than 12, it returns the number of points.
If the total points are 12 or more, it returns "License suspended".

Usage
To use this program:

Copy the code into a JavaScript environment (e.g., a browser console or Node.js).
When prompted, enter a speed value.
The program will output the result based on the entered speed.

Add input validation to ensure only numeric values are accepted
Allow customization of the speed limit
Implement a user interface for easier interaction

Author:Eugene Ayuka
License:MIT 


# Salary Calculator
Description
This JavaScript program calculates an employee's net salary based on their basic salary and benefits. It takes into account various deductions including PAYE (Pay As You Earn tax), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund) contributions.
Features

Calculates gross salary from basic salary and benefits
Computes PAYE based on the current tax brackets
Determines NHIF deductions according to the official NHIF rates
Calculates NSSF contributions
Provides a breakdown of all deductions
Computes the final net salary

How it works

The program prompts the user to input their basic salary and benefits.
It calculates the gross salary by adding the basic salary and benefits.
PAYE is calculated based on the gross salary using the current tax brackets.
NHIF deductions are determined based on the gross salary using the official NHIF rates.
NSSF contributions are calculated as 6% of the gross salary.
The program then subtracts all deductions from the gross salary to determine the net salary.
Finally, it outputs a detailed breakdown of all calculations.

Usage
To use this program:

Run the script in a JavaScript environment (e.g., a browser console or Node.js).
When prompted, enter your basic salary.
When prompted again, enter your benefits.
The program will output the following information:

Gross Salary
PAYE (tax) amount
NHIF deduction
NSSF contribution
Total deductions
Net Salary


Add a user-friendly interface
Implement input validation to ensure only valid numerical inputs are accepted
Allow for customization of tax rates and deduction scales
Include additional deductions or allowances that may be applicable
Provide options for different pay periods (e.g., monthly, bi-weekly, weekly)

Disclaimer
This tool is for informational purposes only and should not be considered as financial advice. Always consult with a qualified financial professional or your employer's HR department for accurate salary calculations.

Author:Eugene Ayuka
License:MIT 

# Student Grade Calculator

 Description

The Student Grade Calculator is a simple JavaScript program that takes a student's marks as input and assigns a grade based on predefined criteria. The program validates the input to ensure that it falls within the acceptable range (0 to 100).


- Prompts the user to enter marks for a student.
- Validates the input to ensure it's within the range of 0 to 100.
- Assigns grades based on the following criteria:
  - A: 80 - 100
  - B: 60 - 79
  - C: 49 - 59
  - D: 40 - 48
  - E: 0 - 39
- Outputs the corresponding grade or an error message for invalid input.
