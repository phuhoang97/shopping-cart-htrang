function submitForm(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form
  
    // Lấy giá trị từ các trường đăng ký
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    const userlocal = JSON.parse(localStorage.getItem("user")) || [];
  
    // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp nhau không
    if (password !== confirmPassword) {
      alert("Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
  
    // Gửi dữ liệu đăng ký đến máy chủ hoặc xử lý theo yêu cầu của bạn
    // ở đây chúng ta chỉ hiển thị thông báo đăng ký thành công
    if(username && password && confirmPassword && password === confirmPassword){
        const user = {
            userId: Math.ceil(Math.random() * 1000000),
            username: username,
            password: password,
            rePassword: confirmPassword,
        };
        userlocal.push(user);
        localStorage.setItem("user", JSON.stringify(userlocal));
        alert("Đăng ký thành công!");
        window.location.href = "login.html";
    }
}
