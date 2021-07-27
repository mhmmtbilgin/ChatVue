<template>
  <div class="content">
    <router-view />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "./components/shared/Footer.vue";
export default {
  components: { FooterComponent },
  setup() {
    return {};
  },
};
</script>

