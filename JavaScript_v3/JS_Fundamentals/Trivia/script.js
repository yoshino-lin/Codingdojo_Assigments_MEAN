$(document).ready(function(){
    var a=1;
    var i;
    $.get("https://opentdb.com/api.php?amount=3&category="+Math.floor(Math.random()*(32-9+1)+9)+"&type=multiple", loadInfo)
    $.get("https://opentdb.com/api.php?amount=3&category="+Math.floor(Math.random()*(32-9+1)+9)+"&type=multiple", loadInfo)
    $.get("https://opentdb.com/api.php?amount=3&category="+Math.floor(Math.random()*(32-9+1)+9)+"&type=multiple", loadInfo)
    function loadInfo(question_info){
        $("#category"+a).html(question_info["results"][0]["category"]);
        for(i=1;i<=3;i++){
            $("#qeustion"+a+"_"+i).html("<p>"+question_info["results"][i-1]["question"]+"</p>");
            $("#qeustion"+a+"_"+i).after("<input type='radio' style='display: inline-block;'> <p id='k"+a+"-q"+i+"-1' style='display: inline-block;'>"+question_info["results"][i-1]["correct_answer"]+"</p>");
            $("#qeustion"+a+"_"+i).after("<input type='radio' style='display: inline-block;'> <p id='k"+a+"-q"+i+"-2' style='display: inline-block;'>"+question_info["results"][i-1]["incorrect_answers"][0]+"</p>");
            $("#qeustion"+a+"_"+i).after("<input type='radio' style='display: inline-block;'> <p id='k"+a+"-q"+i+"-3' style='display: inline-block;'>"+question_info["results"][i-1]["incorrect_answers"][1]+"</p>");
            $("#qeustion"+a+"_"+i).after("<input type='radio' style='display: inline-block;'> <p id='k"+a+"-q"+i+"-4' style='display: inline-block;'>"+question_info["results"][i-1]["incorrect_answers"][2]+"</p>");
        }
        a+=1
    }
    $("#info_button").click(function() {
        a=1;
        $.get("https://opentdb.com/api.php?amount=3&category="+Math.floor(Math.random()*(32-9+1)+9)+"&type=multiple", reloadInfo)
        $.get("https://opentdb.com/api.php?amount=3&category="+Math.floor(Math.random()*(32-9+1)+9)+"&type=multiple", reloadInfo)
        $.get("https://opentdb.com/api.php?amount=3&category="+Math.floor(Math.random()*(32-9+1)+9)+"&type=multiple", reloadInfo)
        function reloadInfo(question_info){
            $("#category"+a).html(question_info["results"][0]["category"]);
            for(i=1;i<=3;i++){
                $("#qeustion"+a+"_"+i).html("<p>"+question_info["results"][i-1]["question"]+"</p>");
                $("#k"+a+"-q"+i+"-1").html(question_info["results"][i-1]["correct_answer"]);
                $("#k"+a+"-q"+i+"-2").html(question_info["results"][i-1]["incorrect_answers"][0]);
                $("#k"+a+"-q"+i+"-3").html(question_info["results"][i-1]["incorrect_answers"][1]);
                $("#k"+a+"-q"+i+"-4").html(question_info["results"][i-1]["incorrect_answers"][2]);
            }
            a+=1
        }
    });
});
