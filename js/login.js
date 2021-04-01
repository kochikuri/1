var obj=[
    {
        phone:"9037259042",
        username:"vignesh",
        password:"1234"
    },
    {
        phone:"8848381429",
        username:"abhinav",
        password:"1234"
    },
    {
        phone:"8129290529",
        username:"jishnu",
        password:"1234"
    },
    {
        phone:"8921448663",
        username:"aswanth",
        password:"1234"
    },
    {
        phone:"8606748894",
        username:"sibi",
        password:"1234"
    },
    {
        phone:"9446142952",
        username:"shijin",
        password:"1234"
    },
    {
        phone:"9895579867",
        username:"jiju",
        password:"1234"
    },
    {
        phone:"9544223942",
        username:"sourav",
        password:"1234"
    },
    {
        phone:"9207470531",
        username:"jishil",
        password:"1234"
    },
     {
        phone:"56456",
        username:"sajilesh",
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
        console.log("sucess run")
        setTimeout("location.reload(true);", 20000);
        }
        else{
            window.location.href = "index.html";
            setTimeout("location.reload(true);", 20000);
        }
    }



            function logout()
            {
                window.location.href = "index.html";
                localStorage.clear();
                
            }
