$.fn.extend({
    "showCover": function () {
        //   ====1 遮盖层=====
        //遮盖层 半透明的层
        var $div = $("<div class='cover'></div>");
        $("body").append($div);//把div遮盖层的div添加body
        //获取窗口的宽度和高度
        var width = $(window).width();
        var height = $(window).height(); //使用window 当窗口有滚动条的时候，遮盖层不能覆盖页面下面。【不过可以把position设置成fixed】
        //var height = $(document).height();//解决问题  【遮盖层不能覆盖页面下面】
        //设置宽度和高度
        $div.css({ "width": width, "height": height, "top": 0, "left": 0 });

        //   ====2 登陆层=====
        //登陆层
        var $holder = $(".holder"); // var $holder = $(this);
        //计算登陆层的坐标 【窗口的宽度（遮盖层的宽度）-登陆层的宽度，再除以2】
        var x = (width - $holder.width()) / 2;
        var y = ($(window).height() - $holder.height()) / 2;
        //设置登陆层
        $holder.css({ "top": y, "left": x, "display": "block" });


        //每次窗口改变都改变 层 【只有点击login执行showCover()方法时，才添加resize方法】
        $(window).resize(function () {
            //此处不能使用$(this)  因为当前对象是 window
            //showCover();
            $holder.closeCover();//先关闭层
            $holder.showCover(); //再重新创建层
        })

        return $holder;//返回当前操作的对象  链式编程

    }, "closeCover": function () {
        //避免 resize 发生死循环
        $(window).unbind("resize");
        if ($(".cover").length > 0) {
            //移除遮盖层
            $(".cover").remove();
        }
        $(".holder").hide(); // $(this).hide();

        return $(".holder");//返回当前操作的对象  链式编程
    }
})

//$.fn.extend({
//    "showCover": function () {
//        //遮盖层 半透明的层
//        var $div = $("<div class='cover'></div>");
//        $("body").append($div);
//        //获取窗口的宽度和高度
//        var width = $(window).width();
//        //获得文档的高度
//        var height = $(window).height();
//        //
//        $div.css({ "width": width, "height": height, "top": 0, "left": 0 });

//        //登陆层
//        var $holder = $(this);
//        //计算登陆层的坐标
//        var x = (width - $holder.width()) / 2;
//        var y = ($(window).height() - $holder.height()) / 2;

//        $holder.css({ "top": y, "left": x, "display": "block" });

//        //
//        $(window).resize(function () {
//            $holder.closeCover();
//            $holder.showCover();
//        })
//        return $holder;
//    }, "closeCover": function () {
//        $(window).unbind("resize");
//        if ($(".cover").length > 0) {
//            //移除遮盖层
//            $(".cover").remove();
//        }
//        //隐藏登陆层
//        $(this).hide();
//        return $(this);
//    }
//})