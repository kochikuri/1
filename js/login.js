var obj=[
    {
        username:"vignesh",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    },
    {
        username:"abi",
        password:"1234"
    }
   
]
function validate(){
    var username=document.getElementById("username").value
    var password=document.getElementById("password").value
    

    for(i=0;i<obj.length;i++){
        if(username == obj[i].username && password == obj[i].password){
            localStorage.setItem("login", "true");
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
        }
        else{
            window.location.href = "index.html";
        }
    }



            function logout()
            {
                window.location.href = "index.html";
                localStorage.clear();
                
            }
