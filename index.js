console.log("js loaded")
var url = document.URL

var id = url.split("?")[1]

if (id == "rr") {
    document.getElementById("text").style.display = "none"
    var rr = document.createElement('video')
    rr.src="rolling.mp4"
}