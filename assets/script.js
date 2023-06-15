// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the 
// code isn't run until the browser has finished rendering all the elementsin the html.
$(function () {
  var saveButton = $('.saveBtn');
  var saveEvents = $('.description').val($(this).data('textarea'));
  console.log(saveEvents);

  saveButton.on('click', function(){
    localStorage.setItem('userEvents', JSON.stringify(saveEvents));
    console.log(saveEvents);
  });

  var currentHour = dayjs().format('H');
  var timeBlock = $('.time-block').attr('id');
  console.log(currentHour);
  console.log(timeBlock);

  if (currentHour > timeBlock) {
    $('.time-block').addClass('past');
  } else if (currentHour === timeBlock) {
    $('.time-block').addClass('present');
  } else {
    $('.time-block').addClass('future');
  }

  // retrieve the user's events from local storage and display them in the correct time-blocks when the page loads or refreshes
  var userEvents = JSON.parse(localStorage.getItem('userEvents'));
  console.log(userEvents);

  if (userEvents !== null) {
    $('.description').val(userEvents);
  } else {
    $('.description').val('');
  }

  /*Displays the current date*/
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));
});

/*Retrieve stored events from local storage*/
window.addEventListener ('load', function (){
  saveEvents = JSON.parse(localStorage.getItem('userEvents'));
});
