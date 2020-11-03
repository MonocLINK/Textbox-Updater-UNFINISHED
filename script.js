$(document).ready(function() {
    // price and totals
    var learningJQueryPrice = 49.99;
    var jQueryDonationPrice = 14.99;
    var total;

    // default price outputs, easier updatability
    $("#learningJQueryPrice").text("$" + learningJQueryPrice);
    $("#jQueryDonationPrice").text("$" + jQueryDonationPrice);

    // event handlers
    $("#learningJQueryQty").keyup(updateValue);

    function updateValue(event) {
        var num = $(this).val();
        // im sure theres a better way to do this
        thisID = "\"#" + $(this).attr("id");
        thisID = thisID.substring(0, thisID.length - 3);
        thisID += "Total\""
        $(thisID).text(num);
    }


});