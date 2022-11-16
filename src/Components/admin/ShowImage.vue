<template>
    <div>
        <div class="work">
            <div class="mywork">
                <img class="sample1" :src="image.preview">

            </div>
            <div class="text">
                <h1 class="t1">
                    Category:    {{image.Category}}

                </h1>
                <h1 class="t2">
                    Tag:    {{image.Tag}}

                </h1>

                <h1 class="t3">
                    Sort:     {{image.Sort}}

                </h1>
            </div>
           
        </div>

    </div>
</template>


<script>
    export default {
        props: {
            image: {
                type: Object,
                required: true
            },
            preview: {
                type: String,
            },
        
        },
        data() {
            return {

            }
        }
    }
</script>


<style scoped>
.sample1{
    width: 100%;
}
.t1, .t2, .t3 , .t4{
    font-size: 18px;
font-weight: 500;
}
.mywork{
    margin-bottom: 20px;
}
</style>