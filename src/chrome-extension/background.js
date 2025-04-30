// Common tracker domains list
const knownTrackers = {
    // Analytics
    'google-analytics.com': { 
      name: 'Google Analytics', 
      category: 'Analytics', 
      dataCollected: ['Page views', 'Navigation paths', 'Time on page', 'User behavior', 'Conversion tracking'] 
    },
    'googletagmanager.com': { 
      name: 'Google Tag Manager', 
      category: 'Analytics', 
      dataCollected: ['Custom event data', 'Configured metrics', 'Cross-domain tracking'] 
    },
    'segment.com': { 
      name: 'Segment', 
      category: 'Analytics', 
      dataCollected: ['User events', 'Customer data', 'Integration data'] 
    },
    'amplitude.com': { 
      name: 'Amplitude', 
      category: 'Analytics', 
      dataCollected: ['User behavior', 'Feature usage', 'Conversion funnels'] 
    },
    'hotjar.com': { 
      name: 'Hotjar', 
      category: 'Analytics', 
      dataCollected: ['Heatmaps', 'Session recordings', 'User feedback'] 
    },
    'mixpanel.com': { 
      name: 'Mixpanel', 
      category: 'Analytics', 
      dataCollected: ['User interactions', 'Conversion metrics', 'User profiles'] 
    },
    'clarity.ms': { 
      name: 'Microsoft Clarity', 
      category: 'Analytics', 
      dataCollected: ['Session recordings', 'Heatmaps', 'Analytics data'] 
    },
    'fullstory.com': { 
      name: 'FullStory', 
      category: 'Analytics', 
      dataCollected: ['Session recordings', 'User frustration signals', 'Interaction analytics'] 
    },
    'heap.io': { 
      name: 'Heap', 
      category: 'Analytics', 
      dataCollected: ['User actions', 'Conversion funnels', 'Retention metrics'] 
    },
    'crazyegg.com': { 
      name: 'Crazy Egg', 
      category: 'Analytics', 
      dataCollected: ['Heatmaps', 'Scrollmaps', 'Click tracking'] 
    },
    'kissmetrics.com': { 
      name: 'Kissmetrics', 
      category: 'Analytics', 
      dataCollected: ['User behavior', 'Conversion tracking', 'Revenue metrics'] 
    },
    'matomo.org': { 
      name: 'Matomo', 
      category: 'Analytics', 
      dataCollected: ['Page views', 'Visit duration', 'Site searches', 'Downloads'] 
    },
    'adobe.com/analytics': { 
      name: 'Adobe Analytics', 
      category: 'Analytics', 
      dataCollected: ['Customer journeys', 'Attribution', 'Advanced segmentation'] 
    },
    'plausible.io': { 
      name: 'Plausible', 
      category: 'Analytics', 
      dataCollected: ['Page views', 'Referral sources', 'Geographic data'] 
    },
    'stat-counter.org': { 
      name: 'StatCounter', 
      category: 'Analytics', 
      dataCollected: ['Visitor stats', 'Page views', 'Entry/exit pages'] 
    },
    
    // Advertising
    'doubleclick.net': { 
      name: 'DoubleClick (Google)', 
      category: 'Advertising', 
      dataCollected: ['Ad clicks', 'Browsing history', 'Demographic data', 'Conversion tracking'] 
    },
    'adservice.google.com': { 
      name: 'Google Ads', 
      category: 'Advertising', 
      dataCollected: ['Ad interactions', 'Conversion data', 'Campaign performance'] 
    },
    'googlesyndication.com': { 
      name: 'Google AdSense', 
      category: 'Advertising', 
      dataCollected: ['Ad impressions', 'Click data', 'Publisher metrics'] 
    },
    'criteo.com': { 
      name: 'Criteo', 
      category: 'Advertising', 
      dataCollected: ['Product views', 'Shopping cart data', 'Retargeting data'] 
    },
    'taboola.com': { 
      name: 'Taboola', 
      category: 'Advertising', 
      dataCollected: ['Content interactions', 'Recommendation clicks', 'User interests'] 
    },
    'outbrain.com': { 
      name: 'Outbrain', 
      category: 'Advertising', 
      dataCollected: ['Content engagement', 'Article views', 'Interest categories'] 
    },
    'adroll.com': { 
      name: 'AdRoll', 
      category: 'Advertising', 
      dataCollected: ['Shopping behavior', 'Product views', 'Retargeting data'] 
    },
    'rubiconproject.com': { 
      name: 'Rubicon Project', 
      category: 'Advertising', 
      dataCollected: ['Bid requests', 'Impression data', 'Programmatic metrics'] 
    },
    'pubmatic.com': { 
      name: 'PubMatic', 
      category: 'Advertising', 
      dataCollected: ['Publisher data', 'Ad inventory', 'Auction metrics'] 
    },
    'smartadserver.com': { 
      name: 'Smart AdServer', 
      category: 'Advertising', 
      dataCollected: ['Ad delivery data', 'Campaign metrics', 'Audience segments'] 
    },
    'amazon-adsystem.com': { 
      name: 'Amazon Advertising', 
      category: 'Advertising', 
      dataCollected: ['Product interests', 'Shopping data', 'Ad performance'] 
    },
    'media.net': { 
      name: 'Media.net', 
      category: 'Advertising', 
      dataCollected: ['Contextual data', 'Ad performance', 'Publisher metrics'] 
    },
    'bing.com': { 
      name: 'Microsoft Advertising', 
      category: 'Advertising', 
      dataCollected: ['Search data', 'Click metrics', 'Conversion tracking'] 
    },
    'linkedin.com/ads': { 
      name: 'LinkedIn Ads', 
      category: 'Advertising', 
      dataCollected: ['Professional data', 'B2B metrics', 'Lead generation data'] 
    },
    'snapchat.com/ads': { 
      name: 'Snapchat Ads', 
      category: 'Advertising', 
      dataCollected: ['App engagement', 'Demographic data', 'Mobile activity'] 
    },
    'tiktok.com/business': { 
      name: 'TikTok Ads', 
      category: 'Advertising', 
      dataCollected: ['Video engagement', 'User interests', 'Social interactions'] 
    },
    'pinterest.com/ads': { 
      name: 'Pinterest Ads', 
      category: 'Advertising', 
      dataCollected: ['Pin engagement', 'Board activity', 'Interest categories'] 
    },
    
    // Social Media
    'facebook.com': { 
      name: 'Facebook', 
      category: 'Social Media', 
      dataCollected: ['Social interactions', 'Profile data', 'Network connections', 'Behavioral data'] 
    },
    'facebook.net': { 
      name: 'Facebook Pixel', 
      category: 'Social Media', 
      dataCollected: ['Page visits', 'Conversion events', 'Custom audiences'] 
    },
    'instagram.com': { 
      name: 'Instagram', 
      category: 'Social Media', 
      dataCollected: ['Photo/video engagement', 'Social interactions', 'Stories views'] 
    },
    'twitter.com': { 
      name: 'Twitter/X', 
      category: 'Social Media', 
      dataCollected: ['Tweet interactions', 'Profile visits', 'Timeline engagement'] 
    },
    'linkedin.com': { 
      name: 'LinkedIn', 
      category: 'Social Media', 
      dataCollected: ['Professional data', 'Career interactions', 'B2B connections'] 
    },
    'pinterest.com': { 
      name: 'Pinterest', 
      category: 'Social Media', 
      dataCollected: ['Pin activity', 'Board creation', 'Shopping interests'] 
    },
    'snapchat.com': { 
      name: 'Snapchat', 
      category: 'Social Media', 
      dataCollected: ['App usage', 'Friend interactions', 'Story views'] 
    },
    'tiktok.com': { 
      name: 'TikTok', 
      category: 'Social Media', 
      dataCollected: ['Video interactions', 'Creator engagement', 'For You Page activity'] 
    },
    'reddit.com': { 
      name: 'Reddit', 
      category: 'Social Media', 
      dataCollected: ['Subreddit activity', 'Comment engagement', 'Voting behavior'] 
    },
    
    // Marketing & CRM
    'marketo.com': { 
      name: 'Marketo', 
      category: 'Marketing', 
      dataCollected: ['Email engagement', 'Lead scoring', 'Campaign interaction'] 
    },
    'hubspot.com': { 
      name: 'HubSpot', 
      category: 'Marketing', 
      dataCollected: ['CRM data', 'Email clicks', 'Form submissions'] 
    },
    'salesforce.com': { 
      name: 'Salesforce', 
      category: 'Marketing', 
      dataCollected: ['Customer journey', 'Marketing cloud data', 'Sales interactions'] 
    },
    'pardot.com': { 
      name: 'Pardot (Salesforce)', 
      category: 'Marketing', 
      dataCollected: ['B2B interactions', 'Lead tracking', 'Email engagement'] 
    },
    'mailchimp.com': { 
      name: 'Mailchimp', 
      category: 'Marketing', 
      dataCollected: ['Email metrics', 'Subscriber activity', 'Campaign performance'] 
    },
    'constantcontact.com': { 
      name: 'Constant Contact', 
      category: 'Marketing', 
      dataCollected: ['Email opens', 'Click rates', 'Contact information'] 
    },
    'campaignmonitor.com': { 
      name: 'Campaign Monitor', 
      category: 'Marketing', 
      dataCollected: ['Email engagement', 'Automation triggers', 'Subscriber data'] 
    },
    'activecampaign.com': { 
      name: 'ActiveCampaign', 
      category: 'Marketing', 
      dataCollected: ['Customer experience data', 'Email metrics', 'CRM interactions'] 
    },
    'drift.com': { 
      name: 'Drift', 
      category: 'Marketing', 
      dataCollected: ['Chat interactions', 'Conversation metrics', 'Lead qualification data'] 
    },
    'intercom.com': { 
      name: 'Intercom', 
      category: 'Marketing', 
      dataCollected: ['Messaging data', 'Customer support interactions', 'User profiles'] 
    },
    'zendesk.com': { 
      name: 'Zendesk', 
      category: 'Marketing', 
      dataCollected: ['Support tickets', 'Customer satisfaction', 'Agent performance'] 
    },
    
    // Customer Experience & Feedback
    'optimizely.com': { 
      name: 'Optimizely', 
      category: 'Customer Experience', 
      dataCollected: ['A/B test data', 'Feature flags', 'Experiment results'] 
    },
    'qualtrics.com': { 
      name: 'Qualtrics', 
      category: 'Customer Experience', 
      dataCollected: ['Survey responses', 'NPS data', 'Experience metrics'] 
    },
    'surveymonkey.com': { 
      name: 'SurveyMonkey', 
      category: 'Customer Experience', 
      dataCollected: ['Survey answers', 'Feedback data', 'Poll responses'] 
    },
    'typeform.com': { 
      name: 'Typeform', 
      category: 'Customer Experience', 
      dataCollected: ['Form submissions', 'Response data', 'Completion rates'] 
    },
    'usertesting.com': { 
      name: 'UserTesting', 
      category: 'Customer Experience', 
      dataCollected: ['User feedback', 'Testing videos', 'Research metrics'] 
    },
    'trustpilot.com': { 
      name: 'Trustpilot', 
      category: 'Customer Experience', 
      dataCollected: ['Review data', 'Rating metrics', 'Customer sentiment'] 
    },
    
    // Performance & Error Tracking
    'newrelic.com': { 
      name: 'New Relic', 
      category: 'Performance', 
      dataCollected: ['Application performance', 'Error rates', 'Server metrics'] 
    },
    'sentry.io': { 
      name: 'Sentry', 
      category: 'Performance', 
      dataCollected: ['Error tracking', 'Performance monitoring', 'Issue resolution'] 
    },
    'datadoghq.com': { 
      name: 'Datadog', 
      category: 'Performance', 
      dataCollected: ['Infrastructure metrics', 'Log data', 'APM telemetry'] 
    },
    'loggly.com': { 
      name: 'Loggly', 
      category: 'Performance', 
      dataCollected: ['Log analysis', 'System events', 'Troubleshooting data'] 
    },
    'bugsnag.com': { 
      name: 'Bugsnag', 
      category: 'Performance', 
      dataCollected: ['Error data', 'Crash reports', 'Stability metrics'] 
    },
    'raygun.com': { 
      name: 'Raygun', 
      category: 'Performance', 
      dataCollected: ['Crash reporting', 'Real user monitoring', 'Performance data'] 
    },
    
    // CDN & Site Functionality
    'cloudflare.com': { 
      name: 'Cloudflare', 
      category: 'Infrastructure', 
      dataCollected: ['Network requests', 'Security metrics', 'Performance data'] 
    },
    'akamai.com': { 
      name: 'Akamai', 
      category: 'Infrastructure', 
      dataCollected: ['Content delivery', 'Edge computing', 'Security data'] 
    },
    'fastly.com': { 
      name: 'Fastly', 
      category: 'Infrastructure', 
      dataCollected: ['CDN metrics', 'Edge computing', 'Security insights'] 
    },
    'jquery.com': { 
      name: 'jQuery CDN', 
      category: 'Infrastructure', 
      dataCollected: ['Script usage', 'Library dependencies'] 
    },
    'googleapis.com': { 
      name: 'Google APIs', 
      category: 'Infrastructure', 
      dataCollected: ['API usage', 'Service integrations', 'Maps/Search data'] 
    },
    'gstatic.com': { 
      name: 'Google Static Content', 
      category: 'Infrastructure', 
      dataCollected: ['Font usage', 'Resource loading', 'Static content'] 
    },
    
    // Session Replay & UX
    'contentsquare.com': { 
      name: 'Contentsquare', 
      category: 'UX Analytics', 
      dataCollected: ['Customer journey', 'Digital experience metrics', 'UX analytics'] 
    },
    'mouseflow.com': { 
      name: 'Mouseflow', 
      category: 'UX Analytics', 
      dataCollected: ['Session recordings', 'Form analytics', 'Conversion funnels'] 
    },
    'luckyorange.com': { 
      name: 'Lucky Orange', 
      category: 'UX Analytics', 
      dataCollected: ['Visitor recordings', 'Heatmaps', 'Form analytics'] 
    },
    'smartlook.com': { 
      name: 'Smartlook', 
      category: 'UX Analytics', 
      dataCollected: ['Visitor recordings', 'Event tracking', 'Conversion funnels'] 
    },
    'sessioncam.com': { 
      name: 'SessionCam', 
      category: 'UX Analytics', 
      dataCollected: ['Customer struggle score', 'Session recordings', 'Form analytics'] 
    },
    
    // Consent Management
    'onetrust.com': { 
      name: 'OneTrust', 
      category: 'Consent Management', 
      dataCollected: ['Cookie preferences', 'Consent records', 'Privacy settings'] 
    },
    'cookiebot.com': { 
      name: 'Cookiebot', 
      category: 'Consent Management', 
      dataCollected: ['Cookie consents', 'Compliance records', 'User preferences'] 
    },
    'trustarc.com': { 
      name: 'TrustArc', 
      category: 'Consent Management', 
      dataCollected: ['Privacy choices', 'Consent records', 'Compliance data'] 
    },
    'usercentrics.com': { 
      name: 'Usercentrics', 
      category: 'Consent Management', 
      dataCollected: ['Consent settings', 'Privacy preferences', 'Compliance metrics'] 
    },
    
    // Chat & Customer Support
    'tawk.to': { 
      name: 'Tawk.to', 
      category: 'Customer Support', 
      dataCollected: ['Chat messages', 'Support interactions', 'Visitor information'] 
    },
    'livechatinc.com': { 
      name: 'LiveChat', 
      category: 'Customer Support', 
      dataCollected: ['Chat conversations', 'Support metrics', 'Customer satisfaction'] 
    },
    'freshworks.com': { 
      name: 'Freshworks', 
      category: 'Customer Support', 
      dataCollected: ['Support tickets', 'Chat data', 'Customer engagement'] 
    },
    'olark.com': { 
      name: 'Olark', 
      category: 'Customer Support', 
      dataCollected: ['Live chat data', 'Visitor information', 'Conversation metrics'] 
    },
    'zopim.com': { 
      name: 'Zopim (Zendesk Chat)', 
      category: 'Customer Support', 
      dataCollected: ['Chat conversations', 'Support metrics', 'Visitor profiles'] 
    },
    
    // eCommerce & Payments
    'shopify.com': { 
      name: 'Shopify', 
      category: 'eCommerce', 
      dataCollected: ['Shopping data', 'Order information', 'Product interests'] 
    },
    'stripe.com': { 
      name: 'Stripe', 
      category: 'eCommerce', 
      dataCollected: ['Payment processing', 'Transaction data', 'Customer information'] 
    },
    'paypal.com': { 
      name: 'PayPal', 
      category: 'eCommerce', 
      dataCollected: ['Payment processing', 'Transaction history', 'Billing information'] 
    },
    'affirm.com': { 
      name: 'Affirm', 
      category: 'eCommerce', 
      dataCollected: ['Financing data', 'Purchase information', 'Payment plans'] 
    },
    'klarna.com': { 
      name: 'Klarna', 
      category: 'eCommerce', 
      dataCollected: ['Payment data', 'Shopping history', 'Credit information'] 
    },
    'afterpay.com': { 
      name: 'Afterpay', 
      category: 'eCommerce', 
      dataCollected: ['Buy-now-pay-later data', 'Transaction history', 'Payment scheduling'] 
    },
    'amazon.com': { 
      name: 'Amazon', 
      category: 'eCommerce', 
      dataCollected: ['Shopping preferences', 'Product views', 'Purchase history'] 
    },
    'bigcommerce.com': { 
      name: 'BigCommerce', 
      category: 'eCommerce', 
      dataCollected: ['Store activity', 'Product interests', 'Shopping behavior'] 
    },
    'woocommerce.com': { 
      name: 'WooCommerce', 
      category: 'eCommerce', 
      dataCollected: ['Shopping cart data', 'Order details', 'Product engagement'] 
    },
    
    // A/B Testing
    'vwo.com': { 
      name: 'VWO', 
      category: 'A/B Testing', 
      dataCollected: ['Test variations', 'Conversion goals', 'User segments'] 
    },
    'convert.com': { 
      name: 'Convert', 
      category: 'A/B Testing', 
      dataCollected: ['Test participation', 'Variant performance', 'Goal completions'] 
    },
    'kameleoon.com': { 
      name: 'Kameleoon', 
      category: 'A/B Testing', 
      dataCollected: ['Test data', 'Personalization metrics', 'Feature flagging'] 
    },
    'abtasty.com': { 
      name: 'AB Tasty', 
      category: 'A/B Testing', 
      dataCollected: ['Test performance', 'User segments', 'Feature usage'] 
    },
    'adobe.com/target': { 
      name: 'Adobe Target', 
      category: 'A/B Testing', 
      dataCollected: ['Test experiences', 'Personalization data', 'Audience segments'] 
    },
    
    // Tag Management
    'tealium.com': { 
      name: 'Tealium', 
      category: 'Tag Management', 
      dataCollected: ['Tag firing', 'Data layer information', 'User behavior'] 
    },
    'ensighten.com': { 
      name: 'Ensighten', 
      category: 'Tag Management', 
      dataCollected: ['Tag deployment', 'Analytics integration', 'Data validation'] 
    },
    'adobe.com/launch': { 
      name: 'Adobe Launch', 
      category: 'Tag Management', 
      dataCollected: ['Tag execution', 'Property settings', 'Rule conditions'] 
    },
    
    // Miscellaneous
    'gravatar.com': { 
      name: 'Gravatar', 
      category: 'Identity', 
      dataCollected: ['User avatars', 'Profile connections', 'Email hashes'] 
    },
    'sharethis.com': { 
      name: 'ShareThis', 
      category: 'Social Sharing', 
      dataCollected: ['Sharing activity', 'Social engagement', 'Content popularity'] 
    },
    'addthis.com': { 
      name: 'AddThis', 
      category: 'Social Sharing', 
      dataCollected: ['Share clicks', 'Social activity', 'Audience interests'] 
    },
    'disqus.com': { 
      name: 'Disqus', 
      category: 'Comments', 
      dataCollected: ['Comment activity', 'User profiles', 'Discussion engagement'] 
    },
    'youtube.com': { 
      name: 'YouTube', 
      category: 'Media', 
      dataCollected: ['Video views', 'Watch time', 'Channel engagement'] 
    },
    'vimeo.com': { 
      name: 'Vimeo', 
      category: 'Media', 
      dataCollected: ['Video playback', 'Creator interactions', 'Viewing preferences'] 
    },
    'soundcloud.com': { 
      name: 'SoundCloud', 
      category: 'Media', 
      dataCollected: ['Audio plays', 'Artist engagement', 'Playlist activity'] 
    },
    'spotify.com': { 
      name: 'Spotify', 
      category: 'Media', 
      dataCollected: ['Music playback', 'Playlist creation', 'Artist preferences'] 
    },
    'recaptcha.net': { 
      name: 'reCAPTCHA', 
      category: 'Security', 
      dataCollected: ['Bot detection', 'User behavior signals', 'Verification data'] 
    },
    'captcha.com': { 
      name: 'CAPTCHA', 
      category: 'Security', 
      dataCollected: ['Human verification', 'Bot prevention', 'Security metrics'] 
    },
    'auth0.com': { 
      name: 'Auth0', 
      category: 'Identity', 
      dataCollected: ['Authentication data', 'Login information', 'Identity verification'] 
    },
    'okta.com': { 
      name: 'Okta', 
      category: 'Identity', 
      dataCollected: ['Identity data', 'Access management', 'Authentication logs'] 
    },
    'onelogin.com': { 
      name: 'OneLogin', 
      category: 'Identity', 
      dataCollected: ['Login information', 'Access patterns', 'Identity verification'] 
    },
    'twitch.tv': { 
      name: 'Twitch', 
      category: 'Media', 
      dataCollected: ['Livestream views', 'Chat participation', 'Creator support'] 
    },
    'chatbot.com': { 
      name: 'Chatbot', 
      category: 'Customer Support', 
      dataCollected: ['Conversation data', 'Support queries', 'Automated responses'] 
    },
    'liveagent.com': { 
      name: 'LiveAgent', 
      category: 'Customer Support', 
      dataCollected: ['Support tickets', 'Chat history', 'Customer information'] 
    },
    'appsflyer.com': { 
      name: 'AppsFlyer', 
      category: 'Mobile Analytics', 
      dataCollected: ['App installation', 'User retention', 'Campaign attribution'] 
    },
    'branch.io': { 
      name: 'Branch', 
      category: 'Mobile Analytics', 
      dataCollected: ['Deep linking', 'App attribution', 'Cross-platform tracking'] 
    },
    'adjust.com': { 
      name: 'Adjust', 
      category: 'Mobile Analytics', 
      dataCollected: ['Mobile attribution', 'Campaign performance', 'App metrics'] 
    },
    'kochava.com': { 
      name: 'Kochava', 
      category: 'Mobile Analytics', 
      dataCollected: ['App tracking', 'Attribution data', 'Campaign metrics'] 
    },
    'urbanairship.com': { 
      name: 'Airship', 
      category: 'Mobile Engagement', 
      dataCollected: ['Push notification data', 'In-app messages', 'Mobile engagement'] 
    },
    'onesignal.com': { 
      name: 'OneSignal', 
      category: 'Mobile Engagement', 
      dataCollected: ['Push notifications', 'Subscription data', 'Delivery metrics'] 
    },
    'pushwoosh.com': { 
      name: 'Pushwoosh', 
      category: 'Mobile Engagement', 
      dataCollected: ['Push notification data', 'User segmentation', 'Campaign metrics'] 
    },
    'leanplum.com': { 
      name: 'Leanplum', 
      category: 'Mobile Engagement', 
      dataCollected: ['App interactions', 'User engagement', 'Campaign performance'] 
    },
    'braze.com': { 
      name: 'Braze', 
      category: 'Mobile Engagement', 
      dataCollected: ['Customer engagement', 'Messaging data', 'User profiles'] 
    },
    'iterable.com': { 
      name: 'Iterable', 
      category: 'Marketing', 
      dataCollected: ['Cross-channel engagement', 'Campaign metrics', 'User journeys'] 
    },
    'mparticle.com': { 
      name: 'mParticle', 
      category: 'Data Management', 
      dataCollected: ['Customer data', 'Identity management', 'Data connections'] 
    },
    'segment.io': { 
      name: 'Segment', 
      category: 'Data Management', 
      dataCollected: ['Customer data', 'Event tracking', 'Integration metrics'] 
    },
    'cookielaw.org': { 
      name: 'OneTrust Cookie Consent', 
      category: 'Consent Management', 
      dataCollected: ['Cookie preferences', 'Consent records', 'Privacy choices'] 
    },
    'iubenda.com': { 
      name: 'Iubenda', 
      category: 'Consent Management', 
      dataCollected: ['Privacy preferences', 'Cookie consent', 'Legal compliance'] 
    },
    'quantserve.com': { 
      name: 'Quantcast', 
      category: 'Advertising', 
      dataCollected: ['Audience segments', 'Ad targeting data', 'Publisher analytics'] 
    },
    'intentmedia.net': { 
      name: 'Intent Media', 
      category: 'Advertising', 
      dataCollected: ['Travel preferences', 'Booking intent', 'Comparison shopping'] 
    },
    'sovrn.com': { 
      name: 'Sovrn', 
      category: 'Advertising', 
      dataCollected: ['Publisher monetization', 'Ad viewability', 'Audience data'] 
    },
    'yandex.ru': { 
      name: 'Yandex', 
      category: 'Analytics', 
      dataCollected: ['Search behavior', 'User metrics', 'Site performance'] 
    },
    'hotmart.com': { 
      name: 'Hotmart', 
      category: 'eCommerce', 
      dataCollected: ['Digital product sales', 'Affiliate tracking', 'Payment data'] 
    },
    'algolia.com': { 
      name: 'Algolia', 
      category: 'Search', 
      dataCollected: ['Search queries', 'Results interactions', 'Facet selections'] 
    },
    'bloomreach.com': { 
      name: 'Bloomreach', 
      category: 'Search', 
      dataCollected: ['Search behavior', 'Product discovery', 'Content personalization'] 
    },
    'searchspring.com': { 
      name: 'Searchspring', 
      category: 'Search', 
      dataCollected: ['Search queries', 'Product interactions', 'Navigation patterns'] 
    },
    'nextopia.com': { 
      name: 'Nextopia', 
      category: 'Search', 
      dataCollected: ['Search analytics', 'Product discovery', 'Merchandising data'] 
    },
    'klevu.com': { 
      name: 'Klevu', 
      category: 'Search', 
      dataCollected: ['Search terms', 'Product discovery', 'Shopping intent'] 
    },
    
    // Recommendation Engines
    'dynamic-yield.com': { 
      name: 'Dynamic Yield', 
      category: 'Personalization', 
      dataCollected: ['Behavioral data', 'Product recommendations', 'Personalization metrics'] 
    },
    'certona.com': { 
      name: 'Certona', 
      category: 'Personalization', 
      dataCollected: ['Recommendation data', 'Product affinities', 'Browsing patterns'] 
    },
    'emarsys.com': { 
      name: 'Emarsys', 
      category: 'Personalization', 
      dataCollected: ['Customer segments', 'Engagement data', 'Email interactions'] 
    },
    'nosto.com': { 
      name: 'Nosto', 
      category: 'Personalization', 
      dataCollected: ['Product recommendations', 'Browsing behavior', 'Shopping preferences'] 
    },
    
    // Data Management Platforms
    'krux.com': { 
      name: 'Krux (Salesforce DMP)', 
      category: 'Data Management', 
      dataCollected: ['Audience segments', 'Cross-device profiles', 'Marketing attributes'] 
    },
    'bluekai.com': { 
      name: 'BlueKai (Oracle DMP)', 
      category: 'Data Management', 
      dataCollected: ['Audience data', 'Third-party data', 'Campaign targeting'] 
    },
    'lotame.com': { 
      name: 'Lotame', 
      category: 'Data Management', 
      dataCollected: ['Audience profiles', 'Behavioral data', 'Cross-platform identity'] 
    },
    'neustar.biz': { 
      name: 'Neustar', 
      category: 'Data Management', 
      dataCollected: ['Identity resolution', 'Marketing analytics', 'Attribution data'] 
    },
    
    // Fraud Prevention & Security
    'sift.com': { 
      name: 'Sift', 
      category: 'Security', 
      dataCollected: ['Fraud signals', 'Transaction data', 'User behavior patterns'] 
    },
    'forter.com': { 
      name: 'Forter', 
      category: 'Security', 
      dataCollected: ['Transaction fraud', 'Account takeover signals', 'Payment data'] 
    },
    'signifyd.com': { 
      name: 'Signifyd', 
      category: 'Security', 
      dataCollected: ['Order information', 'Fraud indicators', 'Transaction legitimacy'] 
    },
    'riskified.com': { 
      name: 'Riskified', 
      category: 'Security', 
      dataCollected: ['Order data', 'Fraud detection', 'Customer legitimacy'] 
    },
    'cybersource.com': { 
      name: 'CyberSource', 
      category: 'Security', 
      dataCollected: ['Payment processing', 'Fraud detection', 'Transaction data'] 
    },
    'threatmetrix.com': { 
      name: 'ThreatMetrix', 
      category: 'Security', 
      dataCollected: ['Digital identity', 'Device fingerprinting', 'Trust signals'] 
    },
    'iovation.com': { 
      name: 'iovation', 
      category: 'Security', 
      dataCollected: ['Device reputation', 'Fraud signals', 'Authentication data'] 
    },
    
    // Location & Mapping
    'mapbox.com': { 
      name: 'Mapbox', 
      category: 'Location', 
      dataCollected: ['Map usage', 'Location searches', 'Route planning'] 
    },
    'here.com': { 
      name: 'HERE Technologies', 
      category: 'Location', 
      dataCollected: ['Map interactions', 'Location data', 'Navigation information'] 
    },
    'tomtom.com': { 
      name: 'TomTom', 
      category: 'Location', 
      dataCollected: ['Location searches', 'Map views', 'Navigation data'] 
    },
    
    // Web Performance
    'speedcurve.com': { 
      name: 'SpeedCurve', 
      category: 'Performance', 
      dataCollected: ['Page load times', 'Performance metrics', 'User experience data'] 
    },
    'pingdom.com': { 
      name: 'Pingdom', 
      category: 'Performance', 
      dataCollected: ['Uptime monitoring', 'Page speed', 'Performance bottlenecks'] 
    },
    'gtmetrix.com': { 
      name: 'GTmetrix', 
      category: 'Performance', 
      dataCollected: ['Page load times', 'Resource usage', 'Optimization opportunities'] 
    },
    
    // Content Delivery Networks (CDNs)
    'cdn77.com': { 
      name: 'CDN77', 
      category: 'Infrastructure', 
      dataCollected: ['Content delivery', 'Cache performance', 'Geographic distribution'] 
    },
    'jsdelivr.net': { 
      name: 'jsDelivr', 
      category: 'Infrastructure', 
      dataCollected: ['Script usage', 'Library distribution', 'Package versions'] 
    },
    'unpkg.com': { 
      name: 'UNPKG', 
      category: 'Infrastructure', 
      dataCollected: ['npm package usage', 'Script loading', 'Library dependencies'] 
    },
    'cdnjs.cloudflare.com': { 
      name: 'CDNJS', 
      category: 'Infrastructure', 
      dataCollected: ['JavaScript library usage', 'Resource loading', 'Library versions'] 
    },
    
    // Attribution & Cross-Channel Analytics
    'appsflyer.com': { 
      name: 'AppsFlyer', 
      category: 'Attribution', 
      dataCollected: ['Install attribution', 'Marketing campaigns', 'In-app events'] 
    },
    'singular.net': { 
      name: 'Singular', 
      category: 'Attribution', 
      dataCollected: ['ROI measurements', 'Marketing analytics', 'Campaign attribution'] 
    },
    'adjust.com': { 
      name: 'Adjust', 
      category: 'Attribution', 
      dataCollected: ['Mobile attribution', 'Fraud prevention', 'App analytics'] 
    },
    'branch.io': { 
      name: 'Branch', 
      category: 'Attribution', 
      dataCollected: ['Deep linking', 'Attribution data', 'Cross-platform analytics'] 
    },
    'kochava.com': { 
      name: 'Kochava', 
      category: 'Attribution', 
      dataCollected: ['App installs', 'Campaign analytics', 'Cross-device tracking'] 
    },
    
    // Lead Generation & Verification
    'clearbit.com': { 
      name: 'Clearbit', 
      category: 'Lead Data', 
      dataCollected: ['Company information', 'Contact enrichment', 'Lead intelligence'] 
    },
    'zoominfo.com': { 
      name: 'ZoomInfo', 
      category: 'Lead Data', 
      dataCollected: ['Business contacts', 'Company insights', 'Professional profiles'] 
    },
    'leadfeeder.com': { 
      name: 'Leadfeeder', 
      category: 'Lead Data', 
      dataCollected: ['Website visitors', 'Company identification', 'Lead tracking'] 
    },
    'leadforensics.com': { 
      name: 'Lead Forensics', 
      category: 'Lead Data', 
      dataCollected: ['Anonymous visitor identification', 'Company details', 'Visit analytics'] 
    },
    
    // Advertising Networks & Exchanges
    'appnexus.com': { 
      name: 'AppNexus', 
      category: 'Advertising', 
      dataCollected: ['Bid requests', 'Impression data', 'Audience targeting'] 
    },
    'indexexchange.com': { 
      name: 'Index Exchange', 
      category: 'Advertising', 
      dataCollected: ['Ad auction data', 'Publisher inventory', 'Bidding patterns'] 
    },
    'openx.com': { 
      name: 'OpenX', 
      category: 'Advertising', 
      dataCollected: ['Ad marketplace data', 'Auction metrics', 'Publisher analytics'] 
    },
    'bidswitch.com': { 
      name: 'BidSwitch', 
      category: 'Advertising', 
      dataCollected: ['Supply-side data', 'Demand-side data', 'Bid information'] 
    },
    'adform.com': { 
      name: 'Adform', 
      category: 'Advertising', 
      dataCollected: ['Campaign performance', 'Creative optimization', 'Audience data'] 
    },
    '33across.com': { 
      name: '33Across', 
      category: 'Advertising', 
      dataCollected: ['Publisher monetization', 'Attention metrics', 'User engagement'] 
    },
    'sharethrough.com': { 
      name: 'Sharethrough', 
      category: 'Advertising', 
      dataCollected: ['Native advertising', 'Content engagement', 'Publisher metrics'] 
    },
    'triplelift.com': { 
      name: 'TripleLift', 
      category: 'Advertising', 
      dataCollected: ['Native ads', 'Creative performance', 'Publisher yield'] 
    },
    'mediamath.com': { 
      name: 'MediaMath', 
      category: 'Advertising', 
      dataCollected: ['Programmatic buying', 'Campaign optimization', 'Audience targeting'] 
    },
    'thetradedesk.com': { 
      name: 'The Trade Desk', 
      category: 'Advertising', 
      dataCollected: ['Programmatic media buying', 'Cross-device tracking', 'Campaign data'] 
    },
    'lijit.com': { 
      name: 'Lijit (Sovrn)', 
      category: 'Advertising', 
      dataCollected: ['Publisher ad metrics', 'Audience data', 'Content monetization'] 
    },
    'freewheel.com': { 
      name: 'FreeWheel', 
      category: 'Advertising', 
      dataCollected: ['Video ad metrics', 'Audience targeting', 'Content monetization'] 
    },
    'undertone.com': { 
      name: 'Undertone', 
      category: 'Advertising', 
      dataCollected: ['High impact ads', 'Brand metrics', 'Creative performance'] 
    },
    
    // Retargeting & Remarketing
    'criteo.net': { 
      name: 'Criteo', 
      category: 'Retargeting', 
      dataCollected: ['Product views', 'Shopping cart data', 'Purchase history'] 
    },
    'adroll.com': { 
      name: 'AdRoll', 
      category: 'Retargeting', 
      dataCollected: ['Site visitor data', 'Product interests', 'Abandoned carts'] 
    },
    'steelhouse.com': { 
      name: 'SteelHouse', 
      category: 'Retargeting', 
      dataCollected: ['Visitor behavior', 'Cross-device tracking', 'Campaign performance'] 
    },
    'rtbhouse.com': { 
      name: 'RTB House', 
      category: 'Retargeting', 
      dataCollected: ['Deep learning ad optimization', 'User interests', 'Product recommendations'] 
    },
    
    // Video & Rich Media Advertising
    'brightcove.com': { 
      name: 'Brightcove', 
      category: 'Video', 
      dataCollected: ['Video analytics', 'Playback metrics', 'Viewer engagement'] 
    },
    'jwplayer.com': { 
      name: 'JW Player', 
      category: 'Video', 
      dataCollected: ['Video plays', 'Engagement data', 'Content metrics'] 
    },
    'vidyard.com': { 
      name: 'Vidyard', 
      category: 'Video', 
      dataCollected: ['Video views', 'Viewer engagement', 'Content performance'] 
    },
    'wistia.com': { 
      name: 'Wistia', 
      category: 'Video', 
      dataCollected: ['Video analytics', 'Viewer heat maps', 'Engagement metrics'] 
    },
    'tremor.com': { 
      name: 'Tremor Video', 
      category: 'Video', 
      dataCollected: ['Video ad metrics', 'Viewer behavior', 'Campaign performance'] 
    },
    'spotxchange.com': { 
      name: 'SpotX', 
      category: 'Video', 
      dataCollected: ['Video ad performance', 'Audience targeting', 'Publisher metrics'] 
    },
    
    // Cryptocurrency & Web3
    'metamask.io': { 
      name: 'MetaMask', 
      category: 'Web3', 
      dataCollected: ['Wallet connections', 'Transaction requests', 'Network activity'] 
    },
    'walletconnect.org': { 
      name: 'WalletConnect', 
      category: 'Web3', 
      dataCollected: ['Wallet connections', 'DApp interactions', 'Session data'] 
    },
    'infura.io': { 
      name: 'Infura', 
      category: 'Web3', 
      dataCollected: ['Blockchain API calls', 'Node usage', 'Transaction data'] 
    },
    'alchemy.com': { 
      name: 'Alchemy', 
      category: 'Web3', 
      dataCollected: ['Blockchain API usage', 'Smart contract interactions', 'NFT data'] 
    },
    
    // Healthcare & Pharma
    'iqvia.com': { 
      name: 'IQVIA', 
      category: 'Healthcare', 
      dataCollected: ['Healthcare analytics', 'Patient insights', 'Prescriber behavior'] 
    },
    'doximity.com': { 
      name: 'Doximity', 
      category: 'Healthcare', 
      dataCollected: ['HCP engagement', 'Medical network data', 'Professional interactions'] 
    },
    'veeva.com': { 
      name: 'Veeva', 
      category: 'Healthcare', 
      dataCollected: ['HCP interactions', 'Life sciences data', 'Engagement metrics'] 
    },
    
    // Financial Services
    'yodlee.com': { 
      name: 'Yodlee', 
      category: 'Financial', 
      dataCollected: ['Financial account data', 'Transaction history', 'Financial behavior'] 
    },
    'plaid.com': { 
      name: 'Plaid', 
      category: 'Financial', 
      dataCollected: ['Bank account linking', 'Transaction data', 'Financial accounts'] 
    },
    'mint.com': { 
      name: 'Mint', 
      category: 'Financial', 
      dataCollected: ['Financial account data', 'Budget information', 'Spending patterns'] 
    },
    
    // Browser Extensions & Add-ons
    'lastpass.com': { 
      name: 'LastPass', 
      category: 'Browser Extension', 
      dataCollected: ['Password usage', 'Site logins', 'Form fills'] 
    },
    'grammarly.com': { 
      name: 'Grammarly', 
      category: 'Browser Extension', 
      dataCollected: ['Text entry', 'Writing patterns', 'Correction acceptance'] 
    },
    'honey.com': { 
      name: 'Honey', 
      category: 'Browser Extension', 
      dataCollected: ['Shopping behavior', 'Coupon usage', 'Price tracking'] 
    },
    
    // Internet of Things (IoT)
    'smartthings.com': { 
      name: 'SmartThings', 
      category: 'IoT', 
      dataCollected: ['Device usage', 'Home automation', 'Connected devices'] 
    },
    'nest.com': { 
      name: 'Nest', 
      category: 'IoT', 
      dataCollected: ['Temperature preferences', 'Home occupancy', 'Energy usage'] 
    },
    'ring.com': { 
      name: 'Ring', 
      category: 'IoT', 
      dataCollected: ['Video recordings', 'Motion events', 'Device interactions'] 
    },
    
    // Travel & Hospitality
    'sojern.com': { 
      name: 'Sojern', 
      category: 'Travel', 
      dataCollected: ['Travel intent', 'Booking behavior', 'Destination interest'] 
    },
    'tripadvisor.com': { 
      name: 'TripAdvisor', 
      category: 'Travel', 
      dataCollected: ['Travel reviews', 'Accommodation searches', 'Activity bookings'] 
    },
    'booking.com': { 
      name: 'Booking.com', 
      category: 'Travel', 
      dataCollected: ['Travel searches', 'Booking history', 'Accommodation preferences'] 
    },
    'expedia.com': { 
      name: 'Expedia', 
      category: 'Travel', 
      dataCollected: ['Travel searches', 'Booking data', 'Trip preferences'] 
    },
    
    // Real Estate
    'zillow.com': { 
      name: 'Zillow', 
      category: 'Real Estate', 
      dataCollected: ['Property searches', 'Home valuations', 'Mortgage inquiries'] 
    },
    'realtor.com': { 
      name: 'Realtor.com', 
      category: 'Real Estate', 
      dataCollected: ['Property interests', 'Home searches', 'Location preferences'] 
    },
    'apartments.com': { 
      name: 'Apartments.com', 
      category: 'Real Estate', 
      dataCollected: ['Rental searches', 'Location preferences', 'Rental applications'] 
    },
    
    // Employment & Job Search
    'indeed.com': { 
      name: 'Indeed', 
      category: 'Employment', 
      dataCollected: ['Job searches', 'Resume data', 'Application activity'] 
    },
    'glassdoor.com': { 
      name: 'Glassdoor', 
      category: 'Employment', 
      dataCollected: ['Company research', 'Salary data', 'Interview information'] 
    },
    'ziprecruiter.com': { 
      name: 'ZipRecruiter', 
      category: 'Employment', 
      dataCollected: ['Job applications', 'Resume information', 'Employment preferences'] 
    }
  };
  
