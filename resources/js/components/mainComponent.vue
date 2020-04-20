<template>
<div class="wrapper">
       <navbar></navbar>
       <router-view></router-view>
       <footerPart></footerPart>
</div>
  
</template>

<script>
import navbar from "./CommonComponents/navBarComponent.vue";

import footerPart from './CommonComponents/footerComponent.vue';
export default {
  components: { navbar,footerPart }
};
</script>

<style scoped>
</style>