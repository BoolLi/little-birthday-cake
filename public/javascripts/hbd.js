$(function() {
  var maxCandleNum = 10;
  var hintTime = 4000;
  var clickCount = 0;
  initializeCandleStates();
  $(".second-text").hide();
  $(".third-text").hide();
  $(".blow-button").hide();
  $(".hint-1").hide();
  $(".hint-2").hide();
  $(".hint-3").hide();
  $(".hint-4").hide();

  $('.candles').click(function(e) {
  	clickCount++;
  	currentId = parseInt($(this).attr('id'), 10);
  	console.log(currentId);
  	previousId = currentId -1 ;

  	if (currentId == 1) {
  		toggleFlame(this);
  		toggleFlame("#" + (currentId + 1));
  		toggleCandleState(currentId);
  		toggleCandleState(currentId + 1);
  	} else if (currentId == maxCandleNum) {
  		toggleFlame(this);
  		toggleFlame("#" + (currentId - 1));
  		toggleCandleState(currentId);
  		toggleCandleState(currentId - 1);
  	} else {
  		toggleFlame(this);
  		toggleFlame("#" + (currentId + 1));
  		toggleFlame("#" + (currentId - 1));

  		toggleCandleState(currentId);
  		console.log(currentId);
  		toggleCandleState(currentId + 1);
  		toggleCandleState(currentId - 1);
  	}
  	if (isSuccessful()) {
  		$(".first-text").hide();
  		$(".hints").hide();
  		$(".second-text").fadeIn(500);
  		$(".blow-button").fadeIn(500);

		$(".candles").addClass('burn');
		$(".candles").unbind("click");

  	} else {
  		if (clickCount == 3) {
  			$(".hint-1").fadeIn(hintTime, function() {
  				$(".hint-1").fadeOut(hintTime);
  			})
  		} else if (clickCount == 8) {
  			$(".hint-2").fadeIn(hintTime, function() {
  				$(".hint-2").fadeOut(hintTime);
  			})
  		} else if (clickCount == 13) {
  			$(".hint-3").fadeIn(hintTime, function() {
  				$(".hint-3").fadeOut(hintTime);
  			})
  		} else if (clickCount == 20) {
  			$(".hint-4").fadeIn(hintTime, function() {
  				$(".hint-4").fadeOut(hintTime);
  			})
  		}
  	}

  });

  $("#blow-candles-button").click(function(e) {
  	e.preventDefault();
  	$(".second-text").hide();
  	$(".blow-button").hide();
  	$(".third-text").fadeIn(500);
  	$(".candles").addClass("flames-go-out");
  });

  function toggleFlame(name) {
  	$(name).toggleClass('with-flame');
  }

  function initializeCandleStates() {
  	var i;
  	for (i = 1; i<=maxCandleNum; i++) {
  		localStorage.setItem(i, 0);
  	}
  }

  function toggleCandleState(id) {
  	tempId = parseInt(localStorage.getItem(id));
  	localStorage.setItem(id, 1- tempId);
  }

  function isSuccessful() {
  	var state = true;
  	for (var i = 1; i <= maxCandleNum; i++) {
  	  if (localStorage.getItem(i) != 1) {
  	  	state = false;
  	  }
  	}
  	return state;
  }
});