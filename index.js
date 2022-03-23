console.log("js loaded")
var url = document.URL

var id = url.split("?")[1]

if (id == "rr") {
    document.getElementById("text").style.display = "none"
    document.createElement('<iframe src="https://youtu.be/dQw4w9WgXcQ"></iframe>')
}