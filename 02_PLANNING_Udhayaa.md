# 02 — PLANNING: Udhayaa Textile Processing

**Purpose:** Master site specification and per-page build plan for Udhayaa Textile Processing.
**Source:** Derived from `full draft.txt` and `01_FOUNDATION_Udhayaa.md`.

---

## 1. SITE TYPE

**Type:** B (B2B manufacturer / exporter / processing service)
**Primary Goal:** Generate qualified business enquiries / RFQ (Request for Quote)

---

## 2. PAGE LIBRARY AND SITEMAP

**Launch Page Count:** 8 core pages
**Phase 2 / End State Page Count:** 11 pages (adding specific service detail pages once verified)

### Sitemap
```text
/ (Home)
├── /about/
├── /services/
│   ├── /services/solid-dyed-fabrics/         (L/P2 depending on content readiness)
│   ├── /services/printed-fabrics/            (L/P2 depending on content readiness)
│   └── /services/finished-fabric-processing/ (L/P2 depending on content readiness)
├── /applications/
├── /quality/
├── /contact/
├── /privacy-policy/
└── /terms-and-conditions/
```
*(404 page is also required for Launch)*

### Navigation
**Header Nav:** Home | About Us | Services | Applications | Quality | Contact 
**Primary CTA Button (Header):** Request a Quote
**Footer Nav:** Name/Logo, Description, Navigation links, Verified Erode Address, Phone, Email, Privacy Policy, Terms & Conditions.

---

## 3. PAGE SPECIFICATIONS (LAUNCH PAGES)

### PAGE: Home                          URL: `/`
**PRIORITY:** Launch
**AUDIENCE:** Textile exporters, home textile exporters, garment exporters.
**VISITOR QUESTION:** What do you process, and can I trust you to handle my order?
**PAGE JOB:** Position the brand, showcase 30+ years of experience, and funnel visitors to RFQ.
**PRIMARY CTA:** Request a Quote (or Discuss Your Requirement)
**SECONDARY CTA:** Explore Our Services

**SECTIONS (in order):**
1. **Hero:** "Experienced Textile Processing. Dependable Fabric Supply." + Primary CTA
2. **Experience/Trust Highlights:** 30+ Years, Solid-Dyed/Printed, Quality-Focused
3. **About Intro:** "Built on Experience. Focused on Fabric Quality."
4. **Services (4 cards):** Greige-to-Finished, Solid-Dyed, Printed, Other Finished.
5. **Applications:** Woven textile applications (Bedsheets, bags, etc.)
6. **Why Choose Us:** 4 evidence-based points.
7. **How We Work:** 6-stage customer workflow (Horizontal desktop, vertical mobile).
8. **Final CTA:** "Have a Fabric Processing Requirement?"
9. **Footer:** Verified business details & legal links.

**CONTENT:** Draft provided in `full draft.txt` Section 10.
**IMAGES:** Authentic textile imagery (NO deceptive in-house factory stock photos).

---

### PAGE: About Us                      URL: `/about/`
**PRIORITY:** Launch
**AUDIENCE:** B2B buyers looking for supplier stability.
**VISITOR QUESTION:** Are you an established, reliable business?
**PAGE JOB:** Build trust through 30+ years of history and a customer-centric approach.
**PRIMARY CTA:** Request a Quote

**SECTIONS:**
1. Intro: Decades of Textile Industry Experience
2. What We Do
3. Our Approach
4. Our Commitment
5. Final CTA

**CONTENT:** Draft provided in `full draft.txt` Section 11. (Requires verification of founding year and milestones).

---

### PAGE: Services                      URL: `/services/`
**PRIORITY:** Launch
**AUDIENCE:** Exporters evaluating capabilities.
**VISITOR QUESTION:** Can you handle my specific fabric and finishing needs?
**PAGE JOB:** Detail the confirmed processing services and quotation requirements.
**PRIMARY CTA:** Request a Quote

**SECTIONS:**
1. Intro to processing capabilities.
2. Solid-Dyed Fabrics overview.
3. Printed Fabrics overview.
4. Finished-Fabric Processing overview.
5. Technical service specification standard (fabric suitability, output, qty, etc.)
6. Final CTA

**CONTENT:** Draft provided in `full draft.txt` Section 12.

---

### PAGE: Applications                  URL: `/applications/`
**PRIORITY:** Launch
**PAGE JOB:** Map processing capabilities to actual woven textile uses (e.g., bedsheets, linen).
**PRIMARY CTA:** Request a Quote

---

### PAGE: Quality                       URL: `/quality/`
**PRIORITY:** Launch
**PAGE JOB:** Explain the quality approach, agreed specs, real procedures, and provide evidence (certifications/tests).
**PRIMARY CTA:** Request a Quote

---

### PAGE: Contact                       URL: `/contact/`
**PRIORITY:** Launch
**PAGE JOB:** Secure a detailed B2B RFQ submission.
**PRIMARY CTA:** Submit Enquiry

**SECTIONS:**
1. Intro: "Discuss Your Fabric Requirement"
2. Verified contact details (Erode address, Phone, Email)
3. Detailed B2B RFQ Form.

**FORM FIELDS:** Name (Req), Company (Req), Email (Req), Phone (Rec), Business Type (Opt), Service Required (Req), Fabric Specs (Rec), Quantity (Rec), Date (Rec), Upload Reference (Opt).

---

## 4. CONTENT AND COPY PLAN

- **Voice:** Professional, clear, established, B2B-focused.
- **Never sound like:** A direct-to-consumer apparel store, or a generic marketplace.
- **Claims Register:** 
  - *Must Say:* "More than 30 years of industry experience" (Once verified).
  - *Must NOT Say:* "Largest textile processing supplier", "State-of-the-art in-house factory", "100% defect-free fabric", or associate directly with Tiruppur apparel operations.

## 5. CONVERSION PLAN

- **Primary Conversion:** The B2B RFQ Form on `/contact/` and linked via CTAs.
- **Secondary Conversion:** WhatsApp Click-to-chat (optional alternative route).
- **Form Handling:** Must feature spam prevention, client/server validation, and clear success messaging without false promises of instant replies (promise realistic response time).

## 6. SEO PLAN

- **Primary Keyword Themes:** Textile processing supplier, solid-dyed fabric supplier, printed woven fabric supplier.
- **Local SEO:** Strictly **Erode, Tamil Nadu, India**.
- **Tech SEO:** Unique titles/meta descriptions per page, descriptive URLs, one H1 per page, XML sitemap, Robots.txt.

## 7. TECHNICAL PLAN

- **Stack:** HTML + Tailwind CSS + Vanilla JS (No CMS required unless client explicitly demands self-editing capability later).
- **Performance:** Optimized images, mobile-first design, fast loading.
- **Security:** HTTPS, secure form handling, data privacy compliance.
- **Build Order:** 
  1. Shared layout (Header, Footer, Tailwind tokens).
  2. Home (`/`)
  3. Contact (`/contact/` - The conversion engine).
  4. About Us & Services.
  5. Applications & Quality.
  6. Legal pages & 404.

---

## 8. THE PLANNING GATE

- [x] Site type chosen (B2B Manufacturer/Service)
- [x] Launch page count and end-state agreed (8 Core Launch Pages)
- [x] Sitemap & Navigation approved
- [x] Page specs drafted
- [x] Copy and claims rules defined
- [x] Conversion plan confirmed (Detailed RFQ)
- [x] Stack and technical plan decided

*(Pending Logo and exact Business Details to be supplied in Design Architecture phase, as noted in the Foundation).*
