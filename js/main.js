(function() {
  let arrayColor = [
    "157,160,0",    "173,133,0",
    "173,78,0",    "168,45,29",
    "114,13,0",    "67,170,42",
    "18,92,0",    "30,139,107",
    "1,109,76",    "33,116,155",
    "0,74,109",    "50,73,173",
    "72,96,201",    "97,57,170",
    "56,13,136",    "179,81,135",
    "158,79,79",    "70,51,51",
    "88,160,126",    "149,160,88"
  ];

  let random = Math.floor(Math.random() * arrayColor.length);
   $(".all").style.backgroundColor = "rgb(" + arrayColor[random] + ")";

  function color(el) {
    let j = el.split(",");
    let partColor1 = j[0] - 7;
    let partColor2 = j[1] - 12;
    let partColor3 = j[2] > 20 ? j[2] - 15 : j[2];
    $(".aboutUs").style.backgroundColor =
    "rgb(" + partColor1 + "," + partColor2 + "," + partColor3 + ")";
    
    $(".footer").style.backgroundColor =
    "rgb(" + partColor1 + "," + partColor2 + "," + partColor3 + ")";

  }

  color(arrayColor[random]);
})();

window.onload = function() {
  $(".yy").classList.add("yy2");

  setTimeout(() => {
    $(".vv").classList.add("vv2");
  }, 200);

  setTimeout(() => {
    $(".cross").style.opacity = "1";
  }, 500);

  setTimeout(() => {
    $(".a").classList.add("fadeTop");
  }, 700);

  window.addEventListener("scroll", scrollHeadndler);
  window.addEventListener("resize", function() {});

  function scrollHeadndler() {
    let top = window.pageYOffset;

    if (top > 100) {
      $(".txt").classList.add("fadeIn");
    }

    if (top > 350) {
      $(".aboutUs").classList.add("fadeIn");
    }
  }
};
