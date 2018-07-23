$(document).ready((e) => {
    $(".personal__navbar-list li").click((e) => {
        $(".active-item").removeClass("active-item");
        $(e.currentTarget).addClass("active-item");
        $(".active-modal").toggleClass("active-modal hidden-modal")
        $("." + $(e.currentTarget).attr("id") + "-modal").toggleClass("active-modal hidden-modal");
    })
    $(".lessons-item").click((e)=>{
        $(".active-list").removeClass("active-list");
        $(e.currentTarget).addClass("active-list");
    
    
    })


})