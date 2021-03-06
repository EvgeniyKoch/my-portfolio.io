    "use strict";
    var map, 
    login = document.getElementById("log-in"), 
    front = document.querySelector(".user-front"),
    back = document.querySelector(".user-login"), 
    humburger = document.getElementById("navigation__humburger"),
    dropDownMenu = document.querySelector(".menu"), 
    dropDownMenuLeft = document.querySelector(".drop-left"),
    dropDownMenuRight = document.querySelector(".drop-right"), 
    wrapper = document.querySelector('.wrapper'),
    $window = $(window);

    if (document.querySelector("#page-preload") && function () {
        function e() {
            s++, c.innerHTML = 100 / t * s << 0, 100 / t * s >= 100 && (c.innerHTML = "100"), s >= t && setTimeout(function () {
                l.classList.contains("done") || (l.classList.add("page-preload_done"), o.classList.add("welcome-page_show"))
            }, 500)
        }

        for (var i = document.images, t = i.length, s = 0, l = document.getElementById("page-preload"),
                 c = document.getElementById("load-perc"), o = document.getElementById("welcome-page"),
                 a = 0; a < t; a++) {
            var d = new Image;
            d.onload = e, d.onerror = e, d.src = i[a].src
        }
        e()
    }(), 
    
    document.querySelector(".welcome-page") && $(window).resize().width() > "768") {
    var parallaxContainer = document.getElementById("parallax"), 
        layers = parallaxContainer.children,
        moveLayers = function (e) {
            var i = window.innerWidth / 2 - e.pageX, 
                t = window.innerHeight / 2 - e.pageY;
            [].slice.call(layers).forEach(function (e, s) {
                var l = s / 40, c = i * l, o = t * l, a = window.innerHeight / 2 * l,
                    d = "translate(" + c + "px," + o + "px)", n = e.firstElementChild;
                e.style.transform = d, n.style.bottom = "-" + a + "px"
            });
        };
    $(document).ready(function () {
        $(window).width() <= "768" && ($("#parallax").css("display", "none"),
         $(".welcome-page").addClass("welcome-page-tablets"))
    }), 

        window.addEventListener("mousemove", moveLayers) 

    }
    document.querySelector(".saidbar__item") && $(document).ready(function () {
        for (var e = document.getElementsByClassName("saidbar__item"), i = "saidbar__item-active", t = 0; t < e.length; t++)e[t].addEventListener("click", function () {
            if (this.classList.contains(i)) this.classList.remove(i); else 
            for (var t = 0; t < e.length; t++)e[t].classList.remove(i), this.classList.add(i)
        });
    });

