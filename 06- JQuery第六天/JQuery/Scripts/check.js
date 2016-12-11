$.fn.extend({ "checked": function () {
    $(this).attr("checked", true)
}, "unchecked": function () {
    $(this).attr("checked", false)
}
})