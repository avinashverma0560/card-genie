import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import type { CardDetails } from '@/pages/Index';
import { toast } from '@/components/ui/use-toast';

interface CardResultProps {
  details: CardDetails;
}

export const CardResult: React.FC<CardResultProps> = ({ details }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Card details have been copied to your clipboard.",
    });
  };

  const formattedDetails = JSON.stringify(details, null, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-xl p-6 space-y-4"
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Generated Card Details</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => copyToClipboard(formattedDetails)}
          className="hover-lift"
        >
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      <pre className="bg-secondary/50 rounded-lg p-4 overflow-x-auto text-sm">
        {formattedDetails}
      </pre>
    </motion.div>
  );
};