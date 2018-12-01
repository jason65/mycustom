/*
 * @Author: PengZhen 
 * @Description: 缓存 
 * @Date: 2018-07-06 11:23:58 
 * @Last Modified by: lilizhou
 * @Last Modified time: 2018-10-09 15:15:25
 */

import { Base64 } from 'js-base64'

function isEmpty(param) {
  return param === null || param === undefined || param === ''
}
/**
 * set cache
 *
 * @export
 * @param {string} [key='']
 * @param {*} value
 */
export function set(key = '', value) {
  const encodeKey = Base64.encode(key)

  if (!isEmpty(value)) {
    const encodeValue = Base64.encode(window.unescape(window.encodeURIComponent(JSON.stringify(value))))

    window.sessionStorage.setItem(encodeKey, encodeValue)
  }
}

/**
 * get cache
 *
 * @export
 * @param {string} [key='']
 * @returns
 */
export function get(key = '') {
  const encodeKey = Base64.encode(key)

  const value = window.sessionStorage.getItem(encodeKey)

  if (!isEmpty(value)) {
    return JSON.parse(window.decodeURIComponent(window.escape(Base64.decode(value))))
  }
}

/**
 * remove cache
 *
 * @export
 * @param {string} [key='']
 */
export function remove(key = '') {
  window.sessionStorage.removeItem(Base64.decode(key))
}

/**
 * clear cache
 *
 * @export
 */
export function clear() {
  window.sessionStorage.clear()
}

export default {
  set,
  get,
  remove,
  clear
}
