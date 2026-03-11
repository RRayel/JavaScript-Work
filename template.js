


// set initial values
var s = "";  // the calendar string to build 
var dayval=1;

function calendar(cmth, cyr) {

	s="";
	
    for(var cmth = 0;cmth<12; cmth++)
        {
            dayval=1;
	firstday =  new Date(cyr,cmth,1);
	fdval = firstday.getDay();
	mdays[1]=(((cyr%100!=0)&&(cyr%4==0))||(cyr%400==0))?29:28;	
	mthdays = mdays[cmth];	
	ttlday = fdval+ mthdays;
	numrows = (parseInt(ttlday /7));
	if (ttlday % 7 != 0) { numrows=numrows+1; }
	s+= '<table>';
	calhead(cmth,cyr);
	dayhead();        // put the column headers 
	firstrow(fdval);
	for (i=1 ; i<numrows; i++) {   // put the rows ?? how many rows??
        putrow(); 
	}
	s+= "</table>";
        }
		
	document.getElementById("calendar").innerHTML=s;  //update the div with calendar string
}
function firstrow(fdval) {
	s+= "<tr>";
    for (x=1; x<fdval+1; x++){
		s+="<td></td>";
	}
	for (z = x ; z<8 ; z++)
	{
		 putcell();
	}
}
function putrow() {
   s+="<tr>";
   for (j=1 ; j<8 ; j++){  
	   putcell();
   }
   s+="</tr>";
}
function putcell() {
    
	 if (dayval > mthdays)
	 {
		 s+="<td>";	 
		 s+="</td>";
	 }
	else  {
		 s+="<td>";
		 s+=dayval;		 
		 s+="</td>";		
		}
	 dayval++;
}
function dayhead() {
  s+="<tr>";
	  s+="<td>S</td>";
	  s+="<td>M</td>";
	  s+="<td>T</td>";
	  s+="<td>W</td>";
	  s+="<td>Th</td>";
	  s+="<td>F</td>";
	  s+="<td>S</td>";  
  s+="</tr>";
}
function shortdate() {

	sd ="";
	sd += mth;
	sd += "/";
	sd += dom;
	sd += "/";
	sd += yr;
	document.getElementById("thisdate").innerHTML= sd;
}
function calhead(cmth, cyr) {
	s+="<tr>";
	s+='<td colspan="7" id="calhead">'+mname[cmth]+' '+cyr+'</td>';
	s+="</tr>";
	
}
