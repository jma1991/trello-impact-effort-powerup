# Impact-Effort Matrix Power-Up for Trello

A Trello Power-Up that helps you prioritize cards using the Impact-Effort Matrix framework.

## What is the Impact-Effort Matrix?

The Impact-Effort Matrix is a decision-making tool that helps prioritize tasks based on their potential impact and the effort required to complete them. Tasks are categorized into four quadrants:

| | Low Effort | High Effort |
|---|---|---|
| **High Impact** | 🟢 **Quick Wins** – Do first | 🔵 **Major Projects** – Plan carefully |
| **Low Impact** | 🟡 **Fill-ins** – Spare time tasks | 🔴 **Thankless Tasks** – Avoid or minimize |

Learn more: [Impact-Effort Matrix on Untools](https://untools.co/impact-effort-matrix/)

## Features

- **Card Button** – Set Impact (High/Low) and Effort (High/Low) for any card
- **Quadrant Preview** – See the resulting quadrant before saving
- **Card Badges** – Color-coded quadrant displayed on card front
- **Detail Badges** – Impact, Effort, and Quadrant shown on card back

## Installation

### For Personal Use

1. Go to [Trello Power-Ups Admin](https://trello.com/power-ups/admin)
2. Click **New**
3. Fill in:
   - **Name**: Impact-Effort Matrix
   - **Iframe connector URL**: `https://jma1991.github.io/trello-impact-effort-powerup/`
4. Click **Create**
5. Go to the **Capabilities** tab and enable:
   - `card-buttons`
   - `card-badges`
   - `card-detail-badges`
6. Add the Power-Up to your board via **Power-Ups** menu

### For Development

```bash
git clone https://github.com/jma1991/trello-impact-effort-powerup.git
cd trello-impact-effort-powerup
# Serve locally with HTTPS (required by Trello)
npx serve
```

## Usage

1. Open any card on your board
2. Click the **Impact / Effort** button in the Power-Ups section
3. Select **Impact** (High or Low)
4. Select **Effort** (High or Low)
5. Click **Save**

The card will display a colored badge indicating its quadrant:
- 🟢 Green = Quick Win
- 🔵 Blue = Major Project
- 🟡 Yellow = Fill-in
- 🔴 Red = Thankless Task

## Project Structure

```
├── index.html      # Power-Up connector (capabilities registration)
├── popup.html      # Input form for setting Impact/Effort
├── icon.svg        # Power-Up icon (2x2 matrix)
├── manifest.json   # Power-Up metadata
├── css/
│   └── style.css   # Styles (legacy)
├── js/
│   └── client.js   # JavaScript (legacy)
└── card-back.html  # Card back section (legacy)
```

## License

MIT
