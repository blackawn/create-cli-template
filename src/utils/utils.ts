export declare interface Utils {
    isString: (str: any) => str is string | String
    isNumber: (num: any) => num is number | Number,
    isBoolean: (boolean: any) => boolean is boolean | Boolean,
    extractNumbersFromString: (string: string) => Array<number>,
    isArray: (array: any) => array is any[] | Array<any>,
    isObject: (object: any) => object is object,
    isElement: (element: any) => element is Element | HTMLDocument,
    isEmptyValue: (value: any) => boolean,
    generateRandomInt: (min: number, max: number) => number;
}

const utils: Utils = {
  // is type
  isString(str: any): str is string | String {
    return (typeof str === 'string' || str instanceof String) &&
            Object.prototype.toString.call(str) === '[object String]';
  },
  isNumber(num: any): num is number | Number {
    return (typeof num === 'number' || num instanceof Number) && !Number.isNaN(Number(num));
  },
  isBoolean(boolean: any): boolean is boolean | Boolean {
    return typeof boolean === 'boolean' || boolean instanceof Boolean;
  },
  isArray(array: any): array is any[] | Array<any> {
    return Array.isArray(array) || array instanceof Array;
  },
  isObject(object: any): object is object {
    return object !== null && typeof object === 'object' && !Array.isArray(object) && !(object instanceof Array);
  },
  isElement(element: any): element is Element | HTMLDocument {
    return (
      typeof HTMLElement === 'object' ? element instanceof HTMLElement : // DOM2
        element &&
                typeof element === 'object' && true && element.nodeType === 1 &&
                typeof element.nodeName === 'string'
    );
  },
  isEmptyValue(value: any): boolean {
    if (Array.isArray(value)) {
      return value.length === 0;
    }
    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }
    if (typeof value === 'string') {
      return value.trim() === '';
    }
    return false;
  },
  // extract
  extractNumbersFromString(string: string): Array<number> {
    const regex = /\d+\.?\d*/g;
    const matches = string.matchAll(regex);
    const numbers = [];

    for (const match of matches) {
      numbers.push(+match[0]);
    }
    return numbers;
  },
  // random
  generateRandomInt(min: number, max: number): number {
    min = Math.abs(Math.ceil(min));
    max = Math.abs(Math.floor(max));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

export default utils;
