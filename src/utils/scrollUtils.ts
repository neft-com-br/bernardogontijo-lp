export const scrollToTop = () => {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  
  // Força o scroll para o topo da página e do documento
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Garante que o body e o html também estejam no topo
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
