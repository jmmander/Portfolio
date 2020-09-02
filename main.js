

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

var containerEl = document.querySelector('.row');

var mixer = mixitup(containerEl);

//selects correct projets based on tags

function overrideImportant() { 
  $(".imgdiv").each(function() {
    console.log("here")
    if ($(this).context.style.display == "none") {
      $(this).css("cssText", "display: none !important");
      console.log($(this));
    }
  })
}

$(".btn").on('click', overrideImportant);


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