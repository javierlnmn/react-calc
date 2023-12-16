import { AvailableColorIntensitiesTailwind, AvailableColorsTailwind } from "src/types";
import { CalculatorButtonTheme } from "./CalculatorButtonTheme";

export interface CalculatorTheme  {
    name: string,
    screenBgTailwindProperty: `bg-${AvailableColorsTailwind}-${AvailableColorIntensitiesTailwind}`,
    screenTextTailwindProperty: `text-${AvailableColorsTailwind}-${AvailableColorIntensitiesTailwind}`,
    primaryButtonTheme: CalculatorButtonTheme,
    secondaryButtonTheme: CalculatorButtonTheme,
    tertiaryButtonTheme: CalculatorButtonTheme,
    themeButtonBgTailwindProperty: `bg-${AvailableColorsTailwind}-${AvailableColorIntensitiesTailwind}`,
}