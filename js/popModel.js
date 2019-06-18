$(document).ready(function(){
    var clickContent = $(".textArea");
    clickContent.on("click",function(){
        $("body").css("overflow-y","hidden");
        // var body1 = $("body");
        // console.log(body1);
        $(".Pop_up").css("display","block");
    })
    $(".close_btn").on("click",function(){
        $(".Pop_up").css("display","none");
        $("body").css("overflow-y","auto");
    })
    $(".closeBtn").on("click",function(){
        $(".Pop_up").css("display","none");
        $("body").css("overflow-y","auto");
    })
})