"use client";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ onClose, children }) {
  const [mounted, setMounted] = useState(false);

  // ESC ile kapatma
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    setMounted(true);

    // Body scroll kilidi
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      setMounted(false);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white rounded-md sm:rounded-lg mx-4 p-2 sm:p-4 md:p-6 w-full sm:w-[90vw] md:w-[70vw] lg:w-[55vw] xl:w-[45vw] max-h-[90vh] overflow-y-auto relative flex flex-col shadow-2xl"
        >
          {/* Kapatma Butonu */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-3xl"
            onClick={onClose}
            aria-label="Kapat"
          >
            &times;
          </button>

          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
