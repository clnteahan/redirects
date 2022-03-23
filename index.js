console.log("js loaded")

var url = document.URL
var button
var selected = 0

window.addEventListener("load", function() {
    button = document.getElementById("continueButton")

    var id = url.split("?")[1]

    if (id == "rr") {
        selected = 1
    }

    document.getElementById("text").style.display = "none"
    button.style.width = "100%"
    button.style.height = "500%"

    continueButton()
})

function continueButton() {
    if (selected == 1) {
        window.location = url.split("?")[0] + 'rolling.mp4'
    }
}