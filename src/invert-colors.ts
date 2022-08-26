export type InvertCSSBuilderMethod = (
    settings: {
        invertionLevel: number
    }
) => string

const getCSS: InvertCSSBuilderMethod = (
    settings: {
        invertionLevel: number
    }
) => {
    return `
        html {
            -webkit-filter: invert(${settings.invertionLevel}%);
            -moz-filter: invert(${settings.invertionLevel}%);
            -o-filter: invert(${settings.invertionLevel}%);
            -ms-filter: invert(${settings.invertionLevel}%);
        }
    `;
}

export const invertColors = (
    settings: {
        inversionLevel: number,
        customizeCSS?: InvertCSSBuilderMethod
    }
) => {
    const css =(settings.customizeCSS ?? getCSS)({
        invertionLevel: settings.inversionLevel
    });
    
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(
        document.createTextNode(
            css
        )
    );

    const head = document.getElementsByTagName("head")[0];

    if (head) {
        head.appendChild(
            style
        );
    }
}