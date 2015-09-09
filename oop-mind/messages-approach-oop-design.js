class Report{
    //each method in object is a message which will be sent to object wiht the argumenets

    fill(IReportDataProvider provider){
        //what the purpose of it?
        
        // collect data and modify it, also report with inner state can pass another different messages
        // which produce another result
        // 
        // ASK 
        // do we need a state? twice call a generate and to pdf.
        // will we change it?, I think when we pass formatProvider etc we will change the data from provider
        // what methods we need in provider? getName, getPrice, etc? +
        // 
        return this;
    }

    // generate(){
        //what the purpose of it?
        //REMOVE IT
        // return this;
    // }

    toPDF(destination){
        //returns PDF report //another object should generate data
        return fileWrite(destination, "PDF content here");
    }
}

var txtProvider, tcpDataProvider;
var dest = "C:\\report.pdf";
var report = new Report();

report.fill(txtProvider).toPDF(dest);
report.fill(tcpDataProvider).toPDF(dest);


