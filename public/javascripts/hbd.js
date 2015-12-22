$(function() {

  var maxCandleNum = 12;

  $('.candles').click(function(e) {
  	currentId = parseInt($(this).attr('id'))
  	previousId = currentId -1 ;
  	nextId = parseInt($(this).attr('id')) + 1;

  	if (currentId == 1) {
  		toggleFlame(this);
  		toggleFlame("#" + (currentId + 1));
  	} else if (currentId == maxCandleNum) {
  		toggleFlame(this);
  		toggleFlame("#" + (currentId - 1));
  	} else {
  		toggleFlame(this);
  		toggleFlame("#" + (currentId + 1));
  		toggleFlame("#" + (currentId - 1));
  	}
  });

  function toggleFlame(name) {
  	$(name).toggleClass('no-flame');
  }
});