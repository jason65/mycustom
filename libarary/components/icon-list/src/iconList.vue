<template>
  <div>
    <el-card>
      <template slot="header">
        <el-radio-group v-model="showIndex" size="mini">
          <el-radio-button v-for="(item, index) in radioOptions" :key="index" :label="item.value">
            {{item.label}}
          </el-radio-button>
        </el-radio-group>
      </template>
      <el-row style="margin: -10px;">
        <el-alert title="点击图标复制代码" type="success">
        </el-alert>
        <el-col class="icon-col" v-for="(iconItem, iconIndex) in iconShow.icon" :key="iconIndex" :span="2" :xl="2" :lg="4" :md="6" :sm="6" :xs="8">
          <i class="icon" :class="'fa fa-' + iconItem" :title="iconItem" @click="copy(iconItem)"></i>
          <br>
          <span class="description">{{ iconItem }}</span>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import clipboard from 'clipboard-polyfill'
import icon from './fa-icon'
import config from '../../../config'

export default {
  name: config.logo + 'IconList',

  data() {
    return {
      icon,
      showIndex: 0
    }
  },

  computed: {
    iconShow() {
      return this.icon[this.showIndex]
    },

    radioOptions() {
      return this.icon.map((e, index) => ({
        label: e.title,
        value: index
      }))
    }
  },

  methods: {
    copy(iconItem) {
      const text = `<i class="fa fa-${iconItem}" aria-hidden="true"></i>`

      clipboard.writeText(text)

      this.$message({
        message: `已复制到剪贴板`,
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-col {
  text-align: center;
  list-style: none;
  cursor: pointer;
  height: 120px;
  color: #5c6b77;
  transition: all 0.2s ease;
  position: relative;
  padding-top: 10px;

  .icon {
    padding: 16px;
    font-size: 24px;
  }

  .description {
    display: block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden; /* "overflow" value must be different from "visible" */
    text-overflow: ellipsis;
  }
}
</style>
