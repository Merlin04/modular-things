import type { Theme } from "theme-ui";
import { Atkinson_Hyperlegible, JetBrains_Mono } from "@next/font/google";

const atk = Atkinson_Hyperlegible({ subsets: ["latin"], weight: ["400", "700"] });
const jbMono = JetBrains_Mono({ subsets: ["latin"] });

export const theme: Theme = {
    fonts: {
        body: `${atk.style.fontFamily}, system-ui, sans-serif`,
        heading: `${atk.style.fontFamily}, system-ui, sans-serif`,
        monospace: `${jbMono.style.fontFamily}, Menlo, monospace`
    },
    fontSizes: [16, 18, 20, 24, 32, 48, 64, 96],
    colors: {
        text: "#000",
        background: "#fff",
        primary: "#33e",
        muted: "#e5e5e5",
    },
    styles: {
        root: {
            fontFamily: "body",
            lineHeight: "body",
            fontWeight: "body",
            backgroundColor: "background",
            color: "text",
            "& body": {
                minHeight: "100vh",
            },
            "& *": {
                fontFamily: "inherit"
            }
        }
    },
    buttons: {
        primary: {
            transition: "all 0.1s ease-in-out",
        },
        icon: {
            bg: "muted",
            p: "0.25rem",
            transition: "all 0.1s ease-in-out",
            "&:hover": {
                filter: "brightness(0.9)"
            }
        }
    }
};
