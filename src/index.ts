import { ColorScheme } from "./color-scheme";
import { getColorScheme } from "./engine";
import { invertColorIfNeededAndWatchForSchemeChange } from "./engine";

const invert = invertColorIfNeededAndWatchForSchemeChange;

export {
    ColorScheme,
    getColorScheme,
    invert
}