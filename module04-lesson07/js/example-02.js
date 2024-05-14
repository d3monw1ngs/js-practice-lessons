/* 
Example 2 - Function callback

  - Add methods withdraw(amount, onSuccess, onError) to the account object and deposit(amount, onSuccess, onError), 
  where the first parameter is the amount of the operation, and second and third are callbacks.

  - The withdraw method raises onError if amount is greater than TRANSACTION_LIMIT or this.balance, and 
  onSuccess otherwise. deposit method raises onError if amount is greater than TRANSACTION_LIMIT or less or 
  either zero and onSuccess otherwise.
*/
const TRANSACTION_LIMIT = 1000;
const account = {
  balance: 500,

  withdraw (amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount > this.balance) {
      onError("Withdrawal amount exceeds transaction limit or account balance");
    } else {
      this.balance -= amount;
      onSuccess("Withdrawal successful");
    }
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount <= 0) {
      onError("Deposit amount exceeds transaction limit or is invalid");
    } else {
      this.balance += amount;
      onSuccess("Deposit successful");
    }
  }
};

account.withdraw(200, 
  (message) => { console.log(message); }, 
  (error) => { console.error(error); }
);

account.deposit(1500, 
  (message) => { console.log(message); }, 
  (error) => { console.error(error); }
);