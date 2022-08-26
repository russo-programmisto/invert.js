import { invertColors, InvertCSSBuilderMethod } from "./invert-colors";
import { ColorScheme } from "./color-scheme";

export const getDarkColorSchemeQuery = () => {
    if (typeof window["matchMedia"] === "function") {
        return window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
    } else {
        return undefined;
    }
}

export const getColorScheme = (): ColorScheme | undefined => {
    const query = getDarkColorSchemeQuery();

    if (query) {
        return query.matches ? "dark" : "light";
    } else {
        return undefined;
    }
}

export const invertColorsIfNeeded = (
    settings: {
        defaultColorScheme: ColorScheme,
        inversionLevel: number,
        customizeCSS?: InvertCSSBuilderMethod
    }
) => {
    const currentColorScheme = getColorScheme();

    if (!currentColorScheme) {
        return;
    }

    invertColors({
        inversionLevel: currentColorScheme === settings.defaultColorScheme ? 0 : settings.inversionLevel,
        customizeCSS: settings.customizeCSS
    });
}

export const watchForSchemeChange = (
    settings: {
        defaultColorScheme: ColorScheme,
        inversionLevel: number,
        customizeCSS?: InvertCSSBuilderMethod
    }
) => {
    const query = getDarkColorSchemeQuery();

    if (query) {
        query.addEventListener(
            "change",
            () => {
                invertColorsIfNeeded({
                    defaultColorScheme: settings.defaultColorScheme,
                    inversionLevel: settings.inversionLevel,
                    customizeCSS: settings.customizeCSS
                });
            }
        );
    }
}