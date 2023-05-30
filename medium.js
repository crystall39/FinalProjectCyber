function login()
{
    if ((document.getElementById("name").value == "") ||
    (document.getElementById("pass").value == ""))
    {
        alert("Both inputs are required")
    }
    else if ((document.getElementById("name").value == "ee3ea5ea8903afa405bc53bd688bf64430bfaec999b531bee6d1f6fc2485d867") &&
    (document.getElementById("pass").value == "0b12b9271a30440c92e519637c4024b8e31a734e3771aacd82760593b21f9f5f"))
    {
        alert("You got the right password");
        console.log(window.location.href = "./hard.html");
        return false;
    }
    else    
    {
        alert("No account found with that username and password");
    }
}
