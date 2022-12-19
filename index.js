const bar= document.getElementById('bar')
const navBar= document.getElementById("navbar")
const Email= document.getElementById("email")
const Name= document.getElementById("name")
const Em= document.getElementById("em")
const Nm= document.getElementById("nm")
const Tex= document.getElementById("tex")

bar.addEventListener("click", function(){
    navBar.style.display="block"
});
function abort(){
    navBar.style.display="none"
}
function validate(){
    const re= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

if(!Email.value.match(re))
   {
     Em.innerHTML= "Invalid Email"
   }
   else if(Email.value.match(re))
   {
     Em.innerHTML= " "
   }
   else if(Name.value== " ")
   {
    Nm.innerHTML= "Please This Field Must Be Filled!"
   }
   else{
    Tex.innerHTML= "Please This Field Must Be Filled!"
   }
}