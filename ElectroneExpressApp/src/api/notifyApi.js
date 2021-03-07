import Vue from 'vue'

export default{
  showErrorNotify(message) {
    Vue.prototype.$q.notify({type:"negative",message:message})
  }
}

