// JavaScript Document
function f1() { 
	//function to make the text bold using DOM method 
	document.getElementById("textarea1").style.fontWeight = "bold"; 
} 

function f2() { 
	//function to make the text italic using DOM method 
	document.getElementById("textarea1").style.fontStyle = "italic"; 
} 
function f3() { 
	//function to make the text underline using DOM method 
	document.getElementById("textarea1").style ="text-decoration: underline"; 
	print
} 

function f4() { 
	//function to make the text alignment left using DOM method 
	document.getElementById("textarea1").style.textAlign = "left"; 
} 

function f5() { 
	//function to make the text alignment center using DOM method 
	document.getElementById("textarea1").style.textAlign = "center"; 
} 

function f6() { 
	//function to make the text alignment right using DOM method 
	document.getElementById("textarea1").style.textAlign = "right"; 
} 

function f7() { 
	//function to make the text in Uppercase using DOM method 
	document.getElementById("textarea1").style.textTransform = "uppercase"; 
} 

function f8() { 
	//function to make the text in Lowercase using DOM method 
	document.getElementById("textarea1").style.textTransform = "lowercase"; 
} 

function f9() { 
	//function to make the text capitalize using DOM method 
	document.getElementById("textarea1").style.textTransform = "capitalize"; 
} 

function f10() { 
	//function to make the text back to normal by removing all the methods applied 
	//using DOM method 
	document.getElementById("textarea1").style.fontWeight = "normal"; 
	document.getElementById("textarea1").style.textAlign = "left"; 
	document.getElementById("textarea1").style.fontStyle = "normal"; 
	document.getElementById("textarea1").style = "normal"; 
	document.getElementById("textarea1").style.textTransform = "capitalize"; 
	document.getElementById("textarea1").value = ""; 
}

function f11() {
	if (promptFilename = prompt("Save file as", "")) {
		var textBlob = new Blob([document.getElementById("textarea1").value], {type:'text/plain'});
		var downloadLink = document.createElement("a");
		downloadLink.download = promptFilename;
		downloadLink.innerHTML = "Download File";
		downloadLink.href = window.URL.createObjectURL(textBlob);
		downloadLink.click();
    delete downloadLink;
    delete textBlob;
	}
}

