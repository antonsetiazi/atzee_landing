// src/core/engine/animationEngine.tsx

import { motion } from "framer-motion";

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
};

export function Reveal({ children, delay = 0 }: RevealProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.6,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}
