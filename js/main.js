var parent = document.querySelector('div#addons')

function addElement() {
    // window.alert("almafa");
    var nameNode = document.querySelector('#addonName')
    // window.alert(nameNode.value)

    var ujElem = document.createElement("p")
    ujElem.innerText = nameNode.value

    //addonsNode.innerHTML += `<p>${nameNode.value}</p>\n`

    parent.appendChild(ujElem)
    nameNode.value = ""
}

function deleteLast() {
    var elemekSzama = parent.childElementCount
    var torlendo = parent.children[elemekSzama - 1]
    parent.removeChild(torlendo)
}