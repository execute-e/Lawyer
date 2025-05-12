export default class Header {
    selectors = {
        root: "[data-js-header]",
        overlay: "[data-js-header-overlay]",
        button: "[data-js-header-button]",
    };

    stateClasses = {
        isActive: "is-active",
        isLock: "is-lock",
    };

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root);
        this.overlayElement = this.rootElement.querySelector(this.selectors.overlay);
        this.buttonElement = this.rootElement.querySelector(this.selectors.button);

        this.init()
    }

    init() {
        this.buttonElement.addEventListener("click", this.onButtonClick);
    }

    onButtonClick = () => {
        document.documentElement.classList.toggle(this.stateClasses.isLock);
        this.buttonElement.classList.toggle(this.stateClasses.isActive);
        this.overlayElement.classList.toggle(this.stateClasses.isActive);
    }
}