var move = {
  id: 0,
  bar: document.getElementById("progress-bar"),
  width: .1,
  start: function() {
    move.id = setInterval(move.frame, 50);
  },
  frame: function() {
    if (move.width >= 100) {
      clearInterval(move.id);
    } else {
      move.width+=.1;
      move.bar.style.width = move.width + '%';
    }
  },
  pause: function() {
    clearInterval(move.id);
  },
  resume: function() {
    move.id = setInterval(move.frame, 50);
  }
}

function progressPause() {
  move.pause();
}
function progressResume() {
  move.resume();
}

var volumeDrag = false;
var volumeGlyph = document.getElementsByClassName('volume-glyph')[0].classList;
$('.volume-cont').on('mousedown', function (e) {
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
  var volume = $('.volume-cont');
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
  $('.volume-bar').css('width', percentage + '%');
};
