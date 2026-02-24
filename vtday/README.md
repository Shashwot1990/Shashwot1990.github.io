# 💕 Shashwot's Heart - 14 Days of Valentine Love 💕

A beautiful, interactive multi-page Valentine's website with funny choices, password protection, countdown timer, map, photo gallery, and 14 unique themed days - all in English and Nepali!

## 🎮 How It Works - The Journey

### Step 1: Main Password Entry (index.html)
- **Password:** `iloveyou`
- Opens to a fun choice screen

### Step 2: Choose Your Heart 💖 vs ⚽
**Two options:**
1. **Football Heart** (Messi) ⚽ - Click this and you get a funny error message:
   - "Sorry, but this part of Shashwot's heart is reserved for Messi and epic football fails! ⚽😂"
   - Forces you to choose the other option 😏

2. **Koi Koi Heart** 💖 - The correct choice!
   - Takes you to the romantic section

### Step 3: Koi Koi Heart Page (koikoi.html)
This page features:
- ⏰ **Live countdown** of days together (since September 14, 2024)
- 📍 **Interactive map** showing "Where It All Began"
- 📸 **Photo gallery** (placeholders - add your own photos!)
- 💕 **Valentine Mode button** to access all 14 days

### Step 4: Valentine Mode (valentine-mode.html)
- Lists all 14 days in a beautiful grid
- Each day is locked with its own password
- Click any day to enter

### Step 5: Individual Days (Each has unique password!)
Each of the 14 days has a unique password and romantic content in English & Nepali

---

## 🔐 All Passwords

### Main Entry:
- **index.html** → Password: `iloveyou`

### Individual Days:
| Day | Theme | Password | Icon |
|-----|-------|----------|------|
| Day 1 | Rose Day (गुलाबको दिन) | `rose` | 🌹 |
| Day 2 | Propose Day (प्रस्ताव दिन) | `forever` | 💍 |
| Day 3 | Chocolate Day (चकलेटको दिन) | `sweet` | 🍫 |
| Day 4 | Teddy Day (टेडी दिन) | `cuddle` | 🧸 |
| Day 5 | Promise Day (प्रतिज्ञा दिन) | `promise` | 🤝 |
| Day 6 | Hug Day (अंगाल्ने दिन) | `embrace` | 🤗 |
| Day 7 | Kiss Day (चुम्बनको दिन) | `kiss` | 💋 |
| Day 8 | Valentine's Day (भ्यालेन्टाइन दिन) | `valentine` | 💝 |
| Day 9 | Music Day (संगीत दिन) | `melody` | 🎵 |
| Day 10 | Photo Day (तस्बिर दिन) | `memories` | 📷 |
| Day 11 | Dream Day (सपना दिन) | `dreams` | ✨ |
| Day 12 | Adventure Day (साहसिक दिन) | `journey` | 🗺️ |
| Day 13 | Gratitude Day (कृतज्ञता दिन) | `grateful` | 🙏 |
| Day 14 | Forever Day (सदाको लागि दिन) | `infinity` | ♾️ |

---

## 📁 File Structure

```
├── index.html              # Main entry with password & funny choice
├── koikoi.html            # Countdown, map, photos, Valentine Mode button
├── valentine-mode.html     # Lists all 14 days
├── day1-rose.html         # Individual day pages (password protected)
├── day2-propose.html
├── day3-chocolate.html
├── day4-teddy.html
├── day5-promise.html
├── day6-hug.html
├── day7-kiss.html
├── day8-valentine.html
├── day9-music.html
├── day10-photo.html
├── day11-dream.html
├── day12-adventure.html
├── day13-gratitude.html
└── day14-forever.html
```

---

## 🎨 Features

### ✨ Main Features:
- **Funny Interactive Choice:** Football vs Love Heart (with error modal)
- **Password Protection:** Main page + individual passwords for each day
- **Bilingual Content:** All pages in English & Nepali (नेपाली)
- **Live Countdown:** Real-time counter of days together
- **Interactive Map:** Leaflet map with custom heart marker
- **Photo Gallery:** Placeholder gallery (add your own images!)
- **Beautiful Animations:** Falling hearts, floating emojis, smooth transitions
- **Unique Color Schemes:** Each day has its own gradient theme
- **Fully Responsive:** Works perfectly on mobile, tablet, and desktop

