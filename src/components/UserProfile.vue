<template>
  <div class="user-container">
    <div>
      <i class="fas fa-user"></i>
    </div>
    <div class="user-discription">
      <!-- 접근 속성이 달라 slot을 사용 -->
      <!-- 2 -->
      <slot name="username">
        <!-- 상위 컴포넌트에서 정의할 영역 -->
      </slot>
      <!-- <router-link :to="`/user/${userInfo.user}`">
        {{ userInfo.id }}
      </router-link> -->


      <!-- <div>username: {{ info.id }}</div> -->
      <div class="time">
        <!-- time: {{ info.created }} -->
        <slot name="time">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
        <slot name="karma">
          <!-- 상위 컴포넌트에서 정의할 영역 -->
        </slot>
      </div>
      <!-- 1 -->
      <!-- <div>{{ userInfo.id }}</div>
      <div class="time">
        {{ userInfo.created }}
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  // 2
  props: {
    info: Object
  },


  // 1
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },
}
</script>

<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-discription {
    padding-left: 8px;
  }
  .time {
    font-size: 0.7rem;
  }
</style>
