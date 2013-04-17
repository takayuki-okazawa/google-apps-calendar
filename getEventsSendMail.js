function myFunction() {
  
  //Logger.log(""); 
  
  var today = new Date();
  
  var objCalendar = CalendarApp.getDefaultCalendar();
  var events = CalendarApp.getDefaultCalendar().getEventsForDay(today);
  var eventsText = '';
  
  for(var i=0; i < events.length; i++){
    
    // [休み 名前]でカレンダーのタイトルが入っている想定
    if(0<=events[i].getTitle().indexOf("休み")){
      var strArray = events[i].getTitle().split(" ");
      //Logger.log("name="+strArray[1]);
      sendMail(strArray[1]);
    }
  }
  
}

function sendMail(name){
  
  //Parameter
  var send_to = 'hoge@gmail.com';
  var title = '本日欠勤：'+name;
  var body = 'おつかれさまです ' + name + 'です。\n本日休みを頂きます。お忙しいところ申し訳ありません';
  
  MailApp.sendEmail(send_to,title,body);
  
}