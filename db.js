const mysql = require("mysql2");

// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: "localhost",       // Host dari database
    user: "root",            // Username Anda
    password: "789456", // Ganti dengan password yang Anda masukkan di MySQL Workbench
    database: "qrcode_database", // Nama database yang Anda buat
    port: 3306               // Port default MySQL
});

db.connect(err => {
    if (err) {
        console.error("Gagal terhubung ke database: " + err.message);
        process.exit();
    }
    console.log("Terhubung ke database!");
});

module.exports = db; // Ekspor koneksi untuk digunakan di server.js