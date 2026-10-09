# 03 — DESIGN ARCHITECTURE: Udhayaa Textile Processing

**Purpose:** The final design system and architectural blueprint for the website, unifying the brand facts, planning, and newly provided visual and address assets.
**Source:** Derived from `03_DESIGN_ARCHITECTURE.md`, `logo/colour pallete.txt`, and `address details.txt`.

---

## 1. BRIEF
**Brand in 5 words:** Professional, established, dependable, B2B-focused, specialized.
**Axis scores (tone, price, energy, style, warmth, density):**
- Tone: 2 (Serious/formal, reflecting B2B reliability)
- Price feel: 3 (Balanced, competitive but quality-focused)
- Energy: 2 (Calm/quiet, structured)
- Style: 2 (Classic/traditional)
- Warmth: 3 (Balanced - professional yet human communication)
- Density: 4 (Rich/detailed, important for fabric specs)

**Feels like / must never feel like:**
- **Feels like:** Credible, structured, calm, professional. A reliable manufacturing partner.
- **Must never feel like:** A consumer retail (D2C) store, a flashy startup, or a generic template with fake handshakes.

**First-5-second feeling:**
"This is a capable, experienced processing partner based in Erode that I can trust with my export fabric requirements."

---

## 2. SITE TYPE & INDUSTRY PLAYBOOK USED
**Playbook:** `8.2 B2B MANUFACTURER / EXPORTER`
**Focus:** Structured data, clear RFQ paths, real photography, muted trustworthy palette with a single accent. No retail elements.

---

## 3. COLOUR SYSTEM
**Neutrals:** Charcoal (`#252B2A`), White (`#FFFFFF`)
**Primary:** Forest Green (`#173B36`)
**Accent (CTA only):** Muted Gold (`#C9A66B`)
**Semantic:** Success (`#16a34a`) / Warning (`#eab308`) / Error (`#dc2626`)

**Light and dark section pairings:**
- **Light Theme:** White background, Charcoal text.
- **Dark Theme:** Forest Green background, White text.
- **Tint/Alt:** Very light grey/off-white background (for section separation), Charcoal text.

---

## 4. TYPOGRAPHY
**Heading font / weights:** Poppins (SemiBold, Bold)
**Body font / weights:** Inter (Regular, Medium)
**Scale (px):** 14 / 16 / 18 / 24 / 32 / 48 / 64
**Script support check:** N/A (English primary)

---

## 5. SPACING & LAYOUT
**Base unit:** 8px
**Section padding:** 64–96px desktop, 48–64px mobile
**Container width:** Max 1200–1280px
**Breakpoints:** 360–479 (small mobile) · 480–767 (mobile) · 768–1023 (tablet) · 1024–1279 (laptop) · 1280+ (desktop)
**Rhythm:** Alternate section backgrounds (White -> Tint -> White -> Forest Green) to create structure without heavy borders.

---

## 6. SHAPE
**Radius:** 4px (A small radius communicates precision and a serious B2B tone).
**Shadow levels:** 2 levels max (Subtle drop shadow for cards and floating buttons).
**Border style:** Thin, low-contrast (e.g., `#E5E7EB`).

---

## 7. IMAGERY & ICONS
**Photography style:** Authentic, real. Focus on solid-dyed woven fabrics, printed fabrics, finished-fabric rolls, and shade cards. 
**Fake-proof rule:** NO stock photos pretending to be the company's factory, machinery, or team.
**Ratios:** 16:9 for hero/process banners, 4:3 for service/application cards, 1:1 for square highlights.
**Icon set:** Consistent outline icons (e.g., Lucide or Heroicons) with a single stroke weight.

---

## 8. COMPONENTS
**Button styles (max 3):**
1. **Primary (RFQ):** Muted Gold bg, Charcoal text, 4px radius.
2. **Secondary:** Outline Forest Green border, Forest Green text, 4px radius.
3. **Text link:** Forest Green text with underline on hover.

**Card styles:**
White background, thin border, subtle shadow, 4:3 image on top, clear heading, 2 lines of descriptive text, text link at bottom.

**Form style (RFQ / Contact):**
Labels above fields, subtle grey borders, focus state features a Forest Green outline/ring.

**Nav style:**
Slim, sticky, logo on the left, links centered, Primary CTA (Muted Gold) on the right.

**Footer style:**
Dark background (Forest Green), White text. Must include verified address, GSTIN, and contact details.

---

## 9. MOTION
**Allowed effects:** Subtle fade/slide reveals on scroll (opacity & transform only).
**Durations:** 150–300ms for UI interactions, 400–800ms for section reveals.
**Mobile fallbacks:** Disable heavy scroll reveals on mobile to prioritize performance.
**Reduced-motion:** Respect `prefers-reduced-motion` CSS queries.

---

## 10. PAGE-SPECIFIC NOTES & VERIFIED DATA INTEGRATION
**Home / Contact Footer Data:**
- **Primary Number:** `+91 9842756455`
- **Email:** `udhayatexstyles@gmail.com`
- **Full Address:** `63/A Senthur Nagar Ellapalayam Road Periyasemur Erode-638004`
- **GSTIN:** `33AACFU5772H1Z2`
- **Domain Placeholder:** `udhayaatex.com`

**Contact Page:** The RFQ form should sit alongside the clear, verified contact info listed above.
**Quality / Services Pages:** Utilize tabular data layouts for fabric specifications to maintain clarity.

---

## 11. DO NOT (PROJECT-SPECIFIC AVOIDANCE LIST)
- **DO NOT** use the Muted Gold (`#C9A66B`) accent color decoratively; it is reserved strictly for primary calls-to-action.
- **DO NOT** mention Tiruppur, Vastrelle, or display any apparel (T-shirts/uniforms) imagery.
- **DO NOT** imply ownership of in-house dyeing machinery; frame imagery around the processed fabric and quality checking.
- **DO NOT** use auto-playing background videos or 3D effects; they contradict the calm, established B2B positioning.
- **DO NOT** use full-width mega menus; standard dropdowns are sufficient for the site structure.

---

## 12. TAILWIND CONFIG (SINGLE SOURCE OF TRUTH)
```javascript
// tailwind.config.js snippet
module.exports = {
  theme: {
    extend: {
      colors: {
        'utp-green': '#173B36',
        'utp-gold': '#C9A66B',
        'utp-charcoal': '#252B2A',
        'utp-white': '#FFFFFF'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '4px',
      }
    }
  }
}
```

---

*This document completes the planning sequence. The Foundation, Planning, and Design Architecture are now fully integrated and ready to serve as the master specifications for development.*