import { cookieConsentValue, consentToCookies, withdrawCookieConsent } from './cookie_consent'
import { initGoogleAnalytics, removeAnalyticsCookies } from './google_analytics';

function submitCookiePreferences(e) {
  e.preventDefault();
  let inputs = e.target.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      if (inputs[i].value === 'cookie-consent-accept') {
        consentToCookies();
        initGoogleAnalytics(false);
      }

      if (inputs[i].value === 'cookie-consent-deny') {
        withdrawCookieConsent();
        removeAnalyticsCookies();
      }
    }
  }
  document.querySelector('div[data-cookie-confirmation]').style.display = 'block';
}

var cookieConsentAccept = 'input[value="cookie-consent-accept"]'
var cookiePreferencesForm = 'cookie-preferences-form'

if(cookieConsentValue() == 'true') {
  if(document.querySelector(cookieConsentAccept)) {
    document.querySelector(cookieConsentAccept).checked = true;
  }
}

if(document.getElementById(cookiePreferencesForm)) {
  document.getElementById(cookiePreferencesForm).addEventListener("submit", submitCookiePreferences, false)
}