// Initialize extension data
chrome.runtime.onInstalled.addListener(async () => {
  try {
      await chrome.storage.local.set({
          trackerData: {},
          permissionData: {},
          trackerBlocked: {},
          unusedPermissions: {},
          lastCleanupDate: Date.now(),
          blockedCount: 0
      });
      await setupBlockingRules();
      console.log('Privacy Guardian installed and initialized');
  } catch (error) {
      console.error('Initialization error:', error);
  }
});

// Set up blocking rules for the declarativeNetRequest API
async function setupBlockingRules() {
  try {
      const { trackerBlocked } = await chrome.storage.local.get(['trackerBlocked']);
      const rules = [];
      let ruleId = 1;
      for (const trackerDomain in trackerBlocked) {
          if (trackerBlocked[trackerDomain]) {
              rules.push({
                  id: ruleId++,
                  priority: 1,
                  action: { type: 'block' },
                  condition: {
                      urlFilter: trackerDomain,
                      resourceTypes: [
                          'script', 'image', 'xmlhttprequest', 'sub_frame',
                          'ping', 'csp_report', 'media', 'websocket', 'other'
                      ]
                  }
              });
          }
      }

      await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: Array.from({ length: ruleId - 1 }, (_, i) => i + 1),
          addRules: rules
      });
  } catch (error) {
      console.error('Error setting up blocking rules:', error);
  }
}

