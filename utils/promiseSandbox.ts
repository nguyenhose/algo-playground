// eslint-disable-next-line
export async function runCodeSanbox(code: string): Promise<Function> {
  return new Promise((resolve, reject) => {
    try {
      const AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
      const fn = new AsyncFunction(`
        "use strict"
        ${code}
        `);
        fn().then(resolve).catch(reject);
    } catch (error) {
      reject(error);
    }
  })
}