
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const halamanBeranda = document.getElementById("halamanBeranda");
const halamanLain = document.getElementById("halamanLain");

const judulHalaman = document.getElementById("judulHalaman");
const isiHalaman = document.getElementById("isiHalaman");

// Tombol hamburger
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Fungsi menu navigasi
function tampilHalaman(halaman) {

    if (halaman === "beranda") {
        halamanBeranda.style.display = "block";
        halamanLain.style.display = "none";
    }

    else {
        halamanBeranda.style.display = "none";
        halamanLain.style.display = "block";

        if (halaman === "kurikulum") {
            judulHalaman.textContent = "Kurikulum";
            isiHalaman.textContent =
                "ini sudah kurikulum merdeka ga sih?";
        }

        else if (halaman === "karya") {
            judulHalaman.textContent = "Karya Siswa";
            isiHalaman.textContent =
                "saya belum berkarya selama ini.";
        }

        else if (halaman === "kontak") {
            judulHalaman.textContent = "Kontak";
            isiHalaman.textContent =
                "nih nomor whatsapp saya 0822-6722-3394.";
        }
    }

    navLinks.classList.remove("active");
}

// CHATBOT
const chatbotBtn = document.getElementById("chatbotBtn");
const chatbox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

// Buka chatbot
chatbotBtn.addEventListener("click", function() {
    chatbox.style.display = "block";
});

// Tutup chatbot
closeChat.addEventListener("click", function() {
    chatbox.style.display = "none";
});

// Kirim pesan
function kirimPesan() {
    const pesan = userInput.value.trim();

    if (pesan === "") return;

    const pertanyaan = pesan.toLowerCase();

    chatBody.innerHTML +=
        `<p><b>Kamu:</b> ${pesan}</p>`;

    let jawaban = "";

    if (pertanyaan.includes("halo") ||
        pertanyaan.includes("hai")) {
        jawaban = "Halo! Selamat datang di Portal RPL SMKN 9 Medan.";
    } else if (pertanyaan.includes("kurikulum")) {
        jawaban = "Informasi kurikulum RPL akan segera tersedia.";
    } else if (pertanyaan.includes("karya")) {
        jawaban = "Karya siswa RPL dapat dilihat melalui menu Karya Siswa.";
    } else if (pertanyaan.includes("kontak")) {
        jawaban = "Silakan buka menu Kontak untuk informasi lebih lanjut.";
    } else if (pertanyaan.includes("rpl")) {
        jawaban = "RPL adalah Rekayasa Perangkat Lunak.";
    } else {
        jawaban = "Maaf, saya belum memahami pertanyaan tersebut.";
    }

    chatBody.innerHTML +=
        `<p><b>Chatbot:</b> ${jawaban}</p>`;

    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}

sendBtn.addEventListener("click", kirimPesan);

userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        kirimPesan();
    }
});
