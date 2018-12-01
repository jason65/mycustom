import table from './components/table'
import icon from './components/icon'
import card from './components/card'
import echart from './components/echart'
import IconList from './components/icon-list'
import IconSelect from './components/icon-select'
import sidePanel from './components/side-panel'
import test from './components/test'

import cache from './helper/cache.js'
import valid from './helper/valid.js'
import util from './helper/util.js'
import config from './config'
import http from './http/axois.js'
import './prototype/date.js'
import './prototype/number.js'
import './prototype/string.js'
const components = [icon, table, card, echart, IconList, IconSelect, sidePanel]
const prototypes = { cache, valid, util }
const install = function(vue) {
  vue.use(test)
  components.forEach(element => {
    vue.use(element)
  })
  global[config.logo] = {}
  vue.prototype[config.logo] = {}
  for (let key in prototypes) {
    global[config.logo][key] = prototypes[key]
    vue.prototype[config.logo][key] = prototypes[key]
  }
  vue.prototype.$http = http
}
export default {
  install,
  icon,
  table
}
