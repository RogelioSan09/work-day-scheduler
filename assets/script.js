$(function () {
  /*Declared variables for save button and assigned them to the class within the html.*/
  var saveButton = $('.saveBtn');
  var saveEvents = $('#user-input');
  console.log(saveEvents);
  
  /*Event listener for saving users events in local storage upon user clicking the save button.*/
  saveButton.on('click', function(){
    localStorage.setItem('userEvents', saveEvents);
    console.log(saveEvents);
  });

  /*Executes the function to determine the time category of the time blocks
  Compares the current time with the time designated by each time block.*/
  timeSequence();

  function timeSequence(){
      var currentTime = dayjs().format('H');
      console.log("Current time: " + currentTime);
      for (var i = 0; i < 9; i++){
        var timeBlock = 9 + i;
        console.log("Time-block is " + timeBlock);
        if (currentTime > timeBlock){
          console.log(currentTime + ' > ' + timeBlock);
          for(var j = 0; j < 8; j++){
              console.log(j);
              $('textarea').addClass("past");
          }
        } if (currentTime < timeBlock){
          console.log(currentTime + ' < ' + timeBlock);
          for(var j = 0; j < 8; j++){
              console.log(j);
              $('textarea').addClass("future");
          }
        } else{
              console.log(currentTime + ' == ' + timeBlock);
              for(var j = 0; j < 8; j++){
                  console.log(j);
                  $('textarea').addClass("present");
              }
        }
      }
  }


  /*Retrieve stored events from local storage*/

  window.addEventListener ('load', function (){
    $('#user-input') = localStorage.getItem('userEvents');
  });

  /*Displays the current date*/
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));
});