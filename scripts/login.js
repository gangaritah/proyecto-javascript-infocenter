const users = [
    { username: 'admin', password: 'password' }
];

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username == username && u.password == password);

    if (user) {
        window.location.href = 'admin.html';
    } else {
        showMessage('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}