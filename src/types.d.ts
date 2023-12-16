import Decimal from "decimal.js";

export interface LinkData {
    title: string,
    value: string,
}

export interface DevTechnology {
    name: string,
    description?: string,
    logo?: string,
    officialSite?: string,
}

export interface Operation {
    symbol: string,
    name: string,
    perform: (a: number, b: number) => number,
};

type ColStartTailwindProperty = `col-start-${number}`;
type ColEndTailwindProperty = `col-end-${number}`;

enum AvailableColorsTailwind {
    Slate = 'slate',
    Gray = 'gray',
    Zinc = 'zinc',
    Neutral = 'neutral',
    Stone = 'stone',
    Red = 'red',
    Orange = 'orange',
    Amber = 'amber',
    Yellow = 'yellow',
    Lime = 'lime',
    Green = 'green',
    Emerald = 'emerald',
    Teal = 'teal',
    Cyan = 'cyan',
    Sky = 'sky',
    Blue = 'blue',
    Indigo = 'indigo',
    Violet = 'violet',
    Purple = 'purple',
    Fuchsia = 'fuchsia',
    Pink = 'pink',
    Rose = 'rose',
}

type AvailableColorIntensitiesTailwind = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;