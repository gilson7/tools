let menuStatus = "closed"
let form = document.getElementById("form")
let text=document.getElementById("txtarea")
let tittle = document.getElementById("tittle")
let area =document.getElementById("notas")
var isCtrl = false;
function newNote(){
    animacao("open","#form")
    document.getElementById("bomy").style.filter="blur(22px) brightness(70%)"
    document.getElementById("mais").style.display="none"
    tittle.focus()
    menuStatus = "opened"
}
tittle.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) {
   text.focus()
  }
});
function closeDisplay(){
    menuStatus="closed"
    animacao("close","#form")
    document.getElementById("bomy").style.filter=""
    document.getElementById("mais").style.display="block"
    if(act=="edit"){
    text.value=""
        tittle.value=""
        act = "create"
    }
}
act = "create"
function create(){
if(act=="create"){
    let nota = localStorage.getItem("mnote")
    if (nota==null) {
        notaObj=[]
    }else{
        notaObj = JSON.parse(nota)
    }
    let myObj={
        title:checkTitleEmpity(tittle.value),
        text:checkTitleEmpity(text.value)
    }
    notaObj.push(myObj)
    localStorage.setItem("mnote",JSON.stringify(notaObj))
    text.value=""
    tittle.value=""
    exibir()
    closeDisplay()
    menuStatus="closed"
}else if(act=="edit"){
    if(isCtrl){
        notaObj[notaedd].title = tittle.value 
        notaObj[notaedd].text  = text.value 
        localStorage.setItem("mnote",JSON.stringify(notaObj))
        menuStatus="closed"
        exibir()
        anmEdit()
    }else{
        notaObj[notaedd].title = tittle.value 
        notaObj[notaedd].text  = text.value 
        localStorage.setItem("mnote",JSON.stringify(notaObj))
        exibir()
        closeDisplay()
        act = "create"
    }
    }
}
function checkTitleEmpity(valor){
    let string = "new note"
    if(valor!=""){ 
        string = valor
    }
    return string
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
        <div id="${index}"  onclick="noteEdit(this.id)">
            <h2 id="${index}" class="drag" >${element.title}</h2>
            <textarea id="txt"  cols="40" rows="5" disabled>${element.text}</textarea>
           
            <div id="espaço">espaço</div> 
        </div>
        <button id="${index}" class="delete" onclick="noteDelete(this.id)"><img src="icones/trash.png" ></button>
    </div>`
    })
    if (notaObj.length!=0) {
        area.innerHTML=html
    }else{
        area.innerHTML='<div id="emp">empity</div>'
    }
}
//    edit 
function noteEdit(indici){
    act="edit"
    newNote()
    console.log(notaObj[indici])
    tittle.value = notaObj[indici].title
    text.value = notaObj[indici].text
    notaedd = indici
}
//delet or n delete
var gindex = 0
let cont = document.getElementById("aviso2")
let deletConfirm  = false
let excluir =  document.getElementById("optionYes")
let cancel =  document.getElementById("optionNo")
excluir.addEventListener("click",()=>{
     deletConfirm  = true
     noteDelete(gindex)
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
        deletConfirm = false
    }
}
function animacao(ativi,element){
    switch(ativi){
        case 'open':
            anime({
                targets:element,
                scale:1,
                opacity:100,
            })
            break;
        case 'close':
            anime({
                targets:element,
                scale:0,
                opacity:0
               
            });
            break;
    }
}
function anime(obj){
    let ele = document.querySelector(obj.targets)
    ele.style.transform=`scale(${obj.scale})`
    ele.style.opacity=`${obj.opacity}%`
}
//////////////////////////////////////
//setas sim ou nao
window.addEventListener('load', function(){
    text.addEventListener('keydown', function(e){
    if (e.keyCode == 17) {
        e.preventDefault();
        isCtrl = true;
    }else
    if (e.keyCode == 83 && isCtrl){
           e.preventDefault();
            create()   
            }
    });
    tittle.addEventListener('keydown', function(e){
        if (e.keyCode == 17) {
            e.preventDefault();
            isCtrl = true;
        }else
        if (e.keyCode == 83 && isCtrl){
               e.preventDefault();
                create()   
                }
        });
});
text.addEventListener('keyup', function(e){
    e.preventDefault();
    isCtrl = false;
});
tittle.addEventListener('keyup', function(e){
    e.preventDefault();
    isCtrl = false;
});
function anmEdit(){
 let kk = document.getElementsByClassName("nota"+notaedd)
        var anm = kk[0].animate([
            {transform: ' rotatey(45deg)'}
        ], 100);
        anm.addEventListener('finish', function() {
    });
    kk2 = document.getElementById("aviso3")
    var anm = kk2.animate([
        {top:'-10px'},{top:'10px' },{top:'10px'},
        {top:'10px' },{top:'10px' },{top:'10px'},
        {top:'10px' },{top:'-10px'},{top:'-80px'}        
     ], 1000);
   anm.addEventListener('finish', function() {
 });
}
// função lista e  mostra as notas
exibir()