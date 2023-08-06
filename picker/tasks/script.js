let form = document.getElementById("form")
let text=document.getElementById("txtarea")
let tittle = document.getElementById("tittle")
let area =document.getElementById("notas")
var isCtrl = false;
function newNote(){

    animacao("open","#form")
    document.getElementById("bomy").style.filter="blur(2px) brightness(70%)"
    document.getElementById("mais").style.display="none"


}

tittle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { // codigo da tecla enter
    // colocas aqui a tua função a rodar
   text.focus()
  }
});
function closeDisplay(){
    animacao("close","#form")
    document.getElementById("bomy").style.filter=""
    document.getElementById("mais").style.display="block"
    if(act=="edit"){
    text.value=""
        tittle.value=""
        act = "create"

    }
}
// code by: ©ZinoTrust Academy                                 //
// youtube: https://www.youtube.com/watch?v=unrmB4H7Wmw&t=3266s//
act = "create"
function create(){
if(act=="create"){

        if (text.value==""||tittle.value=="") {
            document.getElementById("aviso").style.top="0"
            setTimeout(()=>{
                 document.getElementById("aviso").style.top="-90px"
            },3000)
        }else{
        let nota = localStorage.getItem("mnote")
        if (nota==null) {
            notaObj=[]
        }else{
            notaObj = JSON.parse(nota)
        }
        let myObj={
            title: tittle.value,
            text:text.value
        }
        notaObj.push(myObj)
        localStorage.setItem("mnote",JSON.stringify(notaObj))
        text.value=""
        tittle.value=""
        exibir()
        closeDisplay()
        }
    }else if(act=="edit"){
        if(isCtrl == false){
            notaObj[notaedd].title = tittle.value 
            notaObj[notaedd].text  = text.value 
            localStorage.setItem("mnote",JSON.stringify(notaObj))
            exibir()
            closeDisplay()
            act = "create"
        }else{
            notaObj[notaedd].title = tittle.value 
            notaObj[notaedd].text  = text.value 
            localStorage.setItem("mnote",JSON.stringify(notaObj))

            exibir()
            anmEdit()
         
        }
    }
}
function exibir(){
    let nota = localStorage.getItem("mnote")
    if (nota==null) {
        notaObj=[]
    }else{
        notaObj = JSON.parse(nota)
    }
    let html=""
   
    notaObj.forEach(function(element,index){
        html += `
        <div id="nota" class="nota${index}">
        <div id="${index}"  onclick="showNote(this.id)">
            <h1>nota${index+1}</h1> 
            <h2 id="${index}" class="drag" >${element.title}</h2>
            <textarea id="txt"  cols="40" rows="5" disabled>${element.text}</textarea>
           
            <div id="espaço">espaço</div> 
        </div>
        <button id="${index}" class="delete" onclick="noteDelete(this.id)"><img src="icones/trash.png" ></button>
        <button id="${index}" class="edit" onclick="noteEdit(this.id)"><img class="imgEdit" src="https://cdn-icons-png.flaticon.com/512/84/84380.png"></button>
    </div>`
    })
    if (notaObj.length!=0) {
        area.innerHTML=html
    }else{
        area.innerHTML='sem notas'
    }

}





// dellete or no delete
var gindex = 0


let cont = document.getElementById("aviso2")
let deletConfirm  = false
let excluir =  document.getElementById("bb1")
let cancel =  document.getElementById("bb2")
excluir.addEventListener("click",()=>{
     deletConfirm  = true
     noteDelete(gindex)

})
excluir.addEventListener("click",()=>{

    deletConfirm  = false
    cont.style.transform="scaleY(0)"
    document.getElementById("bomy").style.filter="blur(0px)"
    document.getElementById("mais").style.display="block"


})
cancel.addEventListener("click",()=>{

    deletConfirm  = false
    cont.style.transform="scaleY(0)"
    document.getElementById("bomy").style.filter="blur(0px)"
    document.getElementById("mais").style.display="block"
})

function noteEdit(indici){
//    notaObj
    act="edit"
    newNote()
    animacao("close",".exibir")
    console.log(notaObj[indici])
    tittle.value = notaObj[indici].title
    text.value = notaObj[indici].text
    notaedd = indici
}



function noteDelete(index){
    gindex = index
    cont.style.transform="scaleY(1)"
    document.getElementById("bomy").style.filter="blur(4px)"
    document.getElementById("mais").style.display="none"




    if (deletConfirm==true) {
        let notes = localStorage.getItem("mnote")
        if (notes==null) {
            notaObj=[]
        }else{
            notaObj = JSON.parse(notes)
        }
        notaObj.splice(index,1);
        localStorage.setItem("mnote",JSON.stringify(notaObj))
        exibir()
    }
}


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
var Sexibir=false
function closeNote(){
    box=document.getElementById("exibir")
    Sexibir=false
    document.getElementById("bomy").style.filter="blur(0px)"
    document.getElementById("mais").style.display="block"
    animacao("close",".exibir")
}

function showNote(index){
    box=document.getElementById("exibir")
    valor=document.getElementById(`${index}`)
    divFechar=`<div id="close" onclick="closeNote()">x</div>`
    box.innerHTML=valor.outerHTML.replace(`onclick="showNote(this.id)"`,"")+divFechar
    Sexibir=true
    document.getElementById("bomy").style.filter="blur(2px) brightness(70%)"
    document.getElementById("mais").style.display="none"
    animacao("open",".exibir")
}

animacao("close",".exibir")
animacao("close","#form")

function animacao(ativi,aleme){
if (ativi == "close"){

        anime({

        targets:aleme,
        duration: 100,
        scale:0,
        opacity:0


        });
    }else if(ativi=="open"){

        anime({

        targets:aleme,
        duration: 50,
        scale:1,
        opacity:1
          
        });
    
    }
}
//////////////////////////////////////
exibir()
//setas sim ou nao


var kk=""





window.addEventListener('load', function(){
    text.addEventListener('keydown', function(e){
        if (e.keyCode == 17) {
            e.preventDefault();
            isCtrl = true;
        }


    if (e.keyCode == 83 && isCtrl){
           e.preventDefault();
           // your save logic goes here
            create()   
            }
    });
});

text.addEventListener('keyup', function(e){
            e.preventDefault();
            isCtrl = false;
    });


function anmEdit(){

 kk = document.getElementsByClassName("nota"+notaedd)


    var anm = kk[0].animate([
      {transform: ' rotatey(45deg)'}

     ], 100);
   anm.addEventListener('finish', function() {
   
 });
    kk2 = document.getElementById("aviso3")



    var anm = kk2.animate([
  {top:'-20'},{top:'-0px'},{top:'0'},
      {top:'0'},{top:'-20px'},{top:'-90px'}        
     ], 1000);
   anm.addEventListener('finish', function() {
   
 });

}