import { AvailableColorIntensitiesTailwind, AvailableColorsTailwind } from "src/types";
import { CalculatorButtonTheme } from "./CalculatorButtonTheme.d";

export interface CalculatorTheme  {
    name: string,
    screenBgTailwindProperty: `bg-${AvailableColorsTailwind}-${AvailableColorIntensitiesTailwind}`,
    screenTextTailwindProperty: `text-${AvailableColorsTailwind}-${AvailableColorIntensitiesTailwind}`,
    primaryButtonTheme: CalculatorButtonTheme,
    secondaryButtonTheme: CalculatorButtonTheme,
    tertiaryButtonTheme: CalculatorButtonTheme,
    themeButtonBgTailwindProperty: `bg-${AvailableColorsTailwind}-${AvailableColorIntensitiesTailwind}`,
}

export const calculatorThemes: CalculatorTheme[] = [
    {
        name: 'Initial Theme',
        screenBgTailwindProperty: 'bg-stone-900',
        screenTextTailwindProperty: 'text-stone-50',
        primaryButtonTheme: CalculatorButtonTheme.Gray,
        secondaryButtonTheme: CalculatorButtonTheme.Light,
        tertiaryButtonTheme: CalculatorButtonTheme.Blue,
        themeButtonBgTailwindProperty: 'bg-stone-500',
    },
    {
        name: 'Red Theme',
        screenBgTailwindProperty: 'bg-red-900',
        screenTextTailwindProperty: 'text-stone-50',
        primaryButtonTheme: CalculatorButtonTheme.Red,
        secondaryButtonTheme: CalculatorButtonTheme.Light,
        tertiaryButtonTheme: CalculatorButtonTheme.DarkRed,
        themeButtonBgTailwindProperty: 'bg-red-600',
    },
    {
        name: 'Blue Theme',
        screenBgTailwindProperty: 'bg-blue-900',
        screenTextTailwindProperty: 'text-blue-100',
        primaryButtonTheme: CalculatorButtonTheme.Blue,
        secondaryButtonTheme: CalculatorButtonTheme.Yellow,
        tertiaryButtonTheme: CalculatorButtonTheme.Light,
        themeButtonBgTailwindProperty: 'bg-blue-600',
    },
    {
        name: 'Yellow Theme',
        screenBgTailwindProperty: 'bg-stone-900',
        screenTextTailwindProperty: 'text-stone-50',
        primaryButtonTheme: CalculatorButtonTheme.Gray,
        secondaryButtonTheme: CalculatorButtonTheme.Orange,
        tertiaryButtonTheme: CalculatorButtonTheme.Yellow,
        themeButtonBgTailwindProperty: 'bg-orange-500',
    },
    {
        name: 'Pink Theme',
        screenBgTailwindProperty: 'bg-stone-100',
        screenTextTailwindProperty: 'text-pink-600',
        primaryButtonTheme: CalculatorButtonTheme.Pink,
        secondaryButtonTheme: CalculatorButtonTheme.Rose,
        tertiaryButtonTheme: CalculatorButtonTheme.DarkRose,
        themeButtonBgTailwindProperty: 'bg-pink-600',
    },
];