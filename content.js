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
            // Don't click hide button, because that makes us leave the current
            // page. Instead, just use fetch to open the link in the background
            // - this works just as well. Then update the link and text
            // manually.
            fetch(elem.href).then(response => {
                if (response.ok) {
                    elem.style.backgroundColor = '#ffff00';
                    elem.innerText = 'un-hide';
                    elem.href += '&un=t';
                    window._hackerNewsAlreadyHidden = true;
                }
            });
        }
    });
}

let hideListener = function(_event) {
    if (document.visibilityState === 'visible') {
        setTimeout(hideIfNotHidden, 1000 + Math.random() * 2000);
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
