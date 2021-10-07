// global variables
var timeEl = document.querySelectorAll(".hour");
var today = moment();
var inputEl = document.querySelectorAll(".description");
var save = document.querySelectorAll(".ftn-btn");

var currentHour = moment().hours();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));



$(function timeColorCode() {
    if ($("time") < currentHour) {
        $(".row").addClass("past");
    } else if ($("time") === currentHour) {
        $(".row").addClass("present");
    } else if ($("time") > currentHour) {
        $(".row").addClass("future");
    };
});




function storeDescription() {
    localStorage.setItem(".description");
};

//save description when the save button is clicked
save.addEventListener("click", function(e) {
    e.preventDefault();

var descriptionText = inputEl.text.trim();

if (descriptionText === "") {
    return;
};

description.push(descriptionText);
inputEl.value = "";

storeDescription();
});
localStorage.getItem(".description");