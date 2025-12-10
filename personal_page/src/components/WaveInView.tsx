import type React from "react"
import { motion } from "framer-motion";

type props = {
    children: React.ReactNode
}
export default function WaveInView({children}: props) {
    return <motion.div
        initial={{ opacity: 0, y: 20, scale: 1 }} 
        whileInView={{ 
            opacity: 1, 
            y: 0,
            scale: [1, 1.2, 1], 
            rotate: [0, -10, 10, -5, 5, 0] 
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
    >
        {children}
    </motion.div>
}