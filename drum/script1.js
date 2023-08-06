var temaInfo = localStorage.getItem("tema")
let kick= new Audio(),clap= new Audio(),percussao= new Audio(),hat= new Audio(),cymbal= new Audio(),loopkick= new Audio(),loophat= new Audio(),vocal1= new Audio(),vocal2= new Audio(),hihat = new Audio()
let audios = []
function def(m){
  kick.src = m.kick
  clap.src = m.clap
  percussao.src = m.perc
  hat.src = m.hat
  cymbal.src = m.cymb
  loopkick.src = m.lk
  loophat.src = m.lh
  vocal1.src = m.voc1
  vocal2.src = m.voc2
  hihat.src = m.hat
  audios = [kick,clap,percussao,hat,cymbal,loopkick,vocal1,vocal2,hihat]
}
function mudatema(){//abre o menu de temas
  document.getElementById("esconder").style.transform = 'scaleX(1)'
  document.getElementById("tema").style.width = '154px'
  document.getElementById("tema").style.borderRadius=" 9px 9px 0 0"
}
function hiddenTema(){//fecha o menu de temas
  document.getElementById("esconder").style.transform = "scaleX(0)"
  document.getElementById("tema").style.width = '100px'
  document.getElementById("tema").style.borderRadius=" 9px"
}
//variavel abaixo define o tipo de dispositivo do user ,desktop || mobile
let displayType=""
function carregar(){
  document.getElementById("popup").style.transform ='sacale(1)'
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)){
    document.getElementById('popup').style.display="none"
    clickok()
    type("touchstart")
  }else{
    document.getElementById('popup').style.display="block"
    type("mousedown")
  }
}
document.onload = ()=>{
  alert("dsa")
  if(displayType == "desk"){
 
  }else if(displayType == "moba"){
    
  }
}
function clickok(){
   var okc = document.getElementById("popup")
   var anm = okc.animate([
  {transform:'scale(1.2)'}
], 50);
  anm.addEventListener('finish', function() {
  
});
  document.getElementById("popup").style.visibility = 'hidden'
   document.getElementById("blur").style.display="none"
  initTheme()
}
//variaveis do player de musica a player é do local da musica
//volume inicial
kick.volume = 0.1
clap.volume = 0.1
percussao.volume = 0.1
hat.volume = 0.1
cymbal.volume = 0.1
loopkick.volume = 0.1
loophat.volume = 0.1
vocal1.volume = 0.1
vocal2.volume = 0.1
hihat.volume= 0.1
var vol = 0.1
var statu = 0
document.getElementById('switch-shadow').addEventListener('click',()=>{
  if(statu==0){
    statu=1}
    else{statu=0}

})
var velocity = document.getElementById('hihat').value
//velocity barra
document.getElementById("hihat").addEventListener("input",function barradevolume(){
    velocity =  document.getElementById('hihat').value
    
  }
)
var timing = 40
function loop() {
  if(statu==1){
    hihat.play();
    hihat.currentTime = 0
  }
  window.setTimeout(loop,(60*1000)/timing);
}
document.querySelector('#hihat').addEventListener('input', function (e) {
  timing = parseInt(this.value);
  document.querySelector("#bpm").innerHTML=timing+" bpm"
});
loop();
//////////////////////
var vol= document.getElementById('volume').value
//volume barra
document.getElementById("volume").addEventListener("input",function barradevolume(){
    vol =  document.getElementById('volume').value
    loadVol()
  }
)
//configurando controle de volume
document.addEventListener( "keydown",function(event){
  if(event.keyCode==187&&vol<0.2){
    vol=parseFloat(vol)
    vol+=0.01 
    document.getElementById('volume').value=vol
  }
else if(event.keyCode==189&&vol>0.01){
   vol-=0.01
    document.getElementById('volume').value=vol 
}
  loadVol()
})
function loadVol(){
  kick.volume = vol
  clap.volume = vol
  percussao.volume = vol
  hat.volume = vol
  cymbal.volume = vol
  loopkick.volume = vol
  loophat.volume = vol
  vocal1.volume = vol
  vocal2.volume = vol
  hihat.volume= vol 
}
//////////////////
//tempo de animacao{
var time = 70
 //inicio do player de musica  role pra baixo para ver o fim 
