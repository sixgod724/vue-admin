<template>
  <div>
    this is dashboard view
    {{data}}
  </div>
</template>

<script>
  import { getList } from '@/api/test.js'
  export default {
    data() {
      return {
        data: ''
      }
    },
    mounted() {
      this.init();
    },
    methods:{
      init(){
        getList()
        .then(res => this.data = res)
        .catch(err => console.log(err))
      }
    }
  }
</script>

<style scoped>

</style>
