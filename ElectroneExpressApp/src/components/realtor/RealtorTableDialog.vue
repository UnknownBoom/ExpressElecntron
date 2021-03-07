<template>
  <div>
    <q-dialog v-model="show_dialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Изменить</div>
        </q-card-section>
        <q-card-section>
          <div class="row q-gutter-md">
            <q-input type="text" v-model="editedRealtor._id"  hidden disable></q-input>
            <q-input type="text" v-model="editedRealtor.name" label="Имя"></q-input>
            <q-input type="text" v-model="editedRealtor.lastName" label="Фамилия"></q-input>
            <q-input type="text" v-model="editedRealtor.patronymic" label="Отчество"></q-input>
            <q-input type="text" v-model="editedRealtor.percentage" label="Телефон"></q-input>
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
    name:'RealtorTableDialog',
    data() {
      return {
        editedRealtor: {},
        show_dialog: false,
      }
    },
    computed:{
      ...mapGetters('realtor',['getEditedRealtor'])
    },
    methods: {
      edit() {
        Object.assign(this.editedRealtor,this.getEditedRealtor)
        this.show_dialog = true
      },
      editItem(){
        console.log("edited")
          this.$store.dispatch('realtor/editRealtorAction',this.editedRealtor)
      }
    },

  }
</script>

<style scoped>

</style>
