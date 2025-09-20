import { motion, AnimatePresence } from "framer-motion";

const ProductModal = ({ isOpen, onClose, title, onSubmit, children }) => (
  <motion.div
    className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition ${
      isOpen ? "visible opacity-100" : "invisible opacity-0"
    }`}
    initial={false} // <- IMPORTANT: don’t animate on first mount
    animate={{ opacity: isOpen ? 1 : 0 }}
    transition={{ duration: 0.25 }}
  >
    <div
      className="absolute inset-0 bg-black bg-opacity-50"
      onClick={onClose}
    />
    <motion.div
      className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative z-10"
      initial={{ scale: 0.95 }}
      animate={{ scale: isOpen ? 1 : 0.95 }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <form onSubmit={onSubmit} className="p-6">
        {children}
      </form>
    </motion.div>
  </motion.div>
);



export default ProductModal;
