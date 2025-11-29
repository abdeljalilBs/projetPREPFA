// Vérifie si l'utilisateur est déjà connecté
window.onload = function () {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        showDashboard();
    }
};

// Gestion du formulaire
document.querySelector('.login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Réinitialiser les erreurs
    document.querySelectorAll('.error').forEach(el => el.remove());

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Compte admin intégré (à remplacer par une vraie API en vrai projet)
    const validEmail = "admin@example.com";
    const validPassword = "123456";

    let isValid = true;

    // Validation
    if (!email) {
        showError('email', 'Email is required.');
        isValid = false;
    } else if (email !== validEmail) {
        showError('email', 'Email not found.');
        isValid = false;
    }

    if (!password) {
        showError('password', 'Password is required.');
        isValid = false;
    } else if (password !== validPassword) {
        showError(' password', 'Incorrect password.');
        isValid = false;
    }

    // Si tout est OK → connexion
    if (isValid) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        showDashboard();
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (field) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = '#ff6b6b';
        error.style.fontSize = '12px';
        error.style.marginTop = '5px';
        error.textContent = message;
        field.parentNode.appendChild(error);
    }
}

function showDashboard() {
    // ⚠️ Option 1 : Redirige vers une autre page (si tu en as une)
    // window.location.href = 'dashboard.html';

    // ✅ Option 2 : Affiche une page de bienvenue dans la même page
    document.body.innerHTML = `
        <div style="
            background: #1A2226;
            color: #ECF0F5;
            font-family: 'Roboto', sans-serif;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 20px;
        ">
            <h1 style="font-size: 36px; margin-bottom: 20px;">✅ Welcome!</h1>
            <p style="font-size: 18px;">You are logged in as:<br><strong>${localStorage.getItem('userEmail')}</strong></p>
            <button onclick="logout()" style="
                margin-top: 30px;
                padding: 10px 20px;
                background: #0DB8DE;
                color: white;
                border: none;
                border-radius: 4px;
                font-weight: bold;
                cursor: pointer;
            ">Logout</button>
        </div>
    `;
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    location.reload(); // Recharge la page → retour au login
}