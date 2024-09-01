document.addEventListener('DOMContentLoaded', () => {
    const rightArrow = document.querySelector('#arrow-right');
    const leftArrow = document.querySelector('.arrow-left');

    let clickCount = 0;
    const maxClicks = 4;
    const intervalDuration = 3500;
    const delayBeforeStart = 4000;
    const resumeDelay = 12000;

    let clickInterval;
    let isHovering = false;

    function autoClickRightArrow() {
        if (clickCount < maxClicks && !isHovering) {
            rightArrow.click();
            clickCount++;
        } else if (clickCount >= maxClicks) {
            clearInterval(clickInterval);
        }
    }

    function startAutoClick() {
        clickInterval = setInterval(autoClickRightArrow, intervalDuration);
    }

    setTimeout(startAutoClick, delayBeforeStart);

    function stopAutoClick() {
        isHovering = true;
        clearInterval(clickInterval);
    }

    function resumeAutoClick() {
        isHovering = false;
        setTimeout(() => {
            startAutoClick();
        }, resumeDelay);
    }

    rightArrow.addEventListener('mouseover', stopAutoClick);
    leftArrow.addEventListener('mouseover', stopAutoClick);

    rightArrow.addEventListener('mouseleave', resumeAutoClick);
    leftArrow.addEventListener('mouseleave', resumeAutoClick);
});
