var team = [{
    "name": "Tóth Norbert",
    "nickname": "Norbi",
    "age": 28,
    "hobby": "Motorsport"
}, {
    "name": "Zajkás Ágoston",
    "nickname": "Ágó",
    "age": 26,
    "hobby": "Rágógumi újracukrozó üzemben pszichológus"
}, {
    "name": "Kapuvári Szilvia",
    "nickname": "Szilvi",
    "age": 41,
    "hobby": "Bringa, túrázás, darts"
}, {
    "name": "Katkó György",
    "nickname": "Gyuri",
    "age": 32,
    "hobby": "Fedettpályás démonidézés"
}, {
    "name": "Szentiványi András",
    "nickname": "Andris",
    "age": 35,
    "hobby": "RPG"
}];

document.getElementById("name").innerHTML = team[0].name;
document.getElementById("nickname").innerHTML = team[0].nickname;
document.getElementById("age").innerHTML = team[0].age;
document.getElementById("hobby").innerHTML = team[0].hobby;

document.getElementById("name1").innerHTML = team[1].name;
document.getElementById("nickname1").innerHTML = team[1].nickname;
document.getElementById("age1").innerHTML = team[1].age;
document.getElementById("hobby1").innerHTML = team[1].hobby;

document.getElementById("name2").innerHTML = team[2].name;
document.getElementById("nickname2").innerHTML = team[2].nickname;
document.getElementById("age2").innerHTML = team[2].age;
document.getElementById("hobby2").innerHTML = team[2].hobby;

document.getElementById("name3").innerHTML = team[3].name;
document.getElementById("nickname3").innerHTML = team[3].nickname;
document.getElementById("age3").innerHTML = team[3].age;
document.getElementById("hobby3").innerHTML = team[3].hobby;

document.getElementById("name4").innerHTML = team[4].name;
document.getElementById("nickname4").innerHTML = team[4].nickname;
document.getElementById("age4").innerHTML = team[4].age;
document.getElementById("hobby4").innerHTML = team[4].hobby;

var addons = document.querySelector('div#addons')
function addElement() {
    var addonName = document.querySelector('#addonName')
    var newElement = document.createElement("p")
    newElement.innerText = addonName.value
    //addonsNode.innerHTML += `<p>${nameNode.value}</p>\n`
    addons.appendChild(newElement)
    addonName.value = ""
}
function deleteLast() {
    var elementCount = addons.childElementCount
    var wantToDel = addons.children[elementCount - 1]
    addons.removeChild(wantToDel)
}