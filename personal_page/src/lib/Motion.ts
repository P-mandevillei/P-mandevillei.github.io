import { motion } from 'framer-motion';
import { Card, type CardProps } from 'react-bootstrap';
export const MotionCard = motion.create(Card as React.FC<CardProps>);