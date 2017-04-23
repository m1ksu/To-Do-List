$(function () {

    var todo = {
        people: [],
        init: function () {
            this.variables();
            this.testStorageAvailable();
            this.add();
            this.remove();
            this.save();
            this.load();
        },

        variables: function () {
            $inputBox = $(".list-input");
            $inputButton = $(".list-input-button");
            $list = $(".list");
            templateStart = "<li class='list-item'> ";
            templateEnd = "<span class=\"remove-button\"> x </span> </li>";
            lsAvailable = false;
        },

        add: function () {
            $(".list-input-button").on("click", function () {
                insert();
            });

            $(".list-input").on("keypress", function (e) {
                if (e.which === 13) {
                    insert();
                }
            });

            function insert() {
                inputText = $inputBox.val();
                if (inputText.trim().length !== 0) {
                    $list.append(templateStart + inputText + templateEnd);
                    $inputBox.val("");
                }
            }
        },

        remove: function () {
            $(document).on("click", ".remove-button", function () {
                $(this).parent().remove();
            });
        },

        testStorageAvailable: function () {
            try {
                localStorage.setItem("test", "test");
                localStorage.removeItem("test");
                lsAvailable = true;
            } catch (e) {
                lsAvailable = false;
            }
        },

        save: function () {
            $(".save-button").on("click", () => {

                if ($(".list > *").length !== 0) {
                    var listHTML;

                    // for (i = 0; i < $(".list > *").length; i++) {
                    //   listHTML += $(`.list > *:eq(${i})`).html();
                    // }

                    $(".list > *").each(function (index, el) {
                        listHTML += $(`.list > *:eq( ${index} )`).html();
                    });

                    listHTML = listHTML.replace(/undefined/g, "");

                    if (lsAvailable) {
                        localStorage.setItem("strings", listHTML);
                    }
                }
            });
        },

        load: function () {
            $(".load-button").on("click", () => {
                $list.html(localStorage.strings);
            });
        }
    };

    todo.init();
});
