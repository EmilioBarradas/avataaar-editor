<script lang="ts">
    export let color = 'text-white';
    export let pointer = false;
    export let rotate = false;
</script>

<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 {color} transition duration-150 transform" class:cursor-pointer={pointer} class:rotate-90={rotate} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
</svg>
