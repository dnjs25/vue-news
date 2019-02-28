<template>
  <div>
    <div v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // #mapGetters
  // ...mapGetters([
  //   'fetchedAsk',
  // ])
    // #mapState를 사용하지 않을 때
    ask() {
      return this.$store.state.ask;
    }
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
