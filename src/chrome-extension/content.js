(function() {
  // Track permission requests
  const originalRequestPermission = navigator.permissions?.query;
  if (originalRequestPermission) {
      navigator.permissions.query = async function(permissionDesc) {
          try {
              await reportPermissionRequest(permissionDesc.name);
              return await originalRequestPermission.call(this, permissionDesc);
          } catch (error) {
              console.error('Error in permission query:', error);
              throw error;
          }
      };
  }

  async function reportPermissionRequest(permission) {
      try {
          await chrome.runtime.sendMessage({
              action: 'permissionRequested',
              permission,
              url: window.location.hostname,
              timestamp: Date.now()
          });
      } catch (error) {
          console.error('Error reporting permission request:', error);
      }
  }

  function detectTrackingScripts() {
      const scripts = document.querySelectorAll('script');
      scripts.forEach(script => {
          if (!script.src) return;
          chrome.runtime.sendMessage({
              action: 'scriptDetected',
              url: script.src,
              pageUrl: window.location.hostname,
              timestamp: Date.now()
          }).catch(error => {
              console.error('Error reporting script:', error);
          });
      });
  }

  function monitorCookies() {
      let cookieValue = document.cookie;
      Object.defineProperty(document, 'cookie', {
          get() {
              return cookieValue;
          },
          set(value) {
              cookieValue = value;
              chrome.runtime.sendMessage({
                  action: 'cookieSet',
                  value,
                  url: window.location.hostname,
                  timestamp: Date.now()
              }).catch(error => {
                  console.error('Error reporting cookie:', error);
              });
          },
          configurable: true
      });
  }

  function monitorLocalStorage() {
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = function(key, value) {
          chrome.runtime.sendMessage({
              action: 'localStorageSet',
              key,
              url: window.location.hostname,
              timestamp: Date.now()
          }).catch(error => {
              console.error('Error reporting localStorage:', error);
          });
          return originalSetItem.call(this, key, value);
      };
  }

  function init() {
      try {
          const loadListener = () => {
              detectTrackingScripts();
              window.removeEventListener('load', loadListener);
          };
          window.addEventListener('load', loadListener);
          monitorCookies();
          monitorLocalStorage();
      } catch (error) {
          console.error('Error initializing Privacy Guardian:', error);
      }
  }

  init();
})();