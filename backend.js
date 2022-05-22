//start animations when webpage is loaded
function startAnimation(anchor, section){
    document.getElementById(anchor).className += section;
}
document.onload = startAnimation("anchorKezdooldal", " section1");
document.onload = startAnimation("anchorBemutatkozas", " section3");
document.onload = startAnimation("anchorArak", " section4");
document.onload = startAnimation("anchorElerhetoseg", " section5");

