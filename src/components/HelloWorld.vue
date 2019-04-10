<template>
  <div class="hello">
    <h1>Your IP is {{ ip }}</h1>
    <input type="text" v-model="input.username" placeholder="Username">
    <button>Send</button>
    <br>
    <br>
    <textarea>{{ response }}</textarea>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      ip: "",
      input: {
        username: ""
      },
      response: ""
    };
  },
  mounted() {
    axios({ method: "GET", url: "https://httpbin.org/ip" }).then(
      result => {
        this.ip = result.data.origin;
      },
      error => {
        console.error(error);
      }
    );
  },
  methods: {}
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

textarea {
  width: 600px;
  height: 200px;
}
</style>
