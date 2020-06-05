import counter from './counter'
import login from './login'
let actions = {
  ...counter,
  ...login
}
export default actions;