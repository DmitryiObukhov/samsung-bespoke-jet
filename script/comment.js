window.addEventListener('load', () => {
    const comments = [
        "“The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.”",
        "“If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it.”",
        "“Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)”",
        "“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.”",
        "“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”"
    ];

    const images = [
        'images/transparent-pixel.png',
        'images/frame2.png',
        'images/frame3.png',
        'images/frame4.png',
        'images/frame5.png'
    ];

    let currentIndex = 0;

    const commentText = document.querySelector('.comments > span');
    const currentSlide = document.querySelector('#current-slide');
    const bannerRightSide = document.querySelector('.banner-right-side');

    function updateContent(index, direction) {
        const slideOutClass = direction === 'left' ? 'slide-out-left' : 'slide-out-right';
        const slideInClass = direction === 'left' ? 'slide-in-right' : 'slide-in-left';

        commentText.classList.add(slideOutClass);

        setTimeout(() => {
            commentText.innerHTML = `${comments[index]} <a href="about:blank" target="_blank" class="read-more">Read more...</a>`;
            currentSlide.innerText = `${index + 1}/${comments.length}`;
            bannerRightSide.style.backgroundImage = `url('${images[index]}')`;
            bannerRightSide.style.backgroundSize = 'cover';
            bannerRightSide.style.backgroundRepeat = 'no-repeat';
            bannerRightSide.style.backgroundPosition = 'center';
            commentText.classList.remove(slideOutClass);
            commentText.classList.add(slideInClass);
            setTimeout(() => {
                commentText.classList.remove(slideInClass);
            }, 160);
        }, 160);
    }

    document.querySelector('.arrow-right').addEventListener('click', (event) => {
        event.preventDefault();
        if (currentIndex < comments.length - 1) {
            currentIndex++;
            updateContent(currentIndex, 'right');
        }
    });

    document.querySelector('.arrow-left').addEventListener('click', (event) => {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            updateContent(currentIndex, 'left');
        }
    });

    updateContent(currentIndex, 'right');
});
