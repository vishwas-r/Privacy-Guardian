document.addEventListener('DOMContentLoaded', function() {
    // Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show active tab content
        tabContents.forEach(content => content.classList.remove('active'));
        document.getElementById(tabName).classList.add('active');
        
        // Load tab-specific data
        if (tabName === 'trackers') {
          loadTrackerData();
        } else if (tabName === 'permissions') {
          loadPermissionData();
        } else if (tabName === 'footprint') {
          loadFootprintData();
        }
      });
    });
    
    // TRACKER TAB FUNCTIONALITY
    
    // Load tracker data for current site
    function loadTrackerData() {
      chrome.runtime.sendMessage(
        { action: 'getTrackerData' },
        function(response) {
          if (!response.success) {
            showError('Could not load tracker data');
            return;
          }
          
          // Update site info
          document.getElementById('current-site').textContent = response.url || 'unknown';
          
          const trackersData = response.data.trackers || {};
          const trackersList = document.getElementById('tracker-list-items');
          const noTrackersMessage = document.getElementById('no-trackers-message');
          
          // Clear existing tracker items
          trackersList.innerHTML = '';
          
          // Get unique data types being collected
          const allDataTypes = new Set();
          const trackerCount = Object.keys(trackersData).length;
          
          // Update stats
          document.getElementById('tracker-count').textContent = trackerCount;
          
          if (trackerCount === 0) {
            noTrackersMessage.classList.remove('hidden');
            document.getElementById('data-types-count').textContent = '0';
            return;
          }
          
          noTrackersMessage.classList.add('hidden');
          
          // Check which trackers are blocked
          chrome.storage.local.get(['trackerBlocked'], function(result) {
            const blockedTrackers = result.trackerBlocked || {};
            
            // Create tracker list items
            for (const trackerDomain in trackersData) {
              const tracker = trackersData[trackerDomain];
              const isBlocked = !!blockedTrackers[trackerDomain];
              
              // Collect all data types
              if (tracker.info && tracker.info.dataCollected) {
                tracker.info.dataCollected.forEach(type => allDataTypes.add(type));
              }
              
              // Create tracker list item
              const trackerItem = document.createElement('li');
              trackerItem.className = 'tracker-item';
              
              const trackerHeader = document.createElement('div');
              trackerHeader.className = 'tracker-header';
              
              const trackerName = document.createElement('span');
              trackerName.className = 'tracker-name';
              trackerName.textContent = tracker.info ? tracker.info.name : trackerDomain;
              
              const trackerCategory = document.createElement('span');
              trackerCategory.className = 'tracker-category';
              trackerCategory.textContent = tracker.info ? tracker.info.category : 'Unknown';
              
              trackerHeader.appendChild(trackerName);
              trackerHeader.appendChild(trackerCategory);
              
              const trackerData = document.createElement('div');
              trackerData.className = 'tracker-data';
              
              if (tracker.info && tracker.info.dataCollected) {
                trackerData.textContent = 'Collects: ' + tracker.info.dataCollected.join(', ');
              } else {
                trackerData.textContent = 'Unknown data collection';
              }
              
              const trackerActions = document.createElement('div');
              trackerActions.className = 'tracker-actions';
              
              const blockButton = document.createElement('button');
              blockButton.textContent = isBlocked ? 'Unblock' : 'Block';
              blockButton.className = isBlocked ? 'unblock' : '';
              blockButton.addEventListener('click', function() {
                toggleBlockTracker(trackerDomain, isBlocked, blockButton);
              });
              
              trackerActions.appendChild(blockButton);
              
              trackerItem.appendChild(trackerHeader);
              trackerItem.appendChild(trackerData);
              trackerItem.appendChild(trackerActions);
              
              trackersList.appendChild(trackerItem);
            }
            
            // Update data types count
            document.getElementById('data-types-count').textContent = allDataTypes.size;
          });
        }
      );
    }
    
    // Toggle tracker blocking
    function toggleBlockTracker(trackerDomain, isCurrentlyBlocked, button) {
      const action = isCurrentlyBlocked ? 'unblockTracker' : 'blockTracker';
      
      chrome.runtime.sendMessage(
        { 
          action: action,
          tracker: trackerDomain
        },
        function(response) {
          if (response.success) {
            // Update button state
            button.textContent = isCurrentlyBlocked ? 'Block' : 'Unblock';
            button.className = isCurrentlyBlocked ? '' : 'unblock';
            
            // Show feedback
            const message = isCurrentlyBlocked 
              ? `Unblocked ${trackerDomain}`
              : `Blocked ${trackerDomain}`;
            
            showNotification(message);
          }
        }
      );
    }
    
    // Clear site data
    document.getElementById('clear-site-data').addEventListener('click', function() {
      const siteDomain = document.getElementById('current-site').textContent;
      
      if (!siteDomain || siteDomain === 'unknown') {
        showError('No site selected');
        return;
      }
      
      chrome.runtime.sendMessage(
        { 
          action: 'clearSiteData',
          url: `https://${siteDomain}`
        },
        function(response) {
          if (response.success) {
            showNotification(`Cleared data for ${siteDomain}`);
          } else {
            showError('Failed to clear site data');
          }
        }
      );
    });
    
    // PERMISSIONS TAB FUNCTIONALITY
    
    // Load permission data
    function loadPermissionData() {
      // Load current site permissions
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs.length === 0) return;
        
        const currentUrl = new URL(tabs[0].url).hostname;
        document.getElementById('current-permissions-list').innerHTML = '';
        
        chrome.runtime.sendMessage(
          { action: 'getPermissionStats' },
          function(response) {
            if (!response.success) return;
            
            const permissionData = response.permissionData;
            const currentSitePermissions = permissionData[currentUrl];
            const currentPermissionsList = document.getElementById('current-permissions-list');
            const noPermissionsMessage = document.getElementById('no-permissions-message');
            
            if (!currentSitePermissions || Object.keys(currentSitePermissions).length === 0) {
              noPermissionsMessage.style.display = 'block';
              return;
            }
            
            noPermissionsMessage.style.display = 'none';
            
            for (const perm in currentSitePermissions) {
              const permItem = createPermissionItem(currentUrl, perm, currentSitePermissions[perm]);
              currentPermissionsList.appendChild(permItem);
            }
          }
        );
      });
      
      // Load unused permissions
      chrome.runtime.sendMessage(
        { action: 'getUnusedPermissions' },
        function(response) {
          if (!response.success) return;
          
          const unusedPermissions = response.unusedPermissions;
          const unusedPermissionsList = document.getElementById('unused-permissions-list');
          const noUnusedMessage = document.getElementById('no-unused-message');
          
          unusedPermissionsList.innerHTML = '';
          
          if (!unusedPermissions || Object.keys(unusedPermissions).length === 0) {
            noUnusedMessage.style.display = 'block';
            return;
          }
          
          noUnusedMessage.style.display = 'none';
          
          for (const site in unusedPermissions) {
            unusedPermissions[site].forEach(perm => {
              const permItem = createPermissionItem(site, perm, { lastUsed: 0 }, true);
              unusedPermissionsList.appendChild(permItem);
            });
          }
        }
      );
    }
    
    // Create permission list item
    function createPermissionItem(site, permission, permData, isUnused = false) {
      const permItem = document.createElement('li');
      permItem.className = 'permission-item';
      
      const permInfo = document.createElement('div');
      permInfo.className = 'permission-info';
      
      const permName = document.createElement('div');
      permName.className = 'permission-name';
      permName.textContent = formatPermissionName(permission);
      
      const permSite = document.createElement('div');
      permSite.className = 'permission-site';
      permSite.textContent = site;
      
      let permLastUsed;
      if (!isUnused) {
        permLastUsed = document.createElement('div');
        permLastUsed.className = 'permission-lastused';
        permLastUsed.textContent = 'Last used: ' + formatDate(permData.lastUsed);
      }
      
      permInfo.appendChild(permName);
      permInfo.appendChild(permSite);
      if (permLastUsed) permInfo.appendChild(permLastUsed);
      
      const permActions = document.createElement('div');
      permActions.className = 'permission-actions';
      
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function() {
        removePermission(site, permission);
      });
      
      permActions.appendChild(removeButton);
      
      permItem.appendChild(permInfo);
      permItem.appendChild(permActions);
      
      return permItem;
    }
    
    // Format permission name for display
    function formatPermissionName(permission) {
      const formatted = permission.charAt(0).toUpperCase() + permission.slice(1);
      return formatted.replace(/([A-Z])/g, ' $1').trim();
    }
    
    // Format date for display
    function formatDate(timestamp) {
      if (!timestamp) return 'Unknown';
      
      const date = new Date(timestamp);
      return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
    }
    
    // Remove permission
    function removePermission(site, permission) {
      chrome.runtime.sendMessage(
        {
          action: 'removePermission',
          site: site,
          permission: permission
        },
        function(response) {
          if (response.success) {
            showNotification(`Removed ${permission} permission for ${site}`);
            loadPermissionData(); // Reload permission data
          } else {
            showError('Failed to remove permission');
          }
        }
      );
    }
    
    // Check for unused permissions
    document.getElementById('check-permissions').addEventListener('click', function() {
      showNotification('Checking for unused permissions...');
      
      // Trigger a permission check in the background
      chrome.runtime.sendMessage(
        { action: 'checkUnusedPermissions' },
        function() {
          loadPermissionData(); // Reload permission data
        }
      );
    });
    
    // DIGITAL FOOTPRINT TAB FUNCTIONALITY
    
    // Load footprint data
    function loadFootprintData() {
      const timeRange = document.getElementById('time-range').value;
      
      // Get the timestamp for the selected time range
      const now = Date.now();
      let startTime;
      
      switch(timeRange) {
        case 'day':
          startTime = now - (24 * 60 * 60 * 1000);
          break;
        case 'week':
          startTime = now - (7 * 24 * 60 * 60 * 1000);
          break;
        case 'month':
          startTime = now - (30 * 24 * 60 * 60 * 1000);
          break;
        case 'all':
        default:
          startTime = 0;
      }
      
      chrome.storage.local.get(['trackerData', 'trackerBlocked'], function(result) {
        const trackerData = result.trackerData || {};
        const blockedTrackers = result.trackerBlocked || {};
        
        // Calculate statistics
        let visitedSites = 0;
        const trackerNetworks = new Set();
        let blockedCount = 0;
        const topTrackers = {};
        
        // Process tracker data
        for (const site in trackerData) {
          const siteInfo = trackerData[site];
          
          // Skip if outside time range
          if (siteInfo.lastVisited < startTime) continue;
          
          visitedSites++;
          
          // Process trackers for this site
          for (const tracker in siteInfo.trackers) {
            const trackerInfo = siteInfo.trackers[tracker];
            
            // Skip if tracker activity is outside time range
            if (trackerInfo.lastSeen < startTime) continue;
            
            trackerNetworks.add(tracker);
            
            // Count if this tracker is blocked
            if (blockedTrackers[tracker]) {
              blockedCount++;
            }
            
            // Add to top trackers
            if (!topTrackers[tracker]) {
              topTrackers[tracker] = {
                name: trackerInfo.info ? trackerInfo.info.name : tracker,
                category: trackerInfo.info ? trackerInfo.info.category : 'Unknown',
                count: 0
              };
            }
            
            topTrackers[tracker].count++;
          }
        }
        
        // Update statistics
        document.getElementById('visited-sites').textContent = visitedSites;
        document.getElementById('tracker-networks').textContent = trackerNetworks.size;
        // For the actual blocked count, get it from storage since we track it separately
        chrome.storage.local.get(['blockedCount'], function(data) {
          document.getElementById('blocked-count').textContent = data.blockedCount || blockedCount;
        });
        
        // Update top trackers list
        updateTopTrackers(topTrackers);
        
        // Create visualization (simplified for this example)
        updateVisualization(trackerData, startTime);
      });
    }
    
    // Update top trackers list
    function updateTopTrackers(trackersData) {
      const topTrackersList = document.getElementById('top-trackers-list');
      topTrackersList.innerHTML = '';
      
      // Convert to array and sort by count
      const trackersArray = Object.values(trackersData);
      trackersArray.sort((a, b) => b.count - a.count);
      
      // Display top 5 trackers
      const topFive = trackersArray.slice(0, 5);
      
      topFive.forEach(tracker => {
        const trackerItem = document.createElement('li');
        trackerItem.className = 'tracker-item';
        
        const trackerHeader = document.createElement('div');
        trackerHeader.className = 'tracker-header';
        
        const trackerName = document.createElement('span');
        trackerName.className = 'tracker-name';
        trackerName.textContent = tracker.name;
        
        const trackerCategory = document.createElement('span');
        trackerCategory.className = 'tracker-category';
        trackerCategory.textContent = tracker.category;
        
        const trackerCount = document.createElement('span');
        trackerCount.style.fontSize = '12px';
        trackerCount.style.marginLeft = '5px';
        trackerCount.textContent = `(${tracker.count} instances)`;
        
        trackerHeader.appendChild(trackerName);
        trackerHeader.appendChild(trackerCount);
        trackerHeader.appendChild(trackerCategory);
        
        trackerItem.appendChild(trackerHeader);
        topTrackersList.appendChild(trackerItem);
      });
      
      if (topFive.length === 0) {
        const noData = document.createElement('li');
        noData.textContent = 'No tracker data available';
        topTrackersList.appendChild(noData);
      }
    }
    
    // Update visualization (simplified placeholder)
    function updateVisualization(trackerData, startTime) {
      const container = document.getElementById('visualization-container');
      container.innerHTML = '';
      
      // This is a simplified placeholder for visualization
      // In a real extension, you would use a library like D3.js for a proper network graph
      const placeholder = document.createElement('div');
      placeholder.className = 'visualization-placeholder';
      
      // Count trackers within time range
      let trackerCount = 0;
      for (const site in trackerData) {
        const siteInfo = trackerData[site];
        if (siteInfo.lastVisited >= startTime) {
          trackerCount += Object.keys(siteInfo.trackers).length;
        }
      }
      
      const info = document.createElement('p');
      if (trackerCount > 0) {
        info.innerHTML = `Found <strong>${trackerCount}</strong> tracker instances<br>within selected time range`;
      } else {
        info.textContent = 'No tracker data available for this time range';
      }
      
      placeholder.appendChild(info);
      container.appendChild(placeholder);
    }
    
    // Listen for time range changes
    document.getElementById('time-range').addEventListener('change', loadFootprintData);
    
    // UTILITY FUNCTIONS
    
    // Show notification message
    function showNotification(message) {
      // This could be replaced with a proper notification system
      console.log('NOTIFICATION:', message);
      // In a full implementation, you'd show a toast or notification UI
    }
    
    // Show error message
    function showError(message) {
      console.error('ERROR:', message);
      // In a full implementation, you'd show an error UI
    }
    
    // Load initial data for the active tab
    loadTrackerData();
  });