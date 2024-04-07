function myFunction() {
    let name = document.getElementById("user name").value;
    let password = document.getElementById("pas").value;

    let stdName1 = "Mg Mg"
    let stdPass1 = 123

    let stdName2 = "Mg zaw"
    let stdPass2 = 456

    if (!name || !password) 
    {
        alert("Please Enter Your User Name And Password")
    } 
    else if (name == stdName1 || password == stdPass1)
    {
        
        alert("login success")
    } 
    else if (name == stdName2 || password == stdPass2) 
    {
        window.location="home.html"
        alert("login success")
        
    } 
    else {
        alert("User Name and Password incorrect!")
    }
}