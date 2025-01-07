function openMenu() {
    console.log("open/close the menu")
    var x = document.getElementById("navigation");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.body.style.overflowY = "auto";
    } else {
      x.style.display = "block";
      document.body.style.overflowY = "hidden";
    }
  }