export const registerElement = (tagName: string, elementClass: CustomElementConstructor) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, elementClass);
  }
};
