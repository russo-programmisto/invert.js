import { invertColor } from "./invert-colors";
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

export const getColorScheme = () => {
    const query = getDarkColorSchemeQuery();

    if (query) {
        return query.matches ? ColorScheme.dark : ColorScheme.light;
    } else {
        return undefined;
    }
}

export const invertColorIfNeeded = (
    settings: {
        defaultColorScheme: ColorScheme
    }
) => {
    const currentColorScheme = getColorScheme();

    if (!currentColorScheme) {
        return;
    }

    invertColor({
        inversionPercentage: currentColorScheme === settings.defaultColorScheme ? 0 : 100
    });
}

export const invertColorIfNeededAndWatchForSchemeChange = (
    settings: {
        defaultColorScheme: ColorScheme,
        watchForSchemeChange?: boolean
    }
) => {
    invertColorIfNeeded({
        defaultColorScheme: settings.defaultColorScheme
    });

    if (settings.watchForSchemeChange) {
        const query = getDarkColorSchemeQuery();

        if (query) {
            query.addEventListener(
                "change",
                (event) => {
                    invertColorIfNeeded({
                        defaultColorScheme: settings.defaultColorScheme
                    });
                }
            );
        }
    }
}