import { ColorScheme } from "./color-scheme";
import { getColorScheme, invertColorsIfNeeded, watchForSchemeChange } from "./engine";
import { InvertCSSBuilderMethod } from "./invert-colors";

const invert = (
    settings: {
        defaultColorScheme: ColorScheme,
        inversionLevel?: number,
        watchForSchemeChange?: boolean,
        customizeCSS?: InvertCSSBuilderMethod
    }
) => {
    const inversionLevel = settings.inversionLevel ?? 100;
    invertColorsIfNeeded({
        defaultColorScheme: settings.defaultColorScheme,
        inversionLevel,
        customizeCSS: settings.customizeCSS
    });
    watchForSchemeChange({
        defaultColorScheme: settings.defaultColorScheme,
        inversionLevel,
        customizeCSS: settings.customizeCSS
    });
}

export {
    getColorScheme,
    invert
}