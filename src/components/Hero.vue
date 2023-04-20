<template>
<section class="hero relative over-hide">
    <div class="inner_width flex items-center justify-center">
        <h1 ref="fadeOuts" class="title fade-out">Your next dream vacation</h1>
        <h1 ref="fadeOuts" class="title fade-out">Your next dream vacation</h1>

    </div>
    <img class="img-cover img-scroll" src="../assets/images/hero.jpg" alt=""/>
</section>
</template>

<script setup>
import {ref} from 'vue';
import {animationInOut} from '../composables/animationInOut'

const fadeOuts = ref(null)
animationInOut(fadeOuts)

</script>