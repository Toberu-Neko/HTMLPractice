
window.addEventListener("load", ()=>{
    document.getElementById("navbar").style.backgroundColor = "rgba(1,63,51,1)";
    document.getElementById("navbar").style.padding = "30px 10px";
    document.querySelector("body").classList.add("loaded");
})


window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
      if (document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.backgroundColor = "rgba(1,63,51,0.72)";
        document.getElementById("navbar").style.padding = "10px 20px";
          document.getElementById("logo").style.width = "45px";
          document.getElementById("mob").style.top = "15px";
      } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(1,63,51,1)";
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("logo").style.width = "65px";
        document.getElementById("mob").style.top = "32px";
      }
}


var input = document.getElementById("input");
var output = document.getElementById("output");
var transfer = document.getElementById("transfer");
transfer.addEventListener("click", function(){
    output.value = input.value;
})