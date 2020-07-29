$(document).ready(function () {
    
    var i;
    
    // searchbox active
    $('.searchbox input').click(function () {
        $(this).addClass('active');
    });
    
    // social img
    
    for (i = 0; i < 3; i++) {
        $('.social li').eq(i).find('a').css('background-image', 'url(./src/social' + i + '.png');
    }
    
    // package img
    for (i = 0; i < 3; i++) {
        $('.package').eq(i).find('a').css('background-image', 'url(./src/package' + i + '.jpg');
    }
});