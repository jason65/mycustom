/*
 * @Author: PengZhen 
 * @Description: 继承自 table-coloumn, 并配置默认属性 
 * @Date: 2018-07-11 10:57:36 
 * @Last Modified by: PengZhen
 * @Last Modified time: 2018-07-11 11:15:04
 */

import { TableColumn } from 'element-ui'

export default {
  name: 'el-table-column',

  extends: TableColumn,

  props: {
    'header-align': { default: 'center' }
  }
}
