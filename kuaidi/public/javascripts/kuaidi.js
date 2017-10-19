$(function () {
    $("#button").click(function () {
        var text = $("#text").val();
        $.get("/kuaidi", { text: text }, function (data) {
            var html = "";
            for (var i in data) {
                html += "<div onclick=query('"+data[i].comCode+"')>" + data[i].comCode + "</div>";
            }
            $("#company").html(html);
        })
    })
})

function query(com) {
    var text = $("#text").val();
    $.get("/kuaidi/info", { type: com, "text": text }, function (data) {
        var html = "";
        for (var i in data) {
            html += "<div>" + data[i].context + "</div>";
        }
        $("#info").html(html);

    })
}