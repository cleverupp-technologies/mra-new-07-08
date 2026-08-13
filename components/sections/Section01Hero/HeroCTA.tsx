"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { scrollToConsultation } from "@/lib/consultation-scroll";

export default function HeroCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <Button
        variant="primary"
        showArrow
        className="w-full sm:w-auto"
        onClick={scrollToConsultation}
      >
        Discuss With Us
      </Button>
    </motion.div>
  );
}
