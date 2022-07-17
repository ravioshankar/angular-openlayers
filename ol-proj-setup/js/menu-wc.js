'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ol-proj-setup documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/OlProjSetupModule.html" data-type="entity-link" >OlProjSetupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OlProjSetupModule-90d1b5d9de69800c34943f39c82bde25852da80f48bf7f32d1b1da47d1320951a2a77c141fc187c8778caf231afc05134b0873cdba63ed9e7b3c56c1bdf7660b"' : 'data-target="#xs-components-links-module-OlProjSetupModule-90d1b5d9de69800c34943f39c82bde25852da80f48bf7f32d1b1da47d1320951a2a77c141fc187c8778caf231afc05134b0873cdba63ed9e7b3c56c1bdf7660b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OlProjSetupModule-90d1b5d9de69800c34943f39c82bde25852da80f48bf7f32d1b1da47d1320951a2a77c141fc187c8778caf231afc05134b0873cdba63ed9e7b3c56c1bdf7660b"' :
                                            'id="xs-components-links-module-OlProjSetupModule-90d1b5d9de69800c34943f39c82bde25852da80f48bf7f32d1b1da47d1320951a2a77c141fc187c8778caf231afc05134b0873cdba63ed9e7b3c56c1bdf7660b"' }>
                                            <li class="link">
                                                <a href="components/OlProjSetupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OlProjSetupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/OlProjSetupService.html" data-type="entity-link" >OlProjSetupService</a>
                                </li>
                            </ul>
                        </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});