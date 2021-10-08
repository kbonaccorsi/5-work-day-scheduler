// global variables
var saveBtnEl = $(".saveBtn");
var currentHour = moment().hours();
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));
var descriptionEl = $($(".saveBtn").siblings("#description"));

// color coding the text area box
(function timeColorCode() {
    const $rowsArr = $(".row");
    for (i = 0; i < $rowsArr.length; i++) {
        $($rowsArr[i]).addClass("hour")
        const container = $($rowsArr[i]).children()[2]
//if the planner hour is past, present, or future of the current hour, the text area will be a different color
        if (Number($($rowsArr[i]).attr("id")) < currentHour) {
            (container).addClass("past")
        } else if (Number($($rowsArr[i]).attr("id")) === currentHour) {
            (container).addClass("present")
        } else if (Number($($rowsArr[i]).attr("id")) > currentHour) {
            (container).addClass("future")
        }
    }
});

//text area should display saved content even after refreshing the page
function init() {
    $("#8").children("textarea").val(localStorage.getItem("8"))
    $(".description").each(function (index, value) {
        var timeId = this.parentElement.id;
        $(value).val(localStorage.getItem(timeId))
    })
}

//on click of save button, text area should be saved
saveBtnEl.on("click", function (e) {
    e.preventDefault();
    var descriptionText = e.currentTarget.previousElementSibling.value
    var timeBlockId = e.currentTarget.parentElement.id
    if (descriptionText === !null) {
        return;
    }
    localStorage.setItem(timeBlockId, descriptionText)
});

//call init function
init()