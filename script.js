function validateForm() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let email = document.getElementById("email").value;

    // Empty Validation
    if (name == "" || roll == "" || dept == "" || email == "") {
        alert("Fill all fields");
        return;
    }

    // Roll Number Validation
    let rollPattern = /^[0-9]{3}$/;

    if (!rollPattern.test(roll)) {
        alert("Roll Number must contain 3 digits");
        return;
    }

    // Email Validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Enter valid email");
        return;
    }

    // Name Validation
    let namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(name)) {
        alert("Enter a valid name");
        return;
    }


    document.getElementById("dname").innerHTML = name;
    document.getElementById("droll").innerHTML = roll;
    document.getElementById("ddept").innerHTML = dept;
    document.getElementById("demail").innerHTML = email;

    // Personalized Validation
    let lastDigit = parseInt(roll.charAt(roll.length - 1));

    showSkill(lastDigit);
    let tech=["HTML","CSS","JavaScript"];

let output="";

tech.forEach(function(item){
    output+="<li>"+item+"</li>";
});

document.getElementById("tech").innerHTML=output;


document.getElementById("myForm").reset();


}

function showSkill(lastDigit) {

    if (lastDigit <= 3) {
        document.getElementById("result").innerHTML = "Skill Level : Beginner";
    }
    else if (lastDigit <= 7) {
        document.getElementById("result").innerHTML = "Skill Level : Intermediate";
    }
    else {
        document.getElementById("result").innerHTML = "Skill Level : Advanced";
    }

}