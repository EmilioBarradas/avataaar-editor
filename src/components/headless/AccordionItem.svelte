<script lang="ts">
    import type { AccordionContext } from "@scripts/types";
    import { getContext, tick } from "svelte";
    import { slide } from "svelte/transition";

    const accordion: AccordionContext = getContext('accordion');
    const currentExpanded = accordion.currentExpanded;
    const itemId = {};

    accordion.registerItem(itemId);

    $: isExpanded = $currentExpanded === itemId;

    let containerElement: HTMLElement;
</script>

{#if accordion.type === 'normal' || (typeof $currentExpanded === 'undefined' || isExpanded)}
    <div bind:this={containerElement} class="w-full" class:h-full={accordion.type === 'expanded' && isExpanded}>
        <div class="cursor-pointer" on:click={async () => {
            accordion.toggleExpansion(itemId);

            if (isExpanded) {
                await tick();
                containerElement.scrollIntoView();
            }
        }}>
            <slot name="title" {isExpanded} />
        </div>
        {#if isExpanded}
            <div transition:slide="{{ duration: accordion.animation?.toggle?.duration || 100 }}">
                <slot name="contents" />
            </div>
        {/if}
    </div>
{/if}
