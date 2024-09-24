document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn không cho form tự động gửi đi

    // Lấy dữ liệu từ form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Kiểm tra điều kiện
    if (username.length < 4) {
        document.getElementById('message').textContent = "Tên đăng nhập phải ít nhất 4 ký tự.";
        return;
    }

    if (password.length < 6) {
        document.getElementById('message').textContent = "Mật khẩu phải ít nhất 6 ký tự.";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('message').textContent = "Mật khẩu không khớp.";
        return;
    }

    // Thông báo thành công
    document.getElementById('message').textContent = "Đăng ký thành công!";
});
