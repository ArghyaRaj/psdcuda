function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){$(".js--services-section").waypoint(function(t){"down"==t?$("nav").addClass("sticky"):$("nav").removeClass("sticky")});mixitup(".container");$("a").on("click",function(t){if(""!==this.hash){t.preventDefault();var n=this.hash;$("html, body").animate({scrollTop:$(n).offset().top},800,function(){window.location.hash=n})}})});



function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}