function hideAndShowNav(){
    var x = document.getElementById('myTopNav');
    if(x.className === "dropdown-list"){
        x.className += " responsive";
    }else{
        x.className = "dropdown-list"
    }
}

var navMenuAnchorTags = document.querySelectorAll(".dropdown-list a");

var interval;

for (var i = 0; i < navMenuAnchorTags.length; i++) {
  navMenuAnchorTags[i].addEventListener("click", function (event) {
    event.preventDefault();

    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionID);
    // console.log(targetSectionID);

    // interval = setInterval(scrollVertically, 20, targetSection);

    interval = setInterval(function(){
        scrollVertically(targetSection);
    }, 20);

  });
}

function scrollVertically(targetSection) {
  var targetSectionCoordinates = targetSection.getBoundingClientRect();
  if (targetSectionCoordinates.top <= 0) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 50);
}


// adding animation on the skills section

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone = false;

function initializeBars(){
  for(let bar of progressBars){
    bar.style.width = 0 + '%';
  }
}

initializeBars();

function fillBars(){

  for(let bar of progressBars){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function(){
      if(currentWidth > targetWidth){
        clearInterval(interval);
        return;
      }
      currentWidth++;
      bar.style.width = currentWidth + '%';
    }, 4);
  }

}

function checkScroll(){

    // checking whether skill container is visible or not

    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
      animationDone = true;
      console.log('Skills Section Visible');
      fillBars();
    }else if(coordinates.top > window.innerHeight){
      animationDone = false;
      initializeBars();
    }


}