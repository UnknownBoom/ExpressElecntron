<template>
  <div>
    <q-form
      class="q-gutter-md"
      @submit="onSubmit"
    >
      <q-input type="text"  v-model="defaultRealtor.name" label="Имя"
      > </q-input>
      <q-input type="text"  v-model="defaultRealtor.lastName" label="Фамилия"
      > </q-input>
      <q-input type="text"  v-model="defaultRealtor.patronymic" label="Отчество"
      > </q-input>
      <q-input type="number" counter v-model="defaultRealtor.percentage" label="Телефон"
      > </q-input>
      <q-btn label="Добавить" type="submit"> </q-btn>
    </q-form>
  </div>
</template>

<script>
    import notifyApi from "src/api/notifyApi";
    import {mapGetters} from "vuex";

    export default {
      data(){
          return{
            defaultRealtor:{}
          }
      },
      computed:{
          ...mapGetters('realtor',['getDefaultRealtor'])
      },
      methods:{
        onSubmit(){
          this.$store.dispatch('realtor/createRealtorAction',this.defaultRealtor)
            .catch(err=>notifyApi.showErrorNotify(err.error))
        }
      },
      created() {
        this.defaultRealtor =  Object.assign({},this.getDefaultRealtor)
      }
    }
</script>

<style scoped>

</style>
