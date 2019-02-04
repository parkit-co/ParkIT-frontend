function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

// not sure if you can use it like this yet
function getActiveInfo() {
  fetch('https://homeparkit.herokuapp.com/client/6TGZ044')
    .then(data => data.json())
    .then(data => {
      const invoice = data.data.invoices.inv00002;

      const hours = Math.floor(invoice.duration / 60);
      const mins = ((invoice.duration - hours * 60) < 10 ? '0' : '') + (invoice.duration - hours * 60);

      document.getElementById("title").innerHTML +=
      `
      <h4 style="color:white; padding-left: 20px; font-size:1rem;  padding-left: 70px;">6TGZ044 - ${ data.data.car }</h4>
      <h4 style="text-align:center;font-size: 4rem"><span style="color:white">${ hours }</span>:<span style="color:white">${ mins }</span>:<span style="color:white">00</span></h4>
      <h5 style="color:white;text-align:center">Hours Minutes Seconds</h5>
      `
      document.getElementById("details").innerHTML +=
        `
        <table style="width: 40%; margin-left: 35%">
          <tr>
           <td><h4>Transaction Number: </h4></td>
           <td><h4>${ invoice.id }</td></h4>
          </tr>
          <tr>
            <td><h4>Zone:
            <td><h4>${ invoice.spot }</h4>
          </tr>
          <tr>
            <td><h4>Start:
             <td><h4> ${ invoice.start }</h4>
          </tr>
          <tr>
            <td><h4>End:
            <td><h4>${ invoice.end }</h4>
          </tr>
          <tr>
            <td><h4>Parking Fee:
             <td><h4>$${ Math.round(invoice.fee * 100) / 100 }</h4>
          </tr>
          <tr>
            <td><h4>Total Fee:
            <td><h4>$${ Math.round(invoice.fee * 100) / 100 }</h4>
          </tr>
          <tr>
            <td><h4>Payment Info:
            <td><h4>${ data.data.payment }</h4></tr>
        </table>
        `;
    });
}