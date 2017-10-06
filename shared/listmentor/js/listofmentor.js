$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data={};
        data.role=localStorage.getItem("role");
        httpPost("/listofmentor",data, function (response) {
            $(".loading").addClass("hide");
            var i = 0;
            var j = 0;
            var res_length = response.length;
            if (res_length == 0) {
                $(".no_record").removeClass("hide");
            }
            else {
                $(".loading").addClass("hide");
                response.forEach(function (element) {
                    $("#listofmembers").removeClass("hide");
                    // var res = MD5(element.id);
                    // console.log(res);
                    $('#listofmembers').append('<div class="profile-card"> <div>  <img id="submit' + i + '" src="' + BASEURL + '/uploads/mentor/photo/' + element.profileinfo.photo + '" class="profile-card-img">  <h4 class="profile-card-title">' + element.name + '</h4> <h5 class="profile-card-title">' + element.age + '</h5>  </div>  <button class="profile-card-btn submit" name="submit" type="submit" id="img' + j + '">ViewProfile</button></div>');
                    var id = "#submit" + i;
                    $(id).click(function () {
                        window.location.href = "../../viewmentorprofile/en/viewmentorprofile.html?id:" + element.id;
                    });
                    i++;
                     var id1 = "#img" + j;
                    $(id1).click(function () {
                        window.location.href = "../../viewmentorprofile/en/viewmentorprofile.html?id:" + element.id;
                    });
                    j++;
                }, this);
            }
        });
    }
})