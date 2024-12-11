document.addEventListener("DOMContentLoaded", () => {
  const cookieManager = new CookiePreferences();
  cookieManager.init();
});

const HIDDEN = "hidden";
const CLICK = "click";

class CookiePreferences {
  static LOCAL_STORAGE_KEYS = {
    COOKIE_PREFERENCES: "cookiePreferences",
  };

  constructor() {
    this.htmlElements = {
      banner: document.getElementById("cookie-banner"),
      preferencesDiv: document.getElementById("cookie-preferences"),
      acceptAllButton: document.getElementById("accept-all"),
      rejectAllButton: document.getElementById("reject-all"),
      configureButton: document.getElementById("configure"),
      savePreferencesButton: document.getElementById("save-preferences"),
      analyticsCheckbox: document.getElementById("analytics"),
      externalcontentCheckbox: document.getElementById("externalcontent"),
    };
  }

  init() {
    this.#addEventListeners();

    const savedPreferences = this.getCookiePreferences();
    if (savedPreferences) {
      this.#hideBanner();
    } else {
      this.htmlElements.banner.classList.remove(HIDDEN);
    } 
  }

  #addEventListeners() {
    this.htmlElements.configureButton?.addEventListener(CLICK, () => {
      if (!this.htmlElements.preferencesDiv) return;
  
      this.htmlElements.preferencesDiv.classList.remove(HIDDEN);
    });
  
    this.htmlElements.acceptAllButton?.addEventListener(CLICK, () => {
      this.#savePreferences({ analytics: true, externalcontent: true });
      this.#hideBanner();
    });
  
    this.htmlElements.rejectAllButton?.addEventListener(CLICK, () => {
      this.#savePreferences({ analytics: false, externalcontent: false });
      this.#hideBanner();
    });
  
    this.htmlElements.savePreferencesButton?.addEventListener(CLICK, () => {
      const preferences = {
        analytics: this.htmlElements.analyticsCheckbox?.checked,
        externalcontent: this.htmlElements.externalcontentCheckbox?.checked,
      };
      this.#savePreferences(preferences);
      this.#hideBanner();
    });
  }  

  getCookiePreferences() {
    const preferences = localStorage.getItem(CookiePreferences.LOCAL_STORAGE_KEYS.COOKIE_PREFERENCES);
    return preferences ? JSON.parse(preferences) : null;
  }

  #loadExternalContent() {
    const externalIframes = document.querySelectorAll("iframe[data-src]");
    externalIframes.forEach((iframe) => {
      const iframeSrc = iframe.getAttribute("data-src");

      if (iframeSrc !== null) {
        iframe.setAttribute("src", iframeSrc);
      }
    });
  }

  #loadAnalytics() {
    if (!runAnalytics || typeof runAnalytics !== 'function') return;
  
    runAnalytics();
  }

  #savePreferences(preferences) {
    localStorage.setItem(CookiePreferences.LOCAL_STORAGE_KEYS.COOKIE_PREFERENCES, JSON.stringify(preferences));
  }

  #hideBanner() {
    if (!this.htmlElements?.banner) return;
  
    this.htmlElements.banner.classList.add(HIDDEN);
    this.applyPreferences();
    this.#loadAnalytics();
  }  

  applyPreferences() {
    const cookiePreferences = this.getCookiePreferences();

    if (cookiePreferences?.externalcontent) {
      this.#loadExternalContent();
    }

    if (cookiePreferences?.analytics) {
      this.#loadAnalytics();
    }
  }
}

window.CookiePreferences = CookiePreferences;
