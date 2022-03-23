const BITS = 125;

ComfyJS.onCheer = (user, message, bits) => {
    if (bits === BITS) {
        // sets user on page
        document.getElementById('username').textContent = user;
        // stores in localstorage
        localStorage.setItem('username', user);
    }
}

window.addEventListener('load', () => {
    ComfyJS.Init('CorgiCam');
    const user = localStorage.getItem('username');
    if (user) {
        document.getElementById('username').textContent = user;
    }
})

