import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "react-bootstrap";

type CollapsableCardProps = {
    title: string,
    icon: React.ReactNode,
    children: React.ReactNode,
    defaultOpen?: boolean
}

export default function CollapsableCard({ title, icon, children, defaultOpen = true }: CollapsableCardProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return <Card className="dark-card">
        <Card.Header
            className="card-header"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="d-flex align-items-center gap-3">
                <span className="bright-blue">{icon}</span>
                <h5 className="m-0 fw-bold text-uppercase even-spacing">{title}</h5>
            </div>
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </Card.Header>
        <AnimatePresence>
            {isOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Card.Body>
                {children}
                </Card.Body>
            </motion.div>
            )}
        </AnimatePresence>
    </Card>
};