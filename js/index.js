import "babel-polyfill"
$(function () {


    function Visualize(a,b) {
        a.hover(function () {
          let _index=$(this).index();
          a.eq(_index).addClass("active").siblings().removeClass("active");
          b.eq(_index).addClass("active").siblings().removeClass("active");
        }, function () {});

    }
    new Visualize($(".brand-visualize .item"),$('.brand-visualize .slide'));
})