if (login ? login.addEventListener("click", function () {
        front.style.cssText = "transform: rotateY(180deg) translate(50%,-50%);         backface-visibility: hidden;         transition: 1s; ", back.style.cssText = "transform: translate(-50%, -50%);  ", login.style.display = "none"
    }) : humburger.addEventListener("click", function () {
        wrapper.style.overflow = 'hidden';
        humburger.classList.contains("navigation__humburger_active") ? (humburger.classList.remove("navigation__humburger_active"), dropDownMenu.classList.remove("menu_active"), dropDownMenuLeft.classList.remove("drop-left_active"), dropDownMenuRight.classList.remove("drop-right_active")) : (humburger.classList.add("navigation__humburger_active"), dropDownMenu.classList.add("menu_active"), dropDownMenuLeft.classList.add("drop-left_active"), dropDownMenuRight.classList.add("drop-right_active"))
    }), $(".arrow-scroll , .arrow-scroll_up, .saidbar__link").on("click", function (e) {
        e.preventDefault();
        var i = $(this).attr("href"), t = $(i).offset().top;
        $("body,html").stop().animate({scrollTop: t}, 1e3)
    }), document.querySelector("#map"))var initMap = function () {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {lat: 51.690372, lng: 39.252002},
        zoom: 14,
        styles: [{
            featureType: "administrative.country",
            elementType: "labels.text",
            stylers: [{color: "#737373"}, {weight: "0.01"}]
        }, {
            featureType: "landscape",
            elementType: "all",
            stylers: [{saturation: "97"}, {color: "#ffffff"}, {visibility: "simplified"}, {lightness: "81"}]
        }, {
            featureType: "landscape.natural.landcover",
            elementType: "all",
            stylers: [{saturation: "100"}, {lightness: "100"}, {gamma: "10.00"}]
        }, {
            featureType: "poi",
            elementType: "all",
            stylers: [{saturation: "100"}, {lightness: "100"}, {gamma: "10.00"}, {weight: "0.01"}]
        }, {
            featureType: "poi.attraction",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "poi.business",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "poi.government",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "poi.medical",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "poi.park",
            elementType: "all",
            stylers: [{saturation: "100"}, {lightness: "100"}, {gamma: "10.00"}]
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "poi.place_of_worship",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "poi.school",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "poi.sports_complex",
            elementType: "labels.text.fill",
            stylers: [{color: "#565656"}]
        }, {
            featureType: "road",
            elementType: "all",
            stylers: [{saturation: "-70"}, {lightness: "43"}]
        }, {featureType: "water", elementType: "all", stylers: [{color: "#39d2ca"}]}]
    });
    new google.maps.Marker({
        position: {lat: 51.697354, lng: 39.269249},
        map: map,
        title: "Евгений",
        icon: "../images/icons/map_marker.svg"
    })
};
$(document).ready(function () {
    $('section[data-type="background"]').each(function () {
        var e = $(this);
        $(window).scroll(function () {
            var i = "center " + -$window.scrollTop() / e.data("speed") + "px";
            e.css({backgroundPosition: i})
        })
    })
}), document.querySelectorAll(".works__slider") && function () {
    function e() {
        t.nextLink.addEventListener("click", function (e) {
            t.slideInfoActive.nextElementSibling ? (t.slideInfoActive.classList.remove("active"), t.slideInfoActive.nextElementSibling.classList.add("active"), t.slideInfoActive = document.querySelector(".slider-info__item.active")) : (t.slideInfoActive.classList.remove("active"), t.slidesInfo[0].classList.add("active"), t.slideInfoActive = document.querySelector(".slider-info__item.active")), t.slideNextActive.nextElementSibling ? (t.slideNextActive.nextElementSibling.classList.add("active"), t.slideNextActive.classList.remove("active"), t.slideNextActive = document.querySelector(".carousel-slides__slide-next.active")) : (t.slidesNext[0].classList.add("active"), t.slideNextActive.classList.remove("active"), t.slideNextActive = document.querySelector(".carousel-slides__slide-next.active")), t.slidesMainActive.nextElementSibling ? (t.slidesMainActive.classList.remove("active"), t.slidesMainActive.nextElementSibling.classList.add("active"), t.slidesMainActive = document.querySelector(".carousel-main__slide.active")) : (t.slidesMainActive.classList.remove("active"), t.slidesMain[0].classList.add("active"), t.slidesMainActive = document.querySelector(".carousel-main__slide.active")), t.slidePreviousActive.nextElementSibling ? (t.slidePreviousActive.classList.remove("active"), t.slidePreviousActive.nextElementSibling.classList.add("active"), t.slidePreviousActive = document.querySelector(".carousel-slides__slide-previous.active")) : (t.slidePreviousActive.classList.remove("active"), t.slidesPrevious[0].classList.add("active"), t.slidePreviousActive = document.querySelector(".carousel-slides__slide-previous.active")), t.slideNextNActive.nextElementSibling ? (t.slideNextNActive.classList.remove("next-active"), t.slideNextNActive.nextElementSibling.classList.add("next-active"), t.slideNextNActive = document.querySelector(".carousel-slides__slide-next.next-active")) : (t.slidesNext[0].classList.add("next-active"), t.slideNextNActive.classList.remove("next-active"), t.slideNextNActive = document.querySelector(".carousel-slides__slide-next.next-active")), t.slideNextOldActive.nextElementSibling ? (t.slideNextOldActive.classList.remove("old-active"), t.slideNextOldActive.nextElementSibling.classList.add("old-active"), t.slideNextOldActive = document.querySelector(".carousel-slides__slide-next.old-active")) : (t.slidesNext[0].classList.add("old-active"), t.slideNextOldActive.classList.remove("old-active"), t.slideNextOldActive = document.querySelector(".carousel-slides__slide-next.old-active")), t.slidePreviousOldActive.nextElementSibling ? (t.slidePreviousOldActive.classList.remove("old-active"), t.slidePreviousOldActive.nextElementSibling.classList.add("old-active"), t.slidePreviousOldActive = document.querySelector(".carousel-slides__slide-previous.old-active")) : (t.slidePreviousOldActive.classList.remove("old-active"), t.slidesPrevious[0].classList.add("old-active"), t.slidePreviousOldActive = document.querySelector(".carousel-slides__slide-previous.old-active")), t.slidePreviousNActive.nextElementSibling ? (t.slidePreviousNActive.classList.remove("next-active"), t.slidePreviousNActive.nextElementSibling.classList.add("next-active"), t.slidePreviousNActive = document.querySelector(".carousel-slides__slide-previous.next-active")) : (t.slidePreviousNActive.classList.remove("next-active"), t.slidesPrevious[0].classList.add("next-active"), t.slidePreviousNActive = document.querySelector(".carousel-slides__slide-previous.next-active"))
        })
    }

    function i() {
        t.previousLink.addEventListener("click", function (e) {
            var i = t.slidesMain[t.slidesMain.length - 1], s = t.slidesPrevious[t.slidesPrevious.length - 1],
                l = t.slidesInfo[t.slidesInfo.length - 1], c = t.slidesNext[t.slidesNext.length - 1];
            t.slideInfoActive.previousElementSibling ? (t.slideInfoActive.classList.remove("active"), t.slideInfoActive.previousElementSibling.classList.add("active"), t.slideInfoActive = document.querySelector(".slider-info__item.active")) : (t.slideInfoActive.classList.remove("active"), l.classList.add("active"), t.slideInfoActive = document.querySelector(".slider-info__item.active")), t.slidePreviousActive.previousElementSibling ? (t.slidePreviousActive.classList.remove("active"), t.slidePreviousActive.previousElementSibling.classList.add("active"), t.slidePreviousActive = document.querySelector(".carousel-slides__slide-previous.active")) : (t.slidePreviousActive.classList.remove("active"), s.classList.add("active"), t.slidePreviousActive = document.querySelector(".carousel-slides__slide-previous.active")), t.slidesMainActive.previousElementSibling ? (t.slidesMainActive.classList.remove("active"), t.slidesMainActive.previousElementSibling.classList.add("active"), t.slidesMainActive = document.querySelector(".carousel-main__slide.active")) : (t.slidesMainActive.classList.remove("active"), i.classList.add("active"), t.slidesMainActive = document.querySelector(".carousel-main__slide.active")), t.slideNextActive.previousElementSibling ? (t.slideNextActive.classList.remove("active"), t.slideNextActive.previousElementSibling.classList.add("active"), t.slideNextActive = document.querySelector(".carousel-slides__slide-next.active")) : (t.slideNextActive.classList.remove("active"), c.classList.add("active"), t.slideNextActive = document.querySelector(".carousel-slides__slide-next.active")), t.slidePreviousNActive.previousElementSibling ? (t.slidePreviousNActive.classList.remove("next-active"), t.slidePreviousNActive.previousElementSibling.classList.add("next-active"), t.slidePreviousNActive = document.querySelector(".carousel-slides__slide-previous.next-active")) : (t.slidePreviousNActive.classList.remove("next-active"), s.classList.add("next-active"), t.slidePreviousNActive = document.querySelector(".carousel-slides__slide-previous.next-active")), t.slidePreviousOldActive.previousElementSibling ? (t.slidePreviousOldActive.classList.remove("old-active"), t.slidePreviousOldActive.previousElementSibling.classList.add("old-active"), t.slidePreviousOldActive = document.querySelector(".carousel-slides__slide-previous.old-active")) : (t.slidePreviousOldActive.classList.remove("old-active"), s.classList.add("old-active"), t.slidePreviousOldActive = document.querySelector(".carousel-slides__slide-previous.old-active")), t.slideNextOldActive.previousElementSibling ? (t.slideNextOldActive.previousElementSibling.classList.add("old-active"), t.slideNextOldActive.classList.remove("old-active"), t.slideNextOldActive = document.querySelector(".carousel-slides__slide-next.old-active")) : (t.slideNextOldActive.classList.remove("old-active"), c.classList.add("old-active"), t.slideNextOldActive = document.querySelector(".carousel-slides__slide-next.old-active")), t.slideNextNActive.previousElementSibling ? (t.slideNextNActive.classList.remove("next-active"), t.slideNextNActive.previousElementSibling.classList.add("next-active"), t.slideNextNActive = document.querySelector(".carousel-slides__slide-next.next-active")) : (t.slideNextNActive.classList.remove("next-active"), c.classList.add("next-active"), t.slideNextNActive = document.querySelector(".carousel-slides__slide-next.next-active"))
        })
    }

    var t = {
        previousLink: document.getElementById("previous"),
        nextLink: document.getElementById("next"),
        slidesMain: document.getElementsByClassName("carousel-main__slide"),
        slidesMainActive: document.querySelector(".carousel-main__slide.active"),
        slidesPrevious: document.getElementsByClassName("carousel-slides__slide-previous"),
        slidesNext: document.getElementsByClassName("carousel-slides__slide-next"),
        slideNextActive: document.querySelector(".carousel-slides__slide-next.active"),
        slideNextNActive: document.querySelector(".carousel-slides__slide-next.next-active"),
        slidePreviousActive: document.querySelector(".carousel-slides__slide-previous.active"),
        slidePreviousNActive: document.querySelector(".carousel-slides__slide-previous.next-active"),
        slidesInfo: document.getElementsByClassName("slider-info__item"),
        slideInfoActive: document.querySelector(".slider-info__item.active"),
        slidePreviousOldActive: document.querySelector(".carousel-slides__slide-previous.old-active"),
        slideNextOldActive: document.querySelector(".carousel-slides__slide-next.old-active")
    };
    e(), i()
}();
//# sourceMappingURL=bundle.js.map
