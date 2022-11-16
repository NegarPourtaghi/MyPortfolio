<template>
    <div>
        
            <div class="adminNavbar">
                <div class="navbar1">
                    <div class="navbar-nav1">
                        <div class="pagename">
                            <img class="adminphoto" src="../../../src/assets/images/admin.jpg" alt="">
                            <h1 class="name">Admin Panel</h1>
                        </div>
                        <ul class="nav">
                            <li class="nav-item">
                                <i class="fa-solid fa-house"></i>
                                <a class="nav-link" href="#">Dashboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="admininput">
                    <Inputpanel @add-todo="addtodo"></Inputpanel>
                    
                </div>

<div class="works">
                        <image-list :images="images"></image-list>

</div>
    </div>
</template>


<script>
import axios from 'axios'
    import Inputpanel from './inputpanel.vue';
    import imageList from './imageList.vue';
    export default {
        components: { 
            Inputpanel,
            imageList
        },

        data() {
            return {
                images: [

                ]
            }
        },
        created(){
            axios.get("https://portfolio-81d69-default-rtdb.europe-west1.firebasedatabase.app/works.json")
            .then(({data}) => {
let images= Object.entries(data).map(([key,val]) =>{
    return{
        key,
        ...val
    };
})
this.images=images
            })

            .catch(err=> console.log(err))
        },
        methods: {
   addtodo([Category, Tag ,Sort,preview]){
    let sample={
        Category,
    Tag,
    Sort,
    preview
    }
    axios.post("https://portfolio-81d69-default-rtdb.europe-west1.firebasedatabase.app/works.json", sample)
.then(res => {
    this.images.push({
        ...sample,
    key:res.data.name,
   
})})
.catch(err=>console.log(err))
},
        }
    }
</script>


<style scoped>
.admininput{
    height: 100vh;
display: flex;
align-items: center;
}
    .adminNavbar{
        width: 14%;
position: fixed;
    }
    .adminphoto {
        border-radius: 50%;
        width: 25%;
    }

    .navbar1 {
        width: 92%;
        height: 100vh;
        background-color: #161736;
        padding: 20px 14px;
        border-top-right-radius: 20px;
    }

    .pagename {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .name {
        color: white;
        font-size: 18px;
        font-weight: 600;
    }

    .nav-item {
        display: flex;
        align-items: center;
    }

    .nav-item {
        margin-top: 30px;
    }

    .nav-link {
        color: white;
        font-weight: 500;
    }

    .fa-house {
        color: white;
    }

    .nav-link:hover .fa-house {
        color: #b5b2b2;
    }
   .works{
    width: 52%;
margin-right: auto;
margin-left: auto;
   }
</style>