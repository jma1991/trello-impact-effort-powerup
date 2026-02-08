// Impact-Effort Matrix Power-Up for Trello

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

// Card Back Section - where users set Impact and Effort
function cardBackSection(t) {
  return {
    title: 'Impact-Effort Matrix',
    icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176298.png',
    content: {
      type: 'iframe',
      url: t.signUrl('./card-back.html'),
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
TrelloPowerUp.initialize({
  'card-back-section': cardBackSection,
  'card-badges': cardBadges,
  'card-detail-badges': cardDetailBadges
});
