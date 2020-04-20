<template>
      <div>
            <banner></banner>
      </div>
</template>
<script>
import banner from '../partialComponents/bannerComponent.vue';
export default {
    name:"home",
    components: { banner },
    mounted(){
        alert('gfd');
    }
}
</script>
<style  scoped>

</style>