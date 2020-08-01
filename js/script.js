$(document).ready(function () {
    
    var i;
    
    // page1 slide
    var intv = setInterval(function () { page1Slide(); }, 4000),
        intv2 = setInterval(function () { slideIndex(); }, 4000);
    
    $('.img-box').find('img').eq(2).show();
    
    function page1Slide() {
        $('.img-box').find('img').eq(2).fadeOut(1000);
        $('.img-box').find('img').eq(1).fadeIn(600);
        $('.img-box').find('img').eq(2).prependTo('.img-box');
    }
    
    var a = 0,
        c;
   
    function slideIndex() {
        
        if (a == 2) {
            c = 0;
        } else if (a == 1) {
            c = 2;
        } else if (a == 0) {
            c = 1;
        } else {
            
        }
        $('.line').removeClass('active');
        $('.line').removeClass('inactive');
        $('.line').eq(a).addClass('active');
        $('.line').eq(c).addClass('inactive');
        
        a = (a + 1) % 3;
        
    }
   
    
    
  
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
    
    // profile-image
    for (i = 0; i < 4; i++) {
        $('.profile-image').eq(i).css('background-image', 'url(./src/profile' + i + '.png');
    }
    
    // review-image
    for (i = 0; i < 4; i++) {
        $('.review-image').eq(i).css('background-image', 'url(./src/review' + i + '.jpg');
    }
    
    
    var count = 1, count_4;
    
    $('.review-image').eq(count).show();
    $('.review-comment').eq(count).show();
    
    $('.left.icon').click(function () {
        
        count_4 = count - 1;
        
        $('.review-image').eq(count).fadeOut(300);
        $('.review-image').eq(count_4).fadeIn(200);
        /*$('.review-image').eq(count).prependTo('.review-image-cover');*/
        
        $('.review-comment').eq(count).fadeOut(300);
        $('.review-comment').eq(count_4).fadeIn(200);
        /*$('.review-comment').eq(count).prependTo('.review-comment-cover');*/
        
        if (count == 0) {
            count = 4;
        } else {
            count %= 4;
        }
        
        return count--;
        
    });
             
    $('.right.icon').click(function () {
        
        count_4 = count + 1;
        
        $('.review-image').eq(count).fadeOut(300);
        /*$('.review-image').eq(count_4).appendTo('.review-image-cover');*/
        $('.review-image').eq(count_4).fadeIn(200);
        
        $('.review-comment').eq(count).fadeOut(300);
        /*$('.review-comment').eq(count_4).appendTo('.review-comment-cover');*/
        $('.review-comment').eq(count_4).fadeIn(200);
        
        if (count == 2) {
            count = -2;
        } else {
            count %= 4;
        }
        
        return count++;
        
    });
    
    
    // page4 click-box
    $('.process-box').mouseover(function () {
        $('.click-box').hide().css('z-index', '-10');
    });
    
    // page4 process-box absolute left position
    
    var win_w = $(window).width();
    
    if (win_w <= 767) {
        
        $('.process-box:odd').css('left', '50%');
        $('.process-box:even').css('left', 0);
        $('.process-box:lt(2)').css('top', 0);
        $('.process-box:gt(1)').css('top', '50%');
        
        $('.process-box').eq(0).click(function () {
            $('.process-box:odd').animate({'width' : '50%', 'left' : '50%'}, 400);
            $('.process-box:even').animate({'width' : '50%', 'left' : 0}, 400);
            $('.process-box').eq(1).stop().animate({'width' : '30%', 'left' : '70%'}, 300);
            $(this).stop().animate({'width': '70%', 'left': '0'}, 300);
        });

        $('.process-box').eq(1).click(function () {
            $('.process-box:odd').animate({'width' : '50%', 'left' : '50%'}, 400);
            $('.process-box:even').animate({'width' : '50%', 'left' : 0}, 400);
            $('.process-box').eq(0).stop().animate({'width' : '30%', 'left' : '0'}, 300);

            $(this).stop().animate({'width': '70%', 'left': '30%'}, 300);
        });

        $('.process-box').eq(2).click(function () {
            $('.process-box:odd').animate({'width' : '50%', 'left' : '50%'}, 400);
            $('.process-box:even').animate({'width' : '50%', 'left' : 0}, 400);
            $('.process-box').eq(3).stop().animate({'width' : '30%', 'left' : '70%'}, 300);

            $(this).stop().animate({'width': '70%', 'left': '0%'}, 300);
        });

        $('.process-box').eq(3).click(function () {
            $('.process-box:odd').animate({'width' : '50%', 'left' : '50%'}, 400);
            $('.process-box:even').animate({'width' : '50%', 'left' : 0}, 400);
            $('.process-box').eq(2).stop().animate({'width' : '30%', 'left' : '0%'}, 300);
            
            $(this).stop().animate({'width': '70%', 'left': '30%'}, 300);
        });
        
        $('.process-box').click(function () {
            $('svg').css('width', '100%');
            $(this).find('svg').animate({'width' : '50%'}, 400);
            $('.process-2').hide();
            $(this).find('.process-2').show();
            
            var pro_index = $(this).index();
            $('.process-box').find('img').fadeOut(300);
            $(this).find('img').fadeIn(500).attr('src', 'src/process' + pro_index + '.jpg');
        });
        
    } else if (win_w < 1200) {
        
    } else {
        
        for (i = 0; i < 5; i++) {
            $('.process-box').eq(i).css('left', i * 25 + '%');
            
        }

        $('.process-box').eq(0).click(function () {
            for (i = 1; i < 4; i++) {
                $('.process-box').eq(i).animate({'width': '17%', 'left': 49 + ((i - 1) * 17) + '%'}, 400);
            }
            $(this).animate({'width': '49%', 'left': '0'}, 300);
        });

        $('.process-box').eq(1).click(function () {

            $('.process-box').eq(0).animate({'width' : '17%', 'left' : '0'}, 400);
            $('.process-box').eq(2).animate({'width' : '17%', 'left' : '66%'}, 400);
            $('.process-box').eq(3).animate({'width' : '17%', 'left' : '83%'}, 400);

            $(this).animate({'width': '49%', 'left': '17%'}, 300);
        });

        $('.process-box').eq(2).click(function () {

            $('.process-box').eq(0).animate({'width' : '17%', 'left' : '0'}, 400);
            $('.process-box').eq(1).animate({'width' : '17%', 'left' : '17%'}, 400);
            $('.process-box').eq(3).animate({'width' : '17%', 'left' : '83%'}, 400);

            $(this).animate({'width': '49%', 'left': '34%'}, 300);
        });

        $('.process-box').eq(3).click(function () {
            for (i = 0; i < 3; i++) {
                $('.process-box').eq(i).animate({'width': '17%', 'left': (i * 17) + '%'}, 400);
            }
            $(this).animate({'width': '49%', 'left': '51%'}, 300);
        });
        
        $('.process-box').click(function () {
            $('svg').animate({'width' : '100%'}, 400);
            $(this).find('svg').animate({'width' : '70%'}, 400);
            $('.process').show();
            $(this).find('.process').hide();
            $('.process-2').hide();
            $(this).find('.process-2').show();
            var pro_index = $(this).index();
            $('.process-box').find('img').fadeOut(300);
            $(this).find('img').fadeIn(500).attr('src', 'src/process' + pro_index + '.jpg');
        });
    }
    
    
   
    
    
    //page3 arrow
    $('.icon').mouseover(function () {
        $(this).find('.arrow').addClass('active');
    });
    $('.icon').mouseleave(function () {
        $(this).find('.arrow').removeClass('active');
    });


});














