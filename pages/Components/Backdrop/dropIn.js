export const dropIn = {
  hidden: {
    x: "100vh",
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
  exit: {
    x: "-100vh",
    opacity: 0,
  },
};
