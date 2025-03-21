document.getElementById("validasiForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let pesanError = "";

    if (nama.length <= 3) {
        pesanError += "Nama harus lebih dari 3 karakter \n";
    }

    if (!email.includes("@" && ".com")) {
        pesanError += "Email harus valid\n";
    }

    if (password.length < 8) {
        pesanError += "Password harus minimal 8 karakter \n";
    }

    if (pesanError) {
        alert(pesanError); 
    } else {
        alert("Form berhasil dikirim!");
        this.submit(); 
    }
});
