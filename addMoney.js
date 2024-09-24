document.getElementById('btn-add-money')
.addEventListener('click', function(event) {
    event.preventDefault();

    const addMoney = document.getElementById('input-add-money').value;

    const addMoneyNumber = parseFloat(addMoney);
    if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
        alert("Please enter a valid amount to add.");
        return;
    }
    const balance = document.getElementById('account-balance').innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber + addMoneyNumber;
    document.getElementById('account-balance').innerText = newBalance;
    document.getElementById('input-add-money').value = '';
});
