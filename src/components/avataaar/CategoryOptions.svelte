<script lang="ts">
    import type { CategoryInfo } from "@scripts/types";
    import Avataaar from "./Avataaar.svelte";

    export let categoryId: string;
    export let category: CategoryInfo;
    export let avatarProps;
</script>

<div class="w-full pt-10 px-4 pb-14 grid grid-cols-4 gap-y-4 gap-x-1.5">
    {#each Object.keys(category.options) as type}
        <div class="cursor-pointer" on:click={() => avatarProps[categoryId] = type}>
            <Avataaar {...{ ...avatarProps, [categoryId]: type }} />
        </div>
    {/each}
</div>
