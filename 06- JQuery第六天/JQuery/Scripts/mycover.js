$.fn.extend({ "showCover": function () {
    //遮盖层 半透明的层
    var $div = $("<div class='cover'></div>");
    $("body").append($div);
    //获取窗口的宽度和高度
    var width = $(window).width();
    //获得文档的高度
    var height = $(window).height();
    //
    $div.css({ "width": width, "height": height, "top": 0, "left": 0 });

    //登陆层
    var $holder = $(this);
    //计算登陆层的坐标
    var x = (width - $holder.width()) / 2;
    var y = ($(window).height() - $holder.height()) / 2;

    $holder.css({ "top": y, "left": x, "display": "block" });

    //
    $(window).resize(function () {
        $holder.closeCover();
        $holder.showCover();
    })
    return $holder;
}, "closeCover": function () {
    $(window).unbind("resize");
    if ($(".cover").length > 0) {
        //移除遮盖层
        $(".cover").remove();
    }
    //隐藏登陆层
    $(this).hide();
    return $(this);
}
})