import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        background: string;
        primary: string;
        secondary: string;
        success: string;
        error: string;
        errorLight: string;
        warning: string;
        title: string;
        subtitle: string;
        border: string;
        black: string;
        white: string;
        placeholder: string;
    }
}