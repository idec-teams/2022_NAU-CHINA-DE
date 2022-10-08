var imgs = $("img");
imgs.click(function() {
    var that = this;

    layer.photos({
        photos: {
            start: imgs.index(that), //当前元素索引
            data: imgs,
        },
        anim: 5
    });
});