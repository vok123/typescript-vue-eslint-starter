<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="vue.js"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})

export default class Home extends Vue {}
</script>
