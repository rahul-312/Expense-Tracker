
# Expense Tracker

Expense Tracker is a web application built with HTML, CSS, and JavaScript to help users manage their finances by tracking income and expenses. Users can input transactions, categorize them, and view a summary of their financial activities.

## Features

- User-friendly web interface.
- Separate sections for income and expenses.
- Input fields for date, description, category, and amount for each transaction.
- Add and delete transactions.
- Categorize transactions (e.g., Food, Transportation, Entertainment).
- Calculate total income, total expenses, and net income.
- Responsive design for various screen sizes.
- Basic input validation.
- Optional local storage for persisting user transactions.
- Bonus features: Filter transactions by category, export transaction data.

## Getting Started
Open ET.html in your web browser.
Usage
Enter transaction details in the input fields.
Click "Add Transaction" to add a new transaction.
View the summary to see total income, total expenses, and net income.
Use the optional features like filtering by category and exporting transactions.

To enable local storage and persist user transactions between sessions, uncomment the relevant code in script.js.

javascript
Copy code
// Uncomment the following line to enable local storage
// window.onload = function () {
//     const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
//     if (storedTransactions) {
//         transactions = storedTransactions;
//         displayTransactions();
//         updateSummary();
//     }
// }
