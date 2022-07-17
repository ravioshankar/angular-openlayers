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
                    <a href="index.html" data-type="index-link">docs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
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
                                <a href="modules/DocsModule.html" data-type="entity-link" >DocsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocsModule-c9df8a13936da06a62addbe451f02528e4440c3605a10ddf460a14ca5494ee9e8e7349643b4bc5d2f305596fc1f34fb768f779570d1ceee04cdfdd5517c2b37f"' : 'data-target="#xs-components-links-module-DocsModule-c9df8a13936da06a62addbe451f02528e4440c3605a10ddf460a14ca5494ee9e8e7349643b4bc5d2f305596fc1f34fb768f779570d1ceee04cdfdd5517c2b37f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocsModule-c9df8a13936da06a62addbe451f02528e4440c3605a10ddf460a14ca5494ee9e8e7349643b4bc5d2f305596fc1f34fb768f779570d1ceee04cdfdd5517c2b37f"' :
                                            'id="xs-components-links-module-DocsModule-c9df8a13936da06a62addbe451f02528e4440c3605a10ddf460a14ca5494ee9e8e7349643b4bc5d2f305596fc1f34fb768f779570d1ceee04cdfdd5517c2b37f"' }>
                                            <li class="link">
                                                <a href="components/DocsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocsComponent</a>
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
                                    <a href="injectables/DocsService.html" data-type="entity-link" >DocsService</a>
                                </li>
                            </ul>
                        </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});