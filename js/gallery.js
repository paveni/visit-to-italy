function upDate(previewPic){
    var background = "url('" + previewPic.src + "')";
    document.getElementById("image").style.backgroundImage = background;
    var text = previewPic.alt;
    document.getElementById("altText").innerHTML = text;
}

function unDo(){
	document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("altText").innerHTML = "Hover over an image below to display here.";
}

function focusOn(previewPic){
    var background = "url('" + previewPic.src + "')";
    document.getElementById("image").style.backgroundImage = background;
    var text = previewPic.alt;
    document.getElementById("altText").innerHTML = text;
}

function focusOff(){
	document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("altText").innerHTML = "Hover over an image below to display here.";
}

function addTab(){
    const gallery = document.getElementsByClassName("preview")
    console.log(gallery.length)
    for (let i = 0; i < gallery.length; i++) {
        console.log(i)
        gallery[i].setAttribute("tabIndex","0");
    }
}