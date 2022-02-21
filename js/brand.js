$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#detail1").show();
    $("#detail2").hide();
    $("#detail3").hide();
    /*img1을 클릭했을 때 detail1를 보여줌*/
    $("#img1").click(function(){
        $("#detail1").show();
        $("#detail2").hide();
        $("#detail3").hide(); 
    });
    /*img2를 클릭했을 때 detail2을 보여줌*/
    $("#img2").click(function(){
        $("#detail1").hide();
        $("#detail2").show();
        $("#detail3").hide(); 
    });
    /*img3를 클릭했을 때 detail3을 보여줌*/
    $("#img3").click(function(){
        $("#detail1").hide();
        $("#detail2").hide();
        $("#detail3").show(); 
    });
});