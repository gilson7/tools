
let shareWindow=`<div id="shareWindow">
<div id="yhj">
	<span class="material-symbols-outlined" translate="no">share</span>
	<li>share with</li>
	
</div>
<a href="https://www.reddit.com/submit?url=http://drumseven.ezyro.com/ferramentas/arts/index.html">
	<button>
		<span>reddit</span>
		<img src="icons/reddit.png" alt="">
	</button>
</a>
<a href="https://twitter.com/intent/tweet?url=http://drumseven.ezyro.com/ferramentas/arts/index.html">
	<button>
		<span>twitter</span>
		<img src="icons/twitter.png" alt="">
	</button>
</a>
<a href="https://api.whatsapp.com/send/?text=http://drumseven.ezyro.com/ferramentas/arts/index.html">
	<button>
		<span>whatsapp</span>
		<img src="icons/whatsapp.png" alt="">
	</button>
</a>
</div>`









let menu = document.querySelector("#mymenu")
let shareWin = document.querySelector("#shareWindow")
let displayType="desktop"
carregar()


function carregar(){

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
  
}

////////////
let cont = document.getElementById("conteudo")
let html=""
function def(m){
	let obj = m
	let pubObj = Object.keys(m)
	console.log(pubObj)

	pubObj.forEach(function(name,index){
		html +=`
				<div class="publ">
					<div class="contImg">
						<img src="${obj[name]}" alt="${obj[index]}" class="art">
					</div>
					<div class="info">
						<div class="title" translate="no">
							${pubObj[index]}
						</div>
						<div class="buttons" translate="no">
							<a download>
								<button class="downloadButton" onclick="downloadImg('${obj[name]}')">
									<span class="material-symbols-outlined">
										file_download
									</span>
								</button>
							</a>
							<button class="likeButton">
								<span class="material-symbols-outlined">
									thumb_up
								</span>
							</button>
							<button class="nolikeButton">
								<span class="material-symbols-outlined">
									thumb_down
								</span>
							</button>
						</div>
					</div>
					
				</div>


		` 
		
	})

	



}
function downloadImg(valok){
	var a = document.createElement('a');
	a.href = valok;
	a.download = "035-"+valok;
	a.click();
}




// 
let htmlInicio=`

<div id="inicio">
<div id="yhj" style="width: 90%;">
	<span style="background-color: transparent; "><img src="icons/favicon.svg" alt=""></span>
	<li translate="no" style="font-family: 'antonio';">Seven Arts</li>
	
</div>
<div id="cardTop"  class="card">
	<div class="cardText">
		<h1>welcome to Seven Arts</h1>
		<span>
			here you will find drawings, photoshop manipulations, pixel art and etc.
		</span>
	</div>
</div>
<div id="carsb">
	<div id="cardBottonLeft" class="card" onclick="cardRightClick()">
		<div class="cardText">
			<h1>arts</h1>
			<span>
				click to browse the arts
			</span>
		</div>
	</div>
	
		<div id="cardBottonRight" class="card">
			<a href="https://gseven.me/portfolio">
				<div class="cardText">
					<h1>More apps</h1>
					<span>
						click and discover more apps
					</span>
			
				</div>
			</a>
		</div>
	
	
</div>


</div>
			`





let iniciov = document.getElementById("ini")
let sharev = document.getElementById("sha")
let artesv = document.getElementById("art")
let stylev = document.getElementById("style")
function share(){
	animation_1('sha')
	option = "share"
	document.getElementById("conteudo").innerHTML=shareWindow
	document.getElementById("openMenu").click()
	localStorage.setItem("option",option)
	document.body.style.backgroundImg=`
url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23901212'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23ec6464'/%3E%3Cstop offset='1' stop-color='%23901212'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform='translate(0 1350)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`
}	
function inicio(){
	animation_1("ini")
	document.getElementById("conteudo").innerHTML=htmlInicio
	document.getElementById("openMenu").click()
	option="inicio"
	localStorage.setItem("option",option)
}
function artes(){
	animation_1("art")
	document.getElementById("conteudo").innerHTML=html
	document.getElementById("openMenu").click()
	option="artes"
	localStorage.setItem("option",option)
	
	
}
function cardRightClick(){

	artesv.click()
	document.getElementById("openMenu").click()
}
var option = "inicio"
function logoFunction(){
	localStorage.setItem('option','inicio') 
	document.location.reload()
}

//styles



function animation_1(valor)
{
	console.log("local animation")
	let transC = document.getElementById("trans")
	transC.className = "active2"
	switch (valor){
		case "art":
			if (html !== ""){
				setTimeout(()=>{transC.setAttribute("class","")},500)
			}
		break
		case "ini":
			if(cont.childElementCount !==0){
				setTimeout(()=>{transC.setAttribute("class","")},500)
			}
		break
		case "sha":
			if(cont.childElementCount !==0){
				setTimeout(()=>{transC.setAttribute("class","")},500)
			}
		break
	


	}
	
}

//iniciando aplicacao

inicio()
document.getElementById("openMenu").click()