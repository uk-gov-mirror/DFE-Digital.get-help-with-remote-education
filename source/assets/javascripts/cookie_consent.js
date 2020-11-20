import { checkForCookies, getCookie, setCookie } from './cookie_helper'

function updateBanner() {
  document.getElementById("cookieActionsContainer").style.display = "none";
  document.getElementById("cookieConfirmation").style.display = "block";
}

function unhideBanner() {
  document.getElementById("appCookieBanner").style.display = "block";
}

function hideBanner() {
  document.getElementById("appCookieBanner").style.display = "none";
}

function acceptAllCookies() {
  setCookie("ghre_allow_cookies", true, 365);
  updateBanner();
}

function cookieConsentGiven() {
  return checkForCookies("ghre_allow_cookies");
}

function consentToCookies() {
  setCookie("ghre_allow_cookies", true, 365);
}

function withdrawCookieConsent() {
  setCookie("ghre_allow_cookies", false, 365);
}

function cookieConsentValue() {
  return getCookie("ghre_allow_cookies");
}

if (!cookieConsentGiven()) {
  unhideBanner(); // unhide cookie banner if consent not given
};

document.getElementById("acceptCookies").onclick = acceptAllCookies;
document.getElementById("hideButton").onclick = hideBanner;

export { acceptAllCookies, hideBanner, unhideBanner, consentToCookies, withdrawCookieConsent, cookieConsentValue };