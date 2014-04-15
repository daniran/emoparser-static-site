$(function() {

    var parser = new EmoticonsParser({
        emoticons: {

            smile: {
                emos: [':)', ':-)']
            },

            surprised: {
                emos: [':-O', ':-o)']
            },

            wink: {
                emos: [';)', ';-)']
            },

            confused: {
                emos: [':-S', ':-s)']
            },

            crying: {
                emos: [":'("]
            },

            h: {
                emos: [':)', ':-)']
            },

            a: {
                emos: [':)', ':-)']
            }
        },
        emoticon_html: '<span class="emo-class emoticon-{EMOTICON}" title="{EMOTICON}"></span>'
    });


    $('#test-button').click(function() {
        var value = $('#text-input').val();
        var resultElem = $('#result');
        var parseResult = parser.parseText(value)
        resultElem.html(parseResult.replace(/\n/g, '<br />'));
    });
});