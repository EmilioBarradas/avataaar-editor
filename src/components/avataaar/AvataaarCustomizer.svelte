<script lang="ts">
    import type { CategoryDict } from "src/scripts/types";
	import { accessoriesTypes } from "@scripts/avataaar/accessories";
	import { clothesTypes } from "@scripts/avataaar/clothes";
	import { hairColors, hatAndShirtColors, skinColors } from "@scripts/avataaar/colors";
	import { eyebrowTypes } from "@scripts/avataaar/eyebrows";
	import { eyeTypes } from "@scripts/avataaar/eyes";
	import { facialHairTypes } from "@scripts/avataaar/facial-hair";
	import { graphicShirtTypes } from "@scripts/avataaar/graphic-shirt";
	import { mouthTypes } from "@scripts/avataaar/mouth";
	import { topTypes } from "@scripts/avataaar/top";
    import Accordion from "@components/headless/Accordion.svelte";
    import AccordionItem from "@components/headless/AccordionItem.svelte";
    import CategoryOptions from "./CategoryOptions.svelte";
    import CategoryTitle from "./CategoryTitle.svelte";

    export let avatarProps;

	const categories: CategoryDict = {
		topType: {
			enabled: true,
			displayName: 'Top',
			options: topTypes,
		},
		hatColor: {
			enabled: false,
			displayName: 'Hat Color',
			options: hatAndShirtColors,
		},
		hairColor: {
			enabled: false,
			displayName: 'Hair Color',
			options: hairColors,
		},
		eyebrowType: {
			enabled: true,
			displayName: 'Eyebrows',
			options: eyebrowTypes,
		},
		accessoryType: {
			enabled: true,
			displayName: 'Eyewear',
			options: accessoriesTypes,
		},
		eyeType: {
			enabled: true,
			displayName: 'Eyes',
			options: eyeTypes,
		},
		mouthType: {
			enabled: true,
			displayName: 'Mouth',
			options: mouthTypes,
		},
		facialHairType: {
			enabled: true,
			displayName: 'Facial Hair',
			options: facialHairTypes,
		},
		facialHairColor: {
			enabled: false,
			displayName: 'Facial Hair Color',
			options: hairColors,
		},
		skinColor: {
			enabled: true,
			displayName: 'Skin',
			options: skinColors,
		},
		clotheType: {
			enabled: true,
			displayName: 'Apparel',
			options: clothesTypes,
		},
		graphicShirtType: {
			enabled: false,
			displayName: 'Shirt Graphic',
			options: graphicShirtTypes,
		},
		clotheColor: {
			enabled: true,
			displayName: 'Apparel Color',
			options: hatAndShirtColors,
		},
	};

	const hasHeadCover = (topType: string) => topType === 'Hat' || topType === 'Hijab' || topType === 'Turban' || topType === 'WinterHat1' || topType === 'WinterHat2' || topType === 'WinterHat3' || topType === 'WinterHat4';
	const hasNoHair = (topType: string) => topType === 'NoHair' || topType === 'Eyepatch' || topType === 'Hijab' || topType === 'LongHairFrida' || topType === 'LongHairShavedSides';

	$: if (hasHeadCover(avatarProps.topType) || hasNoHair(avatarProps.topType)) {
		categories.hairColor.enabled = false;
	} else if (typeof avatarProps.topType !== 'undefined') {
		categories.hairColor.enabled = true;
	}

	$: if (hasHeadCover(avatarProps.topType)) {
		categories.hatColor.enabled = true;
	} else if (typeof avatarProps.topType !== 'undefined') {
		categories.hatColor.enabled = false;
	}

	$: if (avatarProps.topType === 'Eyepatch') {
		categories.accessoryType.enabled = false;
	} else if (typeof avatarProps.topType !== 'undefined') {
		categories.accessoryType.enabled = true;
	};

	$: if (avatarProps.facialHairType === 'Blank' || avatarProps.topType === 'Hijab') {
		categories.facialHairColor.enabled = false;
	} else if (typeof avatarProps.facialHairType !== 'undefined') {
		categories.facialHairColor.enabled = true;
	};

	$: if (avatarProps.topType === 'Hijab') {
		categories.facialHairType.enabled = false;
	} else if (typeof avatarProps.topType !== 'undefined') {
		categories.facialHairType.enabled = true;
	};

	$: if (avatarProps.clotheType === 'BlazerShirt' || avatarProps.clotheType === 'BlazerSweater') {
		categories.clotheColor.enabled = false;
	} else if (typeof avatarProps.clotheType !== 'undefined') {
		categories.clotheColor.enabled = true;
	};

	$: if (avatarProps.accessoryType === 'Kurt') {
		categories.eyeType.enabled = false;
	} else if (typeof avatarProps.accessoryType !== 'undefined') {
		categories.eyeType.enabled = true;
	};

	$: if (avatarProps.clotheType === 'GraphicShirt') {
		categories.graphicShirtType.enabled = true;
	} else if (typeof avatarProps.clotheType !== 'undefined') {
		categories.graphicShirtType.enabled = false;
	}
</script>

<div class="h-full w-full scrollbar overflow-y-scroll">
    <Accordion expanded animation={{ toggle: { duration: 500 } }}>
        {#each Object.entries(categories) as [ categoryId, category ]}
            {#if category.enabled}
                <AccordionItem>
                    <div slot="title">
                        <CategoryTitle {category} />
                    </div>
                    <div slot="contents">
                        <CategoryOptions {categoryId} {category} bind:avatarProps={avatarProps} />
                    </div>
                </AccordionItem>
            {/if}
        {/each}
    </Accordion>
</div>

<style>
    .scrollbar {
        will-change: transform;
    }

	.scrollbar::-webkit-scrollbar {
		@apply w-2;
	}

	.scrollbar::-webkit-scrollbar-track {
		@apply bg-gray-800;
	}

	.scrollbar::-webkit-scrollbar-thumb {
		@apply bg-gray-600;
		@apply rounded-full;
	}
</style>
