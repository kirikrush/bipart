$(document).ready(() => {
    let active = $("#programm"),
        activeClass = $(active).attr("id");
    $(".platform-round").click(e => {
        if (active != e.currentTarget) {
            {
                $(active).toggleClass("active");
                $("." + activeClass).fadeOut("300");
                active = e.currentTarget;
                $(active).toggleClass("active");
                activeClass = $(active).attr("id");
                setTimeout(() => {
                    $("." + activeClass).fadeIn(300)
                }, 500);
            }
        }


    })
    activeSlide=$("#s0")
    $(".controll").click(e=>{
        activeSlide.toggleClass("current");
        activeSlide=$(e.currentTarget);
        multiplicator = +activeSlide.attr("id").split("s")[1]
        shift=multiplicator*(131.9+$(".feedback").width());
        $(".feedback").css("left",-shift+"px")
        console.log($(".offset-1").css("margin-left").split("px")[0], shift);
    })



})