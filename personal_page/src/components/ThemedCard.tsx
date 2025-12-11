import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { cardThemes } from "../App";
import { MotionCard } from "../lib/Motion";

type props = {
    children: React.ReactNode,
    style?: React.CSSProperties
}
export default function ThemedCard({children, style={}}: props) {
    const theme = useContext(ThemeContext)[0];
    const cardTheme = theme==='dark'? cardThemes.dark : cardThemes.light;

    return <MotionCard
        style={{...style, borderLeftWidth: '4px', borderLeftStyle: 'solid'}}
        initial={cardTheme}
        animate={cardTheme}
        transition={{ duration: 0.5, ease: "easeInOut" }}
    >
        {children}
    </MotionCard>
}