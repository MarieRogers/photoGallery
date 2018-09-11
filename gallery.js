
addImages('data/food.json','#images','food');
addImages('data/nature.json','#images','nature');
addImages('data/cats.json','#images','cats');
addImages('data/sports.json','#images','sports');
SlideImages('data/slideshow.json','#slideshow','slide');

//dynamically adds images to the main portion of the page
function addImages(url, id, name) {
    $.getJSON(url, function (data) {
        $('#checks').append('<label class="container">&nbsp;&nbsp;&nbsp;'+name+'<input id="'+name+'check" class="'+name+'" type="checkbox" checked="checked"><span class="checkmark"></span></label>')
        $(id).append('<div id="'+name+'"></div>');
        data.forEach(function(image) {
            $('#'+name+'').append('<div class="col-lg-4 col-md-6 col-sm-12"><img id="" class="myImg img-responsive" src="images/'+image.url+'" alt="'+image.name+'"/></div>');
            console.log('#'+name+'');
        });
    });
}

//dynamically adds images to the slideshow
function SlideImages(url, id, name) {
    $.getJSON(url, function (data) {
        data.forEach(function(image) {
            $(id).append('<li><img id="'+image.category+'"class="img-responsive" src="images/'+image.url+'" alt="'+image.name+'"/></>');
        });
    });
}

//this allows the check boxes to dictate what sections of images are shown
$('body').on('click','input:checkbox',function(){
    console.log("here");
    if(this.checked) {
        $('#images #'+$(this).prop('class')).fadeIn("slow");
    }
    else {
        $('#images #'+$(this).prop('class')).fadeOut("slow");
    }
});

//this allows the slideshow to be clicked and display the specific selection of images associated with it as well as check/uncheck the correct boxes
function slideshowClick(here){
      $(here).click(function() {
          $('#slideshow li').each(function (idx, li) {
              console.log(idx)
              if(idx==0){
                  console.log("here");
                  $('#'+$(li).find('img').prop('id')+'check').prop('checked',true);
                  console.log('#'+$(li).find('img').prop('id')+'check');
                  $('#images #'+$(li).find('img').prop('id')+'').fadeIn("slow");
                  console.log($('#'+$(li).find('img').prop('id')+''));
              }
              else {
                  console.log("nope");
                  $('#'+$(li).find('img').prop('id')+'check').prop('checked',false);
                  console.log('#'+$(li).find('img').prop('id')+'check');
                  $('#images #'+$(li).find('img').prop('id')+'').hide();
                  console.log('#'+$(li).find('img').prop('id')+'');
              }
          });
      }
)};

//the slide show -- click image to show that specific selection of images   
//basic outline of code for carousel from http://www.my-html-codes.com   
$(document).ready(function(){
        $("#carousel ul").animate({marginLeft:-750},0,function(){
            console.log(this);
            slideshowClick(this);
            console.log(this);
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
		});
        $('#right').click(function(){
            $("#carousel ul").animate({marginLeft:-750},0,function(){
                console.log(this);
                slideshowClick(this);
                console.log(this);
                $(this).find("li:last").after($(this).find("li:first"));
                $(this).css({marginLeft:0});
            });
        });
        $('#left').click(function(){
            $("#carousel ul").animate({marginLeft:-750},0,function(){
                console.log(this);
                slideshowClick(this);
                console.log(this);
                $(this).find("li:first").before($(this).find("li:last"));
                $(this).css({marginLeft:0});
            });
	   });
});

//modal image based on that provided by w3schools
$('body').on('click','.myImg',function(){
    $('#myModal').css("display","block");
    $('.modal-content').prop('src', $(this).prop('src'));
    $('.caption').text($(this).prop('alt'));
});
$('body').on('click','.close',function(){
    $('#myModal').css("display","none");
});
