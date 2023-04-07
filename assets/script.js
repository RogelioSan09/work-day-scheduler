$(function () {
  /*Declared variables for save button and assigned them to the id within the html.*/
  var saveButton = $('.saveBtn');
  console.log(saveButton);
  var userEvents = $('#user-input');
  console.log(userEvents);

  /*Event listener for saving users events in local storage upon user clicking the save button.*/
  saveButton.on('click', '.saveBtn', function(){
    localStorage.setItem("user-input", userEvents);
  });

  /*Retrieve stored events from local storage*/
  renderEvents();
  
  function renderEvents(){
    localStorage.getItem("user-input");
  }

  /*Displays the current date*/
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));
});