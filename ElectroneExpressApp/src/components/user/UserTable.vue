<template>
    <div>
      <q-table
        class="q-mr-md"
        :columns="getUserColumns"
        :data="getUsers">
        <template v-slot:top-left>
          <div class="q-pa-sm q-gutter-sm">
              <user-table-dialog ref="user_table_dialog"/>
          </div>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
              <q-tr  :props="props" dense autofocus>{{props.row.name}}</q-tr>
            </q-td>
            <q-td key="lastName" :props="props">
              <q-tr  :props="props" dense autofocus >{{props.row.lastName}}</q-tr >
            </q-td>
            <q-td key="patronymic" :props="props" auto-width>
              <q-tr :props="props" dense autofocus >{{props.row.patronymic}}</q-tr>
            </q-td>
            <q-td key="phone" :props="props" auto-width>
              <q-tr :props="props" dense autofocus >{{props.row.phone}}</q-tr>
            </q-td>
            <q-td key="email" :props="props" auto-width>
              <q-tr   :props="props" dense autofocus >{{props.row.email}}</q-tr>
            </q-td>
            <q-td key="actions" :props="props" auto-width>
              <q-btn color="blue" label="Update" @click="showEditDialog(props.row)" size=sm no-caps></q-btn>
              <q-btn color="red" label="Delete"  @click="deleteItem(props.row)" size=sm no-caps></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import UserTableDialog from "components/user/UserTableDialog";
  import notifyApi from "src/api/notifyApi";
    export default {
        name: "UserTable",
      components: {UserTableDialog},
      data(){
          return{

          }
      },
      computed:{
          ...mapGetters('user',['getUsers','getUserColumns'])
      },
      methods:{
          ...mapActions('user',['deleteUserAction']),
        showEditDialog(user){
            this.$store.commit('user/setEditedUser',user)
            this.$refs.user_table_dialog.edit()
        },
        deleteItem(user){
          this.deleteUserAction(user).catch(err=> notifyApi.showErrorNotify(err.error))
        }
      },
      beforeMount() {
        this.$store.dispatch('user/getAllUsersAction').catch(err=> notifyApi.showErrorNotify(err.error))
      }
    }
</script>

<style scoped>

</style>
