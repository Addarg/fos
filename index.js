var size = 1;
		var percent = 1;
		var key = true;
		var deg = 0;
		var img = document.getElementById("cat");
		setInterval(big,20);
		function big(){
			percent++;
			if ( key == true ){
				size+=0.01;
				deg +=20;
				if ( size > 1.25){
					key = false;
				}
			}
			else if ( key == false ){
				size -=0.01;
				deg-=20;
				if (size <= 1){
					key = true;
				}
			}
			if (percent>=100){
				percent = 0;
			}
			img.style.transform = "scale(" + size + "," + size +")";
		}
        
