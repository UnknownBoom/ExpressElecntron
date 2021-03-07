<template>
    <div>
      <q-table
        class="q-mr-md"
        :columns="getRealtorColumns"
        :data="getRealtors">
        <template v-slot:top-left>
          <div class="q-pa-sm q-gutter-sm">
              <realtor-table-dialog ref="realtor_table_dialog"/>
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
            <q-td key="percentage" :props="props" auto-width>
              <q-tr :props="props" dense autofocus >{{props.row.percentage}}</q-tr>
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
  import RealtorTableDialog from "components/realtor/RealtorTableDialog";
  import notifyApi from "src/api/notifyApi";
    export default {
      components: {RealtorTableDialog},
      data(){
          return{

          }
      },
      computed:{
          ...mapGetters('realtor',['getRealtors','getRealtorColumns'])
      },
      methods:{
          ...mapActions('realtor',['deleteRealtorAction']),
        showEditDialog(realtor){
            this.$store.commit('realtor/setEditedRealtor',realtor)
            this.$refs.realtor_table_dialog.edit()
        },
        deleteItem(user){
          this.deleteRealtorAction(user).catch(err=> notifyApi.showErrorNotify(err.error))
        }
      },
      beforeMount() {
        this.$store.dispatch('realtor/getAllRealtorsAction').catch(err=> notifyApi.showErrorNotify(err.error))
      }
    }
</script>

<style scoped>

</style>
