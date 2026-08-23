import { motion } from 'framer-motion';

export function SoundwaveVisualizer({ color = 'bg-[#1DB954]' }: { color?: string }) {
  return (
    <div className="inline-flex items-end gap-0.5 h-4 px-1">
      <motion.span
        animate={{ height: ['40%', '100%', '30%', '80%', '40%'] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
        className={`w-1 rounded-full ${color}`}
      />
      <motion.span
        animate={{ height: ['80%', '30%', '100%', '40%', '80%'] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
        className={`w-1 rounded-full ${color}`}
      />
      <motion.span
        animate={{ height: ['30%', '90%', '40%', '100%', '30%'] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className={`w-1 rounded-full ${color}`}
      />
      <motion.span
        animate={{ height: ['90%', '40%', '80%', '20%', '90%'] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        className={`w-1 rounded-full ${color}`}
      />
    </div>
  );
}
