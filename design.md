# Portfolio Design

## Overview

A personal portfolio for Digvijay, a frontend web developer. The page introduces the developer, explains the services offered, showcases a project, and guides visitors toward contact and social links. Its visual tone is calm, modern, and understated, with dark surfaces and a soft green accent.

## Visual direction

- **Theme:** Dark, low-glare interface with a subtle green glow behind the page content.
- **Personality:** Professional and approachable; rounded panels and plain-language copy balance the technical subject matter.
- **Emphasis:** Large introductory messaging, readable service summaries, and direct calls to action rather than dense navigation.
- **Page width:** Centered content with a maximum width of 1600px and responsive outer spacing.

## Color palette

| Purpose | Color |
| --- | --- |
| Page background | `#090b0d` |
| Base surface | `#111518` |
| Raised surface | `#171d20` |
| Primary text | `#ffffff` |
| Muted text | `#aab5b2` |
| Mint accent | `#a8e6cc` |
| Subtle borders | `rgba(224, 242, 235, 0.12)` |

Use the mint accent for service numbering, technology tags, and important text links. Background gradients and translucent borders add depth without competing with content.

## Typography

- Use the system sans-serif stack: Segoe UI, then Arial, then sans-serif.
- Use strong, prominent headings for the introduction and section titles; supporting copy is smaller and muted.
- Keep paragraphs comfortably spaced with a body line-height of 1.6.
- Use a light italic style for selected emphasized words, such as “responsive” and “opportunities.”

## Page structure

1. **Introduction:** A two-part hero with the developer’s name, role, profile image, short value statement, social links, and a “Get In Touch” action.
2. **Services:** Six responsive cards describing web applications, UI implementation, responsive design, interactive experiences, landing pages, and optimization. Each card includes a numbered label, description, and technology tags.
3. **Work introduction:** A bordered feature panel pairing an image and a short statement with a link to the projects section.
4. **Projects:** A featured project card for Portfolio Maker, including a preview image, summary, feature list, live demo, and source repository links.
5. **Opportunities:** A second feature panel describing frontend and freelance availability, with a contact action and portrait.
6. **Footer:** Location, email, social profiles, and attribution.

## Layout and components

- The hero and feature panels stack vertically on narrow screens and become two-column layouts from 768px wide.
- Service cards use an auto-fitting grid with a minimum card width of approximately 280px.
- Use generous internal spacing, rounded corners, and thin borders to distinguish cards from the page background.
- Service technology labels are compact pill-shaped tags.
- Project cards use a raised gradient surface, preview image, and a subtle lift and shadow change on hover.
- Calls to action use clear text labels, supporting arrow icons, and visible hover/focus feedback.

## Responsive behavior

- Keep all content within the viewport; allow service tags and project links to wrap.
- Use fluid page padding and card padding so spacing scales with viewport width.
- Center hero copy and feature-panel content on small screens; align hero copy to the left on wider screens.
- On mobile, give the portrait panel more width and maintain a usable minimum image height.
- Preserve the same content order and functionality at all viewport sizes.

## Interaction and accessibility

- Use native links for email, social profiles, project destinations, and in-page navigation.
- Provide descriptive image alternatives and accessible names for icon-only social links.
- Keep a visible focus outline on keyboard-focused links.
- Add hover transitions to interactive links and project cards without making interaction necessary to understand content.
- Retain smooth in-page scrolling where motion preferences allow; honor reduced-motion preferences.
- Use semantic headings, sections, articles, and lists to make the content structure clear.

## Assets and implementation

- The page is implemented with HTML, CSS, and JavaScript.
- Styles live in `CSS/style.css`; behavior lives in `JS/script.js`.
- The project preview is stored locally at `assets/portfolio-maker-home.png`. Profile and feature imagery, plus Remix Icon fonts, are loaded from external URLs.
- Keep image alternatives meaningful, preserve lazy loading for below-the-fold imagery, and avoid using decorative imagery in place of text content.
