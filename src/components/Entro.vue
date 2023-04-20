<template>
   <section class="entro sec--pad">
        <div class="inner_width text-center">
            <p ref="fadeEl" class="enter-up">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
            </p>
            <div class="card" ref="card">
                <h2>Glow me on</h2>
            </div>
            <div class="snake">
                <span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref , onMounted} from 'vue';
import {animationInOut} from '../composables/animationInOut'

const fadeEl = ref(null)
//animationInOut(fadeEl)

const card = ref(null)
const playRotate = () => {
    function rotateElm(event, element){
        const x = event.clientX;
        const y = event.clientY;
        
        const middleX = window.innerWidth / 2;
        const middleY = window.innerHeight / 2;

        const offsetX = ((x - middleX) / middleX) * 60;
        const offsetY = ((x - middleY) / middleY) * 20;

        element.value.style.setProperty('--rotateX', offsetY + 'deg');
        element.value.style.setProperty('--rotateY', offsetX + 'deg')
    }

    document.addEventListener('mousemove', (e) => {
        rotateElm(e, card)
    })
}


onMounted(()=> {
    playRotate()
})

</script>