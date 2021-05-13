<script lang="ts">
    import Avataaar from "./Avataaar.svelte";

    export let avatarProps;

    const generateURL = (params) => {
        const urlParams = new URLSearchParams();

        for (const [ prop, value ] of Object.entries(avatarProps)) {
            if (typeof value === 'undefined') continue;
            urlParams.append(prop, value as string);
        }

        const queryString = urlParams.toString();

        return `/render${queryString.length !== 0 ? `?${queryString}` : ''}`;
    };
</script>

<div class="w-full flex flex-col justify-center items-center">
    <div class="w-96 mb-14">
        <Avataaar {...avatarProps} />
    </div>
    <button class="py-2 px-3 bg-gray-700 rounded-md focus:outline-none focus:ring-4 ring-gray-500 hover:bg-gray-600 active:bg-gray-800 transition">
        <a href="{generateURL(avatarProps)}" class="font-semibold text-white text-lg">Generate URL</a>
    </button>
</div>
