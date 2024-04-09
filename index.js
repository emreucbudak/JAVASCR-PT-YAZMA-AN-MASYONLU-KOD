let deneme = "Ben Emre Üçbudak";
const denemem = document.querySelector("#deneme");
let deneme2 = "  Web Developer"
let b = 0;
let c = 14;
let d = 0;
function deneme1 () {
  if(b<deneme.length) {
    denemem.textContent += deneme[b];
    b++;
      
  
  }
  else {
    if (d<deneme.length) {
      denemem.textContent = deneme.slice(0,c+1);
      c--;
      d++;
      if(c+2 == 0) {
        b = 0;
        d = 0;
        c = 14;
      }
    }
  }
}
setInterval(deneme1,1000);