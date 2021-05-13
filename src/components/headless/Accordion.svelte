<script lang="ts">
    import type { AccordionContext } from "@scripts/types";
    import { setContext } from "svelte";
    import { get, writable } from "svelte/store";

    export let expanded = false;
    export let animation = {};

    const accordion: AccordionContext = {
        type: expanded ? 'expanded' : 'normal',
        items: [],
        currentExpanded: writable(undefined),
        registerItem: (registeredItem) => {
            accordion.items.push(registeredItem);
        },
        toggleExpansion: (expandedItem) => {
            const currentExpanded = get(accordion.currentExpanded);
            accordion.currentExpanded.set(currentExpanded !== expandedItem ? expandedItem : undefined);
        },
        animation,
    };

    setContext('accordion', accordion);
</script>

<slot />
