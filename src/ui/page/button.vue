<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ym-button>默认按钮</ym-button>
    <ym-button type="primary">主要按钮</ym-button>
    <ym-button type="success">成功按钮</ym-button>
    <ym-button type="info">信息按钮</ym-button>
    <ym-button type="warning">警告按钮</ym-button>
    <ym-button type="danger">危险按钮</ym-button>
    <br />
    <ym-button plain>默认按钮</ym-button>
    <ym-button type="primary" plain>主要按钮</ym-button>
    <ym-button type="success" plain>成功按钮</ym-button>
    <ym-button type="info" plain>信息按钮</ym-button>
    <ym-button type="warning" plain>警告按钮</ym-button>
    <ym-button type="danger" plain>危险按钮</ym-button>
    <br />
    <ym-button round>默认按钮</ym-button>
    <ym-button type="primary" round>主要按钮</ym-button>
    <ym-button type="success" round>成功按钮</ym-button>
    <ym-button type="info" round>信息按钮</ym-button>
    <ym-button type="warning" round>警告按钮</ym-button>
    <ym-button type="danger" round>危险按钮</ym-button>
    <br />
    <ym-button icon="el-icon-search" circle>默认按钮</ym-button>
    <ym-button type="primary" icon="el-icon-edit" circle>主要按钮</ym-button>
    <ym-button type="success" icon="el-icon-check" circle>成功按钮</ym-button>
    <ym-button type="info" icon="el-icon-message" circle>信息按钮</ym-button>
    <ym-button type="warning" icon="el-icon-star-off" circle>警告按钮</ym-button>
    <ym-button type="danger" icon="el-icon-delete" circle>危险按钮</ym-button>
    <br />
    <ym-button disabled>默认按钮</ym-button>
    <ym-button type="primary" disabled>主要按钮</ym-button>
    <ym-button type="success" disabled>成功按钮</ym-button>
    <ym-button type="info" disabled>信息按钮</ym-button>
    <ym-button type="warning" disabled>警告按钮</ym-button>
    <ym-button type="danger" disabled>危险按钮</ym-button>
    <br />
    <ym-button plain disabled>默认按钮</ym-button>
    <ym-button type="primary" plain disabled>主要按钮</ym-button>
    <ym-button type="success" plain disabled>成功按钮</ym-button>
    <ym-button type="info" plain disabled>信息按钮</ym-button>
    <ym-button type="warning" plain disabled>警告按钮</ym-button>
    <ym-button type="danger" plain disabled>危险按钮</ym-button>
    <br />
    <ym-button type="text">文字按钮</ym-button>
    <ym-button type="text" disabled>文字按钮</ym-button>
    <br />
    <ym-button type="primary" icon="el-icon-edit"></ym-button>
    <ym-button type="primary" icon="el-icon-share"></ym-button>
    <ym-button type="primary" icon="el-icon-delete"></ym-button>
    <ym-button type="primary" icon="el-icon-search">搜索</ym-button>
    <ym-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></ym-button>
    <br />
    <ym-button type="primary" loading>加载中</ym-button>
    <br />
    <ym-button>默认按钮</ym-button>
    <ym-button size="medium">中等按钮</ym-button>
    <ym-button size="small">小型按钮</ym-button>
    <ym-button size="mini">超小按钮</ym-button>
    <br />
    <ym-button round>默认按钮</ym-button>
    <ym-button size="medium" round>中等按钮</ym-button>
    <ym-button size="small" round>小型按钮</ym-button>
    <ym-button size="mini" round>超小按钮</ym-button>
    <p class="font-size-100">111111111111</p>
    <div class="box">
      <p>11111111</p>
      <h1>222222222</h1>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
#box {
  p {
    color: red;
  }
  h1 {
    color: blue
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
