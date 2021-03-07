export default {
  setLevi(state,levi){
    state.levi = levi
  },
  setEditedLevi(state,levi){
    state.editedLevi = levi
  },
  setDefaultToEditedLevi(state){
    state.editedLevi = Object.assign({},state.defaultLevi)
  },
}
