document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);
    const expenseId = urlParams.get('id');
    const token = localStorage.getItem('token');

    if (!expenseId || !token) {
        alert('Invalid request');
        return;
    }

    try {
        const response = await fetch(`/api/expenses/${expenseId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
 
        if (response.ok) {
            const expense = await response.json();
            document.getElementById('description').value = expense.description;
            document.getElementById('amount').value = expense.amount;
            document.getElementById('date').value = expense.date;
        } else {
            alert('Failed to fetch expense data');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to fetch expense data');
    }

    document.getElementById('edit-expense-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const description = document.getElementById('description').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('date').value;

        try {
            const response = await fetch(`/api/expenses/${expenseId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ description, amount, date }),
            });

            if (response.ok) {
                alert('Expense updated successfully');
                window.location.href = 'expense-history.html';
            } else {
                const errorData = await response.json();
                alert(`Update failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to update expense');
        }
    });
});
