import { invertColors } from "./invert-colors";
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
        inversionLevel: number
    }
) => {
    const currentColorScheme = getColorScheme();

    if (!currentColorScheme) {
        return;
    }

    invertColors({
        inversionLevel: currentColorScheme === settings.defaultColorScheme ? 0 : 100
    });
}

export const watchForSchemeChange = (
    settings: {
        defaultColorScheme: ColorScheme,
        inversionLevel: number
    }
) => {
    const query = getDarkColorSchemeQuery();

    if (query) {
        query.addEventListener(
            "change",
            () => {
                invertColorsIfNeeded({
                    defaultColorScheme: settings.defaultColorScheme,
                    inversionLevel: settings.inversionLevel
                });
            }
        );
    }
}