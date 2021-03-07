<template>
  <div>
    <q-dialog v-model="show_dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Изменить</div>
        </q-card-section>
        <q-card-section>
          <div class="row q-gutter-md">
            <q-input type="text" v-model="editedUser._id"  hidden disable></q-input>
            <q-input type="text" v-model="editedUser.name" label="Имя"></q-input>
            <q-input type="text" v-model="editedUser.lastName" label="Фамилия"></q-input>
            <q-input type="text" v-model="editedUser.patronymic" label="Отчество"></q-input>
            <q-input type="text" v-model="editedUser.phone" label="Телефон"></q-input>
            <q-input type="text" v-model="editedUser.email" label="Почта"></q-input>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup @click="editItem"></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: "UserTableDialog",
    data() {
      return {
        editedUser: {},
        show_dialog: false,
      }
    },
    computed:{
      ...mapGetters('user',['getEditedUserCopy',"getEditedUser"])
    },
    methods: {
      edit() {
        Object.assign(this.editedUser,this.getEditedUser)
        console.log(this.editedUser)
        console.log(this.getEditedUser)
        this.show_dialog = true
      },
      editItem(){
        console.log("edited")
          this.$store.dispatch('user/editUserAction',this.editedUser)
      }
    },

  }
</script>

<style scoped>

</style>
