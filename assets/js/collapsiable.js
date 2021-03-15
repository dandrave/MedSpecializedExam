$(document).ready(function () {
    $(".collapsible").click(function () {
        if($(this).hasClass("active")){
            $(".navigation-menu,.collapsible").removeClass("active");
        }
        else{
            
            $(".navigation-menu,.collapsible").addClass("active");
        }
    })
    
})

$('.eyelash').click(function(){
    var type = $('.input-password').attr('type');
    if (type == 'password') {
         $('.input-password').attr('type','text');
     }else{
         $('.input-password').attr('type','password');
     }
   
   
})