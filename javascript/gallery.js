const gridItems = document.querySelectorAll('.grid-item');
const overlay = document.createElement('div');
overlay.classList.add('lb-overlay');

gridItems.forEach((item) => {
    const img = item.querySelector('img');

    img.addEventListener('click', () => {
        const lbImage = new Image();
        lbImage.src = img.src;

        overlay.innerHTML = '';
        overlay.appendChild(lbImage);
        document.body.appendChild(overlay);

        overlay.classList.add('lb-show');

        overlay.addEventListener('click', () => {
            overlay.classList.remove('lb-show');
        });
    });
});