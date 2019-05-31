<template>
  <div>
    <div class="container">
      <div class="tab-pane fade show active">
        <div class="row">
          <div class="col-md-12">
            <br>
            <h3>Containers List</h3>
            <br>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Container Id</th>
                  <th scope="col">Beer Type</th>
                  <th scope="col">Current Temperature</th>
                  <th scope="col">Deliver Id</th>
                  <th scope="col">Beer Count</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="container in containers">
                  <tr :key="container.id">
                    <th scope="row">{{ container.id }}</th>
                    <td>{{ container.beerType }}</td>
                    <td v-if="container.temperatureWarning === true" class="alert alert-warning">Warning ({{container.currentTemperature}})</td>
                    <td v-else>Good ({{container.currentTemperature}})</td>
                    <td>{{ container.deliverId}}</td>
                    <td>{{ container.beerCount}}</td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
import { getAll } from '../apiServices/containers'

export default {
  name: 'ListContainers',
  data () {
    return {
      containers: []
    }
  },
  mounted () {
    let socket = io(`http://localhost:4000`)

    socket.on('update-measurement', (container) => {
      let index = this.containers.findIndex(i => i.id === container.id)
      this.$set(this.containers, index, container)
    })

    getAll()
      .then(data => {
        console.log(data)
        if (data.length > 0) {
          this.containers = data
        }
      })
  }
}
</script>
