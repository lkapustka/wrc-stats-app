<script>
import { defineComponent, inject } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const store = inject("vuex-store");
  },
});
</script>
