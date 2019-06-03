// This export { } is to bypass error:
// "Augmentations for the global scope can only be directly nested in external modules or ambient module declarations"
export { };

declare global {
  // So we can access "window.APP_VERSION" without compile error
  interface Window {
    APP_VERSION: string;
  }

  // To be able access webpcak.DefinePlugin variables
  const APP_VERSION: string;
}
