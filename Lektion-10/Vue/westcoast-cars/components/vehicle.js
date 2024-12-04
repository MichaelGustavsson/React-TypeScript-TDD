app.component('vehicle', {
  props: {
    vehicle: {
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="card">
        <button v-on:click="selectVehicle(vehicle)">
          <img :src="imageUrl(vehicle)" :alt="vehicle.model" />
          <span>{{vehicle.manufacturer + ' ' + vehicle.model}}</span>
        </button>
      </div>`,
  data() {
    return {};
  },
  methods: {
    selectVehicle(vehicle) {
      this.$emit('display-details', vehicle);
    },
    imageUrl(vehicle) {
      return (this.image = './assets/' + vehicle.imageUrl);
    },
  },
});
