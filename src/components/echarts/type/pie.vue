<template>
  <div class="echart-box" :id="id"></div>
</template>

<script>
import { pie } from '../utils.js';
export default {
  props: {
    id:{
      type: String
    },
  },
  data() {
    return {
      Chart:null,
    }
  },
  mounted() {
    
    this.Chart = pie(this.id);
  }
}
</script>

<style scoped>
.echart-box {
  width: 100%;
  height: 300px;
  background-color: #F0C78A;
}
</style>
