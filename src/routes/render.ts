import Avataaar from "@components/avataaar/Avataaar.svelte";

const categories = ['topType', 'accessoryType', 'facialHairType', 'clotheType', 'eyeType', 'eyebrowType', 'mouthType', 'backgroundColor', 'skinColor', 'clotheColor', 'graphicShirtType', 'hatColor', 'hairColor', 'facialHairColor'] as const;

export async function get({ query }: { query: URLSearchParams }) {
    const validProps = {};

    for (const [ key, value ] of query) {
        if (!categories.includes(key)) continue;
        validProps[key] = value;
    }

    const { html } = Avataaar.render(validProps);

    return {
        status: 200,
        headers: {
            'content-type': 'image/svg+xml',
            'cache-control': 'public, max-age=604800, immutable',
        },
        body: html,
    };
};
