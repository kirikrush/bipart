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
    activeSlide = $("#s2")
    let activeCunt = 3;

    $(".controll").click(e => {
        activeCunt = +activeSlide.attr("id")[1] + 1;
        console.log(`.feedback:nth-child(` + activeCunt + `)`);
        $(`.feedback:nth-child(` + activeCunt + `)`).toggleClass("active-feedback");
        activeSlide.toggleClass("current");
        activeSlide = $(e.currentTarget);
        activeCunt = +activeSlide.attr("id")[1] + 1;
        $(`.feedback:nth-child(` + activeCunt + `)`).toggleClass("active-feedback");
        activeSlide.toggleClass("current");
        multiplicator = +activeSlide.attr("id").split("s")[1]
        shift = multiplicator * (131.9 + $(".feedback").width());
        $(".feedback").css("left", -shift + "px")
        console.log($(".offset-1").css("margin-left").split("px")[0], shift);
    })
    $("#s2").click();
    $("#next").click(() => {
        if (activeCunt < 5) {
            $("#s" + (activeCunt)).click();
        }
    })

    $("#prev").click(() => {
        if (activeCunt > 1) {
            $("#s" + (activeCunt - 2)).click();
        }
    })

    $(".yellow[type=submited]:not(.secyellow)").click((e) => {
        e.preventDefault();
        error = 0;
        if ($("#name1").val() == "") {
            error = 1;
            $("#name1").val("");
            $("#name1").hasClass("error") ? console.log : $("#name1").toggleClass("error");
        } else {
            $("#name1").hasClass("error") ? $("#name1").toggleClass("error") : console.log
        }
        if ($("#tel1").val() == "") {
            error = 3;
            $("#tel1").val("");
            $("#tel1").hasClass("error") ? console.log : $("#tel1").toggleClass("error");
        } else {
            $("#tel1").hasClass("error") ? $("#tel").toggleClass("error") : console.log
        }
        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (!pattern.test($("#mail1").val())) {
            error = 4;
            $("#mail1").val("");
            $("#mail1").hasClass("error") ? console.log : $("#mail1").toggleClass("error");
        } else {
            $("#mail1").hasClass("error") ? $("#mail1").toggleClass("error") : console.log
        }
        if (!error) {
            $(".first:not(.hid)").fadeOut(300);
            $(".step1:not(.step3)").toggleClass("activet non-activet");
            $(".step2:not(.step4)").toggleClass("activet non-activet");
            setTimeout(() => {
                $(".second:not(.dih)").fadeIn(300);
            }, 600)
        }
    })

    $(".step1:not(.step3)").click((e) => {
        if ($(e.currentTarget).hasClass("non-activet")) {
                $(".second:not(.dih)").fadeOut(300);
                $(".step1:not(.step3)").toggleClass("activet non-activet");
                $(".step2:not(.step4)").toggleClass("activet non-activet");
                setTimeout(() => {
                    $(".first:not(.hid)").fadeIn(300);
                }, 600)
        }
    })
    $(".step2:not(.step4)").click((e) => {
        
    $(".yellow[type=submited]:not(.secyellow)").click();
    })

    $(".yellow[type=submit]").click(() => {
        console.log($("#check").attr("checked"))
        if ($("#check").is(":not(:checked)")) {
            return false;
        }
    })

    $(".secyellow").click((e) => {
        e.preventDefault();
        e.preventDefault();
        error = 0;
        if ($("#name2").val() == "") {
            error = 1;
            $("#name2").val("");
            $("#name22").hasClass("error") ? console.log : $("#name2").toggleClass("error");
        } else {
            $("#name2").hasClass("error") ? $("#name2").toggleClass("error") : console.log
        }
        if ($("#tel2").val() == "") {
            error = 3;
            $("#tel2").val("");
            $("#tel2").hasClass("error") ? console.log : $("#tel2").toggleClass("error");
        } else {
            $("#tel2").hasClass("error") ? $("#tel2").toggleClass("error") : console.log
        }
        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (!pattern.test($("#mail1").val())) {
            error = 4;
            $("#mail2").val("");
            $("#mail2").hasClass("error") ? console.log : $("#mail2").toggleClass("error");
        } else {
            $("#mail2").hasClass("error") ? $("#mail1").toggleClass("error") : console.log
        }
        if (!error) {
            $(".hid").fadeOut(300);
            $(".step3").toggleClass("activet non-activet");
            $(".step4").toggleClass("activet non-activet");
            setTimeout(() => {
                $(".dih").fadeIn(300);
            }, 600)
        }
    })

    $(".step3").click((e) => {
        if ($(e.currentTarget).hasClass("non-activet")) {
            if (($("#name2").val() != "") && ($("#te2").val() != "") && ($("#mail2").val() != "")) {
                $(".dih").fadeOut(300);
                $(".step3").toggleClass("activet non-activet");
                $(".step4").toggleClass("activet non-activet");
                setTimeout(() => {
                    $(".hid").fadeIn(300);
                }, 600)
            }
        }
    })
    $(".step4").click((e) => {
        $(".secyellow").click();
    })

    $(".yellow[type=submit]").click(() => {
        console.log($("#check").attr("checked"))
        if ($("#check").is(":not(:checked)")) {
            return false;
        }
    })

    $(".round").mouseenter((e) => {
        $(e.currentTarget).toggleClass("buzz");
        let that = $(e.currentTarget);
        setTimeout(() => {
            that.toggleClass("buzz");
        }, 2000);
    })

    $(".callback").mouseenter((e) => {
        $(e.currentTarget).toggleClass("wave");
        let that = $(e.currentTarget);
        setTimeout(() => {
            that.toggleClass("wave");
        }, 700);
    })


    $(".yellow").mouseenter((e) => {
        $(e.currentTarget).toggleClass("wave-yellow");
        let that = $(e.currentTarget);
        setTimeout(() => {
            that.toggleClass("wave-yellow");
        }, 700);
    })


    $(".header button.callback, .top__layer button.callback").click(() => {
        $(".modal-container, .modal-registration").fadeIn(200);
    })
    $(".modal-container").click(() => {
        $(".modal-container").fadeOut(200);
        $(".modal").fadeOut(200);
    })
})