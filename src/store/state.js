/*
 * @Author: DevZhang
 * @Date: 2019-07-06 22:26:01
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-07-07 14:37:15
 */

let defaultCity = '武汉'
try {
  if (localStorage.city) defaultCity = localStorage.city
} catch (error) {}

export default {
  city: defaultCity
}
