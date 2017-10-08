$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var data = {};
        var child_id;
        //     var data = "do shash'owania";
        //     var crypto = require('crypto');
        //    console.log(crypto.createHash('md5').update(data).digest("hex"));
        var url = window.location.href;
        var id1 = url.substring(url.lastIndexOf(':') + 1);
        data.id = atob(id1);
        // var settings = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": "http://localhost:3406/viewchildrenownprofile",
        //     "method": "POST",
        //     "headers": {
        //         "content-type": "application/json",

        //     },
        //     "processData": false,

        //     "data": JSON.stringify(data),
        // }
        httpPost("/viewchildrenownprofile", data, function (response) {
            var dateObj = new Date(response.dob);
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            var monthna = new Date(response.dob);
            var month = monthNames[monthna.getMonth()];


            $(".loading").addClass("hide");

            $("#blockreg2").removeClass("hide");

            // var res = JSON.parse(response.pre_assessment_data);
            //console.log(res.standard);
            $('#profileimage').append('<img src = "' + BASEURL + '/uploads/children/photos/' + response.photos + '" width="150" height="150">');
            $('#name').html(response.full_name);
            $('#dob').html(day + "-" + month + "-" + year);
            $('#Gender').html(response.gender);
            $('#Center').html(response.center);
            $('#UserId').html(response.user_id);
            child_id = response.id;
            return false;
        });
        $("#view_preassessment").click(function () {
            window.location = "../../../../shared/viewpreassessment/en/viewpreassessment.html?id:" + child_id;
        });
    }
});