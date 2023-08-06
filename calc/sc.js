let displayType = "desk"
if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){

	displayType="mobile"
 
 }
 
if (displayType!="mobile") {
	setInterval(()=>{document.querySelector("#lcd").focus()},1000)
}

 
var valor = 0
var fvalor="";


var el = document.getElementById('mm');
el.addEventListener('click', function(e) {
	if(e.target.value != undefined){
    document.querySelector("#lcd").value+=e.target.value
		
    }
    
    
    
});

function igual(){
	
		valor=eval(document.querySelector("#lcd").value.replace(/÷/g,"/").replace(/×/g,"*"))
	    
		document.querySelector("#lcd").value=valor
	    if( isNaN(document.querySelector("#lcd").value)){
	 	document.querySelector("#lcd").value="Error"
	 	setTimeout(()=>{document.querySelector("#lcd").value=""},700)
	 	
	 }
	
}

function clean(){
	 document.querySelector("#lcd").value=""
}


function back(){

var vito =	 document.querySelector("#lcd").value.length
if(vito>=0){
	document.querySelector("#lcd").value=document.querySelector("#lcd").value.substr(0,vito-1)
}
}

