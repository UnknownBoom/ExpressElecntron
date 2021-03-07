export default {
  getUsers: state => state.users,
  getDefaultUser: state => state.defaultUser,
  getEditedUser: state => state.editedUser,
  getEditedUserCopy: state =>  Object.assign({},state.editedUser),
  getUserColumns: state => state.columns,
  getDefaultUserCopy: state => {return Object.assign({},state.defaultUser)},
}
