// Every custom element needs to extend HTMLElement
class InfoToggle extends HTMLElement {
  constructor(){ // called when element is created, use this function for basic initializatoins
    super();
    this._isVisible = false;
    this.attachShadow({mode: "open" });
    const template = document.querySelector("#toggle-template");
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._toggleButton = this.shadowRoot.querySelector(".toggleButton");
    this._infoBox = this.shadowRoot.querySelector("#info-box");
    this._toggleButton.addEventListener("click", this._toggleInfoBox.bind(this));
  }

  _toggleInfoBox(){
    this._isVisible = !this._isVisible;
    this._infoBox.style.display = this._isVisible ? "block" : "none";
    this._toggleButton.textContent = this._isVisible ? "Hide" : "Show";
  }


}


customElements.define("basic-toggle", InfoToggle);
