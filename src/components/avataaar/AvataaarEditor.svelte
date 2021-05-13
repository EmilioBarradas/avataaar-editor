<script lang="ts">
    import AvataaarCustomizer from "./AvataaarCustomizer.svelte";
    import AvataaarEditorTitle from "./AvataaarEditorTitle.svelte";
    import AvataaarViewer from "./AvataaarViewer.svelte";

	let avatarProps = {
		topType: undefined,
		accessoryType: undefined,
		facialHairType: undefined,
		clotheType: undefined,
		eyeType: undefined,
		eyebrowType: undefined,
		mouthType: undefined,
		backgroundColor: undefined,
		skinColor: undefined,
		clotheColor: undefined,
		graphicShirtType: undefined,
		hatColor: undefined,
		hairColor: undefined,
		facialHairColor: undefined,
	};
</script>

<div class="h-2/3 w-7/12 bg-gray-900 rounded-t-xl rounded-bl-xl flex flex-col overflow-hidden">
    <AvataaarEditorTitle />
    <div class="h-full flex overflow-hidden">
        <AvataaarViewer {avatarProps} />
        <AvataaarCustomizer bind:avatarProps={avatarProps} />
    </div>
</div>