// Track trackers using webRequest API
chrome.webRequest.onCompleted.addListener(
  (details) => {
      if (details.tabId < 0) return;

      (async () => {
          try {
              const url = new URL(details.url);
              const domain = url.hostname;
              const tabId = details.tabId;
              const timestamp = Date.now();

              let isTracker = false;
              let trackerInfo = null;
              let trackerBaseDomain = '';

              for (const trackerDomain in knownTrackers) {
                  if (domain.includes(trackerDomain)) {
                      isTracker = true;
                      trackerInfo = knownTrackers[trackerDomain];
                      trackerBaseDomain = trackerDomain;
                      break;
                  }
              }

              if (isTracker) {
                  let tab;
                  try {
                      tab = await chrome.tabs.get(tabId);
                  } catch (tabError) {
                      console.warn(`Skipping tracker processing for invalid tab ID ${tabId}`);
                      return;
                  }
                  if (!tab?.url) return;

                  const pageUrl = new URL(tab.url).hostname;
                  const { trackerData } = await chrome.storage.local.get(['trackerData']);
                  const updatedData = trackerData || {};

                  if (!updatedData[pageUrl]) {
                      updatedData[pageUrl] = {
                          trackers: {},
                          lastVisited: timestamp
                      };
                  }

                  if (!updatedData[pageUrl].trackers[domain]) {
                      updatedData[pageUrl].trackers[domain] = {
                          count: 0,
                          baseDomain: trackerBaseDomain,
                          info: trackerInfo,
                          firstSeen: timestamp
                      };
                  }

                  updatedData[pageUrl].trackers[domain].count++;
                  updatedData[pageUrl].trackers[domain].lastSeen = timestamp;
                  updatedData[pageUrl].lastVisited = timestamp;

                  await chrome.storage.local.set({ trackerData: updatedData });
                  await updateBadge(tabId, updatedData[pageUrl]);

                  const { trackerBlocked, blockedCount } = await chrome.storage.local.get(['trackerBlocked', 'blockedCount']);
                  if (trackerBlocked?.[trackerBaseDomain]) {
                      await chrome.storage.local.set({
                          blockedCount: (blockedCount || 0) + 1
                      });
                  }
              }
          } catch (error) {
              console.error('Error in webRequest listener:', error);
          }
      })();
  },
  { urls: ["<all_urls>"] }
);

