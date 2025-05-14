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