document.addEventListener('DOMContentLoaded', async function () {
    const token = localStorage.getItem('token');
    
    if (!token) {
        window.location.href = '/frontend/pages/login.html';
        return;
    }

    try {
        const response = await fetch('/api/transactions', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const transactions = await response.json();
            displayTransactions(transactions);
        } else {
            alert('Failed to load transactions');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load transactions');
    }
});

function displayTransactions(transactions) {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.description} - $${transaction.amount}`;
        transactionList.appendChild(li);
    });
}
