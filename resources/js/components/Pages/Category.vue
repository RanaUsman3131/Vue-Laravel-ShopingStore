<template>
<div>
  <headBanner :pageName="pageName"></headBanner>
      <categoryProduct></categoryProduct>
     <dealOfWeek></dealOfWeek>
</div>
    
</template>

<script>
import headBanner from '../CommonComponents/headBannerComponent';
import categoryProduct from '../partialComponents/CategoryProductComponent';
import dealOfWeek from '../partialComponents/DealOfWeekComponent';
categoryProduct
     export default {
         name:"category",
         components:{headBanner,categoryProduct,dealOfWeek},
         data(){
             return{
                 pageName:"Shop Category"
             }
         }

     }
</script>

<style scoped>

</style>