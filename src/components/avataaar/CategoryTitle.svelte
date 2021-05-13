<script lang="ts">
    import type { CategoryInfo } from "@scripts/types";
    import ChevronRightIcon from "@components/icons/ChevronRightIcon.svelte";

    export let category: CategoryInfo;

    let chevronDown = false;
</script>

<button class="sticky top-0 h-20 w-full p-6 flex justify-between items-center bg-gray-900 border-b border-black cursor-pointer hover:bg-gray-800 focus:outline-none active:bg-gray-700"
    on:click={() => chevronDown = !chevronDown}
>
    <h1 class="font-semibold text-white text-xl">{category.displayName}</h1>
    <ChevronRightIcon rotate={chevronDown} />
</button>
