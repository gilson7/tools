
    var rgba = document.getElementById('rgb')
    var cont =document.getElementById('cont1')
    var red=255
    var green = 255
    var  blue= 255
    var bain = document.getElementById("inpback")
    var opacity=document.getElementById("capacity").value
    var capacity=document.getElementById("capacity")
    var choose_color = document.getElementById("color");
    var visor = document.getElementById("visor")
    var backinp=document.getElementById("contc")
    var mcolor = localStorage.getItem('mcolor')
    var rgbu =mcolor
    var copiar = document.getElementById("copiar")
    var mback=document.getElementById("back")
    

capacity.addEventListener('input',()=>{
        opacity=document.getElementById("capacity").value
        rgbu =`${red},${green},${blue},${opacity}`
        localStorage.setItem('mcolor',`${red},${green},${blue},` )
        localStorage.setItem("opppaxity",opacity)
        rgba.value = `rgba(${rgbu})`


        visor.style.backgroundColor = `rgba(${rgbu})`
        rgba.style.backgroundColor = `rgba(${red},${green},${blue},0.40)`
        mback.style.backgroundColor = `rgba(${rgbu})`
        capacity.style.background= `linear-gradient(270deg, rgba(${red},${green},${blue},1) 0%, rgba(255,255,255,0) 100%)`

})






    choose_color.addEventListener('input',()=>{
        
        hex_code = choose_color.value.split('');
        red = parseInt(hex_code[1]+hex_code[2],16);
        green = parseInt(hex_code[3]+hex_code[4],16);
        blue = parseInt(hex_code[5]+hex_code[6],16);
        capacity.style.background= `linear-gradient(270deg, rgba(${red},${green},${blue},1) 0%, rgba(255,255,255,0) 100%)`
              

        rgbu =`${red},${green},${blue},${opacity}`
        localStorage.setItem('mcolor',`${red},${green},${blue},` )
        localStorage.setItem("opppaxity",opacity)
        rgba.value = `rgba(${rgbu})`
        visor.style.backgroundColor = `rgba(${rgbu})`
        visor.style.borderColor = `rgba(${red},${green},${blue},1)`
        rgba.style.backgroundColor = `rgba(${red},${green},${blue},0.40)`
        cont.style.backgroundColor = `rgba(${red},${green},${blue},1)`
        cont.style.borderColor = `rgba(${red},${green},${blue},1)`
        bain.style.borderColor = `rgba(${red},${green},${blue},1)`
        copiar.style.backgroundColor= `rgba(${red},${green},${blue},1)`
        mback.style.backgroundColor = `rgba(${rgbu})`
        mback.style.borderColor = `rgba(${rgbu})`
        })
    function back(){
  window.location.href="gg.html"
}
document.getElementById("visor").onclick = function(){
    choose_color.click()

}
document.getElementById("copiar").addEventListener('click',copy)
function copy(){
    
    var play3 = document.getElementById("popup")
    play3.style.backgroundColor=`rgba(${red},${green},${blue},0.40)`
     play3.style.borderColor=`rgba(${red},${green},${blue},0.40)`
    var anm = play3.animate([
{filter:'opacity(100%)'}
,{filter:'opacity(0%)'} ], 900,);
   anm.addEventListener('finish', function() {

 })
    
    rgba.select()
    document.execCommand('copy')
    
}