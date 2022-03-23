console.log("js loaded")
var url = document.URL

var id = url.split("?")[1]

if (id == "rr") {
    document.createElement('<iframe src="https://redirect.colinteahan.dev/?rr"></iframe>')
}