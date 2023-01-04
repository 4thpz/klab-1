const bar= document.getElementById('bar')
const navBar= document.getElementById("navbar")
const resp= document.getElementById("min")

const Tex= document.getElementById("tex")
const Te= document.getElementById("te")
const lst= document.getElementById("lst")

let borderName= document.getElementById("name")
let borderEmail= document.getElementById("email")
let borderMsg= document.getElementById("msg")
bar.addEventListener("click", function(){
    navBar.style.display="block"
});
function abort(){
    navBar.style.display="none"
}


function formValidation(e){
    e.preventDefault();
  const Form= document.getElementById('form')
    const Emre= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const Name= Form[0].value;
    const Email= Form[1].value;
    const Msg= Form[2].value;
   if(Name=== ""  )
   {
    Tex.innerHTML= "Please Name Can't Be Empty!";
    borderName.style.border= " 1px solid red"
    
   }else if( Name.length < 6)
   {
    Tex.innerHTML= " Name Must Have 6 Character Atleast!";
    
   }else if(Email=="")
   {
    Tex.innerHTML= "";
    borderName.style.border= " 1px solid green"
    Te.innerHTML= "Email Can't Be Empty!";
    borderEmail.style.border= " 1px solid red"
   }
   else if(!Emre.test(Email)){
    Tex.innerHTML= "";
    Te.innerHTML= "Please Provide A Valid Email!";
    borderEmail.style.border= " 1px solid red"
   }else if(Msg== "")
   { Te.innerHTML= "";
   Tex.innerHTML= "";
    lst.innerHTML= "Message Fieldd Can't Go Blank!";
    borderEmail.style.border= " 1px solid green"
    borderName.style.border= " 1px solid green"
    borderMsg.style.border= " 1px solid red"
   }else if(Msg.length < 30){
    Te.innerHTML= "";
    Tex.innerHTML= "";
    lst.innerHTML= "Message Fieldd Must Atleast Have 30 Characters";
    borderEmail.style.border= " 1px solid green"
    borderName.style.border= " 1px solid green"
    borderMsg.style.border= " 1px solid red"
   }
   else{
    Tex.innerHTML= "";
    lst.innerHTML= "";
    borderEmail.style.border= " 1px solid green"
    borderName.style.border= " 1px solid green"
    borderMsg.style.border= " 1px solid green"
   }

}