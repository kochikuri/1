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
        console.log("sucess run again")
        setTimeout("location.reload(true);", 30000);
        window.setTimeout(status,10000);
        }
        else{
            window.location.href = "index.html";
           
        }
    }
function status()
{
alert(localStorage.getItem("username")+"please logout after use")
}



            function logout()
            {
                window.location.href = "index.html";
                localStorage.clear();
                
            }

