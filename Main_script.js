locoMotiveScroller()

function locoMotiveScroller() {


    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, 
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
               pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}


onload()

function onload() {
    loadingAnimation();
    headingAnimation();
    cursorAnimation();
    page2Animation();
    page3Animation();
    page4Animation();
    headerAnimation();
    Page5CursorAnimation();
    page5LoadingAnimation();
    sliderAnimation();
    footerAnimation();
}

function loadingAnimation() {
    let tl = gsap.timeline();
    loading();
    function loading() {
        let loder = document.querySelector('#loader h2');
        console.log(loder);
        let a = 0;
        setInterval(() => {
            if (a < 100) {
                a += Math.floor(Math.random() * 10) + 1;
                loder.innerHTML = a + '%';
            } else {
                a = 100;
                loder.innerHTML = a + '%';
            }

        }, 200);
    }



    tl.to("#loader h2", {
        scale: 1.5,
        delay: 0.5,
        opacity: 1,
        duration: 1,
        onStart: loading()
    })
    tl.to("#loader", {
        top: "-100vh",
        delay: 2,
        duration: 1,
        onStart: loading()
    });
    tl.from('.about-heading h1', {
        y: 320,
        opacity: 0,
        scale: 1,
        delay: 0,
        duration: 1,
        stagger: 0.1,
    })

}


function headingAnimation() {
    let tl = gsap.timeline();
    tl.to('#page1 #page1-heading', {
        transform: 'translateX(-95%)',
        fontWeight: "100",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            // markers: true,
            start: "top 0%",
            end: "top -100%",
            scrub: 2,
            pin: true
        }
    })
}

function headerAnimation() {
    let tl = gsap.timeline();
    let openBtn = document.querySelector('#open-menu-btn');
    let closeBtn = document.querySelector('#close-menu-btn');
    let menuContainer = document.querySelector('.nav-container')
    openBtn.addEventListener('click', () => {
        gsap.to('.nav-container', {
            y: { value: 0 },
            duration: 1,
            stagger: 0.5,
            opacity: 1,
        });
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';

        gsap.to('.left-nav video', {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 0.5,
        });
        gsap.to('.left-nav .video-con span', {
            y: 20,
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.3,
            delay: 1,
        });

        gsap.to('.right-nav ul li', {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.01,
            delay: 1.5,
        });
        gsap.to('.right-nav ul button', {
            scale: 1,
            opacity: 1,
            delay: 1,
            duration: 1,
            stagger: 0.1,
        });

    })
    closeBtn.addEventListener('click', () => {
        gsap.to(menuContainer, {
            opacity: 0,
            y: -800,
            duration: 1,
        });

        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';

        gsap.to('.left-nav video', {
            scale: 0,
            opacity: 0,
            duration: 1,
        });

        gsap.to('.left-nav .video-con span', {
            y: 0,
            scale: 0,
            opacity: 0,
            duration: 1,
            stagger: 0.3
        });
        gsap.to('.right-nav ul li', {
            scale: 0,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
        });
        tl.to('.right-nav ul button', {
            scale: 0,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.1,
        });
    });
}
