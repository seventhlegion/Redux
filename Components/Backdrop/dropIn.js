export const dropIn = {
  hidden: {
    x: "100vh",
  },
  visible: {
    x: "0",
    transition: {
      duration: 0.01,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
  },
};
