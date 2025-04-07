document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
  
    // ระบบจำลอง: ถ้าชื่อและรหัสถูกต้อง ให้เด้งไปหน้า index
    if (user === "admin" && pass === "1234") {
      alert("ล็อกอินสำเร็จ!");
      window.location.href = "index.html";
    } else {
      alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  });
  