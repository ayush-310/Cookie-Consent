
// Method 1
document.addEventListener('DOMContentLoaded', function () {
    const cookieConsent = document.querySelector('.cookie');
    const acceptButton = document.getElementById('accept-cookies');
    const declineButton = document.getElementById('decline-cookies');
    const closeButton = document.querySelector('.X');

    // Show cookie box after 5 seconds
    setTimeout(() => {
        cookieConsent.style.display = 'block';
    }, 3000);

    closeButton.addEventListener('click', function () {
        cookieConsent.style.display = 'none';
    });

    acceptButton.addEventListener('click', function () {
        cookieConsent.style.display = 'none';
        alert('You have accepted cookies.');
    });

    declineButton.addEventListener('click', function () {
        cookieConsent.style.display = 'none';
        alert('You have declined cookies.');
    });
});

// Method 2
document.addEventListener('DOMContentLoaded', () => {
    const cookieBox = document.querySelector('.cookie');
    const acceptBtn = document.getElementById('accept-cookies');
    const declineBtn = document.getElementById('decline-cookies');
    const closeBtn = document.querySelector('.close');

    const userChoice = localStorage.getItem('cookieConsent');

    // Only show if no choice is made
    if (!userChoice) {
        setTimeout(() => {
            cookieBox.classList.add('visible');
        }, 3000);
    }

    function hideCookieBox() {
        cookieBox.classList.remove('visible');
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        hideCookieBox();
        alert('You have accepted cookies.');
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        hideCookieBox();
        alert('You have declined cookies.');
    });

    closeBtn.addEventListener('click', () => {
        hideCookieBox();
    });
});
