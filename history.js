document.getElementById('btn-donate').addEventListener('click', function(event) {
    event.preventDefault();

    const donationAmount = document.getElementById('input-donation').value;
    const donationAmountNumber = parseFloat(donationAmount);

    if (isNaN(donationAmountNumber) || donationAmountNumber <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }

    const currentBalance = parseFloat(document.getElementById('account-balance').innerText);

    if (donationAmountNumber > currentBalance) {
        alert("Insufficient balance.");
        return;
    }

    const newBalance = currentBalance - donationAmountNumber;
    document.getElementById('account-balance').innerText = newBalance;

    const donationName = document.getElementById('donation-name').innerText;

    const now = new Date();
    const formattedDateTime = now.toLocaleString();


    const historyEntry = `
        <li>
            <strong>${donationName}</strong> - 
            ${donationAmountNumber.toFixed(2)} BDT - 
            <em>${formattedDateTime}</em>
        </li>
    `;

    document.getElementById('history-list').innerHTML += historyEntry;
    document.getElementById('input-donation').value = 'num';
});

document.getElementById('btn-add-money').addEventListener('click', function() {
    // Toggle visibility of the history section
    const historySection = document.getElementById('history-section');
    if (historySection.style.display === 'none') {
        historySection.style.display = 'hidden';
    } else {
        historySection.style.display = 'none';
    }
});

