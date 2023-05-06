    $().ready(function() {
        var container = $('div.container');
        var validator = $("#form2").validate({
            errorContainer: container,
            errorLabelContainer: $("ol", container),
            wrapper: 'li'
        });
        $(".cancel").click(function() {
            validator.resetForm();
        });
    });