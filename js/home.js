$(document).ready((e) => {
    let navbar,
        sticky
    $(".personal__navbar-list li").click((e) => {
        $(".active-item").removeClass("active-item");
        $(e.currentTarget).addClass("active-item");
        $(".active-modal").toggleClass("active-modal hidden-modal")
        $("." + $(e.currentTarget).attr("id") + "-modal").toggleClass("active-modal hidden-modal");



    })
    $("#express").click(() => {
        navbar = document.getElementById("courselist");
        sticky = navbar.offsetTop;
    })
    console.log(sticky, window.pageYOffset)
    $(".lessons-item").click((e) => {
        $(".active-list").removeClass("active-list");
        $(e.currentTarget).addClass("active-list");
        $(".active-block").removeClass("active-block");
        $(".active-part").removeClass("active-part");
        let block = +$(e.currentTarget).attr("id")[1],
            part = +$(e.currentTarget).attr("id")[2];
        $(".block-" + block).addClass("active-block");
        $(".block-" + block + " .part-" + part).addClass("active-part");
        $(window).scrollTop(sticky);


    })


    $(window).scroll(() => {
        if (window.pageYOffset >= sticky) {
            $(navbar).css("top", window.pageYOffset - $(navbar).height() / 2 - 7);
        } else {
            $(navbar).css("top", 0)
        }
    })


    $("#next").click(() => {
        switch ($(".active-list").attr("id")) {
            case "p14":
                $("#p21").click()
                break;
            case "p29":
                $("#p31").click()
                break;
            case "p33":
                break;
            default:
                let newID = "#p" + $(".active-list").attr("id")[1] + (+$(".active-list").attr("id")[2] + 1);
                $(newID).click();
                console.log(newID);
                break;
        }
    })

    $(".openmodal").click((e) => {
        e.preventDefault();
        $(".modal__row").fadeIn(300);
        $(".paragraph-bold").eq(0).click();
    })
    $(".modal button").click(() => {
        $(".modal__row").fadeOut(300);
        $(".hidden-modal").fadeOut(300);
    })


})