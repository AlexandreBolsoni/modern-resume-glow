
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.fade-in-animation');

  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const element = revealElements[i];
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animated');
      } else {
        element.classList.remove('animated');
      }
    }
  };

  // Run once on load
  revealOnScroll();

  // Add event listener
  window.addEventListener('scroll', revealOnScroll);
};
