<template>
  <div class="my-app-wrap" v-cloak :class="{'dark' : isDarkMode}">
    <Header @mode="toggleMode" />
    <main>
      <Hero/>
      <Entro/>
      <Rows/>
    </main>
    <Footer/>
    <HelloWorld msg="Hello Vue 3.0 + Vite!!" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'
import Hero from './components/Hero.vue'
import Entro from './components/Entro.vue'
import Rows from './components/Rows.vue'
import { onMounted } from 'vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
    Hero,
    Entro,
    Footer,
    Rows
  },
  data() {
    return{
      isDarkMode: false
    }
  },
  onMounted(){

  },
  methods: {
    toggleMode(){
      this.isDarkMode = !this.isDarkMode
    }
  }
}
</script>
<style>
  [xv-cloak]{
    display: none;
  }
</style>

