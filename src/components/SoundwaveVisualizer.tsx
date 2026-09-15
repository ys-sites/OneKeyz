import { motion } from 'framer-motion';

export function SoundwaveVisualizer({ color = 'bg-[#1DB954]' }: { color?: string }) {
  return (
    <div className="inline-flex items-end gap-0.5 h-4 px-1 select-none">
      <motion.span
        animate={{ scaleY: [0.35, 1, 0.25, 0.85, 0.35] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        className={`w-1 h-full origin-bottom rounded-full ${color} transform-gpu`}
      />
      <motion.span
        animate={{ scaleY: [0.75, 0.3, 1, 0.45, 0.75] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        className={`w-1 h-full origin-bottom rounded-full ${color} transform-gpu`}
      />
      <motion.span
        animate={{ scaleY: [0.3, 0.9, 0.4, 1, 0.3] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className={`w-1 h-full origin-bottom rounded-full ${color} transform-gpu`}
      />
      <motion.span
        animate={{ scaleY: [0.9, 0.4, 0.8, 0.25, 0.9] }}
        transition={{ duration: 0.65, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        className={`w-1 h-full origin-bottom rounded-full ${color} transform-gpu`}
      />
    </div>
  );
}
