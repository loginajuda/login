import { TRACKING_LINK, BUTTON_TEXT } from '../utils/constants.js';

export function createTrackingButton() {
  return `
    <a href="${TRACKING_LINK}" target="_blank" rel="noopener noreferrer">
      <button class="track-button">${BUTTON_TEXT}</button>
    </a>
  `;
}