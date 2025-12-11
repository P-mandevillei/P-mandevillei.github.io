import { motion } from 'framer-motion';
import type React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

type props = {
    href?: string,
    children: React.ReactNode,
    desc?: string,
    placement?: 'top' | 'right' | 'bottom' | 'left'
}
export default function ClickableIcon({
    href='', children, desc, placement='top'
}: props) {
    if (href) {
        return <motion.span
            whileHover = {{ scale: 1.2 }}
            transition = {{ type: 'spring', stiffness: 400, damping: 10 }}
            className='selectable'
        >
            {desc? 
                <OverlayTrigger placement={placement} overlay={<Tooltip>{desc}</Tooltip>} >
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
    } else {
        return <motion.span
            whileHover = {{ scale: 1.2 }}
            transition = {{ type: 'spring', stiffness: 400, damping: 10 }}
            className='selectable'
        >
            {desc? 
                <OverlayTrigger placement={placement} overlay={<Tooltip>{desc}</Tooltip>} >
                    <div>{children}</div>
                </OverlayTrigger>
                :
                children
            }
            
        </motion.span>
    }
    
}