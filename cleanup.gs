function cleanUp() {
  var delayDays = 2 // Enter # of days before messages are moved to trash
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  var label = GmailApp.getUserLabelByName("PASSWORD_RESET");
  var threads = label.getThreads();
  for (var i = 0; i < threads.length; i++) {
    if (threads[i].getLastMessageDate()<maxDate)
      {
        threads[i].moveToTrash();
      }
  }
}
