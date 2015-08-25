$(document).ready(function() {
    $('.nav').scrollToFixed({
        preFixed: function() { $(this).find('h1').css('color', 'blue'); },
        postFixed: function() { $(this).find('h1').css('color', ''); }
    });
    $('#summary').scrollToFixed({
        marginTop: $('.nav').outerHeight() + 10,
        limit: $('.footeraa').offset().top - $('#summary').outerHeight() - 10,
        zIndex: 999,
        preFixed: function() { $(this).find('.title').css('color', 'blue'); },
        preAbsolute: function() { $(this).find('.title').css('color', 'red'); },
        postFixed: function() { $(this).find('.title').css('color', ''); },
        postAbsolute: function() { $(this).find('.title').css('color', ''); }
    });
    // $('.footer').scrollToFixed( {
    //     bottom: 0,
    //     limit: $('.footer').offset().top,
    //     preFixed: function() { $(this).find('h1').css('color', 'blue'); },
    //     postFixed: function() { $(this).find('h1').css('color', ''); }
    // });
});