$(document).ready(function(){
    $('.header').height($(window).height());

 

  // create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!

$(".img-thumbnail").on("click", function(e) {
    imgsrc = $(this).attr("id")
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



  
  //else {
        //console.log("here");
        //console.log(img.id);
        //img.onclick = function(e) {
          //  console.log(img.id);
         //   console.log(2);        
         //   var video = $('<video />', {
          //      id: 'video',
           //     class: "modal-content",
           //     controls: true
          //  });
          //  ($('#myModal').empty().append(video));

          //  if (img.id === 'shape'){
          //      console.log("4");
          //      $("#video").empty();
         //       $("#video").append('<source src="shapePlayer.mp4" type="video/mp4"></source>' );
         //   }
         //   if (img.id === 'turtle'){
         //       console.log("5");
          //      $("#video").empty().append('<source src="pythonTurtle.mp4" type="video/mp4"></source>' );
         //   }
         //   $("#video")[0].autoplay = true;
         //   modal.style.display = "block";
  //}
//}
//}


window.onclick = function() {
    if (event.target == modal) {
  modal.style.display = "none";

    }
}

})