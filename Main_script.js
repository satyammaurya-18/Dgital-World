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