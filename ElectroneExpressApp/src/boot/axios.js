import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const resource = axios.create()

export default {
  findAllUsers: () =>resource.get(`api/api/user`),
  findUser: (id) =>resource.get(`api/api/user/${id}`),
  updateUser: (user) => resource.post(`api/api/user/${user._id}`,user),
  deleteUser: (id) => resource.post(`api/api/user/delete/${id}/`),
  createUser: (user) => resource.post(`api/api/user/`,user),
  findAllRealtors: () =>resource.get('api/api/realtor/'),
  findRealtor: (id) =>resource.get(`api/api/realtor/${id}`),
  updateRealtor: (realtor) => resource.post(`api/api/realtor/${realtor._id}`,realtor),
  deleteRealtor: (id) => resource.post(`api/api/realtor/delete/${id}/`),
  createRealtor: (realtor) => resource.post(`api/api/realtor/`,realtor),
  leviWithMax: (max,source) => resource.post(`api/api/levi/${max}/`,source),
}

