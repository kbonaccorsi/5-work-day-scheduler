// global variables
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM DD, YYYY"));

/*if .hour date-time is < now (moment()) {
color-code row (.past)
} else if {.hour date-time is === now(moment()) {
    color-code row (.present)
} else {
    color-code row(.future)
}
*/

