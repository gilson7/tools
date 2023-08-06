var viewCont = document.getElementById("view")
var viewDiv = document.getElementById("image")
var viewPro = document.getElementById("photog")
var viewDown = document.getElementById("download")
var index=1
var index2=1
var idinicial=1
var targ=1
var link = document.getElementById("1");
var textstatus="false"
var urli=`https://api.pexels.com/v1/curated?page=${index}&per_page=10 `
var meucu=""
var sesk = document.getElementById("sesk")
var load = document.getElementById("load")
var obj = ""
let ui = 0
function loadY(value){
	let s=value
	if(s==true){
		load.style.bottom="0"
	}if(s==false){
		load.style.bottom="-48px"
	}
}


document.addEventListener("keydown",function(event){if (event.keyCode==13) {
	

	if (sesk.value!="" && sesk.value!=undefined) {
		document.getElementById("exibir").innerHTML=""
		index2=1
		 urli=`https://api.pexels.com/v1/search?query="${sesk.value}"&page=${index2}&per_page=10 `
		new photo
		loadY(true)
	}else{
	
		urli=`https://api.pexels.com/v1/curated?page=${index}&per_page=10 `

	}
}})

class photo{

	constructor(){
		this.apikey="563492ad6f91700001000001b586468f9f054d10a021d35e5372015c"
		this.divfoto=document.getElementById("exibir")
		this.eventos()
	}
	eventos(){
	this.getImg()
	}
	async getImg(){
	    var baseURl = urli	
		const data = await this.fetchimage(baseURl)
		this.draw(data.photos,data.total_results)
		console.log(data)
		obj = data
	
	}
async fetchimage(baseURl){
		const response = await fetch(
			baseURl ,{
			method:'GET',
			headers:{
				Accept:'aplication/json',
				Authorization: this.apikey

			}
			})
		const data = await  response.json();
		return data

}


// href="${photo.src.medium.replace("?auto=compress&cs=tinysrgb&h=350","")}"
	draw(photos,results){

		photos.forEach(photo=>{
	
			const item =document.createElement("div")
			item.classList.add("item")
			item.innerHTML=`
			<div>
			
			<img src="${photo.src.medium.replace("?auto=compress&cs=tinysrgb&h=350","?auto=compress&cs=tinysrgb&h=750")}" id="${idinicial}img" class="foto"alt="">
			<button  type="submit" class="download" id="${ui++}" name="down" value="${photo.src.medium.replace("?auto=compress&cs=tinysrgb&h=350","")}" target="_blank" onclick="view(this.id,this.value)">download</button> 
			</div>`
			if (ui >8){

				ui=0
			}
			this.divfoto.appendChild(item)
			idinicial+=1
			loadY(false)


		})
		if (results==0){
			 urli=`https://api.pexels.com/v1/curated?page=${index}&per_page=10 `
			document.getElementById("exibir").innerHTML=`
			<div id="erro1">
			<h1>NO RESULTS
			TO: "${sesk.value}"</h1>
			<a onclick="reload()">OK</a>
			</div>`
				loadY(false)
		}
	}
}

var foto = document.getElementsByClassName(`foto`)
window.addEventListener('load', function () {

    exibir.addEventListener('scroll', function() { 
    
        if (Math.ceil(this.scrollTop)+ this.offsetHeight == this.scrollHeight) {
			index+=1
			index2+=1
			urli=`https://api.pexels.com/v1/curated?page=${index}&per_page=10 `
		

			new photo
			loadY(true)

				
				
			
			
		
        } 
    }); 

})



 	var el = document.getElementById('exibir');
	el.addEventListener('click', function(e) {
   if(e.target.id != undefined&& isNaN(e.target.id)!=true){


}

});

function view(id,link){
	document.getElementById("closecont").style.display="block"
	viewCont.style.transform="scale(1)"
	viewDiv.innerHTML=`<img src="${link}" alt="">`
	viewPro.innerHTML=`
	<span class="material-symbols-outlined">
	photo_camera_front
	</span>
	<a href="${obj.photos[id].photographer_url}"  target="_blank">	<span class='spanph'>${obj.photos[id].photographer}</span></a>`
	viewDown.setAttribute("href",`https://www.pexels.com/photo/${obj.photos[id].id}/download/`)
}



function reload(){
sesk.value=""
document.getElementById("exibir").innerHTML=""
	new photo

}
new photo

function Mclose(mid){
	document.getElementById("closecont").style.display="none"
	viewCont.style.transform="scale(0)"
	viewDiv.innerHTML=`<img src="" alt="">`
	viewPro.innerHTML=`<span>erro</span>`
	viewDown.setAttribute("href",`null`)
	
	
}