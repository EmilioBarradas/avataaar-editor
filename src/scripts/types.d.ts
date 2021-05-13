export interface AccordionContext {
    type: 'normal' | 'expanded',
    items: any[],
    currentExpanded: Writable<any>,
    registerItem: (item: any) => void,
    toggleExpansion: (item: any) => void,
    animation?: {
        toggle?: {
            duration?: number,
        },
    },
}

export type TypeDict = { [typeId: string]: string };
export interface CategoryInfo {
    displayName: string,
    enabled: boolean,
    options: TypeDict,
}
export type CategoryDict = { [categoryId: string]: CategoryInfo };

export const categories = ['topType', 'accessoryType', 'facialHairType', 'clotheType', 'eyeType', 'eyebrowType', 'mouthType', 'backgroundColor', 'skinColor', 'clotheColor', 'graphicShirtType', 'hatColor', 'hairColor', 'facialHairColor'] as const;
export type Category = typeof categories[number];
