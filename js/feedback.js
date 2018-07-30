$(document).ready(() => {
    $(".video-button").click((e) => {
        let src = $(e.currentTarget).parent().attr("data-src");
        let name = $(e.currentTarget).siblings(".video-name").html();
        let comment = $(e.currentTarget).siblings(".video-comment").html();
        $(".modal__row").fadeIn(300);
        $(".modal__row iframe").attr("src", src);
        $(".modal__row .video-name").html(name);
        $(".modal__row .video-comment").html(comment);
    })


    $(".close-modal").click(() => {
        $(".modal__row").fadeOut(300);
        $(".modal__row iframe").attr("src", "");
    })
})