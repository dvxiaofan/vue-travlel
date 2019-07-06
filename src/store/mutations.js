/*
 * @Author: DevZhang
 * @Date: 2019-07-06 22:29:00
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-07-06 22:29:50
 */

export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (error) {}
  }
}
