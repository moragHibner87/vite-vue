import { onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export function animationInOut(el) {
    onMounted(() => {
       
        gsap.to(el.value, {
            scrollTrigger: {
                trigger: el.value,
                start: "top 20%",
                scrub: true,
                toggleActions: "restart pause none reverse"
            },
            opacity: 0,
            y: -60
        })
    })
}