// Update badge with tracker count
async function updateBadge(tabId, pageData) {
  try {
      if (!pageData?.trackers) {
          await chrome.action.setBadgeText({ tabId, text: "0" });
          await chrome.action.setBadgeBackgroundColor({ tabId, color: '#2ECC71' });
          return;
      }

      const trackerCount = Object.keys(pageData.trackers).length;
      const { trackerBlocked } = await chrome.storage.local.get(['trackerBlocked']);
      let blockedCount = 0;

      for (const tracker in pageData.trackers) {
          if (trackerBlocked?.[pageData.trackers[tracker].baseDomain]) {
              blockedCount++;
          }
      }

      const badgeText = blockedCount > 0
          ? `${blockedCount}/${trackerCount}`
          : trackerCount.toString();

      await chrome.action.setBadgeText({ tabId, text: badgeText });

      let badgeColor = '#E74C3C';
      if (trackerCount === 0 || blockedCount === trackerCount) {
          badgeColor = '#2ECC71';
      } else if (blockedCount > 0) {
          badgeColor = '#F39C12';
      }

      await chrome.action.setBadgeBackgroundColor({ tabId, color: badgeColor });
  } catch (error) {
      console.error('Error updating badge:', error);
  }
}

// Update badge when tab is activated/updated
chrome.tabs.onActivated.addListener(({ tabId }) => updateTabBadge(tabId));
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === 'complete') {
      updateTabBadge(tabId);
  }
});

