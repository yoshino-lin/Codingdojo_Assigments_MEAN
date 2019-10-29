$(document).ready(function(){
    var displayName;
    $("#info_button").click(function() {
        $.get("https://api.github.com/users/yudong", displayName)
        function displayName(data) {
            $("#info_button").after("<p>"+data["login"]+"</p>");
            console.log(data);
        }
    });
});
