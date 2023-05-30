function login()
{
    if ((document.getElementById("name").value == "") ||
    (document.getElementById("pass").value == ""))
    {
        alert("Both inputs are required")
    }
    else if ((document.getElementById("name").value == "gangyblud") &&
    (document.getElementById("pass").value == "NotMyPassDE"))
    {
        alert("You got the right password");
        console.log(window.location.href = "./medium.html");
        return false;
    }
    else    
    {
        alert("No account found with that username and password");
    }
}
