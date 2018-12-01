<template>
  <div id="app">
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="50">
      </el-pagination>
    </div>
    <!-- <div class="spinner" v-show="loading">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
    <transition name="el-zoom-in-top" mode="out-in">
      <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
import vue from 'vue'
import ElementUI from 'element-ui'
vue.use(ElementUI)
export default {
  name: 'app',
  data() {
    return {
      loading: false,
      loadingCount: 0,
      config: {
        api: {
          // queryUserMenus: config.api.upms + 'user/queryUserMenus'
          queryUserMenus: ''
        }
      }
    }
  },
  created() {
    // this.$http.get('static/config.json').then(res => {
    //   for (let key in res.data) {
    //     kindo[key] = res.data[key]
    //   }
    // })
  },
  mounted() {

  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.spinner {
  position: absolute;
  z-index: 99999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 35px auto;
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: #01cfeb;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes sk-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
