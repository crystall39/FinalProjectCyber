function login()
{
    if ((document.getElementById("name").value == "") ||
    (document.getElementById("pass").value == ""))
    {
        alert("Both inputs are required")
    }
    else if ((document.getElementById("name").value == "Fashypub!") &&
    (document.getElementById("pass").value == "PasswordIsSecure_!"))
    {
        alert("You got the right password");
    }
    else    
    {
        alert("No account found with that username and password");
    }
}
