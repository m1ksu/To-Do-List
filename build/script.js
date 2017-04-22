$(function() {

    function inputVal() {

        var input = $(".list-input").val();

        if (input.trim().length !== 0) {
            $("ul").append("<li class='list-item'>" + 
                $(".list-input").val() + removeButton + "</li>");

            $(".list-input").val("");
        }
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

    $(".save-button").on("click", () => {

        if ($(".list > *").length !== 0) {
            var listHTML;

            for (i = 0; i < $(".list > *").length; i++) {
                listHTML += "<li class='list-item'> " + $(`.list > *:eq(${i})`).html() + "</li>";
            }

            listHTML = listHTML.replace(/undefined/g, "");

            if (available) {
                localStorage.setItem("strings", listHTML);
            }
        }
    });

    $(".load-button").on("click", () => {
        $(".list").html(localStorage.strings);
    });

    var available = false;

    function lsAvailable() {
        try {
            localStorage.setItem("test", "test");
            localStorage.removeItem("test");
            return true;
        } catch (e) {
            return false;
        }
    }

    if (lsAvailable() === true) {
        available = true;
    } else {
        $(".storage-unav").css("display", "inline");
    }
});