const loginForm = document.getElementById('auth')
const loginButton = document.querySelector('.loginButton')
const authButton = document.querySelector('.authButton')
const closeAuth = document.querySelector('.closeAuth')
const body = document.querySelector('body')


const closeLoginForm = () => {
    loginForm.classList.remove('isOpened')
    body.classList.remove('overlay')
    closeAuth.removeEventListener('click', closeLoginForm)
    authButton.removeEventListener('click', login)
}

const showLoginForm = () => {
    if (localStorage.getItem('userData')) {
        localStorage.removeItem('userData')
        isAuthorized()
    } else {
        loginForm.classList.add('isOpened')
        body.classList.add('overlay')
        closeAuth.addEventListener('click', closeLoginForm)
        authButton.addEventListener('click', login)
    }
}

const login = () => {
    const login = document.querySelector("input[name='login']").value
    const password = document.querySelector("input[name='password']").value
    if (login !== '' && password !== '') {
        const userData = {
            login: login,
            password: password
        }
        localStorage.setItem('userData', JSON.stringify(userData))
    }
    window.location.reload
}

const isAuthorized = () => {
    const userData = localStorage.getItem('userData')
    const username = document.querySelector('.username')
    if (userData) {
        username.innerText = JSON.parse(userData).login
        loginButton.innerText = 'Выйти'
    } else {
        username.innerText = ''
        loginButton.innerText = 'Войти'
    }
}

isAuthorized()

loginButton.addEventListener('click', showLoginForm)
