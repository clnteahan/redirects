console.log("js loaded")
var url = document.URL

var id = url.split("?")[1]

if (id == "rr") {
    console.log("rolled")
    window.open("https://youtu.be/dQw4w9WgXcQ")
}