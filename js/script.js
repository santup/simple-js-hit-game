	var shownTime;
		var clickedTime;
		var hitTime;
		count=5;n=0;

		/*var left = Math.random()*(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 220);
		var top = Math.random()*(Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 380);*/
		
		document.getElementById('play').onclick=function(){
					document.getElementById('cover').style.display="none";
		}


		//make golfball appear
		function showgolf()
		{

			var time=Math.random();//generate random number
			time=time*4000; //so dynamically generate 'time' seconds.


			setTimeout(function() //relocate golfball after 'time' seconds.
			{
				var top=Math.random(); var left=Math.random();
        		top=top*300; left=left*600;

				document.getElementById("golf").style.display="block";
				document.getElementById("golf").style.top= top + "px";
				document.getElementById("golf").style.left= left + "px";

				shownTime=Date.now();

				hidegolf();
			},time);//after 'time' seconds golfball will re-appear

		}

		//make golfball disappear
		function hidegolf()
		{

			setTimeout(function(){

				document.getElementById("golf").style.display="none";
				showgolf();//call showgalf() function.

			},4000);//after 4 seconds golfball will disappear
		}

		document.getElementById("golf").onclick=function()//clicking on golfball
		{
			this.style.display="none";
			clickedTime=Date.now();
				
			
			hitTime=(clickedTime-shownTime)/1000;//time taken to click the golfball calculated and converted to seconds

			/*hitTime=parseFloat(hitTime.toString().split(".")[1]);*/

			document.getElementById('hone').innerHTML=hitTime;//displaying time taken to hit the golfball in <h1> tag.	
			
			var scorearray=[];//array declaration
			
			--count;//decrementing the count(number of hits) value

			document.getElementById('no').innerHTML=count;//number of hit display(default:'5')
			
				
				scorearray["temp"+count]=hitTime;/*storing multiple hit-time values in array with combining count
												   variable	value, so it become unique*/

				n=n+scorearray["temp"+count];//adding all time values
				
				
			
			if(count =="0") // check the condition when decrement value of count become '0'
			{
				var num = n/5;// calculate average of total seconds.
				var numb = num.toFixed(2);// restrict decimal places to '2'.
				/*var numb = n;
				numb = numb.toFixed(2);*/
				setTimeout(function(){

				document.getElementById("resulthone").innerHTML=numb;
                                document.getElementById("golf").style.display="none"; 
				document.getElementById("cover").style.display="none";
				document.getElementById("result").style.display="block";
		
				},500);
			}
			showgolf();
			
		}

		document.getElementById('hitagain').onclick=function()
		{
			window.location.reload();// window refresh for new game to start, so all variables become default.
		}

		document.getElementById('sound').onclick=function()// click  sound button to make music mute.
		{
			this.style.display="none";
			document.getElementById('mute').style.display="block";
			document.getElementById('player').pause();
		}

		document.getElementById('mute').onclick=function()// click button to re-enable music.
		{
			this.style.display="none";
			document.getElementById('sound').style.display="block";
			document.getElementById('player').play();
		}
		showgolf();