<template>
  <div class="meeting-warp">
    <div class="meeting-title meeting-region col-group"><span>会议系统主页</span></div>
    <el-row type="flex" class="metting-totla meeting-region col-group">
      <el-col :span="4"><span>总数</span></el-col>
      <el-col :span="4"><span>已使用</span></el-col>
      <el-col :span="4"><span>近期会议数</span></el-col>
    </el-row>
    <div class="meeting-main meeting-region col-group">
      <div class="meeting-main-select">
        <div>
          <label>楼层</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div>
          <label>状态</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>
      <el-row type="flex">
        <el-col v-for="(item, index) in 6">{{ index + 1 }}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    };
  }
};
</script>

<style lang="scss" scoped>
.meeting-title {
  text-align: center;
}
.meeting-region {
  padding: 15px 20px;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
}
.meeting-main-select{
  display: flex;
}
</style>
<style>
.col-group {
  box-shadow: rgb(34 41 47 / 14%) 0px 2px 8px 0px;
}
</style>
