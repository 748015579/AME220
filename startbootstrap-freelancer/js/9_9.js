/*
var btn0 = false, btn1 = false, btn2 = false, btn3 = false, btn4 = false, btn5 = false, btn6 = false, btn7 = false, btn8 = false, btn9 = false;
var btn10 = false, btn11 = false, btn12 = false, btn13 = false, btn14 = false, btn15 = false, btn16 = false, btn17 = false, btn18 = false, btn19 = false;
var btn20 = false, btn21 = false, btn22 = false, btn23 = false, btn24 = false, btn25 = false, btn26 = false, btn27 = false, btn28 = false, btn29 = false;
*/
var boxStatus = [
	"left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left","left"
];


var boxFuction = [
	"swing","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic",
	"easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart",
	"easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine",
	"easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc",
	"easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic",
	"easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce"
];

var buttonClicked = function(n)
{
	
	var id = "#button" + n.toString();
	var boxWidtth = 150;
	
	if(boxStatus[n] == "left"){
		$(id).animate({marginLeft : '525px', fontsize: '25px', fontcolor : 'red'},"slow", boxFuction[n]);
		boxStatus[n] = "right";
	}else{
		$(id).animate({marginLeft : '0px', fontcolor : 'black'},"slow", boxFuction[n]);
		boxStatus[n] = "left";
	}

/*	
switch(n){
		case 0:
			//while(true){
				if(btn0){
					$(id).animate({marginLeft : '20px'},"slow", "swing");
					btn0 = !btn0;
					//console.log("1" + btn0);
					break;
				}
				
				if(!btn0){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "swing");
					btn0 = !btn0;
					//console.log("2" + btn0);
					break;
				}
				
			//}
			break;
		case 1:
			while(true){
				if(btn1){
					$(id).animate({marginLeft : '20px'},"slow", "easeInQuad");
					btn1 = !btn1;
					//console.log("1" + btn0);
					break;
				}
				if(!btn1){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInQuad");
					btn1 = !btn1;
					//console.log("2" + btn0);
					break;
				}
			}
			break;
		case 2:
			while(true){
				if(btn2){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutQuad");
					btn2 = !btn2;
					break;
				}
				if(!btn2){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutQuad");
					btn2 = !btn2;
					break;
				}
			}
			break;
		case 3:
			while(true){
				if(btn3){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutQuad");
					btn3 = !btn3;
					break;
				}
				if(!btn3){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutQuad");
					btn3 = !btn3;
					break;
				}
			}
			break;
		case 4:
			while(true){
				if(btn4){
					$(id).animate({marginLeft : '20px'},"slow", "easeInCubic");
					btn4 = !btn4;
					break;
				}
				if(!btn4){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInCubic");
					btn4 = !btn4;
					break;
				}
			}
			break;
		case 5:
			while(true){
				if(btn5){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutCubic");
					btn5 = !btn5;
					break;
				}
				if(!btn5){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutCubic");
					btn5 = !btn5;
					break;
				}
			}
			break;
		case 6:
			while(true){
				if(btn6){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutCubic");
					btn6 = !btn6;
					break;
				}
				if(!btn6){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutCubic");
					btn6 = !btn6;
					break;
				}
			}
			break;
		case 7:
			while(true){
				if(btn7){
					$(id).animate({marginLeft : '20px'},"slow", "easeInQuart");
					btn7 = !btn7;
					break;
				}
				if(!btn7){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInQuart");
					btn7 = !btn7;
					break;
				}
			}
			break;
		case 8:
			while(true){
				if(btn8){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutQuart");
					btn8 = !btn8;
					break;
				}
				if(!btn8){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutQuart");
					btn8 = !btn8;
					break;
				}
			}
			break;
		case 9:
			while(true){
				if(btn9){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutQuart");
					btn9 = !btn9;
					break;
				}
				if(!btn9){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutQuart");
					btn9 = !btn9;
					break;
				}
			}
			break;
		case 10:
			while(true){
				if(btn10){
					$(id).animate({marginLeft : '20px'},"slow", "easeInQuint");
					btn10 = !btn10;
					break;
				}
				if(!btn10){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInQuint");
					btn10 = !btn10;
					break;
				}
			}
			break;
		case 11:
			while(true){
				if(btn11){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutQuint");
					btn11 = !btn11;
					break;
				}
				if(!btn11){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutQuint");
					btn11 = !btn11;
					break;
				}
			}
			break;
		case 12:
			while(true){
				if(btn12){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutQuint");
					btn12 = !btn12;
					break;
				}
				if(!btn12){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutQuint");
					btn12 = !btn12;
					break;
				}
			}
			break;
		case 13:
			while(true){
				if(btn13){
					$(id).animate({marginLeft : '20px'},"slow", "easeInSine");
					btn13 = !btn13;
					break;
				}
				if(!btn13){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInSine");
					btn13 = !btn13;
					break;
				}
			}
			break;
		case 14:
			while(true){
				if(btn14){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutSine");
					btn14 = !btn14;
					break;
				}
				if(!btn14){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutSine");
					btn14 = !btn14;
					break;
				}
			}
			break;
		case 15:
			while(true){
				if(btn15){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutSine");
					btn15 = !btn15;
					break;
				}
				if(!btn15){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutSine");
					btn15 = !btn15;
					break;
				}
			}
			break;
		case 16:
			while(true){
				if(btn16){
					$(id).animate({marginLeft : '20px'},"slow", "easeInExpo");
					btn16 = !btn16;
					break;
				}
				if(!btn16){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInExpo");
					btn16 = !btn16;
					break;
				}
			}
			break;
		case 17:
			while(true){
				if(btn17){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutExpo");
					btn17 = !btn17;
					break;
				}
				if(!btn17){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutExpo");
					btn17 = !btn17;
					break;
				}
			}
			break;
		case 18:
			while(true){
				if(btn18){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutExpo");
					btn18 = !btn18;
					break;
				}
				if(!btn18){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutExpo");
					btn18 = !btn18;
					break;
				}
			}
			break;
		case 19:
			while(true){
				if(btn19){
					$(id).animate({marginLeft : '20px'},"slow", "easeInCirc");
					btn19 = !btn19;
					break;
				}
				if(!btn19){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInCirc");
					btn19 = !btn19;
					break;
				}
			}
			break;
		case 20:
			while(true){
				if(btn20){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutCirc");
					btn20 = !btn20;
					break;
				}
				if(!btn20){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutCirc");
					btn20 = !btn20;
					break;
				}
			}
			break;
		case 21:
			while(true){
				if(btn21){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutCirc");
					btn21 = !btn21;
					break;
				}
				if(!btn21){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutCirc");
					btn21 = !btn21;
					break;
				}
			}
			break;
		case 22:
			while(true){
				if(btn22){
					$(id).animate({marginLeft : '20px'},"slow", "easeInElastic");
					btn22 = !btn22;
					break;
				}
				if(!btn22){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInElastic");
					btn22 = !btn22;
					break;
				}
			}
			break;
		case 23:
			while(true){
				if(btn23){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutElastic");
					btn23 = !btn23;
					break;
				}
				if(!btn23){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutElastic");
					btn23 = !btn23;
					break;
				}
			}
			break;
		case 24:
			while(true){
				if(btn24){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutElastic");
					btn24 = !btn24;
					break;
				}
				if(!btn24){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutElastic");
					btn24 = !btn24;
					break;
				}
			}
			break;
		case 25:
			while(true){
				if(btn25){
					$(id).animate({marginLeft : '20px'},"slow", "easeInBack");
					btn25 = !btn25;
					break;
				}
				if(!btn25){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInBack");
					btn25 = !btn25;
					break;
				}
			}
			break;
		case 26:
			while(true){
				if(btn26){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutBack");
					btn26 = !btn26;
					break;
				}
				if(!btn26){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutBack");
					btn26 = !btn26;
					break;
				}
			}
			break;
		case 27:
			while(true){
				if(btn27){
					$(id).animate({marginLeft : '20px'},"slow", "easeInOutBack");
					btn27 = !btn27;
					break;
				}
				if(!btn27){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInOutBack");
					btn27 = !btn27;
					break;
				}
			}
			break;
		case 28:
			while(true){
				if(btn28){
					$(id).animate({marginLeft : '20px'},"slow", "easeInBounce");
					btn28 = !btn28;
					break;
				}
				if(!btn28){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeInBounce");
					btn28 = !btn28;
					break;
				}
			}
			break;
		case 29:
			while(true){
				if(btn29){
					$(id).animate({marginLeft : '20px'},"slow", "easeOutBounce");
					btn29 = !btn29;
					break;
				}
				if(!btn29){
					$(id).animate({marginLeft : pageWidth-boxWidtth+'px'},"slow", "easeOutBounce");
					btn29 = !btn29;
					break;
				}
			}
			break;
	}
	*/
}