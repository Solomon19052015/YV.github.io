window.onload = function(){
 
  $(".yy").classList.add('yy2');
  $(".vv").classList.add('vv2');
  setTimeout(()=>{
    $(".cross").style.opacity = "1";
  },500)
 

  window.addEventListener("scroll", scrollHeadndler);
window.addEventListener("resize",function(){

});

function scrollHeadndler(){
  let top =  window.pageYOffset;
  console.log(top);
 if(top > 50){
   $(".txt").classList.add("fadeIn");
 }

 if(top > 300){
   $(".aboutUs").classList.add("fadeIn");
 }

 

}

}



