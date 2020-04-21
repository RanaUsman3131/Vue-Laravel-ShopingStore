<template>
   <div>
     <headBanner :pageName="ProductDetails"></headBanner>
     <ProductDetail></ProductDetail>
     <ProductRating></ProductRating>
     <dealOfWeek></dealOfWeek>
    </div>
  
</template>
<script>
import headBanner from '../CommonComponents/headBannerComponent';
import ProductDetail from '../partialComponents/ProductDetailComponent';
import ProductRating from '../partialComponents/ProductRatingComponent';
import dealOfWeek from '../partialComponents/DealOfWeekComponent';
export default {
    name:"singleProduct",
    components:{headBanner,dealOfWeek,ProductDetail,ProductRating},
    data(){
        return{
            ProductDetails:'Product Details'
        }
    }
}
</script>