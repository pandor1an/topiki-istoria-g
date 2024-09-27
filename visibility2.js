function changeStyleById1(id)
{
     var prosp = document.getElementById(id)
     if (prosp.style.display == 'none')
     	   prosp.style.display = 'block'
	 else prosp.style.display = 'none';
};
function changePhoto(idd,src)
{
 	 objImg = document.getElementById(idd);
	 objImg.src = src;
	 document.getElementById(idd).style.display = 'block';
}
function putTitle(idd,src)
{
 	document.getElementById(idd).innerHTML  =src;	
	 document.getElementById(idd).style.display = 'block';
}
	function allaxe(idd){
		document.getElementById(idd).bgColor ="#FFFFFF";
	}
	function allaxe1(idd){
		document.getElementById(idd).bgColor ="#CBB7B3";
	}
	function changePhoto1(idd,src)
{
 	 objImg = document.getElementById(idd);
	 objImg.src = src;
	// document.getElementById(idd).style.display = 'block';
}
var isie;
var isnn;
if(navigator.appName == 'Microsoft Internet Explorer')
{ isie=true }
if(navigator.appName=='Netscape')
{ isnn=true; }

