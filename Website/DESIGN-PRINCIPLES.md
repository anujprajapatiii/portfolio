# Design Principles

This document outlines the core design principles and guidelines for the portfolio website. These principles inform all design and implementation decisions.

## Philosophy

**Swiss Minimalism + Dieter Rams**
- "As little design as possible" — Dieter Rams
- Mathematical precision over decoration
- Function-focused minimalism
- Clean, intentional, systematic

## Core Principles

### 1. No Rounded Corners
- All elements use sharp, 90-degree corners
- Borders are crisp and geometric
- Exception: None. Everything is rectangular.

**Rationale:** Rounded corners add softness that conflicts with the precise, systematic aesthetic. Sharp corners reinforce the Swiss design influence and create visual consistency.

### 2. Instant Interactions Only
- **No fade animations** (opacity transitions)
- **No movement animations** (transforms, slides)
- **No delays or easings**
- All state changes happen instantly

**Rationale:** Animations create unpredictability and slow down the interface. Instant changes are faster, more predictable, and more stable. Users should feel in complete control.

**Examples:**
- ✅ Border color changes instantly on hover
- ✅ Text color changes instantly on hover
- ✅ Background color changes instantly on active state
- ❌ Fade in/out effects
- ❌ Slide transitions
- ❌ Easing curves (ease, ease-in-out, etc.)

### 3. Borders Over Backgrounds
- Interactive elements use borders to show state
- Avoid using background fills for inactive states
- Use `border: 1px solid transparent` for consistent sizing

**States:**
- **Default:** Transparent border or subtle border
- **Hover:** Border becomes visible/stronger
- **Active:** Solid fill background (white) with inverted text color

### 4. Consistent Interactive Pattern

All interactive elements (navigation, filters, buttons, links) follow the same state system:

```css
/* Default */
color: var(--color-text-secondary);
border: 1px solid transparent; /* or subtle border */

/* Hover */
color: var(--neutral-200);
border-color: var(--color-border);

/* Active */
background: var(--color-active-bg);
color: var(--color-active-text);
border-color: var(--color-active-bg);
```

### 5. Typography System
- Perfect Fourth ratio (1.333) for size scale
- Only two font weights: 400 (regular) and 600 (semibold)
- Geist for UI and body text
- Berkeley Mono for technical elements (dates, numbers, tags)
- Tight line-height for headings (1.1-1.25)
- Loose line-height for body (1.6)
- Minimal letter-spacing adjustments

### 6. 8-Point Spacing Grid
- All spacing uses multiples of 8px
- Ensures mathematical consistency
- Exceptions only for fine details (4px for tight spacing)

### 7. Color System
- Neutral grayscale palette only
- Semantic color variables (--color-text-primary, --color-border, etc.)
- High contrast for readability
- Dark background (#1a1d23) with light text

### 8. No Decorative Elements
- No shadows (except functional depth indicators)
- No gradients
- No patterns or textures
- No icons unless functional
- Every element serves a purpose

## Anti-Patterns to Avoid

❌ **Don't:**
- Add `transition` properties to elements
- Use `border-radius` anywhere
- Create fade or slide animations
- Add decorative flourishes
- Use more than two font weights
- Break from the spacing grid
- Add colors beyond the neutral palette
- Create hover effects with background-only changes

✅ **Do:**
- Use instant state changes
- Use borders to show interactivity
- Maintain sharp, geometric forms
- Follow the typography scale precisely
- Use the semantic color variables
- Keep spacing on the 8px grid
- Let whitespace create hierarchy

## Implementation Notes

When adding new interactive elements:
1. Start with transparent or subtle borders
2. Change border visibility/strength on hover
3. Use solid background fill only for active state
4. Never add transition or animation properties
5. Ensure padding maintains consistent sizing across states

## Reference Inspirations

- **Swiss Design Movement** — Grid systems, typography, mathematical precision
- **Dieter Rams / Braun Design** — Functional minimalism, "as little design as possible"
- **Muji** — Quiet, unbranded, essential
- **Things 3** — Function-focused, minimal interface design
