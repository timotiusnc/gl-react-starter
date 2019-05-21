export { };

// So we can access "window.APP_VERSION" without compile error
declare global {
  interface Window {
    APP_VERSION: string;
  }
}
