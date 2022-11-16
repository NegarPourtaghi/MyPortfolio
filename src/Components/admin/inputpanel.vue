<template>
            <div class="ControlNavtabs">

<div class="form">
    <div class="input">
        <label class="label" for="">Category: </label>
        <input  class="inputplace" type="text" name="Category" placeholder="Type Image Category" v-model="inputCategory">
    </div>


    <div class="input">
        <label class="label" for="">Tag Name: </label>
        <input class="inputplace" type="text" name="tagname" placeholder="Type Image Tag Name" v-model="inputTag" >
    </div>


    <div class="input">
        <label class="label" for="">sort: </label>
        <input class="inputplace" type="text" name="Category" placeholder="Type Image Category" v-model="inputSort">
    </div>
    <div class="input">
        <label class="label" for="">URL: </label>
        <input class="inputplace" type="text" name="Category" placeholder="Type Image Category" v-model="inputUrl">
    </div>


<div class="fileinput">
    <div class="input">
        <label class="label" for="img">Select Image: </label>
        <input class="chooseimg" type="file" name="img"   accept="image/*" @change="myimage" ref="file">

    </div>
<div class="imageinput">
    <img class="inputimage" v-if="preview" :src="preview" >

</div>
</div>
</div>
<div class="submit">
    <a class="btn btn-primary submitbtn" @click="addtodo">Done</a>
</div>


</div>

</template>
<script>
export default{
    emits:['add-todo'],
    data(){
        return{
            inputCategory:'',
            inputTag:'',
            inputSort:'',
            inputUrl:'',
            preview:null
            
        }
    },
   methods:{
    myimage: function(event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
        this.image=input.files[0];
        reader.readAsDataURL(input.files[0]);
      }
    },
    addtodo(){
       
        this.$emit('add-todo', [this.inputCategory, this.inputTag, this.inputSort, this.preview])
this.inputCategory=''
this.inputTag=''
this.inputSort=''
this.preview=''
this.inputUrl=''
this.$refs.file.value = null;
    }
   }
}
</script>




<style scoped>

    .ControlNavtabs{
        width: 52%;
height:auto;
box-shadow: 4px 4px 14px 4px #d1ceceb8;
border-radius: 10px;
padding: 30px;
margin-right: auto;
margin-left: auto;
margin-bottom: 160px;
    }
    .input{
        margin-bottom: 34px;
    }
    .inputplace{
        width: 60%;
border-radius: 20px;
padding: 6px 20px;
border: 1px solid #d9d5d5;
color: gray;
outline: none;
    }
    .label{
        margin-right: 14px;
color: #5b5a5a;
font-weight: 600;
font-size: 16px;
    }
   .submitbtn{
    background-color: white;
color: #ff0060;
border: 2px solid #ff0060;
transition: .5s ease-in-out;
padding: 7px 16px;
   }
   .submitbtn:hover  , .submitbtn:focus{
    background-color: #ff0060;
    color: #161736;
    border: 2px solid #ff0060;
   }
   .submit{
    text-align: right;
    margin-top: 50px;
   }
   .imageinput{
    width: 20%;
   }
   .inputimage{
    width: 100%;
    border-radius: 10px;

   }
   .fileinput{
    display: flex;
    justify-content: space-between;
   }
</style>