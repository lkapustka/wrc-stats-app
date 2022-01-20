import { useWindowSize, useEventListener, useDebounceFn } from "@vueuse/core";
import { ref, computed } from "@vue/composition-api";

export default function useDark() {
    const { height } = useWindowSize();
    const headerVH = ref(0.75);
    const headerHeightInPx = computed(() => headerVH.value * height.value);

    const burgerPaddingTop = ref(15);
    const burgerContent = ref(24);
    const burgerHeightInPx = computed(() => (burgerContent.value / 2) + burgerPaddingTop.value);

    const isDark = ref(false);

    useEventListener(window, "scroll", useDebounceFn(() => {
        isDark.value = window.scrollY + burgerHeightInPx.value >= headerHeightInPx.value ? true : false
    }, 100));

    return { isDark };
}