async function updateTabBadge(tabId) {
  try {
      const tab = await chrome.tabs.get(tabId);
      if (!tab?.url) return;

      const pageUrl = new URL(tab.url).hostname;
      const { trackerData } = await chrome.storage.local.get(['trackerData']);
      await updateBadge(tabId, trackerData?.[pageUrl]);
  } catch (error) {
      console.error('Error updating tab badge:', error);
  }
}

// Permission monitoring
const PERMISSION_CHECK_INTERVAL = 24 * 60 * 60 * 1000;
const PERMISSION_TYPES = [
  'geolocation',
  'notifications',
  'clipboard-read',
  'clipboard-write'
];

chrome.alarms.create('permissionCheck', {
  periodInMinutes: PERMISSION_CHECK_INTERVAL / (60 * 1000)
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'permissionCheck') {
      checkForUnusedPermissions();
  }
});

async function detectSitePermissions(url) {
  if (!url) return;

  try {
      const domain = new URL(url).hostname;
      const { permissionData } = await chrome.storage.local.get(['permissionData']);
      const permData = permissionData || {};

      if (!permData[domain]) {
          permData[domain] = {};
      }

      for (const permType of PERMISSION_TYPES) {
          try {
              const permRequest = { origins: [`https://${domain}/*`] };
              if (!['clipboard-read', 'clipboard-write'].includes(permType)) {
                  permRequest.permissions = [permType];
              }

              const hasPermission = await chrome.permissions.contains(permRequest);
              if (hasPermission) {
                  permData[domain][permType] = {
                      granted: true,
                      lastUsed: Date.now(),
                      notified: permData[domain][permType]?.notified || false
                  };

                  if (!permData[domain][permType].notified && permType === 'geolocation') {
                      permData[domain][permType].notified = true;
                      await chrome.notifications.create({
                          type: 'basic',
                          iconUrl: 'icons/icon128.png',
                          title: 'Privacy Guardian',
                          message: `Site ${domain} has ${permType} permission. Click to review.`,
                          priority: 2
                      });
                  }
              }
          } catch (error) {
              console.error(`Error checking permission ${permType}:`, error);
          }
      }

      await chrome.storage.local.set({ permissionData: permData });
  } catch (error) {
      console.error('Error in permission detection:', error);
  }
}

