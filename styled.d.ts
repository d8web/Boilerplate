import "styled-components";

// and extend it
declare module "styled-components" {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            primary: string;
            text: string;
        };
    }
}

import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    borderRadius: "5px",

    colors: {
        primary: "#fff",
        text: "#333"
    }
};

export default theme;