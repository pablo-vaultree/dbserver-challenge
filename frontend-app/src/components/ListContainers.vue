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
import axios from 'axios'
import io from 'socket.io-client'

export default {
  name: 'ListContainers',
  data () {
    return {
      containers: []
    }
  },
  mounted () {
    let socket = io(`http://127.0.0.1:4000`)

    socket.on('update-mesurement', (container) => {
      let index = this.containers.findIndex(i => i.id === container.id)
      this.$set(this.containers, index, container)
    })

    console.log('foi')
    axios
      .get(`http://127.0.0.1:4000/deliveries/1/containers/`, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
        console.log(res.data)
        if (res.data.length > 0) {
          this.containers = res.data
        }
      })
  }
}
</script>
