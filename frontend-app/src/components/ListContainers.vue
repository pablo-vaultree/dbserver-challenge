<template>
  <div>
    <div class="container">
      <div class="tab-pane fade show active">
        <div class="row">
          <div class="col-md-12">
            <br>
            <h3>Containers List</h3>
            <br>
            <div class="card-deck">
            <template v-for="container in containers">
              <ul :key="container.id" class="d-lg-none">
                  <li>
                    <p :class="container.temperatureWarning && 'text-danger'">
                        {{ container.beerType }} beers | Current Temperature {{container.currentTemperature}}º
                    </p>
                  </li>
              </ul>

              <div :key="container.id" class="card mb-3 d-none d-lg-block" style="max-width: 18rem;">
                <div class="card-header">
                  {{ container.beerType }} beers
                  <span v-if="container.temperatureWarning" class="badge badge-pill badge-danger float-right">Danger</span>
                </div>
                <div :class="container.temperatureWarning && 'text-danger'" class="card-body">
                  <h5 class="card-title">Current Temperature {{container.currentTemperature}}º</h5>
                  <p class="card-text">
                      <ul>
                        <li>deliver id {{container.deliverId}}</li>
                        <li>beerCount {{container.beerCount}}</li>
                      </ul>
                  </p>
                </div>
              </div>
            </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import io from "socket.io-client";
import { getAll } from "../apiServices/containers";
import config from "../../config/config";

export default {
  name: "ListContainers",
  data() {
    return {
      containers: []
    };
  },
  mounted() {
    let socket = io(config.API_ROOT);

    socket.on("update-measurement", container => {
      let index = this.containers.findIndex(i => i.id === container.id);
      this.$set(this.containers, index, container);
    });

    getAll().then(data => {
      console.log(data);
      if (data.length > 0) {
        this.containers = data;
      }
    });
  }
};
</script>
