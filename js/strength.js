$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#strength_img1").show();
    $("#weakness_img1").show();
    $("#button1").show();
    $("#button3").show();
    $("#strength_img2").hide();
    $("#weakness_img2").hide();
    $("#button2").hide();
    $("#button4").hide();
    /*button1을 클릭했을 때 img2를 보여주고 button2나옴*/
    $("#button1").click(function(){
        $("#strength_img2").show();
        $("#strength_img1").hide();
        $("#button2").show();
        $("#button1").hide();
    });
    /*button2를 클릭했을 때 img1를 보여주고 button1나옴*/
    $("#button2").click(function(){
        $("#strength_img1").show();
        $("#strength_img2").hide();
        $("#button1").show();
        $("#button2").hide();
    });
    /*button3를 클릭했을 때 img2를 보여주고 button4나옴*/
    $("#button3").click(function(){
        $("#weakness_img2").show();
        $("#weakness_img1").hide();
        $("#button4").show();
        $("#button3").hide();
    });
    /*button4를 클릭했을 때 img1를 보여주고 button3나옴*/
    $("#button4").click(function(){
        $("#weakness_img1").show();
        $("#weakness_img2").hide();
        $("#button3").show();
        $("#button4").hide();
    });
});