async function checkForUnusedPermissions() {
  try {
      const { permissionData, lastCleanupDate } = await chrome.storage.local.get(['permissionData', 'lastCleanupDate']);
      const now = Date.now();
      const thirtyDaysAgo = now - (30 * 24 * 60 * 60 * 1000);
      const unusedPermissions = {};

      for (const site in permissionData) {
          for (const permission in permissionData[site]) {
              if (permissionData[site][permission].lastUsed < thirtyDaysAgo) {
                  unusedPermissions[site] = unusedPermissions[site] || [];
                  unusedPermissions[site].push(permission);
              }
          }
      }

      await chrome.storage.local.set({
          unusedPermissions,
          lastCleanupDate: now
      });

      if (Object.keys(unusedPermissions).length > 0) {
          await chrome.notifications.create({
              type: 'basic',
              iconUrl: 'icons/icon128.png',
              title: 'Privacy Guardian',
              message: `Found unused permissions for ${Object.keys(unusedPermissions).length} sites. Click to review.`,
              priority: 1
          });
      }
  } catch (error) {
      console.error('Error checking unused permissions:', error);
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
      detectSitePermissions(tab.url);
  }
});

chrome.notifications.onClicked.addListener(() => {
  chrome.action.openPopup();
});

// Message handling
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  const handlers = {
      'getTrackerData': handleGetTrackerData,
      'blockTracker': handleBlockTracker,
      'unblockTracker': handleUnblockTracker,
      'clearSiteData': handleClearSiteData,
      'getUnusedPermissions': handleGetUnusedPermissions,
      'removePermission': handleRemovePermission,
      'getPermissionStats': handleGetPermissionStats,
      'permissionRequested': handlePermissionRequested,
      'scriptDetected': handleScriptDetected,
      'cookieSet': handleCookieSet,
      'localStorageSet': handleLocalStorageSet
  };

  if (handlers[message.action]) {
      handlers[message.action](message, sendResponse);
      return true;
  }
});

