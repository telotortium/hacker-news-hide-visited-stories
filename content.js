// Hides the current comment thread
let hideIfNotHidden = function() {
    if (document.location.pathname !== '/item') {
        return;
    }
    if (window._hackerNewsAlreadyHidden) {
        return;
    }
    document.querySelectorAll('td.subtext a').forEach((elem) => {
        if (elem.innerText === 'hide') {
            elem.click();
            elem.style.backgroundColor = '#ffff00';
            window._hackerNewsAlreadyHidden = true;
        }
    });
}

let hideListener = function(_event) {
    if (document.visibilityState === 'visible') {
        hideIfNotHidden();
    }
}

let addListeners = function() {
    document.addEventListener("visibilitychange", hideListener);
}

let removeListeners = function() {
    document.removeEventListener("visibilitychange", hideListener);
}

window.onload = function() {
    addListeners();
    hideListener();
}
