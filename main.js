$(document).ready(function(){
    $('.header').height($(window).height());
  })

  // create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('img-thumbnail');
// the image in the modal
var modalImg = document.getElementById("modalImg");
console.log(modalImg)



// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(e) {
    console.log("i get here");
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

var span = document.getElementsByClassName("close")[0];

window.onclick = function() {
    if (event.target == modal) {
  modal.style.display = "none";
    }
}

$('#headerVideoLink').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });       