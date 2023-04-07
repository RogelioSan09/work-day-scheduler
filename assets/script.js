$(function () {
  /*Displays the current date*/
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));
});