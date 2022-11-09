// card drapdown jquary code

$(document).ready(function () {
    $("#go").click(function () {
        $("#p1").toggle(2000);
    });
});

$(document).ready(function () {
    $("#go1").click(function () {
        $("#p2").toggle(2000);
    });
});

$(document).ready(function () {
    $("#go2").click(function () {
        $("#p3").toggle(5000);
    });
});

$(document).ready(function () {
    $("#go3").click(function () {
        $("#p4").toggle(2000);
    });
});


$(document).ready(function () {
    $("#go4").click(function () {
        $("#p5").toggle(2000);
    });
});

$(document).ready(function () {
    $("#go5").click(function () {
        $("#p6").toggle(2000);
    });
});

$(document).ready(function () {
    $("#go6").click(function () {
        $("#p7").toggle(2000);
    });
});

$(document).ready(function () {
    $("#go7").click(function () {
        $("#p8").toggle(2000);
    });
});

$(document).ready(function () {
    $("#go8").click(function () {
        $("#p9").toggle(2000);
    });
});

function validate() {
    var name1 = document.getElementById("name");
    var number = document.getElementById("phone");
    var password = document.getElementById("pass");
    var email = document.getElementById("email");


    if (name1.value == "") {
        // document.getElementById("p1").innerHTML = ("*Please enter your name*");
        alert("Enter the valid Name");
        return false;
    }


    if (number.value == " " || isNaN(number.value) || number.value.length > 10 || number.value.length < 10) {
        alert("Enter the valid phone number");
        return false;
    }


    if (email.value == "") {
        alert("Enter the email id");
        return false;
    }

    if (password.value == "" || password.value.length > 8 || password.value.length < 6) {
        alert("Enter the password atleast 6 characters ");
        return false;
    }



    else {

        document.write("Successfully Submitted");
    }
}
