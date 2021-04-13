class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Ortega Bermúdez Guillermo.`;
    
  }
}
customElements.define(
  "mi-footer", MiFooter);