$(window).load(function() {

});
$(document).ready(function($) {
   //商品加减
        $('.subtract').click(function() {
        if (parseInt($(this).siblings('.in-sum').val()) !== 1){      
            var sum = parseInt($(this).siblings('.in-sum').val()) - 1;
            $(this).siblings('.in-sum').val(sum);
            if (parseInt($(this).siblings('.in-sum').val()) == 1) {
                $(this).attr("disabled",true);
            };
        }
    });
    $('.add').click(function() {
        var sum = parseInt($(this).siblings('.in-sum').val()) + 1;
        $(this).siblings('.subtract').attr("disabled",false);
        $(this).siblings('.in-sum').val(sum);
    });

    //选择商品
    $('.cart-sum .a-common').click(function(event) {
        /* Act on the event */
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.cart-list .a-common').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.cart-list .a-common').addClass('active');
        }
    });
    $('.cart-list .a-common').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.cart-sum .a-common').removeClass('active');
        } else {
            $(this).addClass('active');
            var i = 0;
            $('.cart-list .a-common').each(function() {
                if (!$(this).hasClass('active')) {
                    i++;
                }
            })
            if (i == 0) {
                $('.cart-sum .a-common').addClass('active');
            }


        }
    });

    // 弹出框
    $('.m-fancy').click(function() {
        var _id = $(this).attr('id').substr(1);
        $('#' + _id).show();
        $('body').append('<div class="fancy-overlay"></div>')
    });
    $('.m-close').click(function() {
        $(this).parents('.m-pop').hide();
        $('.fancy-overlay').remove();
    });
    $('body').on('click', '.fancy-overlay', function() {
        $('.m-pop').hide();
        $('.fancy-overlay').remove();
    });

    // 选项卡
    $(".TAB_CLICK li").click(function() {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.attr("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).fadeIn().siblings(con).hide();
    });
    $(".col-btn").click(function() {
        if ($(this).attr('class').indexOf('down') == -1) {
            $(this).addClass('down');
            $(this).text('收藏');
        } else if ($(this).attr('class').indexOf('down')) {
            $(this).removeClass('down');
            $(this).text('已收藏');
        }
    });
    // 删除确认弹窗
    $('.del-cfm').click(function() {
        $('body').append('<div class="fancy-overlay"></div>');
        $('.confirm-box').not('.cancel-box').fadeIn(200);
        event.preventDefault();
    });
    $('.btn-confirm').click(function() {
        $(this).parents('.confirm-box').not('.cancel-box').fadeOut(200);
        $('.fancy-overlay').remove();
        event.preventDefault();
    });
    $('body').on('click', '.fancy-overlay', function() {
        $('.confirm-box').not('.cancel-box').fadeOut(200);
        $('.fancy-overlay').remove();
        event.preventDefault();
    });

    

});


var select = function(tab, _class) {
    tab.click(function() {
            $(this).addClass(_class).siblings().removeClass(_class)
    })
}
