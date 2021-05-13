<script lang="ts">
    export let color = 'text-white';
    export let pointer = false;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class:cursor-pointer={pointer} class="h-5 w-5 {color}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
</svg>
