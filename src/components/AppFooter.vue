<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Starlight, the most feature complete bot out there!</strong>
        </p>
        <div class="columns">
          <div class="column is-two-fifths is-hidden-tablet" />
          <div class="column">
            <a
              href="https://www.npmjs.com/package/klasa"
              class="button is-danger"
            >
              <span>Built using Klasa</span>
              <span class="icon">
                <i class="fab fa-npm" />
              </span>
            </a>
          </div>
          <div class="column">
            <a
              class="button is-dark"
              @click="toggleDark()"
            >
              <span>Turn {{ dark ? "on" : "off" }} the lights</span>
              <span class="icon">
                <i :class="dark ? 'fas fa-sun' : 'fas fa-moon'" />
              </span>
            </a>
          </div>
          <div class="column" />
          <div class="column is-two-fifths is-hidden-tablet" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { saveState } from '../util.js';

export default {
    name: 'AppFooter',
    computed: {
        dark() {
            return this.$parent.dark;
        }
    },
    methods: {
        toggleDark() {
            this.$parent.dark = !this.$parent.dark;
            saveState('dark', String(this.$parent.dark));
        }
    }
};
</script>
