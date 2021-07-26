describe('Payments test (with setup and tear-down)', function() {
    beforeEach(function () {
      billAmtInput.value = 250;
      tipAmtInput.value = 50;
    });
  
    it('should update allPayments with a new payment when submitPaymentInfo() is called', function() {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('250');
      expect(allPayments['payment1'].tipAmt).toEqual('50');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should not accept empty strings as input when submitPaymentInfo is called', function() {
      billAmtInput.value = '';
      
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(0);
    });
  
    it('should update paymentTable when appendPaymentTable() is called', function() {
      let payment = createCurPayment();
      allPayments['payment1'] = payment;
  
      appendPaymentTable(payment);
  
      let paymentTable = document.querySelectorAll('#paymentTable tbody tr td');
  
      expect(paymentTable.length).toEqual(4);
      expect(paymentTable[0].innerText).toEqual('$250');
      expect(paymentTable[1].innerText).toEqual('$50');
      expect(paymentTable[2].innerText).toEqual('%20');
      expect(paymentTable[3].innerText).toEqual('X');
    });
  
    it('should create a new payment when createCurPayment() is called', function() {
      let payment = {
        billAmt: '250',
        tipAmt: '50',
        tipPercent: 20,
      }
  
      expect(createCurPayment()).toEqual(payment);
    });
  
    it('should not accept empty input when createCurPayment() is called', function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      let payment = createCurPayment();
  
      expect(payment).toEqual(undefined);
    });
  
    afterEach(function() {
        
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
    });
  });
