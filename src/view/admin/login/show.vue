
<style scoped>
  .show{
    margin: 0 auto;
  }
  span {
    width: 20rem;
    mso-default-height: 20rem;
    height: 20px;
    background: pink;
    font-size: 1rem;
    cursor:pointer;
   margin-left: 1rem;

  }

</style>

<template>
     <div class="show">
            <h1>子页面{{num}}</h1>
            <span  @click="jia">+</span>
            <span v-on:click="jian">-</span>
            <!-- stop  prevent self once-->
    </div>
</template>

<script>
    export default {
        name: "show",
         data(){
          return{
             message:"kaiweili",
             num:shu
          }
         },
      mounted(){

      },
      props:["num"],
      methods: {

        jia() {
          this.$emit("kui1")
        },
        jian() {
          this.$emit("kui2")
        },
        clickme: function () {
            alert("dd");
        }
      },
      mounted() {

      }


    }
</script>

<style scoped>

</style>
