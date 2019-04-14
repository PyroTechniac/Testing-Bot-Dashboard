<template>
  <div class="notification is-info is-marginless is-radiusless is-paddingless">
    <div class="container">
      <nav class="level is-mobile">
        <!-- Left side -->
        <div class="level-left">
          <div class="level-item">
            <router-link
              class="navbar-item button is-info title is-5 is-marginless"
              to="/"
            >
              <img
                src="static/stars.jpg"
                alt="Stars"
              >&nbsp;Starlight
            </router-link>
          </div>
        </div>

        <!-- Right side -->
        <div class="level-right">
          <div class="level-item">
            <router-link
              class="navbar-item button is-info is-5 is-marginless"
              to="/stats"
            >
              <span class="icon">
                <i class="fas fa-chart-bar" />
              </span>
              <span class="is-hidden-mobile">
                Stats
              </span>
            </router-link>
          </div>
          <div class="level-item">
            <a
              class="navbar-item button is-info is-5 is-marginless"
              @click="login()"
            >
              <span class="icon">
                <b-icon icon="fab fa-sign-in-alt" />
              </span>
              <span class="is-hidden-mobile">
                Sign in
              </span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AppNavbar',
    computed: {
        login() {
            return this.$parent.login;
        }
    }
};
</script>
