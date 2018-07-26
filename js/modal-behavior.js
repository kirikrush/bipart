$(document).ready(() => {
    let error = 0;
    $(".reg .submit").click((e) => {
        e.preventDefault();
        error = 0;
        if ($("#name").val().trim() == "") {
            error = 1;
            $("#name").val("");
            $("#name").hasClass("error") ? console.log : $("#name").toggleClass("error");
        } else {
            $("#name").hasClass("error") ? $("#name").toggleClass("error") : console.log
        }
        if ($("#tel").val().trim() == "") {
            error = 3;
            $("#tel").val("");
            $("#tel").hasClass("error") ? console.log : $("#tel").toggleClass("error");
        } else {
            $("#tel").hasClass("error") ? $("#tel").toggleClass("error") : console.log
        }
        let pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if (!pattern.test($("#mail").val())) {
            error = 4;
            $("#mail").val("");
            $("#mail").hasClass("error") ? console.log : $("#mail").toggleClass("error");
        } else {
            $("#mail").hasClass("error") ? $("#mail").toggleClass("error") : console.log
        }
        if (!error) {
            $(".reg").fadeOut(300);
            setTimeout(() => {
                $(".validate").fadeIn(300);
            }, 300)
        }
        console.log(error)
    })


    $(".paragraph-bold").click((e) => {
        if ($(e.currentTarget).next().hasClass("active-paragraph")) {
            $(".active-paragraph").slideUp(300);
            $(".active-paragraph").removeClass("active-paragraph");
        } else {

            $(".active-paragraph").slideUp(300);
            $(".active-paragraph").removeClass("active-paragraph");
            $(e.currentTarget).next().slideDown(300);
            $(e.currentTarget).next().addClass("active-paragraph");
        }
    })


    $("#deposit").click((e) => {
        e.preventDefault();
        $(".validate").fadeOut(300);
        setTimeout(() => {
            $(".help").fadeIn(300);
            $(".paragraph-bold").eq(0).click();
        }, 300)

    })

    $("#auth").click((e) => {
        e.preventDefault();
        $(".reg").fadeOut(300);
        setTimeout(() => {
            $(".auth").fadeIn(300);
        }, 300)

    })

    $(".help button").click(() => {
        $(".help").fadeOut(300);
        setTimeout(() => {
            $(".validate").fadeIn(300);
        }, 300)
    })


    $(".validate .submit").click((e) => {
        e.preventDefault()
        if ($("#id").val().trim() != "") {
            $(".validate").fadeOut(300);
            setTimeout(() => {
                $(".success").fadeIn(300);
            }, 300)
        } else {
            $("#id").toggleClass("error");
        }

       
    })


    $(".register").click((e)=>{
        e.preventDefault();
        $(".auth").fadeOut(300);
            setTimeout(() => {
                $(".reg").fadeIn(300);
            }, 300)
    })

    $(".sendpas").click((e)=>{
        e.preventDefault();
        $(".auth").fadeOut(300);
        setTimeout(() => {
            $(".remind").fadeIn(300);
        }, 300)
    })
});