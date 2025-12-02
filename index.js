
// 1. Reveal Elements on Scroll
        function revealElements() {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach((el) => {
                const top = el.getBoundingClientRect().top;
                const bottom = el.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100 && bottom > 100) {
                    el.classList.add('active');
                } else {
                    el.classList.remove('active');
                }
            });
        }
        window.addEventListener('scroll', revealElements);
        window.addEventListener('load', revealElements);

        // 2. Magic Cursor Logic
        var cursor = document.querySelector(".cursor");
        var cursor2 = document.querySelector(".cursor2");

        document.addEventListener("mousemove", function (e) {
            cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
            cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
        });