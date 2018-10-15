window.onload = function(){
 
  $(".yy").classList.add('yy2');
  
  
  

  setTimeout(()=>{
    $(".vv").classList.add('vv2');
 },200)
 
  setTimeout(()=>{
    $(".cross").style.opacity = "1";
  },500)
 
  setTimeout(()=>{
    $(".a").classList.add("fadeTop");
  },700)
 

  window.addEventListener("scroll", scrollHeadndler);
window.addEventListener("resize",function(){

});

function scrollHeadndler(){
  let top =  window.pageYOffset;
  console.log(top);
 if(top > 100){
   $(".txt").classList.add("fadeIn");
 }

 if(top > 350){
   $(".aboutUs").classList.add("fadeIn");
 }

}

}



