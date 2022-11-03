import { r as registerInstance, h } from './index-69abe4cb.js';

const code = `
import foo from 'foo';

foo();
`;
const CodeExample = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("kompendium-code", { language: "ts" }, code);
  }
};

export { CodeExample as kompendium_example_code };