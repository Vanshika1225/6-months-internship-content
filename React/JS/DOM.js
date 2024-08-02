document.getElementById("Para").innerHTML = "Hey i m innerhtml property"

const elementBytagName = document.getElementsByTagName("p")
console.log(elementBytagName)

console.log(document.getElementsByClassName("class"));

console.log(document.querySelectorAll(".class"))
console.log(document.querySelectorAll("p"))


const frmVal = document.forms['frm1'];
console.log(frmVal)

let element = ''
for (let i = 0; i < frmVal.length; i++) {
    element += frmVal.elements[i].value + "<br>";
}

document.getElementById("h4").innerHTML = element + "<br>" + "date : " + Date()

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
