<template>

    <div>
        <ul class="nav-tabs">

            <li class="nav-item">
                <button class="nav-link" :class="{'active': currentTab == 'All'}" @click="currentTab = 'All'">All </button>
            </li>
            <li class="nav-item">
                <button class="nav-link" :class="{'active': currentTab == 'Logo'}" @click="currentTab = 'Logo'">Logo
                </button>
            </li>
            <li class="nav-item">
                <button class="nav-link" :class="{'active': currentTab == 'Video'}" @click="currentTab = 'Video'">Video
                </button>
            </li>
            <li class="nav-item">
                <button class="nav-link" :class="{'active': currentTab == 'Graphic Design'}"
                    @click="currentTab = 'Graphic Design'">Graphic Design </button>
            </li>


        </ul>

    <div class="tab-pane col-4 mycol" v-for="(image , index) in images" :key="index"  v-show="Sort == Sort" data-aos="fade-right" data-aos-duration="3000" data-aos-once="false">
        <div class="hovercolor">

            <img class="sample1 imgh" :src="image.preview">
                <h1 class="hovertext fade-in t1" >
                      {{image.Category}}

                </h1>
                <h1 class="hovertext fade-in t1" >
                       {{image.Tag}}

                </h1>

                <h1 class="hovertext fade-in t1" >
                        {{image.Sort}}

                </h1>
        </div>
    </div>

</div>
</template>


<script>
    import axios from 'axios'
    export default {
        props: {

            images: {
                type: Array,
                required: true
            },
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
                currentTab: 'All',

                images: [

                ]

            }
        },
        created() {
            axios.get("https://portfolio-81d69-default-rtdb.europe-west1.firebasedatabase.app/works.json")
                .then(({
                    data
                }) => {
                    let images = Object.entries(data).map(([key, val]) => {
                        return {
                            key,
                            ...val
                        };
                    })
                    this.images = images
                })

                .catch(err => console.log(err))


            this.Color = true;

        },

    }
</script>

<style scoped>
    /*---------------------------
    ---------Tab Navigation--------------------
    -------------------------------*/
    .hovercolor {
        border-radius: 8px;
        transition: .8s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .5s ease-in-out;
    }

    .hovertext {
        position: absolute;
        z-index: 2;
        display: none;
        color: white;
        font-size: 23px;
        font-weight: 600;
        text-decoration: none;
    }

    .hovercolor:hover .fade-in {
        animation: fade-in .8s ease-in both;
        opacity: 0;
        display: block;

    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0%, 0);
        }
    }

    .hovercolor:hover .imgh {
        opacity: 0;

    }

    .hovercolor:hover {
        background-color: #ae0738;

    }

    .nav-tabs {
        display: flex;
        justify-content: center;
        border: none;
    }

    .nav-item {
        margin-right: 10px;
    }

    .nav-link {
        padding: 4px 18px;
        border: none;
        transition: .8s ease-in-out;
        font-size: 16px;
        font-weight: 600;
        color: rgb(72, 72, 72);
    }

    .active {
        background-color: rgba(255, 0, 0, 0) !important;
        color: #ff0060 !important;
    }

    .nav-tabs {
        list-style: none;
    }

    .nav-item:hover {
        background-color: rgba(255, 255, 255, 0) !important;
    }

    .nav-link:hover {
        color: #ff0060;
    }

    .imgh {
        width: 100%;
        transition: .5s ease-in-out;

        border-radius: 8px;
    }

    .tab-pane {
        padding: 15px 15px;
    }

    .dark .nav-link {
        color: #fff;
    }



    /*-----------------------
-------Responsive---------------
---------------------------*/
    @media(max-width:900px) {
        .all1 .col-4 {
            width: 50%;
        }
    }

    @media(max-width:600px) {
        .all1 .col-4 {
            width: 100%;
        }

    }

    @media(max-width:450px) {
        .nav-link {
            font-size: 14px;
        }

        .nav-tabs {
            justify-content: unset;
            padding-left: 0;
        }
    }

    @media(max-width:400px) {
        .nav-link {
            font-size: 12px;
            padding: 10px;
        }
    }

    @media(max-width:301px) {
        .nav-link {
            padding: 4px;
        }
    }
</style>





<!-----------------------------










  <ul class="nav-tabs">
       
        <li class="nav-item"  >
            <button class="nav-link" :class="{'active': currentTab == 'All'}" @click="currentTab = 'All'">All </button>
        </li>
        <li class="nav-item"  >
            <button class="nav-link" :class="{'active': currentTab == 'Logo'}" @click="currentTab = 'Logo'">Logo </button>
        </li>
        <li class="nav-item"  >
            <button class="nav-link" :class="{'active': currentTab == 'Video'}" @click="currentTab = 'Video'">Video </button>
        </li>
        <li class="nav-item"  >
            <button class="nav-link" :class="{'active': currentTab == 'Graphic Design'}" @click="currentTab = 'Graphic Design'">Graphic Design </button>
        </li>
       
      
    </ul>
    <div class="row all1">
        <div class="tab-pane col-4 mycol" v-for="{content , title , category , subject} in tabs" v-show="currentTab == title"  data-aos="fade-right" data-aos-duration="3000" data-aos-once="false">
            <div class="hovercolor">

    <img class="imgh"  :src="content">

<a class="hovertext fade-in" href="#">{{category}}</a>

</div>
        </div>
        <div class="tab-pane col-4 mycol"  v-for="{content , category, subject} in tabs" v-show="currentTab == category"  data-aos="fade-right" data-aos-duration="3000" data-aos-once="false" >
            <div class="hovercolor" >

                <img class="imgh" :src="content" >

                <a class="hovertext fade-in" href="#">{{category}}</a>

</div>        </div>


    </div>




















-->