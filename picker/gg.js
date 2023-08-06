var meucu=""
var imagem="";
var container = document.getElementById("cont");
var canvasEl = document.getElementById('colorCanvas');
var visor = document.getElementById('visor');
var rgb = document.getElementById('rgb')
var capacity = document.getElementById('capacity')
var cpp = localStorage.getItem("opppaxity")
var color2=localStorage.getItem('mcolor')
var image = ""
var backq = document.getElementsByClassName("back")
capacity.style.background=`linear-gradient(270deg, rgba(${color2}1) 0%, rgba(255,255,255,0) 100%)`
rgb.innerHTML = `rgba(${color2}${capacity.value})`
backq[0].style.background=` linear-gradient(180deg, rgba(255,255,255,1)50%, rgba(${color2}1) 50%` 
var canvasContext = canvasEl.getContext('2d');
function initColorPicker() {
  mcolor = localStorage.getItem('mcolor')
  visor.style.backgroundColor =`rgba(${color2+cpp})`  
  rgb.style.color =`rgba(${color2+cpp})` 
  rgb.innerHTML=`rgba(${color2+cpp})` 
}; 

canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
image = new Image();
image.src=`
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACshJREFUeNrsnWGaozYSQBG477SHmCvurfJ/zpFkjFZUqYqSQNjt9iST7Hufm8aAMRJPpZLs/jrlnCeAd5MQCxALEAsQi1oAxALEAsQCQCxALEAsAMQCxALEAkAsQCxALADEAsQCxAJALEAsQCwAxALEAsQCQCxALEAsAMQCxALEAkAsQCxALADEAsQCxAJALEAsQCwAxALEAsQCQCxALEAsAMQCxALEAkAsQCxALADEAsQCxAJALEAsQCwAxALEAsQCQCxALEAsAMQCxALEAkAsQCxALADEAsQCxAJALEAsQCznvyn9UoX8z2+//VLX8+3bt1/qer5///72c860LfgZIBYgFiAWIBYAYgFiAWIBIBYgFiAWAGIBYgFiASAWIBYgFgBiAWIBYgEgFiAWIBYAYgFiAWIBIBYgFiAWAGIBYgFiASAWIBYgFgBiAWIBYgEgFiAWIBYAYgFiwb+V2xvOEf4bD//yCb4gVqePPds2IxZ8TiwxJsd1dcjXy8+6bk/WlWr9ZxEDRXrTf267PfuGMSzpL5XJlptV60a+37lV/1yx3qXX4P8VenzyvdlCUzTJfCoybav3e3mU9fXPP+9l+eNHfciWTbqyXbbcbde9bNe9epicZzuDnjzH2Lj93oo7z1u5U8ql8POsKxvLknxLOWZZZllPsl6W24os59tNN25Pyy596BnmOWullgPK25ZVr4FDXfvzckSWK96KsF3+vT4N+BattLvE9Rzwgur7y0+a5fplsS1vt1v5NS8bZctyxm37ufneWVi04LJRCjdrnemKbtnfOixfVq0Vy8NS1+XtUuUp+qQS6EPNMGnuf/zh6mxbylLsuctKf4x5pnbWM8tNzXJ3N1e0bHL7J6+Fsm5VX+1ZlnLkLMfMurcsRZ1am6rR7TapiGW7HqDHyw3IatXTtVl9qQZtYulqb5hsv4t8u15yA9w/tbkmFVLpVSz1wEpRfkV7inDq08fHhz79KBtk47zo793EuUX1ctUc9+m0Eh7WzO0ii+qjlEcRi1La8RUtdLkGh8rjh3hzt6e+vT4tL5GNLmW2+zFrDLBbWzxY1S2NVdIakqzrtWmg8nu8eWMhx+sl6UOCVjmPP527GhSDL6w62SgqlLe/6yk0rMqyPHLYUk8uW1arVY1z2VaqoH2wnvwqZ4s0s7SBqo7YVBYfwu2MY2xT0049c7myV2AbxvKjhpfiUO40N28ClVplSu2xSswoEeiuJv3++10C0q6UGebrObywdoL2FlqC8mSWOz1ZF+YRS/u1pAGpbJSuTWtE49De/VkfN8lD+5Ep9n3y2A8u2ql/o/o6q0rVIluUukvI0rLUoLV6zKq7tvJqqPPYpm5Jo/1R8lQ7pyqWbUjkN9j6/+2aFw9drVWdZB7eloFlnWHHGBYj2W78WZ3sEauLVTFDV8uaHlBXwqOaEbTL/vJYF3LRRYVVTqhdmnZnW9YvbVqvZJHtsyQ9U2xJpbPTk3jXFpybQi7lvdtkIiZPqjzfkgBWsy475/SwBwwHJAmcmy4W87Y7bd1iOfdqKWP5WXxdZYpuWR5WzrZoVmCyRrF0vaovx8zliPK+foB2rzaW2prx7VYeP0So4lp536qX9KeF7biyKefZ8rCt3wh6zZbIepFrRxES8a7J3U56QDs6xxxrPEe13wntp+RyS6lKgbc4YY7qJZYCrKUkEqJm6UNXt1OGkzVP11Np7NksW2qj8UDlYlna7nuzZl2ey5uFepLi0KRVZhnYnshr93op1mjHLDdDS73aTVW3tiJ7QCqeWWd3q/uzp2fqVqmBcrNjXu8vmQbRa5aU3AOPx1E/+V0abY0ufh9LVWidG2LX9i5+Em3P66Hg6tZF53i7mElPepv9UsI11UGZRhrJeGZxqAahUkhLj1IwKXuO76M/7wFLZXnGWlY0PVerNHRZt5g8W7elHpm0LqwrTCZKXVGBvLuM3atJFjvcixB1MipUpCqWOBIM0mi3uEqTi7e8zfu3FauDNYfeUFf0FkiEktGMay2V0ORKIYdaJA/zAeZ+wRJlsySvW4gqzV4bf7mhdh2z7gq5QbLGr5p66JriyL0MYM/jfDBJM7i9N9URU7lEcSi3FpdL3xpoKUaRSXyqvaQ5tFrOkb3r9LZoI3BvCz4S3DtTHw96wu7Zle4Ny2zdZ+3jNIaVl2vKZYnw7pkeqQ0mNrRDnc6tZ6tdfNTkxJ521xryJ3+6aoUfnmqV6O1WpXST909x+sBT++Vg2txOQMTBzdQW2d/Xg1OTZgaherd0dJXtWqfxeDA6PsUZLO/IYjpvK1UjaapNNubrIVeb2skcH0bVoZ/1jJNGSmujNf2KYzqfu7IG6hbWns7jVjjSY6F3hemlOcY9UFmVdYEnjPkaPJHKlpnkcJ6pvcc5DOE9e50kQ0rRL1tRyXTgot4tYcvS2uZGpuMg8SyRj7NuTYiJWeE0mhGNw8M449Ca4dFoivZ0yX5npz+N8/hdRx4jaEjmqgG2RQ2b3CSbdEg+DaaZliUOU+hS6yl96tW1PuhzoVyXFU1tWJqiQ7nbVnvAbnucbqg1EzOkw2A1nRKmwdwRnzqOcwwukwc9z9xT23r3kan51It1Md0Q3eoki7MPTQALy8mm+7qZ+qmTyatMzzn6PKlLnC2o5LC+e+YtyYxpuk5LDf1VPpqbBpOBz0w65PBZhSbgHsN0o67UGSw/zKbiclcbx+L7vTi4ldrGlroJiZFw0bmwEuOT6+jdxfFNTisk7TPvD92KM1tWL40WB3vOl4fPGZuTdEqFj1OyX2soTbO0OfpOtZPw5oZ5fYWDn9FqivdY5Qh5Tww4+0zNoXFWzw6dQ1/h7Wdr+TgyPYscqS1aZ0RNEoJ/s9VP7PamY+cX3mUUrlqxjm4N9Oo+5OmzsU6d7usPrZpT19W27+g3bDi86JqLly0Gnla+ODPSuNUd+cWPc49+hE+oYvvJXUm7thXiU24n+ptlF8vPsp+RFk0HN01Dk9qsqjP4aNXUJ/zP6NUl+AM5+kA4sqf7+k37tcEp5vKtTDl8ynHadnM3LxxqIce5t+Ns51e86j4ZO365qDumnUTMD+9C1w8e72jUq1sfTZ2fajdOz6NJI6sG3244JDfdxuvvZp18E+PsU8iTbvf4/Y2uEsdfNDga1n3ENhSoO9XpmQeJ/MnxAyH6uorBuAtIF7fg4SUdinyhWu/BuHc7TaQefpCahl8m7r4lOth+2s7O66vdm8fvmA/VlNtppPPJOo9G15a8Lz71b3F2/Rf5a35U9tG92JO865IOPsi7CDPnT8e7rs75+FvqF61nHO2eqqCHx3/9Zg+a8vOvei3TOm+TF61ufEB6un7S0yVKn3Hxut5GjTN97s8fDgc/Vu0FX9/O2eTyKyd5sk98KNZfXg/pM+0nveOw9Prf1YxfmF994ZtlOk2DftVvB3+uDl8Q6+vfNv5MaE9v/oOtL5wt/5xmmi+/lfDOznc01PgLQvLPi3Ov6pj+/r8EPB1I/z/ErWP2/VwN5IfZ1atp6Dsrnj8xBcQCxALEohYAsQCxALEAEAsQCxALALEAsQCxABALEAsQCwCxALEAsQAQCxALEAsAsQCxALEAEAsQCxALALEAsQCxABALEAsQCwCxALEAsQAQCxALEAsAsQCxALEAEAsQCxALALEAsQCxABALEAsQCwCxALEAsQCu+Z8AAwCZ+r2rHy5oRAAAAABJRU5ErkJggg==
`
image.onload = () => {
  canvasEl.width = image.width
  canvasEl.height = image.height
  canvasContext.drawImage(image, 0, 0, image.width, image.height)
  canvasEl.onclick = function(mouseEvent) 
  {

    const rect = canvasEl.getBoundingClientRect();
    const scaleX = canvasEl.width / rect.width;
    const scaleY = canvasEl.height / rect.height;
    const x = (mouseEvent.clientX - rect.left) * scaleX;
    const y = (mouseEvent.clientY - rect.top) * scaleY;
    var imgData = canvasContext.getImageData(x,y, 1, 1);
    var rgba = imgData.data;
    visor.style.backgroundColor =  "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + capacity.value + ")"
    rgb.style.color =  "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + rgba[3] + ")"
    color = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + capacity.value + ")"
    rgb.innerHTML=color 
    color2 = `${rgba[0]},${rgba[1]},${rgba[2]},`
    capacity.style.background=`linear-gradient(270deg, rgba(${color2}1) 0%, rgba(255,255,255,0) 100%)`
    backq[0].style.background=` linear-gradient(180deg, rgba(255,255,255,1)50%, rgba(${color2}1) 50%`
    localStorage.setItem('mcolor',color2)
  }
}
capacity.addEventListener('input',changepacity)
 function changepacity(imgData,rgba) {
        rgb.innerHTML = `rgba(${color2}${capacity.value})`
        visor.style.backgroundColor = `rgba(${color2}${capacity.value})`
  
      }
initColorPicker()
function copiar(){
  var rgb1 = document.getElementById('rgb');
  rgb1.select()
  document.execCommand('copy')

inn()
}
function inn(){
  document.getElementById("copiar").innerHTML="COPIED"
  document.getElementById("copiar").style.color=document.getElementById('rgb').value
  setTimeout(()=>{
  document.getElementById("copiar").innerHTML="COPY"
    document.getElementById("copiar").style.color="white"

  },1500)
}
function back(){
  window.location.href="index.html"
}
  function previewImage() {
        var file = document.getElementById("file").files;
        if (file.length > 0) {
            var fileReader = new FileReader();
 
            fileReader.onload = function (event) {
              meucu =  event.target.result
              
              image.src=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvjPIgTTUeaWo2-CtvVpJj4yl3OifY5QzGA&usqp=CAU`
              canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
              image.src=meucu
              
            }; 
 
            fileReader.readAsDataURL(file[0]);
   }
}
  for(let i=1;i<=90;i++){
    const blocks = document.createElement("div")
    blocks.classList.add("block")
    contc.appendChild(blocks)
  }







