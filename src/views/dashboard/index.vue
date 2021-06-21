<template>
  <div>
    <el-row type="flex" :gutter="14">
      <el-col :span="8">
        <div class="card">
          <div class="card-body">
            <h5>Congratulations 🎉 John!</h5>
            <p class="card-text font-small-2">You have won gold medal</p>
            <h3 class="mb-75 mt-2 pt-50"><a class="" href="3">$48.9k</a></h3>
            <el-button type="primary">成功按钮</el-button>
            <img class="congratulation-medal" src="../../assets/badge.svg" />
          </div>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="card card-statistics">
          <div class="card-header">
            <h4 class="card-title">Statistics</h4>
            <p class="card-text font-small-2 mb-0">Updated 1 month ago</p>
          </div>
          <div class="card-body statistics-body">
            <el-row>
              <el-col :span="6">
                <div class="media">
                  <div class="media-aside mr-2">
                    <span class="badge-light-primary rounded-circle b-avatar" style="width: 48px;height: 48px;">
                      <span class="b-avatar-custom"><i class="el-icon-position"></i></span>
                    </span>
                  </div>
                  <div class="media-body">
                    <h4 class="font-weight-bolder mb-0">230k</h4>
                    <p class="card-text font-small-3 mb-0">Sales</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="media">
                  <div class="media-aside mr-2">
                    <span class="badge-light-primary rounded-circle b-avatar" style="width: 48px;height: 48px;">
                      <span class="b-avatar-custom"><i class="el-icon-position"></i></span>
                    </span>
                  </div>
                  <div class="media-body">
                    <h4 class="font-weight-bolder mb-0">230k</h4>
                    <p class="card-text font-small-3 mb-0">Sales</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="media">
                  <div class="media-aside mr-2">
                    <span class="badge-light-primary rounded-circle b-avatar" style="width: 48px;height: 48px;">
                      <span class="b-avatar-custom"><i class="el-icon-position"></i></span>
                    </span>
                  </div>
                  <div class="media-body">
                    <h4 class="font-weight-bolder mb-0">230k</h4>
                    <p class="card-text font-small-3 mb-0">Sales</p>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="media">
                  <div class="media-aside mr-2">
                    <span class="badge-light-primary rounded-circle b-avatar" style="width: 48px;height: 48px;">
                      <span class="b-avatar-custom"><i class="el-icon-position"></i></span>
                    </span>
                  </div>
                  <div class="media-body">
                    <h4 class="font-weight-bolder mb-0">230k</h4>
                    <p class="card-text font-small-3 mb-0">Sales</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
    <p @click="we()">1112</p>
    <div>
      <pie v-if="type" id="demo" />
    </div>
  </div>
</template>

<script>
import { getList, postList } from '@/api/test.js';
import pie from '@/components/echarts/type/pie';
export default {
  components: {
    pie
  },
  data() {
    return {
      data: '',
      type:true,
      data_list: [],
      oneCircleEchart: [{
        name: "Web 秀",
        value: 10000,
        },{
          name: "Macys",
          value: 6181,
        }],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    we(){
      console.log(this.type);
      this.type = !this.type;
    },
    init() {
      this.getList();
      this.show();
    },
    async getList() {
      let data = await getList();
      // this.data = data.data.disclaimer;
    },
    show() {
      postList()
        .then(data => {
          this.data_list = data.data;
          // console.log(data);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  .card-title {
    font-weight: 500;
    font-size: 1.285rem;
  }
}
.congratulation-medal {
  position: absolute;
  top: 0;
  right: 37px;
}
h5 {
  font-size: 1.07rem;
  margin-bottom: 0.5rem;
}
.card-text {
  margin-bottom: 1rem;
}
.pt-50 {
  padding-top: 0.5rem;
}
.mb-75 {
  margin-bottom: 0.75rem;
}
.mb-0 {
  margin-bottom: 0;
}
.media {
  display: flex;
  align-items: flex-start;
  .media-aside {
    display: flex;
  }
}
.badge-light-primary {
  background-color: rgba(115, 103, 240, 0.12);
}
.rounded-circle {
  border-radius: 50%;
}
.b-avatar {
  text-align: center;
}
.mr-2 {
  margin-right: 1.5rem;
}
.b-avatar-custom {
  width: inherit;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7367f0;
  i {
    font-size: 1.3rem;
  }
}
.font-weight-bolder {
  font-weight: 600 !important;
}
.card-statistics {
  .card-header {
    padding-left: 2.4rem;
  }
  .statistics-body {
    padding: 2rem 2.4rem !important;
  }
}
</style>
