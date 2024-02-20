var userName = document.getElementById('username');
var passWord = document.getElementById('password');

const formLogin = document.getElementById("register-form");

formLogin.addEventListener("submit", function(e){
    e.preventDefault();
    const userlocal = JSON.parse(localStorage.getItem("user")) || [];

    const findUser = userlocal.find(
        (user) =>
            user.username === userName.value && user.password === passWord.value
    );

    if(!findUser){
        alert("Tên tài khoản hoặc mật khẩu không đúng");
    }else{
        window.location.href = "home.html"
    }

    localStorage.setItem("userLogin", JSON.stringify(findUser));
})

