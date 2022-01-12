$(".login-title div").eq(0).css("color","#22c233");
$(".login-title div").click(function(){
    $(this).css("color","#22c233");
    
    $(this).siblings().css("color","#666");
    xuan = $(this).index();
    $(".login-form-con form").eq(xuan).css("display","flex");
    $(".login-form-con form").eq(xuan).siblings("form").hide();
})
