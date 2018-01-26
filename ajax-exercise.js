"use strict";


// PART 1: SHOW A FORTUNE
function getFortune(result) {
    $("#fortune-text").append(result);
    console.log(result);
}

function showFortune(evt) {
    evt.preventDefault();
    $.get('/fortune', getFortune);
    console.log("show Fortune function");

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function printWeather(result) {
    $('#weather-info').html("Forecast: " + result["forecast"]);
    // console.log("result");
}

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, printWeather);
    console.log("show WEATHER!");

    // TODO: request weather with that URL and show the forecast in #weather-info
}


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
// result = {'code': result_code, 'msg': result_text}

function showMessage(result) {
    $('#order-status').append("Code: " + result["code"] + '   ');
    $('#order-status').append("Msg: " + result["msg"]);
    console.log("showed Message!");
    if (result["msg"] === 'ERROR') {
        $('#order-status').addClass('order-error');}


}
function orderMelons(evt) {
    evt.preventDefault();

    let formInputs = {
        "melon_type": $('#melon-type-field').val(),
        "qty": $('#qty-field').val(),
    }

    $.post('/order-melons.json', formInputs, showMessage);
    console.log("ordered melons!");

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


