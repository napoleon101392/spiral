var getTotalText = function () {

    var totalText = '';

    $('.form').find('.array-holder:checked').each(function () {
        totalText += $(this).val();
    });

    return totalText;
}

var drawSpiral = function (totalText) {

    var canvas = document.getElementById("my-canvas");

    var draw = canvas.getContext("2d");

    var centerx = draw.canvas.width / 2;
    var centery = draw.canvas.height / 2;

    a = 5;
    b = 4;

    draw.clearRect(0, 0, 300, 300);

    draw.moveTo(centerx, centery);
    draw.beginPath();

    for (i = 0; i < totalText.length; i++) {

        angle = 0.3 * i;

        x = centerx + (a + b * angle) * Math.cos(angle);
        y = centery + (a + b * angle) * Math.sin(angle);

        draw.fillText(totalText[i], x, y);
    }

}

$('.array-holder').click(function () {

    var arrayHolder = $('.array-holder');
    var generateBtn = $('#generate-btn');
    var inputNotChecked = $('.array-holder:not(:checked)');


    // refresh the restrictions
    arrayHolder.removeAttr('disabled');
    generateBtn.attr('disabled', true);
    inputNotChecked.parent().removeClass('strike');


    // listen if the last checked to all checkboxes is twice already
    // then apply restrictions
    if (arrayHolder.filter(':checked').length >= 2) {

        inputNotChecked.attr('disabled', true);
        inputNotChecked.parent().addClass('strike');
        generateBtn.attr('disabled', false);
    
        // to activate auto generate when clicking the last group of array
        // drawSpiral(getTotalText());
    }
});

$('#generate-btn').click(function (e) {

    e.preventDefault();

    drawSpiral(getTotalText());
});

