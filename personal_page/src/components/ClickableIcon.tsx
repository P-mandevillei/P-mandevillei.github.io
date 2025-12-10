import { motion } from 'framer-motion';
import type React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type props = {
    href: string,
    children: React.ReactNode,
    desc?: string
}
export default function ClickableIcon({
    href, children, desc
}: props) {
    return <motion.span
        whileHover = {{ scale: 1.2 }}
        transition = {{ type: 'spring', stiffness: 400, damping: 10 }}
        className='selectable'
    >
        {desc? 
            <OverlayTrigger placement='top' overlay={<Tooltip>{desc}</Tooltip>} >
                <a href={href} target="_blank">
                    {children}
                </a>
            </OverlayTrigger>
            :
            <a href={href}>
                {children}
            </a>
        }
        
    </motion.span>
}