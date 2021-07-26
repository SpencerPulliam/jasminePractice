describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function() {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not allow a blank string as input when submitServerInfo() is called', function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update the server list when updateServerTable() is called', function() {
    submitServerInfo();
    updateServerTable();

    let servers = document.querySelectorAll('#serverTable tbody tr td');

    expect(servers.length).toEqual(2);
    expect(servers[0].innerText).toEqual('Alice');
    expect(servers[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
