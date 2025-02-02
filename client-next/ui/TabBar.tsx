// simple tabbar (with themeui) that can be horizontal or vertical

import { Button, ThemeUIStyleObject } from "theme-ui";

export default function TabBar(props: {
    direction?: "horizontal" | "vertical",
    tabs: React.ReactNode[],
    selected: number | null,
    onSelect?: (index: number | null) => void,
    className?: string,
}) {
    const { direction = "horizontal", tabs, selected, onSelect, className } = props;
    return (
        <div sx={{
            display: "flex",
            alignItems: "center",
            [direction === "horizontal" ? "pt" : "pl"]: "0.25rem",
            [direction === "horizontal" ? "pl" : "pt"]: "0.5rem",
            [direction === "horizontal" ? "borderBottom" : "borderRight"]: "1px solid black",
            // firefox bug workaround
            writingMode: direction === "horizontal" ? "horizontal-tb" : "vertical-rl",
        }} className={className}>
            {tabs.map((tab, index) => (
                <Button
                    key={index}
                    onClick={() => onSelect?.(selected === index ? null : index)}
                    sx={{
                        transform: direction === "horizontal" ? "none" : "rotate(180deg)",
                        color: "inherit",
                        "&:hover": {
                            bg: "rgba(0, 0, 0, 0.2)"
                        },
                        "&:not(:first-of-type)": {
                            [direction === "horizontal" ? "ml" : "mt"]: "-1px"
                        },        
                        bg: index === selected ? "rgba(0, 0, 0, 0.1)" : "transparent",
                        border: "1px solid black",
                        [direction === "horizontal" ? "borderBottom" : "borderLeft"]: "none",
                        [direction === "horizontal" ? "borderBottomLeftRadius" : "borderTopLeftRadius"]: 0,
                        [direction === "horizontal" ? "borderBottomRightRadius" : "borderBottomLeftRadius"]: 0,

                        // firefox bug workaround
                        writingMode: direction === "horizontal" ? "horizontal-tb" : "vertical-rl",
                        ...(direction === "vertical" && {
                            py: "1rem",
                            px: "0.5rem"
                        })
                    }}
                ><span sx={{
                    writingMode: direction === "horizontal" ? "horizontal-tb" : "vertical-rl",
                    textOrientation: "mixed",
                    display: "flex",
                    alignItems: "center",
                }}>{tab}</span></Button>
            ))}
        </div>
    )
}