window.addEventListener('load', () => {
    setTimeout(() => {
        const bespokeJettLeft = document.querySelector('.bespoke-jett-left');
        const shopNowButton = document.querySelector('.shop-now-button');
        
        bespokeJettLeft.classList.add('fade-out');
        
        setTimeout(() => {
            shopNowButton.classList.add('fade-in');
        }, 1000);
    }, 3250);
});
