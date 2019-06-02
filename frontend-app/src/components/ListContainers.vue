<template>
  <div>
    <div class="container">
      <div class="tab-pane fade show active">
        <div class="row">
          <div class="col-md-12">
            <br>

            <h3>Containers List</h3>
            <br>

            <ul class="d-lg-none">
              <template v-for="container in containers">
                <li :key="container.id" >
                  <p :class="container.temperatureWarning && 'text-danger'">
                      {{ container.beerType }} beers | Temperature {{container.currentTemperature}}º
                  </p>
                </li>
              </template>
            </ul>

            <div class="d-none d-lg-block">
              <div class="card-deck ">
                <template v-for="container in containers">
                  <div :key="container.id" class="card mb-3 text-center" style="min-width: 16rem;max-width: 16rem;">
                    <div class="card-header">
                      {{ container.beerType }} Container
                      <span v-if="container.temperatureWarning" class="badge badge-pill badge-danger float-right">Danger</span>
                    </div>

                    <div :class="container.temperatureWarning && 'text-danger'" class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Temperature <br>{{container.currentTemperature}}º</li>
                        <li class="list-group-item">BeerCount <br>{{container.beerCount}}</li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
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
