<template>
  <TheLayout>
    <router-view />
  </TheLayout>
</template>

<script>
import TheLayout from "@/components/TheLayout.vue";
export default {
  components: {
    TheLayout,
  },
};
</script>

<style lang="scss">
#app {
  font-family: system-ui;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.home-skn-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  .skn-prod-item {
    width: 262px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      border-radius: 8px;
      width: 100%;
      height: 100%;
    }

    .prod-img {
      width: 100%;
      height: 178px;
    }

    .prod-name {
      margin-top: 15px;
      margin-bottom: 10px;
      width: 90%;
      height: 18px;
    }
    .prod-des {
      width: 40%;
      height: 21px;
    }
  }
}

</style>
