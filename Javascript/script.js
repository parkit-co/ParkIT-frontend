(function() {
  var preload = document.getElementById("preload");
  var laoding = 0;
  var id = setInterval(frame, 64);

  function frame() {
    if (loading == 100){
      clearInterval(id);
      window.open("welcome.html", "_self");
    }
  }

})();
