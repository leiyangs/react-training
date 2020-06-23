export default {
  set(key,value) {
    return localStorage.setItem(key,value);
  },
  get(key) {
    return localStorage.getItem(key);
  }
}