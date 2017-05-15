
//move this into musicbottom.js

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
      window.musicBottom.nextTrack();
      window.musicBottom.playButton();
      move.width = .1;
      move.bar.style.width = move.width + '%';
    } else {
      //console.log(typeof move.bar.style.width); = string
      move.width+=.1;
      move.bar.style.width = move.width + '%';
    }
  },
  pause: function() {
    clearInterval(move.id);
  },
  resume: function() {
    move.id = setInterval(move.frame, 50);
  },
  jumpTo: function(x) {
    var pos = x-$('.progress-bar').offset().left;
    var percentage = 100 * pos / $('.progress-bar-cont').width();
    percentage = percentage<=100 ? percentage >=0 ? percentage : 0 : 100;
    move.width = percentage;
    move.bar.style.width = percentage + '%';
  }
}
var trackDrag = false;
$('.progress-bar-cont').on('mousedown', function (e) {
  trackDrag = true;
  move.jumpTo(e.pageX);
})

function progressPause() {
  move.pause();
}
function progressResume() {
  move.resume();
}

var volumeDrag = false;
var volumeGlyph = document.getElementsByClassName('volume-glyph')[0].classList;
var currVolPos = 2;
$('.volume-cont').on('mousedown', function (e) {
  volumeDrag = true;
  updateVolume(e.pageX);
});
$(document).on('mouseup', function (e) {
  if (volumeDrag) {
    volumeDrag = false;
    updateVolume(e.pageX);
  }
  if(trackDrag) {
    trackDrag = false;
    move.jumpTo(e.pageX);
  }
});
$(document).on('mousemove', function (e) {
  if (volumeDrag) {
    updateVolume(e.pageX);
  }
  if(trackDrag) {
    move.jumpTo(e.pageX);
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
  if(percentage >=50){
    if(currVolPos!=2){
      volumeGlyph.remove(volumeGlyph.item(2));
      volumeGlyph.add("glyphicon-volume-up");
      currVolPos=2;
    }
  } else {
    if(currVolPos!=1){
      volumeGlyph.remove(volumeGlyph.item(2));
      volumeGlyph.add("glyphicon-volume-down");
      currVolPos=1;
    }
  }
  if (percentage <= 0) {
    percentage = 0;
    if(currVolPos!=0){
      volumeGlyph.remove(volumeGlyph.item(2));
      volumeGlyph.add("glyphicon-volume-off");
      currVolPos=0;
    }
  }
  //update volume bar and video volume
  $('.volume-bar').css('width', percentage + '%');
};
