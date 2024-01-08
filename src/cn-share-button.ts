import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example of SVG Icons wrapped in a LitElement.
 *
 * @param {string} src the path to the SVG file
 * @param {string} label an optional label for the button. In case the
 * label is givem, the icon will be hidden and the label will be shown instead.
 */
@customElement('cn-share-button')
export class CnShareButton extends LitElement {
  @property({ type: String, reflect: true })
  src = ''

  @property({ type: String, reflect: true })
  label = ''

  @property({ type: String, reflect: true })
  ariaLabel = ''

  private defaultIcon = html`<svg 
  version="1.1"
  xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 128 128"
  style="enable-background:new 0 0 128 128;"
  xml:space="preserve">
  <style type="text/css">
  .st0{opacity:0.3;enable-background:new;}
  </style>
  <g fill="currentColor">
    <circle class="st0" cx="102.6" cy="19.3" r="6.4"/>
    <circle class="st0" cx="25.4" cy="64.3" r="6.4"/>
    <circle class="st0" cx="102.6" cy="109.4" r="6.4"/>
    <path d="M102.6,90.5c-4.9,0-9.3,1.9-12.6,4.9L44.1,68.8c0.3-1.5,0.6-3,0.6-4.5s-0.3-3-0.6-4.5l45.3-26.4c3.5,3.2,8,5.2,13.1,5.2
	  c10.7,0,19.3-8.6,19.3-19.3S113.2,0,102.6,0S83.3,8.6,83.3,19.3c0,1.5,0.3,3,0.6,4.5L38.6,50.2c-3.5-3.2-8-5.2-13.1-5.2
      C14.8,45,6.2,53.6,6.2,64.3s8.6,19.3,19.3,19.3c5.1,0,9.6-2,13.1-5.2l45.8,26.7c-0.3,1.3-0.5,2.8-0.5,4.2
      c0,10.3,8.4,18.8,18.8,18.8s18.8-8.4,18.8-18.8S112.9,90.5,102.6,90.5 M102.6,12.9c3.5,0,6.4,2.9,6.4,6.4s-2.9,6.4-6.4,6.4
      s-6.4-2.9-6.4-6.4S99,12.9,102.6,12.9 M25.4,70.7c-3.5,0-6.4-2.9-6.4-6.4c0-3.5,2.9-6.4,6.4-6.4s6.4,2.9,6.4,6.4
      C31.9,67.8,29,70.7,25.4,70.7 M102.6,115.8c-3.5,0-6.4-2.9-6.4-6.4c0-3.5,2.9-6.4,6.4-6.4s6.4,2.9,6.4,6.4
      C109,112.9,106.1,115.8,102.6,115.8"/>
  </g>
  </svg>`

  private handleClicked() {
    console.log('share button clicked')
    navigator.share({
      title: document.title,
      url: window.location.href,
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    //this.addEventListener('click', this.handleClicked)
  }

  render() {
    const icon = this.src
      ? html`<img src="${this.src}" alt="${this.ariaLabel}" />`
      : html`${this.defaultIcon}`

    return this.label
      ? html`<button @click=${this.handleClicked}>${this.label}</button>`
      : icon
  }

  static styles = css`
    :host {
      display: inline-block;
      width: 1em;
      height: 1em;
    }
    :host svg,
    :host img {
      width: 100%;
      height: 100%;
    }
    :host img {
      object-fit: contain;
    }`
}

declare global {
  interface HTMLElementTagNameMap {
    'cn-share-button': CnShareButton
  }
}
