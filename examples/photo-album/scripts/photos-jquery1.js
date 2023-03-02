$(document).ready(function () {

    $(".thumb").click(function () {
        
        $("#large-photo").hide();
        $("#photo-title").hide();
        $("#photo-caption").hide();
        
        // Finds the index to get the proper photo
        var id = this.id.split("-")[1];
        
        $("#large-photo").html('<img src="images/' + albumImages[id].displayImage + '" alt="' + albumImages[id].title + '">').fadeIn(800);
        
        $("#photo-title").html(albumImages[id].title).fadeIn(800);
        
        $("#photo-caption").html(albumImages[id].caption).fadeIn(800);
    });
    
    $("#right-nav-thumb i").click(function () {
        var position = $("#carousel").css("left").split("px")[0];
        
        if (position >= 300 - (albumImages.length - 2) * 95) {
            $("#carousel").animate({left: position - 95});   
        }
    });
    
    $("#left-nav-thumb i").click(function () {
        var position = $("#carousel").css("left").split("px")[0];
        
        if (position <= (albumImages.length - 4) * 95) {
            $("#carousel").animate({left: Number(position) + Number(95)});
        }
    });
});