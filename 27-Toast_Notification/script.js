const buttonEl = document.getElementById('btn');
const toastsEl = document.getElementById('toasts');

const messages = [
    'Message 1', 'Message 2', 'Message 3', 'Message 4',
]

const types = [
    'info', 'success', 'error',
]

buttonEl.addEventListener('click', () => createNotificaction())

function createNotificaction(type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());
    notif.innerText = getRandomMessage();
    toastsEl.appendChild(notif)

    setTimeout(()=> {
        notif.remove();
    }, 3000)
;}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}