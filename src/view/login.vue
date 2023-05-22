<template>
  <div class="Login">
    <img class="header" src="@/assets/img/header.png" />
    <h1 class="title">综合训练平台</h1>
    <div class="insert">
      <input placeholder="姓名" type="text" class="input" />
      <input placeholder="请输入身份证号" type="text" class="input" />
    </div>
    <div class="submit">
      <van-button plain class="mr20" @click="studentLogin" type="info">学员登陆</van-button>
      <van-button type="info" @click="coachLogin">教练登陆</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      pwd: '',
      idCard: ''
    }
  },
  methods: {
    studentLogin () {
      console.log(123)
    },
    coachLogin () {
      console.log(456)
    },
  }
}
</script>

<style lang="scss" scoped>
.Login {
  width: 100%;
  height: 100%;
  background: aliceblue;
  padding: 10px;
  text-align: center;
  overflow-y: auto;
  .header {
    width: 60%;
    height: auto;
    display: block;
    margin: 30px auto;
  }
  .title {
    font-size: 23px;
    text-align: center;
    color: #444;
    margin: 20px 0;
  }
  .insert {
    .input {
      display: inline-block;
      width: 90%;
      border-radius: 5px;
      height: 40px;
      margin-top: 15px;
      padding: 0 10px;
      font-size: 14px;
      border: 1px solid #cce6ff;
      &:last-child {
        margin-top: 25px;
      }
    }
  }
  .submit {
    width: 100%;
    margin-top: 40px;
    .mr20 {
      margin-right: 20px;
    }
  }
}
</style>>