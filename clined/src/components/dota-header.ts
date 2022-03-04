import { html, css, LitElement,customElement } from 'lit-element'
import {shared} from './../styles/shared'

import logo from './../img/logo.png'


import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/notification';
import '@vaadin/icon';
import '@vaadin/icons';

@customElement('dota-header')
export class DotaHeader extends LitElement {
  static get styles() { return shared.concat(
      css`
    :host {
        display: block;
        background:#979797;
        color:#004d50
    }

    .toolbar {
        padding: 0 0.5rem 0 1rem;
        height: 4rem;
    }

    img.svg {
        height: 1.85rem;
    }

    vaadin-combo-box.language {
        width: 4rem;
        margin-right: 0.5rem;
    }

    vaadin-combo-box.language img {
        margin-right: 0.3rem;
        height: 0.8rem;
    }

    .text-logo {
        color: #fff;
        font-size: 3rem;
        font-style: italic;
    }

    span.toolbar-title {
        font-family: Raleway, sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        margin-left: 1rem;
        color: var(--org-toolbar-title-color);
    }

    .userID {
        font-family: 'IBM Plex Sans Condensed', sans-serif;
        font-size: 1.1rem;
        margin-right: 0.5em;
        color: var(--org-toolbar-title-color);
    }

    @media (max-width: 750px) {
        .userID {
        display: none;
        }
    }

    .buttons {
        margin:1rem;
    }
  `
  )}


  constructor() {
      super();
  }

  render() {
    return html`
        <div class="layout horizontal">
            <div >
                <!-- <img style="width:50px; " src=${logo}/> -->

            </div>
            <div class="layout flex"></div>
            <div class="layout horizontal center-center justified ">
                <div class="buttons">
                    <vaadin-button @click=${this.matchView}>Match <vaadin-icon icon="vaadin:plus"></vaadin-icon></vaadin-button>
                </div>
                <div class="buttons" >
                    <vaadin-button @click=${this.teamView}>Teams</vaadin-button>
                </div>
                <div class="buttons" >
                    <vaadin-button @click=${this.patchView}>Patch</vaadin-button>
                </div>
            </div>
        </div>
    `;
  }

  matchView() {
    this.dispatchEvent(new CustomEvent("changed-view", { detail: { value:0}}))
  }
  teamView() {
    this.dispatchEvent(new CustomEvent("changed-view", { detail: { value:1}}))
  }
  patchView() {
    this.dispatchEvent(new CustomEvent("changed-view", { detail: { value:2}}))
  }
}