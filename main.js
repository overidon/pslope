function main() {
	
	// this is some new strict protocol stuff 
	"use strict";
	
	
	var karnov = 0;
	
	
	var x0grab;
	var x1grab;
	var y0grab;
	var y1grab;	
	var mslopegrab;
	
	// begin code for the poly  code
	
	var coef1a;
	var var1a;
	var exp1a;
	var coefSnag1a;
	var expSnag1a;
	
	// begin the locked variables
	var x0locked = true;
	var x1locked = true;
	var y0locked = true;
	var y1locked = true;
	var mlocked = true;
	
	
	
		 $(".buttonclicker").on("click" , function() {
			 
			 
			 var snoarp = 301 + parseInt(x0grab);
			 var chelden = 301 - parseInt(y0grab);

			 var boooop = 301 + parseInt(x1grab);
			 var fnin = 301 - parseInt(y1grab);		 
			 
			 
			 updateUnits();
			 
			 

			 karnov += 1;

			// alert("I am an alert box!" + karnov);

			// $(".xreplyhtml").html(karnov);




			var c = document.getElementById("myCanvas");
			 

			// KEEP CODE 
			var ctx = c.getContext("2d");
			 

			// clear the item?
			ctx.clearRect(0, 0, c.width, c.height);
			 
			 // generate a middle horizontal origin grid location
			ctx.beginPath();              
			ctx.lineWidth = "2";
			ctx.strokeStyle = "green";  // Green path
			ctx.moveTo(0, 301);
			ctx.lineTo(601, 301);
			ctx.stroke();
			 
			 
			 
			// generate a middle vertical origin grid location
			ctx.beginPath();              
			ctx.lineWidth = "2";
			ctx.strokeStyle = "red";  // red path
			ctx.moveTo(301, 0);
			ctx.lineTo(301, 601);
			ctx.stroke(); 
			 
	 
			//  slope theory generate the line segment
			ctx.beginPath();              
			ctx.lineWidth = "2";
			ctx.strokeStyle = "blue";  // blue path
			ctx.moveTo(snoarp, chelden);
			ctx.lineTo(boooop, fnin);
			ctx.stroke(); 				 
			 
			 
			ctx.beginPath();
			 
			// begin code for showing the origin
			ctx.font = "12px Courier";
			ctx.fillText("(0,0)" , 301, 301);
			 
			 // begin code for showing the line segment data 
			 
			 var gingo = 0;
			 if (chelden <= fnin) {
				 gingo = -20;
			 } else {
				 gingo = 20;
			 }
			ctx.font = "12px Courier";
			ctx.fillText("(" + x0grab.toString() + "," + y0grab.toString() + ")", snoarp, chelden + gingo);

			 // begin code for showing the line segment data second point
			ctx.strokeStyle = "black";  // red path
			ctx.font = "12px Courier";
			ctx.fillText("(" + x1grab.toString() + "," + y1grab.toString() + ")", boooop, fnin - gingo);
			 

			 
			 
			 
			 // TEST CODE
			 // this creates a beutiful set of colors
			 // it uses the x and y coordinates of the points themselves to create 
			 // a nice gradient based on those coordinates :D
			 /*
			 for (var x = 0; x < 200; x++) {
			  for (var y = 0; y < 200; y++) {
				ctx.fillStyle = "rgb(" + x + "," + y + "," + x + ")";
				ctx.fillRect(x, y, 1, 1);
			  }
			}
			*/
			 
			 /*
			 
			 var zipx = 0;
			 var zipy = 0;
			 var zipxneg = 0;
			 
			 var chaosx = 0;
			 var chaosy = 0;
			 var chaosxneg = 0;
			 var chaosyneg = 0;
			 
			 */
			 
			 var bingox = 0;
			 var bingoxneg = 0;
			 var bingoy = 0;
			 var bingoyneg = 0;
			 

			 
			 for (var chango = 0; chango <= 300; chango++) {
			  for (var changoy = 0; changoy <= 300; changoy++) {
				 
				  /*
				// work on parabola 
				zipx = 301 + chango;				  
				zipxneg = 301 + ( -1 * chango);
				zipy = 301 - ( 0.001 * (  Math.pow(chango , 2)) );

				// prepare x^3
				chaosx = 301 + chango;
				chaosxneg = 301 + ( -1 * chango);
				chaosy = 301 - ( 0.001 * (  Math.pow(chango, 3)) );
				chaosyneg = 301 - (  (0.001 * (  Math.pow(-1 * chango, 3))) );
				  
				  */
				  
				  
				// prepare function distribute 
				bingox = 301 + ( (chango)  ) ;
				bingoxneg = 301 + (( -1 * chango )) ;
				bingoy = 301 - (  ( coef1a * (Math.pow(chango, expSnag1a))  ) );
				bingoyneg = 301 - (  ( coef1a * (Math.pow(- 1 * chango, expSnag1a))) );
				 
				  
				  			/*	// prepare function distribute 
				bingox = 301 + ( Math.round(chango * 0.1)  ) ;
				bingoxneg = 301 + ( Math.round(( -1 * chango) * 0.1 )) ;
				bingoy = 301 - ( Math.round(( coef1a * (Math.pow(chango, expSnag1a)) )  * 0.1   )  );
				bingoyneg = 301 - (  Math.round ( ( coef1a * (Math.pow(- 1 * chango, expSnag1a))) * 0.1 ) );
				
				  */
				  
				  /*
				// draw parabola  
				ctx.fillStyle = "rgb(" + chango + "," + changoy + "," + chango + ")";
				ctx.fillRect( zipx , zipy, 2, 2);
				// also fill the other side  
				ctx.fillRect( zipxneg , zipy, 2, 2);
				  
				// draw x^3
				ctx.fillStyle = "rgb(" + chango + "," + changoy + "," + chango + ")";
				ctx.fillRect( chaosx , chaosy, 2, 2);
				// also fill the other side  
				ctx.fillRect( chaosxneg , chaosyneg, 2, 2);			
				  
				  */
				  
				  
				// begin the  draw function distribute
				//ctx.fillStyle = "rgb(" + chango + "," + changoy + "," + chango + ")";
				ctx.fillStyle = "rgb(" + 0 + "," + 0 + "," + 0 + ")";
				ctx.fillRect( bingox , bingoy, 2, 2);
				// also fill the other side  
				ctx.fillRect( bingoxneg , bingoyneg, 2, 2);	 
				  
				  
			  }  				  
			}
			 
			 
		 
			 
			 // end primary function 
		 });


	
		// take data from the field 
		$('input[type=text]').on('keydown', function(e) {
		if (e.which === 13) {

			updateUnits();
			
			// prevent a recursive issue 
			e.preventDefault();
		}
	});

	
		// check the y locked
		$(".xgridlocked0").on("click" , function() {
			x0locked = !x0locked;
			$(this).toggleClass("xgridunlocked0");
		if (x0locked === true) {
			document.getElementById("x0lockedconf").innerHTML = "Y";	
			
			
		} else {
			document.getElementById("x0lockedconf").innerHTML = "N";	
		}
			updateUnits();
		 });
	
			// check the y locked
		$(".xgridlocked1").on("click" , function() {
			x1locked = !x1locked;
			$(this).toggleClass("xgridunlocked1");
		if (x1locked === true) {
			document.getElementById("x1lockedconf").innerHTML = "Y";	
			
			
		} else {
			document.getElementById("x1lockedconf").innerHTML = "N";	
		}
			updateUnits();
		 });
	
			// check the y locked
		$(".xgridlocked2").on("click" , function() {
			y0locked = !y0locked;
			$(this).toggleClass("xgridunlocked2");
		if (y0locked === true) {
			document.getElementById("y0lockedconf").innerHTML = "Y";	
			
			
		} else {
			document.getElementById("y0lockedconf").innerHTML = "N";	
		}
			updateUnits();
		 });
	
			// check the y locked
		$(".xgridlocked3").on("click" , function() {
			y1locked = !y1locked;
			$(this).toggleClass("xgridunlocked3");
		if (y1locked === true) {
			document.getElementById("y1lockedconf").innerHTML = "Y";	
			
			
		} else {
			document.getElementById("y1lockedconf").innerHTML = "N";	
		}
			updateUnits();
		 });	
	
	// check to coordinate the display in cunjunction with the buttons 

	
	function updateUnits(){
			if (x0locked === false) {
				x0grab = document.getElementById("x0").value;
				// update the x0 elements in the formula 
				document.getElementById("x0dupe").innerHTML = x0grab;			
			}

			if (x1locked === false) {
				x1grab = document.getElementById("x1").value;
				// update the x1 elements in the formula 
				document.getElementById("x1dupe").innerHTML = x1grab;				
			}

			if (y0locked === false){
				y0grab = document.getElementById("y0").value;
				// update the y0 elements in the formula 
				document.getElementById("y0dupe").innerHTML = y0grab;			
			}


			if (y1locked === false) {
			y1grab = document.getElementById("y1").value;
				// update the y1 elements in the formula 
				document.getElementById("y1dupe").innerHTML = y1grab;			
			}



			var slopDetermine =  (    ( parseFloat(y0grab) - parseFloat(y1grab) )  / (parseFloat(x0grab) - parseFloat(x1grab)) );

			// alert("Slope is actually: " + slopDetermine);


			if (mlocked === false) {
				mslopegrab = document.getElementById("mslope").value;
				// update the m element in the formula 
				document.getElementById("mslopedupe").innerHTML = mslopegrab;	
			}
		
			document.getElementById("slopeproper").innerHTML = slopDetermine;	
		
		
			// absorb data from the text fields

			formulaExpress();
		

		
				
	}
	
	
	function formulaExpress(){
		
		

		
		coef1a = document.getElementById("coef1a").value;
		var1a = document.getElementById("var1a").value;
		exp1a = document.getElementById("exp1a").value;
		
		coefSnag1a = parseInt(coef1a);		
		//var expSnag = parseInt(x0grab);		
		expSnag1a = parseInt(exp1a);		

		if (coefSnag1a !== 1) {
			document.getElementById("coef1adupe").innerHTML = coef1a;
		} else {
			document.getElementById("coef1adupe").innerHTML = "";
		}

		if (expSnag1a !== 1) {
			document.getElementById("exp1adupe").innerHTML = exp1a;
		} else {
			document.getElementById("exp1adupe").innerHTML = "";
		}
	}
	
	
	/// end of main function 
}

$(document).ready(main);