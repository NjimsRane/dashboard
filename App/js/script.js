const darkBtn = document.querySelector('#dark');
const lightBtn = document.querySelector('#light');
const radioBtns = document.querySelectorAll('.toggle__wrapper input');

const setDarkMode = () => {
    (document.querySelector('body').classList = 'dark');
};
const setLightMode = () => {
    (document.querySelector('body').classList = 'light');
};

const setColorMode = () => {
    if (localStorage.getItem('colorMode') === 'dark') {
        setDarkMode();
        darkBtn.click();
    }
    else if (localStorage.getItem('colorMode') === 'light') {
        setLightMode();
        lightBtn.click();
    }
};
const checkMode = () => {
    if (localStorage.getItem('colorMode') === null) {
        if (window.matchMedia('(prefers-color-scheme:light)').matches) {
            lightBtn.click();
        }
        else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
            darkBtn.click();
        }
    }

};

const checkModeChange = () => {
    window
        .matchMedia('(prefers-color-scheme:dark)')
        .addEventListener('change', (e) => {
            checkMode();
        });
};



for (let i = 0; i < radioBtns.length; i++) {
    radioBtns[i].addEventListener('click', () => {
        if (darkBtn.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        }
        else {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }

    });
}

setColorMode();
checkMode();
checkModeChange();