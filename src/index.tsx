import {multiply} from './utils/utils'

const asu = (x: number): undefined | {a: number} => {
  return x > 0 ? {a: x} : undefined;
};

console.log('hellow')
console.log('asu')
console.log(multiply(1,2))

const retval = asu(0)
console.log(retval!.a)
