
let transactions = [];

window.onload = function () {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
        transactions = storedTransactions;
        displayTransactions();
        updateSummary();
    }
}

function addTransaction() {
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (date && description && type && category && !isNaN(amount)) {
        const transaction = { date, description, type, category, amount };
        transactions.push(transaction);

        updateLocalStorage();
        updateSummary();
        displayTransactions();
    } else {
        alert('Please enter valid information for the transaction.');
    }
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function updateSummary() {
    const totalIncome = transactions
        .filter(transaction => transaction.type === 'income')
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const totalExpenses = transactions
        .filter(transaction => transaction.type === 'expense')
        .reduce((sum, transaction) => sum + transaction.amount, 0);

    const netIncome = totalIncome - totalExpenses;

    document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('netIncome').textContent = netIncome.toFixed(2);
}

function displayTransactions() {
    const transactionsList = document.getElementById('transactionsList');

    transactionsList.innerHTML = '';

    const list = document.createElement('ul');

    transactions.forEach(transaction => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Date:</strong> ${transaction.date}<br>
            <strong>Description:</strong> ${transaction.description}<br>
            <strong>Type:</strong> ${transaction.type}<br>
            <strong>Category:</strong> ${transaction.category}<br>
            <strong>Amount:</strong> ${transaction.amount.toFixed(2)}<br>
            <button onclick="deleteTransaction(${transactions.indexOf(transaction)})">Delete</button>
        `;
        list.appendChild(listItem);
    });

    transactionsList.appendChild(list);
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateLocalStorage();
    updateSummary();
    displayTransactions();
}

function filterByCategory(category) {
    const filteredTransactions = transactions.filter(transaction => transaction.category === category);
    console.log(filteredTransactions);
}

function exportTransactions() {
    const exportData = JSON.stringify(transactions);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
