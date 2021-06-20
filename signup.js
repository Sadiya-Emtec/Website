function getDetails(){ 
    const inpName =document.getElementById("inpName");
    const inpPhone =document.getElementById("inpPhone");
    const inpEmail =document.getElementById("inpEmail");
    const inpLname =document.getElementById("inpLname");
    const btnInsert =document.getElementById("btnInsert");
     const name=inpName.value ;
     const phone=inpPhone.value;
     const email=inpEmail.value;
     const lname=inpLname.value;

      console.log(name);
      console.log(phone);
      console.log(email);
      console.log(lname)
    
      if(name && phone && email)
      {
        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);
        localStorage.setItem("lname",lname);
        location.reload();
      }

  
}
//concatenate kese karuuu pehle storedekh console me


