<template>
  <div>
    <div class="container">
      <div class="tab-pane fade show active">
        <div class="row">
          <div class="col-md-12">

            <ul class="d-lg-none">
              <template v-for="container in containers">
                <li :key="container.id" >
                  <p :class="container.temperatureWarning && 'text-danger'">
                      {{ container.beerType }} beers <br>
                      Temperature {{container.currentTemperature}}º<br>
                      Container {{container.id}}
                  </p>
                </li>
              </template>
            </ul>

            <div class="d-none d-lg-block mt-3">
              <div class="card-deck ">
                <template v-for="container in containers">
                  <div :key="container.id" class="card mb-3 text-center" style="min-width: 12rem;max-width: 12rem;">
                    <div class="card-body">
                      <h5 :class="container.temperatureWarning && 'text-danger'"  class="card-title">
                        Container {{ container.id }}
                      </h5>

                      <h6 class="card-subtitle mb-2 text-muted">
                        {{container.beerType}}
                      </h6>

                      <ul class="list-group list-group-flush">
                        <li :class="container.temperatureWarning && 'text-danger'" class="list-group-item">
                          Temperature <i v-if="container.temperatureWarning" class="fas fa-exclamation"></i>
                          <br>{{container.currentTemperature}}º</li>
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
