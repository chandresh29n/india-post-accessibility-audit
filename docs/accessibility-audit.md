# India Post – Accessibility & Performance Audit

## 1. Project Overview

**Website:** https://www.indiapost.gov.in/

**Project:** Accessibility Baseline & Repository Architecture Audit

**Audit Date:** 22 November 2026

**Purpose:** To evaluate the accessibility and performance of the India Post public-facing website and identify opportunities for improvement.

## 2. Audit Methodology

The following testing methods were used:

- Google Chrome Lighthouse audit.
- Keyboard-only navigation using Tab, Shift + Tab and Enter.
- Manual observation of visible content and navigation.
- Review of Lighthouse performance insights.

## 3. Lighthouse Results

| Category | Score |
|---|---:|
| Accessibility | 97/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |
| Performance | 92/100 |

### Performance Metrics

| Metric | Result |
|---|---:|
| First Contentful Paint (FCP) | 1.4 s |
| Largest Contentful Paint (LCP) | 3.9 s |
| Total Blocking Time (TBT) | 10 ms |
| Cumulative Layout Shift (CLS) | 0.008 |
| Speed Index | 3.0 s |

## 4. Identified Issues and Optimization Opportunities

### Issue 1: Insufficient Touch Target Size

**Category:** Accessibility

**Evidence:** Lighthouse reported that some touch targets do not have sufficient size or spacing.

**Priority:** Medium

**Recommendation:** Increase interactive element sizes and provide sufficient spacing to improve usability on touchscreens.

### Issue 2: Render-Blocking Requests

**Category:** Performance

**Evidence:** Lighthouse estimated potential savings of approximately 760 ms.

**Priority:** High

**Recommendation:** Optimize critical CSS delivery and defer non-critical resources where appropriate.

### Issue 3: Inefficient Image Delivery

**Category:** Performance

**Evidence:** Lighthouse estimated potential savings of approximately 18 KiB.

**Priority:** Low

**Recommendation:** Optimize image formats, dimensions and compression to reduce unnecessary downloads.

### Issue 4: Inefficient Cache Lifetimes

**Category:** Performance

**Evidence:** Lighthouse estimated potential savings of approximately 208 KiB.

**Priority:** Medium

**Recommendation:** Configure suitable browser caching policies for static resources.

### Issue 5: Unused JavaScript

**Category:** Performance

**Evidence:** Lighthouse identified approximately 133 KiB of potentially unused JavaScript.

**Priority:** Medium

**Recommendation:** Remove unnecessary JavaScript, use code splitting and load scripts only when required.

## 5. Manual Keyboard Accessibility Test

The website was tested using keyboard-only navigation.

| Test | Result |
|---|---|
| Tab navigation | Passed |
| Shift + Tab navigation | Passed |
| Enter key interaction | Passed |
| Visibility of page content | Passed |
| Basic navigation accessibility | Passed |

No navigation problems were observed during this manual test.

## 6. Conclusion

The India Post website achieved strong Lighthouse results in accessibility, best practices and SEO.

However, the audit identified opportunities to improve touch target sizing, resource loading, image delivery, caching and JavaScript optimization.

Further manual testing with screen readers and additional accessibility tools would help identify issues that automated Lighthouse testing cannot detect.

## 7. Evidence

Screenshots of the Lighthouse results and manual testing observations will be maintained in the `docs/screenshots/` directory.

---

**Project developed as part of the Rabtech Academy Full Stack Web Development Internship.**
