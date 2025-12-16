// Image imports
import heroImage from './assets/month-end/hero-image.jpg';
import howItWorksImage from './assets/month-end/how-it-works.png';
import copilotEntities from './assets/month-end/copilot-entities.png';

// Navigation links
export const navbarLinks = [
  { id: 1, text: 'How it Works', href: '#how-it-works' },
  { id: 2, text: 'Features', href: '#features' },
];

// Benefits section
export const benefits = [
  {
    id: 1,
    title: 'Less manual busywork',
    description:
      "AI reduces repetitive data handling so you're not copying, pasting, and re-checking the same things.",
  },
  {
    id: 2,
    title: 'Fewer "where is that receipt?" moments',
    description:
      'Missing documents and approvals get highlighted before they block the close.',
  },
  {
    id: 3,
    title: 'Cleaner reconciliations',
    description:
      'AI helps match transactions to supporting records and flags mismatches for review.',
  },
  {
    id: 4,
    title: 'Fewer last-minute surprises',
    description:
      "You see exceptions as they happen, not after month-end when it's hardest to fix.",
  },
  {
    id: 5,
    title: 'A clearer close status',
    description:
      "Always know what's complete, what's pending, and what needs attention—without asking three people.",
  },
  {
    id: 6,
    title: 'Stronger audit readiness',
    description:
      "Supporting documents stay connected to the items they explain, so your trail doesn't live in someone's inbox.",
  },
];

// How it works steps
export const howItWorksSteps = [
  {
    id: '01',
    title: 'Capture',
    description:
      'AI collects the core month-end inputs (invoices, receipts, sales summaries, payroll reports, bank/credit activity) into one workflow.',
  },
  {
    id: '02',
    title: 'Extract & normalize',
    description:
      "AI pulls key details and standardizes them so you don't spend days translating formats and re-keying info.",
  },
  {
    id: '03',
    title: 'Match & reconcile',
    description:
      'AI matches transactions to supporting documents and highlights mismatches, duplicates, and missing items.',
  },
  {
    id: '04',
    title: 'Handle exceptions during the month',
    description:
      'AI keeps a running exception list so issues get resolved continuously—before month-end pressure hits.',
  },
  {
    id: '05',
    title: 'Review, finalize, and export',
    description:
      'AI prepares a clear close checklist and month-end-ready outputs so you can review quickly and finalize with confidence.',
  },
];

// Features section
export const features = [
  {
    id: 1,
    title: 'Invoice process automation & reconciliation',
    description:
      'AI captures invoices and supporting docs, helps match invoices to payments, and flags duplicates or missing items.',
    detailsList: [
      'AI captures invoices and supporting docs',
      'Helps match invoices to payments and flags duplicates / missing items',
      'Keeps vendor records organized and reviewable',
    ],
  },
  {
    id: 2,
    title: 'Payroll reconciliation',
    description:
      'AI helps reconcile payroll totals and remittances to what actually cleared, supports month-end cutoff adjustments with clear visibility.',
    detailsList: [
      'AI helps reconcile payroll totals and remittances to what actually cleared',
      'Supports month-end cutoff adjustments with clear visibility',
      'Flags variances that need attention',
    ],
  },
  {
    id: 3,
    title: 'Expense management reconciliation',
    description:
      'AI matches card/bank expenses to receipts, highlights missing receipts and uncategorized spend early.',
    detailsList: [
      'AI matches card/bank expenses to receipts',
      'Highlights missing receipts and uncategorized spend early',
      'Reduces spreadsheet tracking and back-and-forth',
    ],
  },
  {
    id: 4,
    title: 'Custom reconciliations (your business rules)',
    description:
      "AI supports workflows for niche requirements and standardizes repeatable checks that currently live in someone's memory.",
    detailsList: [
      'AI supports workflows for niche requirements (department/location/process)',
      "Standardizes repeatable checks that currently live in someone's memory",
      'Keeps a clear trail of what was checked and why',
    ],
  },
];

// FAQ section
export const faqs = [
  {
    id: 1,
    question: 'Is this for accountants or owners?',
    answer:
      "It's built for owners who need month-end to be reliable and less disruptive—without becoming a finance expert. Your bookkeeper/accountant can still review the outputs.",
  },
  {
    id: 2,
    question: 'Do you replace our accounting software?',
    answer:
      'No. The goal is to make your month-end workflow smoother on top of what you already use.',
  },
  {
    id: 3,
    question: 'What does the AI actually do?',
    answer:
      'It helps collect, organize, match, and flag exceptions—so humans focus on review and decisions, not grunt work.',
  },
  {
    id: 4,
    question: 'How do exceptions work?',
    answer:
      "Anything that doesn't match cleanly goes into an exception list (missing docs, mismatches, duplicates) so you can resolve the small number of items that truly need attention.",
  },
  {
    id: 5,
    question: 'How long does onboarding take?',
    answer:
      'We start small in pilots: map your month-end checklist, connect the key sources, then automate the highest-friction parts first.',
  },
  {
    id: 6,
    question: 'What about privacy and access?',
    answer:
      "We use role-based access and keep data handling transparent. We'll share full privacy/security details during onboarding.",
  },
];

// Form configuration
export const formConfig = {
  roleOptions: [
    'Owner / Operator',
    'Bookkeeper',
    'Controller / Finance Manager',
    'External Accountant / CPA',
    'Other',
  ],
  improvementOptions: [
    'Invoices / AP',
    'Payroll',
    'Expenses',
    'Everything',
    'Other',
  ],
};

// Export images for use in components
export const images = {
  heroImage,
  howItWorksImage,
  copilotEntities,
};
