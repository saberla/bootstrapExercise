$(document).ready(function () {

    /********  滚动滚动条时改变导航栏样式************/
      $(document).scroll(function(){
        var scrollHeight = $(document).scrollTop();
        if(scrollHeight>=325){
            $(".navbar").css({
                backgroundColor : "rgb(88,88,88)",
                marginTop : 0,
                transitionDuration: "1s",
                height : "50px"
            });
            $(".navbar-nav").css({
                backgroundColor: "rgb(88,88,88)",
                transitionDuration: "3s",
            })
        }
        else if(scrollHeight<325){
            $(".navbar").css({
                backgroundColor : "transparent",
                marginTop : "16px"
            }); 
            $(".navbar-nav").css({
                backgroundColor: "transparent",
                transitionDuration: "1s",
            })
        }
        // console.log(scrollHeight);
    })

    /*************滚动监听 页面切换 */
    // var a = $(".nav-item>a");
    // a.click(function(){
    //     $("p").delay(1000).animate(
    //         {fontSize : "166px"}
    //     );
    // })
    
});