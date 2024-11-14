let slideIndex = 0;
showSlides();
let isLoggedIn = false;
let currentUsername = "";
let users = [];

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 2000);
}

function openLoginPopup() {
    document.getElementById("loginPopup").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("loginPopup").style.display = "none";
}

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "dower";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login berhasil!");
        closeLoginPopup();
    } else {
        alert("Username atau password salah!");
    }
}

function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login berhasil!");
        isLoggedIn = true;
        currentUsername = username;
        closeLoginPopup();
        updateNavbar();
    } else {
        alert("Username atau password salah!");
    }
}

function updateNavbar() {
    const loginLink = document.querySelector('.nav-item a[href="javascript:void(0);"][onclick="openLoginPopup()"]');
    const registerLink = document.querySelector('.nav-item a[href="javascript:void(0);"][onclick="openRegisterPopup()"]');

    if (isLoggedIn) {
        if (loginLink) loginLink.parentElement.style.display = 'none';
        if (registerLink) registerLink.parentElement.style.display = 'none';

        const welcomeMessage = document.createElement('li');
        welcomeMessage.className = 'nav-item';
        welcomeMessage.innerHTML = `<span class="nav-link">Selamat datang, ${currentUsername}!</span>`;
        document.querySelector('.nav-list').appendChild(welcomeMessage);
    }
}

function openRegisterPopup() {
    document.getElementById('registerPopup').style.display = 'block';
}

function closeRegisterPopup() {
    document.getElementById('registerPopup').style.display = 'none';
}

function validateRegister() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("regConfirmPassword").value;

    const userExists = users.some(user => user.username === username);
    if (userExists) {
        alert("Username sudah terdaftar!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password dan konfirmasi password tidak cocok!");
        return;
    }

    users.push({ username, password });
    alert("Registrasi berhasil! Silakan login.");
    closeRegisterPopup();
}

function closePricePopup() {
    document.getElementById('pricePopup').style.display = 'none';
}

function openPricePopup() {
    document.getElementById('pricePopup').style.display = 'flex'; 
}

function openPromoPopup() {
    document.getElementById('promoPopup').style.display = 'flex'; 
}

function closePromoPopup() {
    document.getElementById('promoPopup').style.display = 'none'; 
}

setTimeout(openPromoPopup, 2000);