
it('should calculate the monthly rate correctly', function () {
  const values = {amount : 25000, years : 6, rate : 15};
  expect(calculateMonthlyPayment(values)).toEqual('528.63')
});


it('should return a result with 2 decimal places', function() {
  const values = {amount : 15000, years : 2, rate : 10};
  expect(calculateMonthlyPayment(values)).toEqual('692.17') 
});

it('should be able to handle interest rates over 100', function() {
  const values = {amount : 40000, years : 5, rate : 150};
  expect(calculateMonthlyPayment(values)).toEqual('5004.27');
});

// this test should fail
it('should not accept negative values', function() {
  const values = {amount : -10000, years : 3, rate : 13};
  expect(calculateMonthlyPayment(values)).not.toContain('-');
});

// this test should fail
it('should not accept non-numeric characters', function() {
  const values = {amount : 'abc', years : 4, rate : 12};
  expect(calculateMonthlyPayment(values)).not.toEqual('NaN');
});
