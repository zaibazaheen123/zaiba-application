function resume(){
    let firstname;
    firstname=document.getElementById("firstname").value;
    console.log(firstname);
    

    let lastname;
    lastname=document.getElementById("lastname").value;
    console.log(lastname);
    

    document.getElementById("name").innerHTML=firstname+lastname;
    
}