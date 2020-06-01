const local = {
  getList() {
    let listStr = localStorage.getItem('userlist');
    let list = listStr?JSON.parse(listStr):[];
    return list;
  },
  add(user) {
    let oldUsers = local.getList();
    oldUsers.push(user);
    localStorage.setItem('userlist', JSON.stringify(oldUsers));
  },
  getUser(userid) {
    let list = local.getList();
    return list.find(item => item.id.toString() === userid)
  }
}
export default local;