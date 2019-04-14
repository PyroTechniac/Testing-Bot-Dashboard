<template>
  <div class="container">
    <section class="section has-text-left">
      <div class="tile is-ancestor">
        <article class="tile is-child box content">
          <div class="columns level-left notification is-info">
            <img
              :src="me.displayAvatarURL"
              height="50"
              width="50"
              class="circular"
            >
            <strong class="content">&nbsp;    {{ me.tag }}</strong>
          </div>
          <div class="columns notification">
            <div class="column has-text-center is-two-fifths">
              <div class="tile is-child">
                <strong>Guilds</strong>
                <p>
                  {{ application.guilds }}
                </p>
              </div>
              <br>
              <br>
              <div class="tile is-child">
                <strong>Users</strong>
                <p>
                  {{ application.users }}
                </p>
              </div>
              <br>
              <br>
              <div class="tile is-child">
                <strong>Uptime</strong>
                <p>
                  {{ application.uptime }}
                </p>
              </div>
              </div>
              <div class="column is-two-fifths has-text-center">
                <div class="tile is-child">
                  <strong>Commands</strong>
                  <p>
                    {{ commands }}
                    </p>
                </div>
              </div>
          </div>
          <div class="has-text-right">
            <a
              class="button is-info"
              @click="invite()"
            >
              <span>Invite me</span>
              <span class="icon">
                <i class="fas fa-envelope" />
              </span>
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
const noop = () => {
    // noop
};

const json = res => res.json();
export default {
    name: 'Stats',
    data() {
        return {
            me: {},
            application: {},
            fetching: false,
            commands: 0
        };
    },
    computed: {
        invite() {
            return this.$parent.invite;
        }
    },
    beforeMount() {
        this.fetch();
    },
    methods: {
        async fetch() {
            if (this.fetching) return;
            this.fetching = true;

            const [me, application, commandArr] = await Promise.all([
                fetch('https://botpyro-testing.herokuapp.com/api/me').then(json).catch(noop),
                fetch('https://botpyro-testing.herokuapp.com/api/application').then(json).catch(noop),
                fetch('https://botpyro-testing.herokuapp.com/api/pieces/commands').then(json).catch(noop)
            ]);

            this.me = me;
            this.application = application;
            this.commands = commandArr.length;
        }
    }
};
</script>
