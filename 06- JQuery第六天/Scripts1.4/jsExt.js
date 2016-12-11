$.fn.extend({
    "checked": function () {
        $(this).attr("checked", true);//选中
    }, "unchecked": function () {
        $(this).attr("checked", false);//不选中
    }
})