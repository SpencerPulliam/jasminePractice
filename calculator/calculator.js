window.addEventListener('DOMContentLoaded', function() {
  let form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount : + (document.getElementById('loan-amount').value),
    years : + (document.getElementById('loan-years').value),
    rate : + (document.getElementById('loan-rate').value),
  }
}

function setupIntialValues() {
  let values  = {amount : 25000, years : 6, rate : 15};

  let amount = document.getElementById('loan-amount');
  amount.value = values.amount;

  let years = document.getElementById('loan-years');
  years.value = values.years;

  let rate = document.getElementById('loan-rate');
  rate.value = values.rate;

  update();
}

function update() {
  let currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

function calculateMonthlyPayment(values) {

  let monthlyRate = (values.rate / 100) / 12;
  let payments = Math.floor(values.years * 12);

  return ((monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -payments))).toFixed(2);
}

function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = '$' + monthly;
}