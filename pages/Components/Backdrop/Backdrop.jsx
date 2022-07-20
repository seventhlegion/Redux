import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <>
      <motion.div
        className="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
      <style jsx>
        {`
          .backdrop {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: #000000e1;
          }
        `}
      </style>
    </>
  );
};

export default Backdrop;
