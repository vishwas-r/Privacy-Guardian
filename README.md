# Privacy Guardian Chrome Extension

Privacy Guardian is a Chrome extension designed to enhance your online privacy by monitoring trackers, managing website permissions, and visualizing your digital footprint. It provides real-time insights into the trackers present on websites, helps you block unwanted trackers, and alerts you to unused permissions that may pose privacy risks.

## Features

- **Tracker Monitoring**: Detects and logs known trackers (e.g., Google Analytics, Google Tag Manager) on websites you visit, displaying their activity in a popup interface.
- **Tracker Blocking**: Allows you to block specific trackers using Chrome’s `declarativeNetRequest` API, preventing them from loading resources.
- **Permission Management**: Monitors website permissions (e.g., geolocation, notifications, clipboard access) and notifies you about sensitive permissions or unused ones.
- **Digital Footprint Visualization**: Updates a badge on the extension icon to show the number of trackers detected and blocked on the current tab.
- **Data Cleanup**: Provides options to clear site data (e.g., cookies, cache, local storage) for specific websites.
- **Cookie and Local Storage Monitoring**: Tracks when cookies and local storage are set, logging this information for privacy analysis.
- **Scheduled Permission Checks**: Runs periodic checks (every 24 hours) to identify unused permissions and suggests cleanup.

## Installation

1. **Clone or Download the Repository**:
   - Clone this repository or download the source code as a ZIP file.
   ```bash
   git clone <repository-url>
   ```

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the folder containing the extension files (`manifest.json`, `background.js`, `content.js`, `popup.html`, and the `icons` folder).

3. **Verify Installation**:
   - The Privacy Guardian icon should appear in the Chrome toolbar.
   - Click the icon to open the popup and confirm it loads without errors.

## Usage

- **Popup Interface**:
  - Click the Privacy Guardian icon to view detected trackers and permissions for the current website.
  - Block or unblock trackers using the provided controls.
  - Review and remove unused permissions or clear site data as needed.

- **Badge Indicators**:
  - The badge on the extension icon shows the number of trackers detected (e.g., `2` for two trackers).
  - If some trackers are blocked, it shows blocked/total (e.g., `1/2`).
  - Badge colors indicate status:
    - **Green (#2ECC71)**: No trackers or all trackers blocked.
    - **Orange (#F39C12)**: Some trackers blocked.
    - **Red (#E74C3C)**: Trackers present and unblocked.

- **Notifications**:
  - Receive alerts when a website requests sensitive permissions (e.g., geolocation).
  - Get notified about unused permissions after 30 days, with an option to review and remove them.

## File Structure

- **`manifest.json`**: Defines the extension’s configuration, permissions, and scripts.
- **`background.js`**: Handles tracker detection, blocking rules, permission monitoring, and badge updates.
- **`content.js`**: Runs on web pages to detect tracking scripts, monitor cookies, and track permission requests.
- **`popup.html`** (not included in this README but assumed to exist): The user interface for interacting with tracker and permission data.
- **`icons/`**: Contains icon files (`icon16.png`, `icon48.png`, `icon128.png`) for the extension.

## Permissions Used

The extension requires the following permissions:
- `privacy`, `webNavigation`, `webRequest`: To monitor trackers and web requests.
- `storage`: To store tracker and permission data.
- `tabs`: To access tab information for tracker detection.
- `cookies`, `browsingData`: To monitor and clear site data.
- `notifications`: To alert users about permissions and cleanup.
- `alarms`: To schedule permission checks.
- `declarativeNetRequest`: To block trackers dynamically.
- `"<all_urls>"` (host permission): To operate on all websites.

## Development

### Prerequisites
- Google Chrome (or a Chromium-based browser).
- Basic knowledge of JavaScript, HTML, and Chrome extension APIs.

### Building and Testing
1. Modify the code in `background.js`, `content.js`, or `popup.html` as needed.
2. Reload the extension in `chrome://extensions/` by clicking **Reload** on the extension card.
3. Test by visiting websites with known trackers (e.g., those using Google Analytics) and checking the console (`chrome://extensions/` > **Inspect views** > **service worker**) for errors or logs.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

Please ensure your code follows the existing style and includes appropriate error handling.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
*Privacy Guardian is not affiliated with any third-party services mentioned in the tracker list.*