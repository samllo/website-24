
document.getElementById("fauxSite").innerHTML = `
<h2> EYYYY </h2>`


const colourButton = document.getElementById("colourButton");

colourButton.addEventListener("click", textColSwap);

function textColSwap(){
  let text = document.getElementsByClassName("textClass");

  for (var i = 0; i < text.length; i++) {
    text[i].style.color = "blue";
  }

}
