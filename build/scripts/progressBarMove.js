var move =
  {
  id: 0,
  start: function() {
  var elem = document.getElementById("progress-bar");
  console.log("hi");
  var width = .1;
  move.id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width+=.05;
      elem.style.width = width + '%';
    }
  }
},
  pause: function() {
  clearInterval(move.id);
}
}
function progressPause() {
    console.log("Hasdfi");
  move.pause();
}
move.start();

var volumeDrag = false;
$('.volume').on('mousedown', function (e) {
    volumeDrag = true;
    updateVolume(e.pageX);
});
$(document).on('mouseup', function (e) {
    if (volumeDrag) {
        volumeDrag = false;
        updateVolume(e.pageX);
    }
});
$(document).on('mousemove', function (e) {
    if (volumeDrag) {
        updateVolume(e.pageX);
    }
});
var updateVolume = function (x) {
    var volume = $('.volume');
    var percentage;
    var position = x - volume.offset().left;
    percentage = 100 * position / volume.width();
    if (percentage > 100) {
        percentage = 100;
    }
    if (percentage < 0) {
        percentage = 0;
    }
    //update volume bar and video volume
    $('.volumeBar').css('width', percentage + '%');
};
