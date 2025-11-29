document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Réinitialiser les anciennes erreurs
    document.querySelectorAll('.error').forEach(el => el.remove());

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validation email
    if (!email) {
        showError('email', 'Email is required.');
        isValid = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        showError('email', 'Please enter a valid email.');
        isValid = false;
    }

    // Validation mot de passe
    if (!password) {
        showError('password', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters.');
        isValid = false;
    }

    // Si tout est OK
    if (isValid) {
        alert('✅ Login successful! Welcome!');
        // Exemple de redirection (à décommenter si tu as dashboard.html) :
        // window.location.href = 'dashboard.html';
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = '#ff6b6b';
    error.style.fontSize = '12px';
    error.style.marginTop = '5px';
    error.textContent = message;
    field.parentNode.appendChild(error);
}