document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".horizontal-gallery");
    const images = gallery.querySelectorAll("img");

    function moveFirstToLast() {
        const firstImage = gallery.querySelector("img:first-child");
        gallery.appendChild(firstImage); // Перемещаем первый элемент в конец
    }

    function autoScroll() {
        gallery.scrollBy({ left: 2, behavior: "smooth" });

        // Если достигли конца текущего изображения, перемещаем первый элемент в конец
        if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
            moveFirstToLast();
            gallery.scrollLeft -= images[0].offsetWidth; // Сдвигаем scrollLeft, чтобы анимация была плавной
        }
    }

    setInterval(autoScroll, 40); // Скорость прокрутки
});
