import { useEffect, useState } from "react";

export default function useWindowDim() {
    const [windowDim, setWindowDim] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowDim({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDim;
}