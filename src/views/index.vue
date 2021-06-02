<template>
 <div class="indexs">
   <span>{{$t('message.hello')}}</span>
   <p>{{$store.state.count}}---</p>
  <!-- <router-link to="/login">去登陆</router-link>
   <router-link to="/details/1">去详情</router-link>
   <router-link to="/details/2">去详情</router-link> -->
   <bar></bar>
 </div>
</template>

<script>
 // import echarts from 'echarts'
 import bar from '../components/echarts/bar'
export default {
  name: 'index',
  components: {
    bar
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
