<template>
  <div class="container-fluid" style="padding: 0px;">
    <Header />
    <ListContainers />
  </div>
</template>

<script>

import ListContainers from './ListContainers'
import Header from './Header'

export default {
  name: 'Dashboard',
  components: {
    Header,
    ListContainers
  }
}

</script>
