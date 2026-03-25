const images = document.querySelectorAll('.scroll-image');

const observer = new 
IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

    images.forEach(img => {observer.observe(img);

    });
    let link = "https://www.instagram.com/abeje_elemuoguro?igsh=NGs4dTV1Z2xzdnNq"

    function clicked() {
        location.href = link
    }

    let link2 = "about2.html"
    function myfunc() {
        location.href = link2
    }
    let link3 = "about.html"
    function Myfunc() {
        location.href = link3
    }