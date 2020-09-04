

$(document).ready(function(){
    $('.header').height($(window).height());



//selects correct modal image based on user click event
var modal = document.getElementById('myModal');

$(".img-thumbnail").on("click", function(e) {
    const imgsrc = $(this).attr("id")
    if (imgsrc.slice(-3) === "png") {
        const caption =  $(this).attr("alt");
        $('#myModal').empty().append('<img class="modal-content " id="modalImg" /> <figcaption class="figure-caption"><figcaption>');
        $("#modalImg").attr("src", imgsrc);
        $('.figure-caption').text(caption);
        modal.style.display = "block";
    }
    else {
        ($('#myModal').empty().append('<video class="modal-content figure-img " id="video" controls autoplay></video> <figcaption class="figure-caption"></figcaption>'));
        ($("#video").append('<source id="vidSource" src="" type="video/mp4" ></source>'))
        $("#vidSource").attr("src", imgsrc)
        const caption =  $(this).attr("alt");
        $('.figure-caption').text(caption);
        modal.style.display = "block";
    }
})


$(".filter").on('click', function() {
  filterTerm = $(this).attr("id");
  if (!$(this).hasClass("clicked")){
    $(this).addClass("clicked");
    $(".imgdiv").each(function() {
      if (!$(this).hasClass(filterTerm)) {
        $(this).css("cssText", "display: none !important")
      }
      else {
        $(this).css("cssText", "display: show")
      }
    })
  }
else {
  $(this).removeClass("clicked");
  $(".imgdiv").each(function() {
    if (!$(this).hasClass(filterTerm)) {
      $(this).css("cssText", "display: show");
  }}
)}
})

//send user a message in console
console.log("%cHi there! Thanks for checking out my source code. Got questions? Suggestions? Comments? Let me know!", 'color:cyan ; fontsize:30px; line-height: 25px; text-align: center; font-weight: bold')



//selects correct projets based on tags

//var containerEl = document.querySelector('.row');

//var mixer = mixitup(containerEl);




//$(".btn").on('click', overrideImportant);


    //if (images[i].attr("display") == "none") {
      //(images[i].attr("display")) = "none !important";
    //}

 // const selection = $(this).attr("id");
  //console.log(selection);
  //if (selection === "python"){
  //  console.log("here")
  //  const pics = document.getElementsByClassName("js");
   // for (let i = 0; i < pics.length; i++){
    //  pics[i].style.display = "hidden";
    //    }
   //  }


//})


  
  


window.onclick = function() {
    if (event.target == modal) {
  modal.style.display = "none";

    }
}

})