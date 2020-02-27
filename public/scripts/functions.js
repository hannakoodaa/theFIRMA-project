function showInfo() {
    // Get the modal
    var modal = document.getElementById("my-modal");

    var btn = document.getElementById("info-img");

    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

function changeValueColors(value1Value, value2Value) {
    $("#laske-text").html("<br>");
    // Changes value1 colors 
    if (value1Value <= 90) { //green
        $("#value1-color").css("background-color", "#85C555");
        $("#value1-color").html("Value 1 <br> = 1");
    } else if (value1Value > 90 && value1Value <= 95) { //yellow
        $("#value1-color").css("background-color", "#FED200");
        $("#value1-color").html("Value 1 <br> = 2");
    } else if (value1Value > 95 && value1Value < 100) {//orange
        $("#value1-color").css("background-color", "#FF970F");
        $("#value1-color").html("Value 1 <br> = 3");
    } else if (value1Value >= 100) { //red
        $("#value1-color").css("background-color", "#EE2F36");
        $("#value1-color").html("Value 1 <br> = 4");
    }
    // Changes value2 colors 
    if (value2Value <= 90) { //green
        $("#value2-color").css("background-color", "#85C555");
        $("#value2-color").html("value2 <br> = 1");
    } else if (value2Value > 90 && value2Value <= 95) { //yellow
        $("#value2-color").css("background-color", "#FED200");
        $("#value2-color").html("value2 <br> = 2");
    } else if (value2Value > 95 && value2Value < 100) { //orange
        $("#value2-color").css("background-color", "#FF970F");
        $("#value2-color").html("value2 <br> = 3");
    } else if (value2Value >= 100) { //red
        $("#value2-color").css("background-color", "#EE2F36");
        $("#value2-color").html("value2 <br> = 4");
    }
};

function writeOptimalValues(optvalue1, optvalue2, thisthat) {
    var optvalue1 = optvalue1;
    var optvalue2 = optvalue2;
    var thisthat = thisthat;
    // Optimal Value values to the page
    if (thisthat == "this") {
        $("#optimal-values").html(`Optimal values for this are:<br><${optvalue1} and ${optvalue2}`);
    }
    if (thisthat == "that") {
        $("#optimal-values").html(`Optimal values for that are:<br><${optvalue1} and ${optvalue2}`);
    }

};

function showValueInfo(value1Value, value2Value) {
    // Get the Value modal
    var modal = document.getElementById("value-modal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[1];

    if (value1Value <= 90) {
        if (value2Value > 90 && value2Value <= 95) {
            modal.style.display = "block";
            $("#value-info-header").html(`Value 2 = 2`);
            $("#value-info-text").html(`Extra information`);
        } else if (value2Value > 95 && value2Value < 100) {
            modal.style.display = "block";
            $("#value-info-header").html(`Value 2 = 3`);
            $("#value-info-text").html(`Extra information`);
        } else if (value2Value >= 100) {
            modal.style.display = "block";
            $("#value-info-header").html(`Value 2 = 4`);
            $("#value-info-text").html(`Extra information`);
        }
    } else if (value1Value > 90 && value1Value <= 95) {
        modal.style.display = "block";
        if (value2Value <= 90) {
            $("#value-info-header").html(`Value 1 = 2`);
            $("#value-info-text").html(`Extra information`);
        } else if (value2Value > 90 && value2Value <= 95) {
            $("#value-info-header").html(`Value 1 & Value 2 = 2 `);
            $("#value-info-text").html(`Extra information`);
        } else if (value2Value > 95 && value2Value < 100) {
            $("#value-info-header").html(`Value 1 = 2 | Value 2 = 3`);
            $("#value-info-text").html(`Extra information<br>testi`);
        } else if (value2Value >= 100) {
            $("#value-info-header").html(`Value 1 = 2 | Value 2 = 4`);
            $("#value-info-text").html(`Extra information`);
        }
    } else if (value1Value > 95 && value1Value < 100) {
        modal.style.display = "block";
        if (value2Value <= 90) {
            $("#value-info-header").html(`Value 1 = 3`);
            $("#value-info-text").html(`Extra information`);
        } else if (value2Value > 90 && value2Value <= 95) {
            $("#value-info-header").html(`Value 1 = 3 | Value 2 = 2`);
            $("#value-info-text").html(`Extra information`);
        } else if (value2Value > 95 && value2Value < 100) {
            $("#value-info-header").html(`Value 1 & Value 2 = 3`);
            $("#value-info-text").html(`Extra information`);
        } else if (value2Value >= 100) {
            $("#value-info-header").html(`Value 1 = 3 | Value 2 = 4`);
            $("#value-info-text").html(`Extra information`);
        }
    } else if (value1Value >= 100) {
        modal.style.display = "block";
        $("#value-info-text").html(`Extra information`);
        if (value2Value <= 90) {
            $("#value-info-header").html(`Value 1 = 4`);
        } else if (value2Value > 90 && value2Value <= 95) {
            $("#value-info-header").html(`Value 1 = 4 | Value2 = 2`);
        } else if (value2Value > 95 && value2Value < 100) {
            $("#value-info-header").html(`Value 1 = 4 | Value 2 = 3`);
        } else if (value2Value >= 100) {
            $("#value-info-header").html(`Value 1 & Value 2 = 4`);
        }
    } else if (value1Value <= 90 && value2Value <= 90) { }

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};

function resetAll() {
    document.getElementById("value-form").reset();
    $("#calculate-text").html("Input information above and click calculate");
    $("#value1-color").css("background-color", "grey");
    $("#value1-color").html("Value 1");
    $("#value2-color").css("background-color", "grey");
    $("#value2-color").html("value2");
    $("#optimal-values").html("");
};
