var obj=[
    {
        phone:"9037259042",
        username:"Vignesh",
        password:"1234"
    },
    {
        phone:"8848381429",
        username:"Abhinav",
        password:"1234"
    },
    {
        phone:"8129290529",
        username:"Jishnu",
        password:"1234"
    },
    {
        phone:"8921448663",
        username:"Aswanth",
        password:"1234"
    },
    {
        phone:"8606748894",
        username:"Sibi",
        password:"1234"
    },
    {
        phone:"9446142952",
        username:"Shijin",
        password:"1234"
    },
    {
        phone:"9895579867",
        username:"Jiju",
        password:"1234"
    },
    {
        phone:"9544223942",
        username:"Sourav",
        password:"1234"
    },
    {
        phone:"9207470531",
        username:"Jishil",
        password:"1234"
    },
     {
        phone:"56456",
        username:"Sajilesh",
        password:"1234"
    },
    
   
]
function validate(){
    var phone=document.getElementById("phone").value
    var password=document.getElementById("password").value
    console.log("validation executed");

    for(i=0;i<obj.length;i++){
        if(phone == obj[i].phone && password == obj[i].password){
            localStorage.setItem("login", "true");
            localStorage.setItem("username", obj[i].username);
            window.location.href = "main.html";
            return
        }
    }
    window.location.href = "error.html";
    console.log("login fail")
}
function check(){
    if(localStorage.getItem("login")==("true")){
        console.log("new sucess");
        setTimeout("location.reload(true);", 10000);
        //window.setTimeout(status,10000);
        window.setTimeout(logout,60000);
        }
        else{
            window.location.href = "index.html";
           
        }
    }
// function status()
// {
//  console.log("alert executed");
// alert(localStorage.getItem("username")+" please logout after use")
// }
function logout()
{
    console.log("logout executed");
    window.location.href = "index.html";
    localStorage.clear();
                
}


function status() {
  if (confirm(localStorage.getItem("username")+" are you want to logout")) {
    logout();
  } 
}



            

