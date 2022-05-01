<template>
  <div></div>
</template>

<script>
export default {
  computed: {
    message: {
      get() {
        return this.$store.state.obj.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
