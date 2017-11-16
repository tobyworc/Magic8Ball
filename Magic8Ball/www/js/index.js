$(document).on("pagecreate","#pageone",function(){
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            

var answers = [

"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes definitely",
"You may rely on it As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"

];


function submitText() {
	
	var randomNum = (Math.floor(Math.random() * (answers.length - 1) ));
	
	document.getElementById("textoutput").value = answers[randomNum];
	
	if (randomNum ==< 10) {
		
		navigator.notification.beep(1);
		
	} else if (randomNum >10 && randomNum ==< 15{
		
	
		
	} else {
		
		navigator.vibrate(2000);
		
	};
	
};


	

