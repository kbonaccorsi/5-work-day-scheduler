// global variables
var timeEl = document.querySelectorAll("datetime");
var inputEl = document.querySelectorAll(".description");
var currentHour = moment().hours();
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));


//continue debugging this function 

$(function timeColorCode() {
    const $rowsArr = $(".row");
    console.log($rowsArr);
//works up to ^


    for( i = 0; i < $rowsArr.length; i++);
    $($rowsArr).ammendChild.("hour")
    if ($($rowsArr[i]).text() < ".hour") {
        $("div").addClass("past");
    }; else if ($($rowsArr[i]).text() === ".hour") {
        $("div").addClass("present");
    } else if ($($rowsArr[i]).text() > ".hour") {
        $("div").addClass("future");
};

//save description when the save button is clicked
$(".fa-save").on("click", function() {
    $(".description").text().trim();
});
