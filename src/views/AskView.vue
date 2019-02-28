<template>
  <div>
    <p v-for="item in fetchedAsk">
      <a :href="item.url">
        {{ item.title }}
      </a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // #mapGetters
  ...mapGetters([
    'fetchedAsk',
  ])
    // #mapState를 사용하지 않을 때
    // ask() {
    //   return this.$store.state.ask;
    // }
    // #mapState를 사용할 때
    // ...mapState({
    //   ask: state => state.ask
    // })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style>

</style>