### 💝 Individual Day Features:
- Password entry screen for each day
- Beautiful gradient backgrounds matching the theme
- Romantic messages in both languages
- Custom icons and animations
- Back navigation to Valentine Mode

---

## 🚀 How to Use

1. **Open `index.html`** in your web browser
2. **Enter password:** `iloveyou`
3. **Click "Football Heart"** to see the funny error message (optional 😄)
4. **Click "Koi Koi Heart"** to continue
5. **Enjoy the countdown, map, and photos**
6. **Click "Enter Valentine Mode"** button
7. **Click any day** and enter its specific password (see table above)
8. **Navigate** between days using the back button

---

## ✏️ Customization Guide

### Change Main Password:
Open `index.html` and find:
```javascript
const CONFIG = {
  mainPassword: "iloveyou"  // Change this
};
```

### Change Individual Day Passwords:
1. Open `valentine-mode.html`
2. Find the DAYS array and change the `password` field
3. Also update the corresponding day HTML file

### Add Your Own Photos:
In `koikoi.html`, replace the photo placeholders:
```html
<div class="gallery-placeholder">📸</div>
```
With:
```html
<img src="your-photo.jpg" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;">
```

### Update Your Date:
In `koikoi.html`, change:
```javascript
const startDate = new Date('2024-09-14T19:30:00');  // Your date
```

### Update Map Location:
In `koikoi.html`, change coordinates:
```javascript
const map = L.map('map').setView([YOUR_LAT, YOUR_LONG], 15);
```

### Customize Messages:
Edit any day HTML file and modify the content in the `.message` div.

---

## 🎁 Perfect For:

- 💝 Valentine's Day surprise
- 🎂 Anniversary celebration  
- 💍 Proposal planning
- 🎉 Birthday gift
- ❤️ Just because you love them!

---

## 💡 Pro Tips:

1. **Daily Reveals:** Send one day's password each day leading to Valentine's
2. **Hide Passwords:** Create a treasure hunt where they find each password
3. **Add Photos:** Replace placeholders with your actual couple photos
4. **Personal Touch:** Update messages with your inside jokes and memories
5. **Host Online:** Upload to free hosting (GitHub Pages, Netlify) for easy sharing
6. **Print Backup:** Print the messages as physical cards too
7. **Video Messages:** Link to video messages in the day pages

---

## 🌐 Browser Support

Works perfectly on:
- ✅ Chrome
- ✅ Firefox  
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS & Android)

---

## 📱 Mobile Friendly

All pages are 100% responsive:
- Adaptive layouts for small screens
- Touch-friendly buttons
- Optimized animations
- Fast loading

---

## 🛠️ Technical Details

- **Pure HTML, CSS, JavaScript** - No frameworks needed
- **Leaflet.js** - For interactive maps
- **Google Fonts** - Beautiful typography
- **No server required** - Works offline
- **Session Storage** - For password flow between pages

---

## 🎭 The Funny Part

The **Football Heart** (Messi option) is intentionally the "wrong" choice! When clicked:
- Shows a hilarious error modal
- Message: "Sorry, but this part of Shashwot's heart is reserved for Messi and epic football fails! ⚽😂"
- Forces them to choose the romantic **Koi Koi Heart** option
- Perfect ice-breaker and shows your sense of humor! 😄

---

## ❤️ Made With Love

Every detail of this website was crafted with care to create a magical, romantic experience. The combination of:
- Nepali cultural touches (देवनागरी script)
- Modern web design
- Personal customization
- Interactive elements
- Humor and romance

...makes this a truly unique gift!

---

## 📝 Quick Start Checklist

- [ ] Open index.html
- [ ] Test the Messi joke (Football Heart)
- [ ] Enter Koi Koi Heart section
- [ ] Customize the countdown date
- [ ] Update map coordinates
- [ ] Add your photos
- [ ] Personalize the messages
- [ ] Test all 14 day passwords
- [ ] Share with your loved one! 💕

---

**Remember:** The most important customization is adding YOUR personal touch, YOUR memories, and YOUR love story! 💕

Enjoy your romantic journey through 14 days of love! 🎉✨

---

**Made with 💕 for Shashwot and his special someone**
