<template>
<div class="full-width full-height">
    <div class="row q-gutter-md full-width full-height q-ma-md" >
      <div class="col-3">
        <new-realtor-form></new-realtor-form>
      </div>
      <div class="col">
        <realtor-table></realtor-table>
      </div>
    </div>
</div>
</template>

<script>
  import {mapState,mapGetters} from "vuex";
  import NewRealtorForm from "components/realtor/NewRealtorForm";
  import RealtorTable from "components/realtor/RealtorTable";
  export default {
    components: {RealtorTable, NewRealtorForm},
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
