
        // =========================================== Chapter 31 To 34=============================================

        alert("Welcome To My Assignment 31 To 34 ")

        // ========== Anwer#1 ====================
        // var newDate = new Date();
        // document.write(newDate);

        // =========== Answer#2 ===================

        // var array = ["January","February","March","April","May","June","July","August","September","Ovtober","November","December"]
        // var now = new Date();
        // var rightNow = now.getMonth();
        // var nameOfMonths = array[rightNow]
        // alert("Current Month is : "+nameOfMonths)


        // ============ Answer#3 ==============

        // var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        // var now = new Date();
        // var theDay = now.getDay();
        // var nameOfToday = dayNames[theDay];

        // alert("Today is "+nameOfToday);

        // ============ Answer#4 ==============

        // var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        // var now = new Date();
        // var theDay = now.getDay();
        // var nameOfToday = dayNames[theDay];

        // if(nameOfToday === "Saturday"|| nameOfToday === "Sunday"){
        //     alert("It's a Fun Day")
        // }else{
        //     alert("It's a working day")
        // }


        // ============= Answer#5 ================

        // var dayNameStart = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        // var dayNameEnd = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
        // var now = new Date();
        // var day = now.getDate();
        // if(day === dayNameStart){
        //     alert("First Fifteen Days Of Months")
        // }else{
        //     alert("Last Fifteen Days Of Months")
        // }


        // ============= Answer#7 ================


        // var hrsStart = [0,1,2,3,4,5,6,7,8,9,10,11]
        // var hrsEnd = [12,13,14,15,16,17,18,19,20,21,22,23]
        // var now = new Date();
        // var hours = now.getHours();
        // if(hours === hrsStart){
        //     alert("It's AM")
        // }else{
        //     alert("It's PM")
        // }

        // ============ Answe#8 ======================

        // var laterDate = new Date("December 31, 2020");
        // alert("Later Date: "+ laterDate);



        // =============== Answer#9 ================

        // var today = new Date();
        // var doomsday = new Date("June 18, 2015");
        // var msToday = today.getTime();
        // var msDoomsday = doomsday.getTime();                       
        // var msDiff = msToday - msDoomsday;
        // var dDiff = msDiff /1000 / 60 /60 / 24;
        // alert(Math.round( dDiff ) + " Days Have passed since 1st Ramadan , 2015" );   

        // var date = new Date("June 18, 2015");
        // var rightNow = new Date();
        // var diff = rightNow-date;
        // var b = diff*12*30
        // alert(b) 

        // ======== Answer#10 ===========

            // var date = new Date("Dec 5, 2015");
            // var newDate = new Date("Jan 1, 2015");
            // var msTime = date.getTime();
            // var msDate = newDate.getTime();
            // var diff = msTime-msDate;
            // var difff = diff/1000/60;
            // document.write("On Reference Date"+date +"</br>")
            // document.write(difff + "seconds had passessince beginning of 2015")

            
        // ======== Answer#11 ===========

        // var date = new Date();
        // document.write("Current Date "+ date + "</br>");
        // var hr = date.getHours()-1;
        // var currentDate = new Date("Sep 19, 2020 "+hr+":48:00");
        // document.write( "1 hour ago , It was : " + currentDate);


        // ======== Answer#12 ===========

        
        // var date = new Date();
        // alert("Current Date "+ date);
        // var year = date.getFullYear()-100;
        // var currentDate = new Date("Sep 19, "+year);
        // alert( "100 Years Back , It was : " + currentDate)

        // ======== Answer#13 ===========
        

        // var date = new Date();
        // var birthYear = +prompt("Enter Your Birth Year  ", " 2000");
        // var nn=date.getFullYear();
        // var diff = nn-birthYear;
        // document.write( "Your Age is " + diff + "</br>") ;
        // document.write("Your Birth Year is "+ birthYear);


        // ======================= Assignment Completed ========================