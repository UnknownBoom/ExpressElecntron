<template>
<div class="full-width full-height">
    <div class="row q-gutter-md full-width full-height q-ma-md" >
      <div class="col-3">
        <new-user-form></new-user-form>
      </div>
      <div class="col">
        <user-table></user-table>
      </div>
    </div>
</div>
</template>

<script>
  import {mapState,mapGetters} from "vuex";
  import NewUserForm from "components/user/NewUserForm";
  import UserTable from "components/user/UserTable";
  export default {
    components: {UserTable, NewUserForm},
    data(){
      return{
      }
    },
    computed:{

    },
    methods:{
    },
  }
</script>
