$(function(){

    function inputVal() {
        $("ul").append("<li>" +
        $("input").val() + removeButton
        + "</li>");

        $("#listput").val("");
    }

    // Pressing the button inputs the item.
    $(".list-input-button").on("click", function() {
        inputVal();
    });

    // Pressing enter inputs the item.
    $(".list-input").on("keypress", function(e) {
        if (e.which === 13) {
            inputVal();
        }
    });

    // Remove list item on click.
    $(document).on("click", ".remove-button", function() {
        $(this).parent().remove();
    });

    // Remove button's HTML..
    var removeButton = "<span class=\"remove-button\"> x </span>"


    $(".save-button").on("click", function() {

        var listHTML;

        for (i = -1; i <= $("ul > *").length - 2; i++) {
            listHTML += $(`ul > *:eq(${i})`).html();
        }

        listHTML = listHTML.replace(/undefined/g, "");

        if (typeof(Storage) !== "undefined") {
            console.log(1);
        } else {
            $("#stor-unav").css("visibility", "hidden");
        }
    });
});
