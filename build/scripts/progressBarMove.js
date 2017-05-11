function move() {
  var elem = document.getElementById("progress-bar");
  console.log("hi");
  var width = .1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width+=.05;
      elem.style.width = width + '%';
    }
  }
}
move();
