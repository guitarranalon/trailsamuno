document.addEventListener("DOMContentLoaded", () => {
  const cookieManager = new CookiePreferences();
  cookieManager.init();
});

class CookiePreferences {
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

    const savedPreferences = (new CookiePreferences).getCookiePreferences();
    if (savedPreferences) {
      this.#hideBanner();
    }    
  }

  #addEventListeners() {
    this.htmlElements.configureButton?.addEventListener("click", () => {
      if (!this.htmlElements.preferencesDiv) return;
  
      this.htmlElements.preferencesDiv.style.display = "block";
    });
  
    this.htmlElements.acceptAllButton?.addEventListener("click", () => {
      this.#savePreferences({ analytics: true, externalcontent: true });
      this.#hideBanner();
    });
  
    this.htmlElements.rejectAllButton?.addEventListener("click", () => {
      this.#savePreferences({ analytics: false, externalcontent: false });
      this.#hideBanner();
    });
  
    this.htmlElements.savePreferencesButton?.addEventListener("click", () => {
      const preferences = {
        analytics: this.htmlElements.analyticsCheckbox?.checked,
        externalcontent: this.htmlElements.externalcontentCheckbox?.checked,
      };
      this.#savePreferences(preferences);
      this.#hideBanner();
    });
  }  

  getCookiePreferences() {
    const preferences = localStorage.getItem("cookiePreferences");
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
    runTagManager();
  }

  #savePreferences(preferences) {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
  }

  #hideBanner() {
    if (!this.htmlElements?.banner) return;
  
    this.htmlElements.banner.style.display = "none";
    new CookiePreferences().applyPreferences();
    runTagManager();
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