async function handleGetTrackerData(message, sendResponse) {
  try {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tabs.length) {
          sendResponse({ success: false, error: 'No active tab' });
          return;
      }

      const pageUrl = new URL(tabs[0].url).hostname;
      const { trackerData } = await chrome.storage.local.get(['trackerData']);
      sendResponse({
          success: true,
          url: pageUrl,
          data: trackerData?.[pageUrl] || { trackers: {} }
      });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleBlockTracker({ tracker }, sendResponse) {
  try {
      const { trackerBlocked } = await chrome.storage.local.get(['trackerBlocked']);
      const blockedTrackers = { ...trackerBlocked, [tracker]: true };
      await chrome.storage.local.set({ trackerBlocked: blockedTrackers });
      await setupBlockingRules();

      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs.length) {
          await updateTabBadge(tabs[0].id);
      }

      sendResponse({ success: true });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleUnblockTracker({ tracker }, sendResponse) {
  try {
      const { trackerBlocked } = await chrome.storage.local.get(['trackerBlocked']);
      const blockedTrackers = { ...trackerBlocked };
      delete blockedTrackers[tracker];
      await chrome.storage.local.set({ trackerBlocked: blockedTrackers });
      await setupBlockingRules();

      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tabs.length) {
          await updateTabBadge(tabs[0].id);
      }

      sendResponse({ success: true });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleClearSiteData({ url }, sendResponse) {
  try {
      await chrome.browsingData.remove({
          origins: [`https://${url}/*`, `http://${url}/*`]
      }, {
          cache: true,
          cookies: true,
          localStorage: true,
          sessionStorage: true
      });
      sendResponse({ success: true });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleGetUnusedPermissions(message, sendResponse) {
  try {
      const { unusedPermissions } = await chrome.storage.local.get(['unusedPermissions']);
      sendResponse({ success: true, unusedPermissions: unusedPermissions || {} });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleRemovePermission({ site, permission }, sendResponse) {
  try {
      const permissionObj = { origins: [`https://${site}/*`] };
      if (!['clipboard-read', 'clipboard-write'].includes(permission)) {
          permissionObj.permissions = [permission];
      }

      const removed = await chrome.permissions.remove(permissionObj);
      if (removed) {
          const { permissionData } = await chrome.storage.local.get(['permissionData']);
          if (permissionData?.[site]?.[permission]) {
              delete permissionData[site][permission];
              if (!Object.keys(permissionData[site]).length) {
                  delete permissionData[site];
              }
              await chrome.storage.local.set({ permissionData });
          }
      }
      sendResponse({ success: removed });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleGetPermissionStats(message, sendResponse) {
  try {
      const { permissionData } = await chrome.storage.local.get(['permissionData']);
      sendResponse({ success: true, permissionData: permissionData || {} });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handlePermissionRequested({ permission, url }, sendResponse) {
  try {
      const { permissionData } = await chrome.storage.local.get(['permissionData']);
      const domain = new URL(`https://${url}`).hostname;
      const permData = permissionData || {};
      if (!permData[domain]) permData[domain] = {};
      permData[domain][permission] = {
          granted: false,
          lastRequested: Date.now()
      };
      await chrome.storage.local.set({ permissionData: permData });
      sendResponse({ success: true });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleScriptDetected({ url, pageUrl }, sendResponse) {
  try {
      const domain = new URL(url).hostname;
      for (const trackerDomain in knownTrackers) {
          if (domain.includes(trackerDomain)) {
              const { trackerData } = await chrome.storage.local.get(['trackerData']);
              const updatedData = trackerData || {};
              if (!updatedData[pageUrl]) {
                  updatedData[pageUrl] = { trackers: {}, lastVisited: Date.now() };
              }
              if (!updatedData[pageUrl].trackers[domain]) {
                  updatedData[pageUrl].trackers[domain] = {
                      count: 0,
                      baseDomain: trackerDomain,
                      info: knownTrackers[trackerDomain],
                      firstSeen: Date.now()
                  };
              }
              updatedData[pageUrl].trackers[domain].count++;
              await chrome.storage.local.set({ trackerData: updatedData });
              break;
          }
      }
      sendResponse({ success: true });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleCookieSet({ value, url }, sendResponse) {
  try {
      const { permissionData } = await chrome.storage.local.get(['permissionData']);
      const domain = new URL(`https://${url}`).hostname;
      const permData = permissionData || {};
      if (!permData[domain]) permData[domain] = {};
      permData[domain].cookies = {
          lastSet: Date.now(),
          sample: value.slice(0, 100)
      };
      await chrome.storage.local.set({ permissionData: permData });
      sendResponse({ success: true });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}

async function handleLocalStorageSet({ key, url }, sendResponse) {
  try {
      const { permissionData } = await chrome.storage.local.get(['permissionData']);
      const domain = new URL(`https://${url}`).hostname;
      const permData = permissionData || {};
      if (!permData[domain]) permData[domain] = {};
      permData[domain].localStorage = {
          lastSet: Date.now(),
          sampleKey: key
      };
      await chrome.storage.local.set({ permissionData: permData });
      sendResponse({ success: true });
  } catch (error) {
      sendResponse({ success: false, error: error.message });
  }
}