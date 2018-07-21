$(document).ready(() => {
    let error = 0;
    $(".reg .submit").click((e) => {
        e.preventDefault();
        error = 0;
        if ($("#name").val() == "") {
            error = 1;
            $("#name").val("");
            $("#name").hasClass("error") ? console.log : $("#name").toggleClass("error");
        } else {
            $("#name").hasClass("error") ? $("#name").toggleClass("error") : console.log
        }
        if ($("#surname").val() == "") {
            error = 2;
            $("#surname").val("");
            $("#surname").hasClass("error") ? console.log : $("#surname").toggleClass("error");
        } else {
            $("#surname").hasClass("error") ? $("#surname").toggleClass("error") : console.log
        }
        if ($("#tel").val() == "") {
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
        console.log($(e.currentTarget).siblings());
        $(e.currentTarget).next().slideToggle(300);
    })


    $("#deposit").click((e) => {
        e.preventDefault();
        $(".validate").fadeOut(300);
        setTimeout(() => {
            $(".help").fadeIn(300);
        },300)

    })

    $(".help button").click(()=>{
        $(".help").fadeOut(300);
        setTimeout(() => {
            $(".validate").fadeIn(300);
        },300)
    })


    $(".validate .submit").click((e)=>{
        e.preventDefault()
        if($("#id").val()!=""){
            $(".validate").fadeOut(300);
            setTimeout(() => {
                $(".success").fadeIn(300);
            },300)
        }

        else{
            $("#id").toggleClass("error");
        }
    })
});