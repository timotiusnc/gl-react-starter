// Need to be separated from global.d.ts because global.d.ts has "export {}"
// which will ignore other declaration outside "declare global".

declare module "*.jpg";
declare module "*.png";
