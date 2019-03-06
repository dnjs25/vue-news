<template>
  <!-- 1 -->
  <!-- <user-profile></user-profile> -->

  <!-- 2 -->
  <user-profile :info="userInfo">
    <div slot="username">{{ userInfo.id }}</div>
    <span slot="time">{{ 'Joined ' + userInfo.created }}, </span>
    <span slot="karma">{{ userInfo.karma }}</span>
  </user-profile>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  // 1은 computed를 내려주고, 2는 현재 컴포넌트에
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>
