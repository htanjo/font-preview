/*global jQuery:false, Handlebars:false*/
(function ($) {
    'use strict';
    $(function () {
        $('#submit').click(preview);
        preview();
        function preview() {
            var sizes = $('#size').val().split(','),
                text = Handlebars.Utils.escapeExpression($('#text').val()).replace(/\r\n/g, '<br>').replace(/\r|\n/g, '<br>'),
                html,
                i;
            for (i = 0; i < sizes.length; i++) {
                sizes[i] = $.trim(sizes[i]);
            }
            html = Handlebars.compile($('#fontPreviewTemplate').html())({
                family: $('#family').val(),
                height: $('#height').val(),
                spacing: $('#spacing').val(),
                text: text,
                sizes: sizes
            });
            $('#preview').html(html);
        }
    });
}(jQuery));