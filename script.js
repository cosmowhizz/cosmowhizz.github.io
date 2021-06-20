var a,b,c,d,e,f,g,h,j,k;
function sun_show() {

  if (a == 1) {
    document.getElementById("sundisplay").style.display = "none";
    return a = 0;
  }
  else {
    document.getElementById("sundisplay").style.display = "inline";
    return a = 1;
  }
}

const clip = document.querySelectorAll('.clip');
for(let i=0;i<clip.length;i++){
  clip[i].addEventListener('mouseenter',function(e){clip[i].play()})
  clip[i].addEventListener('mouseout',function(e){clip[i].pause()})
}

function mercury_show() {

  if (b == 1) {
    document.getElementById("mercurydisplay").style.display = "none";
    return b = 0;
  }
  else {
    document.getElementById("mercurydisplay").style.display = "inline";
    return b = 1;
  }
}

function venus_show() {

  if (c == 1) {
    document.getElementById("venusdisplay").style.display = "none";
    return c = 0;
  }
  else {
    document.getElementById("venusdisplay").style.display = "inline";
    return c = 1;
  }
}

function earth_show() {

  if (d == 1) {
    document.getElementById("earthdisplay").style.display = "none";
    return d = 0;
  }
  else {
    document.getElementById("earthdisplay").style.display = "inline";
    return d = 1;
  }
}

function moon_show() {

  if (e == 1) {
    document.getElementById("moondisplay").style.display = "none";
    return e = 0;
  }
  else {
    document.getElementById("moondisplay").style.display = "inline";
    return e = 1;
  }
}

function mars_show() {

  if (f == 1) {
    document.getElementById("marsdisplay").style.display = "none";
    return f = 0;
  }
  else {
    document.getElementById("marsdisplay").style.display = "inline";
    return f = 1;
  }
}

function neptune_show() {

  if (g == 1) {
    document.getElementById("neptunedisplay").style.display = "none";
    return g = 0;
  }
  else {
    document.getElementById("neptunedisplay").style.display = "inline";
    return g = 1;
  }
}

function jupiter_show() {

  if (h == 1) {
    document.getElementById("jupiterdisplay").style.display = "none";
    return h = 0;
  }
  else {
    document.getElementById("jupiterdisplay").style.display = "inline";
    return h = 1;
  }
}
function saturn_show() {

  if (j == 1) {
    document.getElementById("saturndisplay").style.display = "none";
    return j = 0;
  }
  else {
    document.getElementById("saturndisplay").style.display = "inline";
    return j = 1;
  }
}

function uranus_show() {

  if (k == 1) {
    document.getElementById("uranusdisplay").style.display = "none";
    return k = 0;
  }
  else {
    document.getElementById("uranusdisplay").style.display = "inline";
    return k = 1;
  }
}


