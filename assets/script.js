$(function () {
  /*Executes the function to determine the time category of the time blocks
    Compares the current time with the time designated by each time block.*/
  timeSequence();

  function timeSequence(){
    var currentTime = dayjs().format('H');
    console.log(currentTime);
    for (var i = 0; i < 8; i++){
      var timeBlock = 9 + i;
      console.log(timeBlock);
      if (currentTime > timeBlock){
        $('#hour').children().addClass("past");
      }
      if (currentTime < timeBlock){
        $('#hour').children().addClass("future");
      } else{
        $('#hour').children().addClass("present");
      }
    }
  }

  /*Displays the current date*/
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));
});