<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <div class="q-gutter-md">
        <q-btn to="/users" color="black">Users</q-btn>
        <q-btn to="/realtors" color="black">Realtor</q-btn>
<!--        <q-btn to="/levi" color="black">Levi</q-btn>-->
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,

    }
  },
  beforeMount() {
  }
}
</script>
