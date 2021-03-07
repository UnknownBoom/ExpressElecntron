<template>
  <div>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
    >
      <q-input type="text"  v-model="defaultUser.name" label="Имя"
      > </q-input>
      <q-input type="text"  v-model="defaultUser.lastName" label="Фамилия"
      > </q-input>
      <q-input type="text"  v-model="defaultUser.patronymic" label="Отчество"
      > </q-input>
      <q-input type="text" counter v-model="defaultUser.phone" label="Телефон"
      > </q-input>
      <q-input type="text"  v-model="defaultUser.email"  label="Почта"
      > </q-input>
      <q-btn label="Добавить" type="submit"> </q-btn>
    </q-form>
  </div>
</template>

<script>
    import notifyApi from "src/api/notifyApi";
    import {mapGetters} from "vuex";

    export default {
        name: "NewUserForm",
      data(){
          return{
            defaultUser:{}
          }
      },
      computed:{
          ...mapGetters('user',['getDefaultUserCopy'])
      },
      methods:{
        onSubmit(){
          this.$store.dispatch('user/createUserAction',this.defaultUser)
            .catch(err=>notifyApi.showErrorNotify(err.error))
        }
      },
      created() {
        this.defaultUser = this.getDefaultUserCopy
      }
    }
</script>

<style scoped>

</style>
