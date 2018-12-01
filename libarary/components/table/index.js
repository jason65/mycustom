import KindoTable from './src/table'
import kindoTableColumn from './src/column.js'

KindoTable.install = function(Vue) {
  Vue.component(KindoTable.name, KindoTable)
  Vue.component(kindoTableColumn.name, kindoTableColumn)
}

export default KindoTable
