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
                    <a href="index.html" data-type="index-link">angular-openlayers documentation</a>
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
                                <a href="modules/BasicSetupModule.html" data-type="entity-link">BasicSetupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BasicSetupModule-2ec087d61fc73751783cba4f8a9e2083"' : 'data-target="#xs-components-links-module-BasicSetupModule-2ec087d61fc73751783cba4f8a9e2083"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BasicSetupModule-2ec087d61fc73751783cba4f8a9e2083"' :
                                            'id="xs-components-links-module-BasicSetupModule-2ec087d61fc73751783cba4f8a9e2083"' }>
                                            <li class="link">
                                                <a href="components/BasicSetupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BasicSetupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomControlModule.html" data-type="entity-link">CustomControlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomControlModule-bbcdee74502815086b50b57ffe66e4da"' : 'data-target="#xs-components-links-module-CustomControlModule-bbcdee74502815086b50b57ffe66e4da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomControlModule-bbcdee74502815086b50b57ffe66e4da"' :
                                            'id="xs-components-links-module-CustomControlModule-bbcdee74502815086b50b57ffe66e4da"' }>
                                            <li class="link">
                                                <a href="components/CustomControlComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomControlComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomMarkersModule.html" data-type="entity-link">CustomMarkersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomMarkersModule-f154a26bb45a17277897498752db1394"' : 'data-target="#xs-components-links-module-CustomMarkersModule-f154a26bb45a17277897498752db1394"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomMarkersModule-f154a26bb45a17277897498752db1394"' :
                                            'id="xs-components-links-module-CustomMarkersModule-f154a26bb45a17277897498752db1394"' }>
                                            <li class="link">
                                                <a href="components/CustomMarkersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CustomMarkersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OlProjSetupModule.html" data-type="entity-link">OlProjSetupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OlProjSetupModule-c751402affcd8f1ea4856edc7fd61fba"' : 'data-target="#xs-components-links-module-OlProjSetupModule-c751402affcd8f1ea4856edc7fd61fba"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OlProjSetupModule-c751402affcd8f1ea4856edc7fd61fba"' :
                                            'id="xs-components-links-module-OlProjSetupModule-c751402affcd8f1ea4856edc7fd61fba"' }>
                                            <li class="link">
                                                <a href="components/OlProjSetupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OlProjSetupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReadMeModule.html" data-type="entity-link">ReadMeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReadMeModule-ae6c991208adff1c623e141c13d44536"' : 'data-target="#xs-components-links-module-ReadMeModule-ae6c991208adff1c623e141c13d44536"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReadMeModule-ae6c991208adff1c623e141c13d44536"' :
                                            'id="xs-components-links-module-ReadMeModule-ae6c991208adff1c623e141c13d44536"' }>
                                            <li class="link">
                                                <a href="components/ReadMeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReadMeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SimplePopupModule.html" data-type="entity-link">SimplePopupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SimplePopupModule-43bd2874b03f065b4d80e1f40262c869"' : 'data-target="#xs-components-links-module-SimplePopupModule-43bd2874b03f065b4d80e1f40262c869"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SimplePopupModule-43bd2874b03f065b4d80e1f40262c869"' :
                                            'id="xs-components-links-module-SimplePopupModule-43bd2874b03f065b4d80e1f40262c869"' }>
                                            <li class="link">
                                                <a href="components/SimplePopupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SimplePopupComponent</a>
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
                                    <a href="injectables/AngularOpenlayersIIIService.html" data-type="entity-link">AngularOpenlayersIIIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AngularOpenlayersIIService.html" data-type="entity-link">AngularOpenlayersIIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AngularOpenlayersIService.html" data-type="entity-link">AngularOpenlayersIService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomControlService.html" data-type="entity-link">CustomControlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReadMeService.html" data-type="entity-link">ReadMeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SimplePopupService.html" data-type="entity-link">SimplePopupService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});