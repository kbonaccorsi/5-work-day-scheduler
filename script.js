// global variables
var saveBtnEl= $(".saveBtn");
var currentHour = moment().hours();
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
var descriptionEl = $($(".saveBtn").siblings("#description"));

$(function timeColorCode() {
        const $rowsArr = $(".row");
        console.log($rowsArr);
        for( i = 0; i < $rowsArr.length; i++) {
        $($rowsArr[i]).addClass("hour")
        const container = $($rowsArr[i]).children() [2]
        console.log(Number($($rowsArr[i]).attr("id")), container)
        if (Number($($rowsArr[i]).attr("id")) < currentHour) {
            $(container).addClass("past")
        } else if (Number($($rowsArr[i]).attr("id")) === currentHour) {
            $(container).addClass("present")
        } else if (Number($($rowsArr[i]).attr("id")) > currentHour) {
            $(container).addClass("future")
        }
    }
});

saveBtnEl.on("click",function (e) {
    e.preventDefault();
    
    var descriptionText= descriptionEl.value;
    if (descriptionText ==="") {
        return;
        console.log(descriptionText);
}
});

function storeDescriptions() {
    localStorage.setItem("#description", descriptionEl)
renderDescription();
};


function renderDescription () {
    var savingDescriptionEl = localStorage.getItem("#description")
};