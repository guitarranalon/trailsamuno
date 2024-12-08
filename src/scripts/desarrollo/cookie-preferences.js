document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const preferencesDiv = document.getElementById("cookie-preferences");

  const acceptAllButton = document.getElementById("accept-all");
  const rejectAllButton = document.getElementById("reject-all");
  const configureButton = document.getElementById("configure");
  const savePreferencesButton = document.getElementById("save-preferences");

  const analyticsCheckbox = document.getElementById("analytics");
  const externalcontentCheckbox = document.getElementById("externalcontent");

  configureButton?.addEventListener("click", () => {
    if (!preferencesDiv) return;

    preferencesDiv.style.display = "block";
  });

  acceptAllButton?.addEventListener("click", () => {
    savePreferences({ analytics: true, externalcontent: true });
    hideBanner();
  });

  rejectAllButton?.addEventListener("click", () => {
    savePreferences({ analytics: false, externalcontent: false });
    hideBanner();
  });

  savePreferencesButton?.addEventListener("click", () => {
    const preferences = {
      analytics: analyticsCheckbox?.checked,
      externalcontent: externalcontentCheckbox?.checked,
    };
    savePreferences(preferences);
    hideBanner();
  });

  function savePreferences(preferences) {
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
  }

  function hideBanner() {
    if (!banner) return;

    banner.style.display = "none";
    testCookiePreferences();
    runTagManager();
  }

  const savedPreferences = localStorage.getItem("cookiePreferences");
  if (savedPreferences) {
    hideBanner();
  }
});

function getCookiePreferences() {
  const preferences = localStorage.getItem("cookiePreferences");
  return preferences ? JSON.parse(preferences) : null;
}

function loadExternalContent() {
  const externalIframes = document.querySelectorAll("iframe[data-src]");
  externalIframes.forEach((iframe) => {
    const iframeSrc = iframe.getAttribute("data-src");

    if (iframeSrc !== null) {
      iframe.setAttribute("src", iframeSrc);
    }
  });
}

function testCookiePreferences() {
  const cookiePreferences = getCookiePreferences();

  if (cookiePreferences?.externalcontent) {
    loadExternalContent();
  }
}

window.testCookiePreferences = testCookiePreferences;
