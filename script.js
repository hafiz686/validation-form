function validate(){
    var count = 0;
    var e1 = document.getElementById("fname").value;
    if(e1 == "")
    {
        alert("first name can't be empty")
        count +=1;
    }
    var e2 = document.getElementById("lname").value;
    if(e2 == "")
    {
        alert("last name can't be empty")
        count +=1;
    }
    var e3 = document.getElementById("age").value;
    if(e3 < 25)
    {
        alert("Age must be greater than 25")
        count +=1;
    }
    var e4 = document.getElementById("pass").value;
    if(e4 == "")
    {
        alert("password  can't be empty")
        count +=1;
    }

    switch(count)
    {
        case 0:
            document.getElementById("elig").style.visibility='visible';
            document.getElementById("sub").style.visibility='visible';
    }

}

function submit(){
    alert("Congrats! You have successfully registered as an eligible voter :)")
}