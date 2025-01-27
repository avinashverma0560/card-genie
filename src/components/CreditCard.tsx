import React from 'react';
import { motion } from 'framer-motion';
import type { CardDetails } from '@/pages/Index';
import { cn } from '@/lib/utils';

interface CreditCardProps {
  details: CardDetails | null;
  isGenerating: boolean;
}

export const CreditCard: React.FC<CreditCardProps> = ({
  details,
  isGenerating,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "glass-card relative h-56 w-full rounded-xl p-6 text-foreground",
        "transform transition-all duration-300",
        isGenerating && "animate-card-rotate"
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#9b87f5]/40 to-[#7E69AB]/10" />
      
      {/* Card content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Credit Card
            </p>
            <p className="font-medium">
              {details?.brand || 'Card Brand'}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9b87f5]/20 to-[#7E69AB]/10 flex items-center justify-center">
            <span className="text-xl">💳</span>
          </div>
        </div>

        {/* Card details */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Card Number
            </p>
            <p className="font-mono text-xl tracking-wider">
              {details?.number || '•••• •••• •••• ••••'}
            </p>
          </div>

          <div className="flex justify-between">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Expiry
              </p>
              <p className="font-mono">
                {details?.expiry || 'MM/YY'}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                CVV
              </p>
              <p className="font-mono">
                {details?.cvv || '•••'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};