<template>
  <div class="container-fluid" style="padding: 0px;">
    <!-- <Header v-bind:user="user"/> -->
    <ListContainers />
  </div>
</template>

<script>

import ListContainers from './ListContainers'

export default {
  name: 'Dashboard',
  components: {
    ListContainers
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mount () {
    console.log('foi')
  }
}

</script>
