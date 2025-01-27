import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard } from '@/components/CreditCard';
import { CardForm } from '@/components/CardForm';
import { CardResult } from '@/components/CardResult';
import { toast } from '@/components/ui/use-toast';
import { generateCard } from '@/lib/cardGenerator';

export type CardDetails = {
  number: string;
  expiry: string;
  cvv: string;
  brand: string;
  country: string;
};

const Index = () => {
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async (formData: {
    brand: string;
    country: string;
    format: string;
  }) => {
    setIsGenerating(true);
    try {
      const details = generateCard(formData.brand);
      setCardDetails({
        ...details,
        brand: formData.brand,
        country: formData.country,
      });
      toast({
        title: "Card Generated Successfully",
        description: "Your new card details are ready.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate card details.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 px-4 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container max-w-4xl mx-auto space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Credit Card Generator
          </h1>
          <p className="text-muted-foreground">
            Generate secure test credit card numbers instantly
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <CreditCard details={cardDetails} isGenerating={isGenerating} />
            <CardForm onSubmit={handleGenerate} isGenerating={isGenerating} />
          </div>
          
          <div className="space-y-6">
            {cardDetails && (
              <CardResult details={cardDetails} />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;