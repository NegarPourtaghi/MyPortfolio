<template>

<div>
    <div class="row">
        <div class="col-4 mycol" v-for="(item , index) in images">
            <ShowImage  :image="item" :key="index"></ShowImage>

        </div>
        
    </div>
</div>

</template>




<script>
import ShowImage from './ShowImage.vue';
export default{
    components:{ShowImage},
    props:{
            images:{
                type:Array,
                required:true
            }
        },
    data(){
      return{

      }

    }
}
</script>



<style scoped>
.mycol{
    box-shadow: 0px 0px 12px 4px #e3e3e3c4;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 50px;
}
</style>