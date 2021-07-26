describe('test setup and teardown', function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
      submitPaymentInfo();
    });
  
    it('should provide a total sum of all tips recieved when sumPaymentTotal() is called', function() {
      expect(sumPaymentTotal('tipAmt')).toEqual(200);
  
      billAmtInput.value = 600;
      tipAmtInput.value = 120;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(320);
    });
  
    it('should show the total sales when sumPaymentTotal() is called', function() {
      expect(sumPaymentTotal('billAmt')).toEqual(1000);
  
      billAmtInput.value = 340;
      tipAmtInput.value = 400;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(1340);
    });
  
    it('should show the total percent of tips when sumPaymentTotal() is called', function() {
      expect(sumPaymentTotal('tipPercent')).toEqual(25);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 50;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(45);
    });
  
    it('should calculate the tip percentage when calculateTipPercent() is called', function() {
      expect(calculateTipPercent(250, 25)).toEqual(10);
      expect(calculateTipPercent(300, 60)).toEqual(20);
    });
  
    it('should generate new td from value and append to tr on appendTd(tr, value)', function() {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'test');
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('test');
    });
  
    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
      let newTr = document.createElement('tr');
  
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.firstChild.innerHTML).toEqual('X');
    });
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });