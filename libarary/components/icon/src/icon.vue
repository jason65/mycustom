<template>
  <i class="fa" :class="`fa-${name}`" aria-hidden="true"></i>
</template>

<script>
import 'font-awesome/css/font-awesome.css'
import config from '../../../config'

export default {
  name: config.logo + 'Icon',
  props: {
    name: {
      type: String,
      required: false,
      default: 'font-awesome'
    }
  }
}
</script>

<style>
[class^='fa'],
[class*=' fa'] {
  display: inline-block;
  font-family: FontAwesome !important;
  font-size: inherit;
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;

  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
}

.el-button [class*='fa-'] + span {
  margin-left: 5px;
}
</style>