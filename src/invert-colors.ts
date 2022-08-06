const getCSS = (
    settings: {
        invertionPercentage: number
    }
) => {
    return `
        html {
            -webkit-filter: invert(${settings.invertionPercentage}%);
            -moz-filter: invert(${settings.invertionPercentage}%);
            -o-filter: invert(${settings.invertionPercentage}%);
            -ms-filter: invert(${settings.invertionPercentage}%);
        }
    `;
}

export const invertColor = (
    settings: {
        inversionPercentage: number
    }
) => {
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(
        document.createTextNode(
            getCSS({
                invertionPercentage: settings.inversionPercentage
            })
        )
    );

    const head = document.getElementsByTagName("head")[0];

    if (head) {
        head.appendChild(
            style
        );
    }
}