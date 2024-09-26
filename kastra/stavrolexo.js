function createindex(){ //creates the numbers of the crossword
	for (k=2;k<=13;++k){
		iddd = 1+"_"+k;
		document.getElementById(iddd).style.background  = "#CCCCCC";
		m = k-1;
		document.getElementById(iddd).innerHTML  = "&nbsp;&nbsp;"+m;
	};
	for (k=2;k<=13;++k){
		iddd = k+"_"+1;
		document.getElementById(iddd).style.background  = "#CCCCCC";
		document.getElementById(iddd).innerHTML  =k-1;
	};
	document.getElementById('1_1').style.background  = "#CCCCCC";
	document.getElementById('1_1').innerHTML  =" ";
}; //end of function createindex
function createrow(row,colstart,colend){
	for  (i=colstart;i<=colend;++i){
		idd = row+"_"+i ;
		idfortext = "id_"+row+"_"+i ;
		document.getElementById(idd).style.background  = "#000000";
		document.getElementById(idfortext).style.display  = "none";
	};
};

function createcol(col,rowstart,rowend){
	counter = 0;
	for  (i=rowstart;i<=rowend;++i){
		idd = i+"_"+col ;
		idfortext = "id_"+ i+"_"+col ;
		document.getElementById(idd).style.background  = "#000000";
		document.getElementById(idfortext).style.display  = "none";
	};
};

function valeleksi(stat,start,end,dirc,mala){ //this function adds a word in a specific line
	counter = 0;
	for  (i=start;i<=end;++i){
		if (dirc=="or"){
		    idd = "id_"+stat+"_"+i ;
		}
		else {
			idd = "id_"+ i+"_"+stat ;
		};
		document.getElementById(idd).value = mala[counter];
		counter= counter+1;
	};
}; //end of function valeleksi

function markwrong(stat,start,end,dirc){
	for  (i=start;i<=end;++i){
		if (dirc=="or"){
		    idfortext = "id_"+stat+"_"+i ;
		}
		else {
			idfortext = "id_"+i+"_"+stat ;
		}; //end of if then else
		document.getElementById(idfortext).style.background  = "#FF0033";       
	};//end of for
};

function checkleksi(stat,start,end,dirc,mala){ //this function adds a word in a specific line
	counter = 0;
	sosti= true;
	for  (i=start;i<=end;++i){
		if (dirc=="or"){
		    idd = "id_"+stat+"_"+i ;
		}
		else {
	 		idd = "id_"+i+"_"+stat ;
		};
 		if (document.getElementById(idd).value != mala[counter]){
				sosti=false;
				break;
		};
		counter= counter+1;
	};//end of for

	if (sosti==false){
		markwrong(stat,start,end,dirc);
	};
		
}; //end of function valeleksi

function Patarow(where,stat,start,end,dirc,mala1,mala2,mala3){
   var prosp =  document.getElementById(where).value;
   if (prosp==1) {
	 valeleksi(stat,start,end,dirc,mala1);
   }
   else if  (prosp==2) {
	   valeleksi(stat,start,end,dirc,mala2);
   };
   else if  (prosp==3) {
       valeleksi(stat,start,end,dirc,mala3);
   };
}; //end of function