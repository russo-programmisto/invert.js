import { ColorScheme } from "./color-scheme";
import { getColorScheme, invertColorsIfNeeded, watchForSchemeChange } from "./engine";

const invert = (
    settings: {
        defaultColorScheme: ColorScheme,
        inversionLevel?: number,
        watchForSchemeChange?: boolean
    }
) => {
    const inversionLevel = settings.inversionLevel ?? 100;
    invertColorsIfNeeded({
        defaultColorScheme: settings.defaultColorScheme,
        inversionLevel
    });
    watchForSchemeChange({
        defaultColorScheme: settings.defaultColorScheme,
        inversionLevel
    });
}

export {
    getColorScheme,
    invert
}