function tocar(ele) {
    sideChain()
    let sound = audios[(ele - 1)]
    sound.play();
    sound.currentTime = 0
    sound.volume=vol
    var play1 = document.getElementById(`play${ele}`)
    var anm = play1.animate([
 // {transform: 'translate(5)'},
  {transform:'scale(1.2)'}
  ], time);
  anm.addEventListener('finish', function() {
  
});
//fim////////
}
document.addEventListener('keydown', function (event){ 
  //g3
  if (event.keyCode == 97||event.keyCode ==35){ tocar(7)}
  if (event.keyCode == 98||event.keyCode ==40){ tocar(8)}
  if (event.keyCode == 99||event.keyCode ==34){ tocar(9)}
  //g2
  if (event.keyCode == 100||event.keyCode ==37){ tocar(4)}
  if (event.keyCode == 101||event.keyCode ==12){ tocar(5)}
  if (event.keyCode == 102||event.keyCode ==39){ tocar(6)}
  //g1
  if (event.keyCode == 103||event.keyCode ==36){ tocar(1)}
  if (event.keyCode == 104||event.keyCode ==38){ tocar(2)}
  if (event.keyCode == 105||event.keyCode ==33){ tocar(3)}
})
////////////////////////////////////////////////////////////////////////
var btt=document.querySelectorAll(".btt");
function type(typez){
  btt.forEach(function(element) {
        element.addEventListener(typez, function(event){
        event.preventDefault()
        dffg(this.id)
      },false);
  })
}
function dffg(gg){
  let id = gg
  let ele = parseInt(id.replace("play",""))
  tocar(ele)
}
// abaixando o vulume do hihat qundo tocado qualquer som
function sideChain(){
  hihat.volume = hihat.volume = vol / 2
  setTimeout(()=>{
    hihat.volume=vol
  },500)
}
//theme
function initTheme(){
  switch(temaInfo)
   {
     case null:
     tema(2)
       break;
     case "1":
     tema(1)
       break;
     case "2":
     tema(2)
       break;
     case "3":
     tema(3)
       break;
   }
}
let temacor  = document.getElementById("body1")
function tema(nY){
  switch (nY) {
    case 1:
      {//tema claro
        temacor.style.background  = "#e3e3e3"
        document.getElementById("tema").style.color = "#e3e3e3"
        document.getElementById("temared").style.color ="#e3e3e3"
        document.getElementById("temaclaro").style.color = "#e3e3e3"
        document.getElementById("temaescuro").style.color = "#e3e3e3"
        document.getElementById("visor").style.color = "#e3e3e3"
        document.getElementById("copy").style.color = "rgb(132, 0, 0)"
        document.getElementById("cont").style.filter="saturate(100%)"
        document.getElementById("temaclaro").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("temaescuro").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("tema").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("temared").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("esconder").style.backgroundColor="rgb(148, 25, 25)"
      }
    break;
    case 2:
      {//tema escuro default
        temacor.style.background  = "#1b1b1b"
        document.getElementById("tema").style.color = "#1b1b1b"
        document.getElementById("temared").style.color ="#1b1b1b"
        document.getElementById("temaclaro").style.color = "#1b1b1b"
        document.getElementById("temaescuro").style.color = "#1b1b1b"
        document.getElementById("visor").style.color = "#292929"
        document.getElementById("copy").style.color = "rgb(72, 72, 72)"
        document.getElementById("cont").style.filter="saturate(100%)"
        document.getElementById("temaclaro").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("temaescuro").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("temared").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("tema").style.backgroundColor="rgb(148, 25, 25)"
        document.getElementById("esconder").style.backgroundColor="rgb(148, 25, 25)"
      }
    break; 
    case 3:
      {//tema red
        temacor.style.background = "linear-gradient(159deg, rgba(18,18,18,1) 10%, rgba(43,43,43,1)80%)"
        temacor.style.backgroundAttachment="fixed"
        document.getElementById("tema").style.color = "#e3e3e3"
        document.getElementById("temared").style.color ="#e3e3e3"
        document.getElementById("temaclaro").style.color = "#e3e3e3"
        document.getElementById("temaescuro").style.color = "#e3e3e3"
        document.getElementById("visor").style.color = "#e3e3e3"
        document.getElementById("copy").style.color = "rgb(72, 72, 72)"
        document.getElementById("temared").style.backgroundColor="rgb(25, 25, 25)"
        document.getElementById("cont").style.filter="saturate(0%)"
        document.getElementById("temaclaro").style.backgroundColor="rgb(25, 25, 25)"
        document.getElementById("temaescuro").style.backgroundColor="rgb(25, 25, 25)"
        document.getElementById("tema").style.backgroundColor="rgb(25, 25, 25)"
        document.getElementById("esconder").style.backgroundColor="rgb(25, 25, 25)"
      }
    break;
  }
  hiddenTema()
  localStorage.setItem("tema",`${nY}`)
}
initTheme()