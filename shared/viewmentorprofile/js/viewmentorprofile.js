$(document).ready(function () {
    var session = localStorage.getItem("user");
    if (session == null) {
        window.location.href = "../../../../index.html";
    }
    else {
        var check1;
        var url = window.location.href;
        var id = url.substring(url.lastIndexOf(':') + 1);
        var lastIndex = url.substring(url.lastIndexOf('/') + 1);
        var check = lastIndex.toString();
        // var check1 = check.includes("id");
        var str2 = "id";
        if (check.indexOf(str2) != -1) {
            check1 = true;
        }
        var data = {};
        data.id = id;
        console.log(data.id);
        if (check1 == true) {
            console.log("helllllsdfkj;lskjsd");
            httpPost("/viewmentor", data, function (response) {
                console.log(response);
                // if ((response[0] && response[1]) == null) {
                //     $('#mentor_record').modal();

                // }
                // //date display code
                // else {
                var dateObj = new Date(response[0].dob);
                var day = dateObj.getUTCDate();
                var year = dateObj.getUTCFullYear();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ];
                var monthna = new Date(response[0].dob);
                var month = monthNames[monthna.getMonth()];

                $("#blockreg2").removeClass("hide");
                $(".loading").addClass("hide");
                $('#profileimage').append('<img src="' + profile_photo + response[0].profileinfo.photo + '" width="150" height="150">');
                $('#name').html(response[0].name);
                $('#role').html(response[0].role);
                $('#dob').html(day + "-" + month + "-" + year);
                $('#age').html(response[0].age);
                $('#gender').html(response[0].gender);
                $('#address_line1').html(response[0].address_line1);
                $('#address_line2').html(response[0].address_line2);
                $('#city').html(response[0].city);
                $('#email_id').html(response[0].email_id);
                $('#state').html(response[0].state);
                $('#country').html(response[0].country);
                $('#postal_code').html(response[0].postal_code);
                $('#mobile_no').html(response[0].mobile_no);
                $('#work_type').html(response[0].profileinfo.work_type);
                $('#course').html(response[0].profileinfo.course);
                $('#department').html(response[0].profileinfo.department);
                $('#institution').html(response[0].profileinfo.institution);
                $('#reference').html(response[0].profileinfo.reference);
                var commitment = response[0].profileinfo.commitment + "&nbsphours / month"
                $('#commitment').html(commitment);
                if (response[0].profileinfo.designation == "") {
                    $('#designationrow').hide();
                }
                else {
                    $('#designationrow').show();
                    $('#designation').html(response[0].profileinfo.designation);
                }
                if (response[0].profileinfo.organization == "") {
                    $('#organizationrow').hide();
                }
                else {
                    $('#organizationrow').show();
                    $('#organization').html(response[0].profileinfo.organization);
                }
                if (response[0].profileinfo.area_of_expertise == "") {
                    $('#area_of_expertiserow').hide();
                }
                else {
                    $('#area_of_expertiserow').show();
                    $('#area_of_expertise').html(response[0].profileinfo.area_of_expertise);
                }
                if (response[0].profileinfo.experience == "") {
                    $('#experiencerow').hide();
                }
                else {
                    $('#experiencerow').show();
                    $('#experience').html(response[0].profileinfo.experience);
                }
                // }


            });

        }
    }
});

