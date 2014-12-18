function readDarsanaMail(){
  var sheet = SpreadsheetApp.getActiveSheet();
  var thds = GmailApp.search("label:darsana")
//  var thds = GmailApp.search("after:2014/12/13 before:2014/12/14 from:(ingress-support@google.com) subject:(Ingress Damage Report: Entities attacked by)")
  var row = 1;

  sheet.getRange(row,1).setValue("Date");
  sheet.getRange(row,2).setValue("Portal");
  sheet.getRange(row,3).setValue("Attack AgentID");
  row++;
  
  for(var n in thds){
      var thd = thds[n];
      var msgs = thd.getMessages();
      for(m in msgs){
           var msg = msgs[m];
           var from = msg.getFrom();
           var date = msg.getDate();
           var Subject = msg.getSubject();
           var Agent = msg.getSubject().replace("Ingress Damage Report: Entities attacked by ", "");
           var body = msg.getBody();
           var Portal_temp = body.match(/\"Portal \-.*/);
        　　　 Portal_temp = Portal_temp.join();
               Portal_temp = Portal_temp.replace("\"Portal \- ","");
               Portal = Portal_temp.replace(/\" height=\"160\".*/,"");

           sheet.getRange(row,1).setValue(date);
           sheet.getRange(row,2).setValue(Portal);
           sheet.getRange(row,3).setValue(Agent);
        row++;
      }
  }
}
