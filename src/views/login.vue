<template>
  <div class="login-container">
    <div class="login-form">
      <div class="title-container"><h3 class="title">Login Form</h3></div>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="user">
          <span class="login-span"><i class="el-icon-user-solid"></i></span>
          <el-input v-model="form.user" />
        </el-form-item>
        <el-form-item prop="pwd">
          <span class="login-span"><i class="el-icon-key"></i></span>
          <el-input type="password" v-model="form.pwd" />
        </el-form-item>
        <el-button style="width:100%;margin-bottom:30px;" type="primary" @click="onSubmit('form')">Login</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: 'admin',
        pwd: '111111'
      },
      rules: {
        user: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  mounted() {
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          localStorage.setItem('user', JSON.stringify(this.form.user));
          this.$router.push({
            path: '/index'
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #2d3a4b;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: #eee;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: 700;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    /deep/ input {
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #fff;
      height: 47px;
      caret-color: #fff;
    }
  }
  .login-span {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    width: 30px;
    display: inline-block;
    vertical-align: middle;
  }
}
</style>
