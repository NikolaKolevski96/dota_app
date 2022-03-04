import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import  './components/dota-header'
import  './views/match'
import '@polymer/iron-pages/iron-pages.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {

    }
  `

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  page = 0

  render() {
    return html`
      <dota-header
        @changed-view = ${this.changeView}
      ></dota-header>

      <iron-pages selected=${this.page}>
      <div><match-view ></match-view></div>
      <div>Page 1</div>
      <div>Page 2</div>
      <div>Page 3</div>
    </iron-pages>
    `
  }


  changeView(e:CustomEvent): void {
    console.log(">>>>>>>>>>>>", e.detail.value)
    this.page = e.detail.value
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
