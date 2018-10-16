(function(){
  let date = new Date();
  let arrayColor = ["157, 160, 0","173, 133, 0", "173, 78, 0", "168, 45, 29","114, 13, 0",  "67, 170, 42", "18, 92, 0", "30, 139, 107", "1, 109, 76", "33, 116, 155", "0, 74, 109", "50, 73, 173","72, 96, 201", "97, 57, 170", "56, 13, 136", "179, 81, 135", "158, 79, 79", "70, 51, 51", "88, 160, 126", "149, 160, 88"];
  let hour =  String(date.getHours());
  let random = Math.floor(Math.random() * arrayColor.length);
  $(".all").style.backgroundColor = "rgb(" +  arrayColor[random] + ")";
  for(let  i = 0; i < 1;i++){
   
  }
  /* console.log(parseInt(arrayColor[0])); */


  function color(el){
    let j = el.split(",");
    let newMass = [];
    let color1,color2,color3;
    for(let i =0; i < j.length; i++){
      cl(j[i]);
      let numb = Number(j[i]);
         newMass.push(numb); 
     }
     cl(newMass);
     if(color3 == 0 || color < 20){
      
       let color1 = newMass[0] - 7;
      let color2 = newMass[1] - 12;
      color3 = newMass[2];
      $(".aboutUs").style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";

     }
else{
  let color1 = newMass[0] - 7;
      let color2 = newMass[1] - 12;
      let color3 = newMass[2] - 15;
      $(".aboutUs").style.backgroundColor = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
}
    
   
  }

  color(arrayColor[random]);

})();



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
  
 if(top > 100){
   $(".txt").classList.add("fadeIn");
 }

 if(top > 350){
   $(".aboutUs").classList.add("fadeIn");
 }

}

}



