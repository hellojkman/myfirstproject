$(function(){
    $('.first img').click(function(){
        if  ($('.first img').attr('src') == "../img/30분.png"){
            $('.first img').attr('src','../img/30분-칼로리.png').css("height","90%").css("with","100%")
            $('.first').css('animation-play-state','paused');
        }
        else{
            $('.first img').attr('src','../img/30분.png').css("height","55%").css("with","60%").css('animation-play-state','running');
            $('.first').css('animation-play-state','running');
        }
    })
}); 
$(function(){
    $('.second img').click(function(){
        if  ($('.second img').attr('src') == "../img/1시간.png"){
            $('.second img').attr('src','../img/1시간-칼로리.png').css("height","90%").css("with","100%")
            $('.second').css('animation-play-state','paused');
        }
        else{
            $('.second img').attr('src','../img/1시간.png').css("height","55%").css("with","60%");
            $('.second').css('animation-play-state','running');
        }
    })
}); 

$(function(){
    $('.third img').click(function(){
        if  ($('.third img').attr('src') == "../img/2시간.png"){
            $('.third img').attr('src','../img/2시간-칼로리.png').css("height","90%").css("with","100%");
            $('.third').css('animation-play-state','paused');
        }
        else{
            $('.third img').attr('src','../img/2시간.png').css("height","55%").css("with","60%");
            $('.third').css('animation-play-state','running');
        }
    })
}); 