// Impact-Effort Matrix Power-Up for Trello
console.log('Impact-Effort Matrix Power-Up: Loading...');

// Quadrant definitions with colors and guidance
const QUADRANTS = {
  quickWin: {
    name: 'Quick Win',
    color: 'green',
    icon: '🟢',
    guidance: 'Do first – highest ROI'
  },
  majorProject: {
    name: 'Major Project',
    color: 'blue',
    icon: '🔵',
    guidance: 'Plan carefully, do after quick wins'
  },
  fillIn: {
    name: 'Fill-in',
    color: 'yellow',
    icon: '🟡',
    guidance: 'Do when you have spare time'
  },
  thanklessTask: {
    name: 'Thankless Task',
    color: 'red',
    icon: '🔴',
    guidance: 'Avoid or minimize'
  }
};

// Determine quadrant based on impact and effort
function getQuadrant(impact, effort) {
  if (impact === 'high' && effort === 'low') return QUADRANTS.quickWin;
  if (impact === 'high' && effort === 'high') return QUADRANTS.majorProject;
  if (impact === 'low' && effort === 'low') return QUADRANTS.fillIn;
  if (impact === 'low' && effort === 'high') return QUADRANTS.thanklessTask;
  return null;
}

// Base URL for the Power-Up
var POWER_UP_BASE_URL = 'https://jma1991.github.io/trello';

// Card Back Section - where users set Impact and Effort
function cardBackSection(t) {
  console.log('Impact-Effort Matrix: cardBackSection called');
  return {
    title: 'Impact-Effort Matrix',
    icon: POWER_UP_BASE_URL + '/icon.svg',
    content: {
      type: 'iframe',
      url: t.signUrl(POWER_UP_BASE_URL + '/card-back.html'),
      height: 120
    }
  };
}

// Card Badges - show quadrant on card front
function cardBadges(t) {
  return t.get('card', 'shared', 'impactEffort')
    .then(function(data) {
      if (!data || !data.impact || !data.effort) {
        return [{
          text: 'Rate Impact/Effort',
          color: 'light-gray'
        }];
      }

      const quadrant = getQuadrant(data.impact, data.effort);
      if (!quadrant) return [];

      return [{
        text: quadrant.name,
        color: quadrant.color
      }];
    });
}

// Card Detail Badges - show more detail on card back
function cardDetailBadges(t) {
  return t.get('card', 'shared', 'impactEffort')
    .then(function(data) {
      if (!data || !data.impact || !data.effort) {
        return [];
      }

      const quadrant = getQuadrant(data.impact, data.effort);
      if (!quadrant) return [];

      return [{
        title: 'Quadrant',
        text: quadrant.icon + ' ' + quadrant.name,
        color: quadrant.color
      }];
    });
}

// Initialize the Power-Up
console.log('Impact-Effort Matrix: Initializing Power-Up...');
console.log('TrelloPowerUp available:', typeof TrelloPowerUp !== 'undefined');

try {
  TrelloPowerUp.initialize({
    'card-back-section': cardBackSection,
    'card-badges': cardBadges,
    'card-detail-badges': cardDetailBadges
  });
  console.log('Impact-Effort Matrix: Power-Up initialized successfully');
} catch (e) {
  console.error('Impact-Effort Matrix: Failed to initialize', e);
}
