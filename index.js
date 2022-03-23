console.log("js loaded")

var url = document.URL
var button = document.getElementById("continueButton")
var selected = 0

window.addEventListener("load", function() {

    var id = url.split("?")[1]

    if (id == "rr") {
        selected = 1
    }

    document.getElementById("text").style.display = "none"
    button.style.width = "100%"
    button.style.height = "500%"
})

function continueButton() {
    if (selected == 1) {
        this.window.open(url.split("?")[0] + 'rolling.mp4')
    }
}