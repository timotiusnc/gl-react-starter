// This export { } is to bypass error:
// "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations"
export { };

// So we can access "window.APP_VERSION" without compile error
declare global {
  interface Window {
    APP_VERSION: string;
  }
}
