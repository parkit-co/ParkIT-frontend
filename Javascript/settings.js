function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // not sure if you can use it like this yet
  function getClientInfo() {
    fetch('https://homeparkit.herokuapp.com/client/6TGZ044')
      .then(data => data.json())
      .then(data => {
        const invoice = data.data.invoices.inv00002;
  
        document.getElementById("details").innerHTML +=
          `
          Name: <input type="text" name="Name"><br><hr>
          Email: <input type="text" name="Email"><br><hr>
          Phone Number: <input type="text" name="Name"><br><hr>
          Car Model: <input type="text" name="Email"><br><hr>
          License Plate: <input type="text" name="Name"><br><hr>
          Password: <input type="text" name="Email"><br><hr>
          `;
      });
  }