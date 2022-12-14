function resume(){
    let firstname;
    firstname=document.getElementById("firstname").value;
    console.log(firstname);
    let lastname;
    lastname=document.getElementById("lastname").value;
    console.log(lastname);
    document.getElementById("name").innerHTML=firstname+lastname;

    let mbno;
    mbno=document.getElementById("mbno").value;
    console.log(mbno);
    document.getElementById("number").innerHTML=mbno;

    let email;
    email=document.getElementById("email").value;
    console.log(email);
    document.getElementById("mail").innerHTML=email;
}