export const lockBody = () => (document.body.style.overflow = "hidden");

export const unlockBody = () => {
  document.body.style.overflow = "auto";
  document.body.style.overflowX = "hidden";
};
