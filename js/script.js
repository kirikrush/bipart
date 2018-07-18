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
    activeSlide = $("#s0")
    $(".controll").click(e => {
        activeSlide.toggleClass("current");
        activeSlide = $(e.currentTarget);
        activeSlide.toggleClass("current");
        multiplicator = +activeSlide.attr("id").split("s")[1]
        shift = multiplicator * (131.9 + $(".feedback").width());
        $(".feedback").css("left", -shift + "px")
        console.log($(".offset-1").css("margin-left").split("px")[0], shift);
    })

    $(".yellow[type=submited]").click((e) => {
        e.preventDefault();
        if (($("#name1").val() != "") && ($("#te1").val() != "") && ($("#mail").val() != "")) {
            $(".first").fadeOut(300);
            $(".step1").toggleClass("activet non-activet");
            $(".step2").toggleClass("activet non-activet");
            setTimeout(() => {
                $(".second").fadeIn(300);
            }, 600)
        }
    })

    $(".step1").click((e) => {
        if ($(e.currentTarget).hasClass("non-activet")) {
            if (($("#name1").val() != "") && ($("#te1").val() != "") && ($("#mail").val() != "")) {
                $(".second").fadeOut(300);
                $(".step1").toggleClass("activet non-activet");
                $(".step2").toggleClass("activet non-activet");
                setTimeout(() => {
                    $(".first").fadeIn(300);
                }, 600)
            }
        }
    })
    $(".step2").click((e) => {
        if ($(e.currentTarget).hasClass("non-activet")) {
            if (($("#name1").val() != "") && ($("#te1").val() != "") && ($("#mail").val() != "")) {
                $(".first").fadeOut(300);
                $(".step1").toggleClass("activet non-activet");
                $(".step2").toggleClass("activet non-activet");
                setTimeout(() => {
                    $(".second").fadeIn(300);
                }, 600)
            }
        }
    })

    $(".yellow[type=submit]").click(()=>{
        console.log($("#check").attr("checked"))
        if($("#check").is(":not(:checked)")){
            return false;
        }
    })

})