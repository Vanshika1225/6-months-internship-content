function showData()
{
    const userName=document.querySelector("#userName").value;
    const email=document.querySelector("#email").value;
    const password=document.querySelector("#password").value;

    document.getElementById("data").innerHTML=userName+"<br>"+email+"<br>"+password+"<br>";
    document.getElementById("data").style.backgroundColor="black";
    document.getElementById("data").style.padding="10px"
    document.getElementById("data").style.width="fit-content";
    document.getElementById("data").style.marginTop="20px";
    document.getElementById("data").style.borderRadius="12px";

    document.querySelector("#userName").value="";
    document.querySelector("#email").value="";
    document.querySelector("#password").value=""
}
document.querySelector(".button").addEventListener('click',showData)