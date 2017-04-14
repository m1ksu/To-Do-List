$(function(){

    function inputVal() {
        $('ul').append('<li>' +
        $('input').val() + removeButton
        + '</li>');

        $('#listput').val('');
    }

    // Pressing the button inputs the item.
    $('.button').on('click', function() {
        inputVal();
    });

    // Pressing enter inputs the item.
    $('#listput').on('keypress', function(e) {
        if (e.which === 13) {
            inputVal();
        }
    });

    // Remove list item on click.
    $(document).on('click', '#remove', function() {
        $(this).parent().remove();
    });

    // Remove button's HTML..
    var removeButton = '<span id="remove"> x </span>'


    $("#save").on('click', function() {
        var json = {"name": "m1ksu", "items": ["alpha", "bravo"]};

        nodePost(json);
    });

    function nodePost(json) {
        $.ajax({type: 'POST', 
            url: '../',
            data: json,
            success (result,status,xhr) {
                console.log(result);
                console.log(status);
            }
        });
    }
});
