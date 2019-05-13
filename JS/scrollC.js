var A=1;
var B=1;
$(window).scroll(function() {/*上方白色清單高度變化*/
	    if ( $(this).scrollTop() > 100){
	        $('.S2-R').addClass('JOI');
	        $('.S2-R').removeClass('Hid');
	        $('.S2-box').addClass('JOI');
	        $('.S2-box').removeClass('Hid');
	    }
	    if ( $(this).scrollTop() > 120){
	    	if(A<=1){
	        inte('95');/*前端*/
			inte2('85.00');/*PS*/
			inte3('75.50');/*影片*/
			inte4('80.50');/*後端*/
			A++;
			}
	    } 
	    if ( $(this).scrollTop() > 750){
	    	if(B<=1){
	       		$(".S2-PS2-1").width('70%');/*C#*/
				$(".S2-PS2-2").width('93%');/*java*/
				$(".S2-PS2-3").width('65%');/*python*/
				$(".S2-PS2-4").width('90%');/*SQL*/
				$(".S2-PS2-5").width('95%');/*HTML*/
				$(".S2-PS2-6").width('80%');/*JQ*/
				$(".S2-PS2-7").width('85%');/*Bootstrap*/
			}
	    }
	     if ( $(this).scrollTop() > 1700){
	        $('.S3-A1').addClass('S3-AC1');
	        $('.S3-A1').removeClass('Hid');
	    }
	    if ( $(this).scrollTop() > 2000){
	        $('.S3-A2').addClass('S3-AC2');
	        $('.S3-A2').removeClass('Hid');
	    }

	});

