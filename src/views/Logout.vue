<script>
import { inject } from "@vue/composition-api";

export default {
  setup() {
    const store = inject("vuex-store");
    const logout = () => {
      store.dispatch("logoutAction");
    };

    return logout;
  },
};
</script>
