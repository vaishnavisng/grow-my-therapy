// Phase 2 — content for Dr. Maya Reynolds, PsyD. Every line is grounded in her
// profile (source of truth). Single place for copy + imagery.

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "Dr. Maya Reynolds",
  suffix: "PsyD · Clinical Psychologist",
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Request an Appointment", href: "#contact" },
};

export const hero = {
  eyebrow: "IN-PERSON IN SANTA MONICA · ONLINE ACROSS CALIFORNIA",
  title:
    "Anxiety & trauma therapy\nfor adults",
  tagline:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist helping high-achieving adults quiet the worry and internal pressure they carry beneath a capable exterior — with therapy that's warm, structured, and grounded.",
  cta: { label: "Request an Appointment", href: "#contact" },
  imagePrimary: "/hero-office.jpg",
  imageSecondary: u("1463320726281-696a485928c7", 700), // warm books — reflective detail
};

export const validation = {
  eyebrow: "You're not the only one",
  title: "Functional on the outside, worn out underneath",
  body: "You hold things together at work and for the people who count on you. Inside, it can feel like constant worry, tension, and pressure that never fully switches off. Here, that quieter struggle is taken seriously — with a calm, safe space to slow down, feel steadier, and build coping that actually lasts.",
  image: u("1544005313-94ddf0286df2"), // reflective adult, warm light
  link: { label: "See how we work together", href: "#approach" },
};

// The three focus areas double as the three primary services.
export const services = {
  eyebrow: "Areas of focus",
  title: "Support for the pressure you don't show",
  items: [
    {
      title: "Anxiety & Panic Therapy",
      short:
        "For the racing mind, the tightness in your chest, and the panic that arrives without warning. Together we work toward safety, steadiness, and tools you can rely on when the pressure spikes.",
      long: "Anxiety can run quietly in the background as constant worry or hit suddenly as panic. In anxiety therapy — in my Santa Monica office or online across California — we use CBT alongside mindfulness- and body-based tools to calm the nervous system, understand what fuels the spikes, and build practical ways to feel safer and more in control day to day.",
      href: "#anxiety",
      image: u("1506126613408-eca07ce68773", 1000), // breath / calm
    },
    {
      title: "Trauma & EMDR Therapy",
      short:
        "Whether it's a single painful event or trauma that built up over time, we work at your pace to process the past and help you feel more grounded — including EMDR to rework how painful memories are stored.",
      long: "Trauma isn't always loud or obvious — it can come from a single incident or accumulate over years. In trauma and EMDR therapy in Santa Monica, we move at a pace that keeps you stable, and where it fits, use EMDR (Eye Movement Desensitization and Reprocessing) to help rework how painful memories are stored so they lose their grip.",
      href: "#trauma",
      image: u("1447752875215-b2761acb3c5d", 1000), // grounding path in nature
    },
    {
      title: "Burnout & Perfectionism Therapy",
      short:
        "When high standards tip into exhaustion, self-criticism, and running on empty. We look at the pressure driving it and build a steadier, more sustainable way of working and living.",
      long: "High internal pressure and perfectionism can quietly lead to burnout. In therapy for adults carrying that load, we look honestly at the standards and self-criticism driving the exhaustion, and build habits, boundaries, and a self-relationship that let you keep doing meaningful work without running yourself down.",
      href: "#burnout",
      image: u("1495474472287-4d71bcdd2085", 1000), // warm pause / rest
    },
  ],
};

export const quote = {
  text: "Therapy here isn't only about easing symptoms. It's about building insight, resilience, and a steadier relationship with yourself over time.",
};

export const focus = {
  eyebrow: "What I help with",
  title: "Concerns I work with most",
  terms: [
    "Anxiety",
    "Panic",
    "Stress",
    "Single-incident trauma",
    "Complex trauma",
    "EMDR",
    "Burnout",
    "Perfectionism",
    "High internal pressure",
    "Emotional overwhelm",
  ],
};

export const about = {
  eyebrow: "About",
  heading: "Hi, I'm Dr. Maya Reynolds, PsyD",
  meta: [
    "Licensed Clinical Psychologist",
    "Santa Monica, CA",
    "In-person & online across California",
  ],
  lead: "I work with adults who look like they have it all together — capable, dependable, high-achieving — while quietly carrying anxiety, the effects of trauma, or the pressure that's tipped into burnout.",
  body: "My style is warm, collaborative, and grounded: enough structure to give our sessions direction, and enough room to slow down and go deeper. Depending on what you need, we might draw on CBT, EMDR, mindfulness, and body-oriented practices — always at a pace that keeps you feeling safe. My hope is that our work leaves you not just with fewer symptoms, but with more insight, resilience, and a kinder relationship with yourself.",
  methods: [
    "Cognitive-behavioral therapy (CBT)",
    "EMDR",
    "Mindfulness-based practices",
    "Body-oriented techniques",
  ],
  signature: "Maya",
  image: "/Dr. Maya Reynolds.png",
  cta: { label: "Schedule a Consultation", href: "#contact" },
};

export const approach = {
  eyebrow: "How I work",
  title: "A warm, collaborative approach with real structure",
  body: "My work blends evidence-based methods with a warm, collaborative style — enough structure to give sessions direction, and enough space for reflection to go deeper. The priorities stay the same throughout: your safety, feeling more stable, and coping strategies you can sustain long after our work together.",
};

// "Our Office" — a new section not in the original template. Real office photos.
export const office = {
  eyebrow: "Our office",
  title: "A calm, naturally-lit space in Santa Monica",
  body: "Sessions take place in a calm, light-filled office in Santa Monica — private, quiet, and uncluttered, with plenty of natural light and room to breathe. It's designed to help you settle the moment you sit down.",
  bodyTwo: "Prefer to meet from home? Secure telehealth is available anywhere in California, so care stays steady whether we meet in person or online.",
  imageLarge: "/office-1.jpg", // sunlit loft — sofa, armchair, tall windows
  imageSmall: "/office-2.jpg", // quiet consulting room — sofa, bookshelf
  details: {
    location: "123th Street 45 W, Santa Monica, CA 90401",
    sessions: "In-person sessions & secure video telehealth",
    space: "Private, quiet, and uncluttered",
  },
  tags: ["In-person · Santa Monica", "Telehealth · California"],
  cta: { label: "Request an Appointment", href: "#contact" },
};

export const faqs = {
  eyebrow: "Questions",
  title: "Frequently asked questions",
  items: [
    {
      q: "What types of therapy do you specialize in?",
      a: "Anxiety and panic, single-incident and complex trauma, and burnout and perfectionism in high-achieving adults — using CBT, EMDR, mindfulness, and body-oriented techniques.",
    },
    {
      q: "Have you worked with concerns like mine before?",
      a: "Very likely. My work centers on the anxiety, trauma, perfectionism, and burnout that often sit beneath a capable exterior. If you're unsure we're a fit, reaching out is a good first step.",
    },
    {
      q: "Do you help with anxiety, panic, and burnout?",
      a: "Yes — they're core to my work. We build steadiness first, then practical, sustainable ways to manage worry, panic, and pressure.",
    },
    {
      q: "Can therapy help with trauma, and what is EMDR?",
      a: "Yes. I work with single-incident and complex trauma at a safe pace, and use EMDR where it fits — an evidence-based method that helps painful memories feel less distressing.",
    },
    {
      q: "What does a typical session look like?",
      a: "Warm and collaborative — some structure for direction, plenty of space to reflect. We draw on CBT, EMDR, mindfulness, or body-based tools at a pace that feels safe.",
    },
    {
      q: "Do you offer in-person and online sessions?",
      a: "Both — in person at my Santa Monica office, or secure telehealth anywhere in California.",
    },
    {
      q: "What are your fees, and do you accept insurance?",
      a: "These aren't listed here yet — reach out and I'll walk you through the details before we schedule.",
    },
    {
      q: "How do I get started?",
      a: "Use “Schedule a Consultation” to reach out. We'll find a time to talk and see if it's a good fit.",
    },
  ],
};

export const finalCta = {
  eyebrow: "Get started",
  title: "Ready when you are",
  body: "If any of this sounds familiar, reaching out is a good first step. Whether in person in Santa Monica or online across California, we'll start where you are — safely and at your pace.",
  cta: { label: "Request an Appointment", href: "#contact" },
  image: u("1544367567-0f2fcb009e0b", 1600), // grounding, warm light
};

export const footer = {
  intro:
    "Dr. Maya Reynolds, PsyD — licensed clinical psychologist offering in-person therapy in Santa Monica and secure telehealth across California.",
  navigate: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ],
  contact: {
    address: "123th Street 45 W, Santa Monica, CA 90401",
    areas: "Serving clients across California via secure telehealth",
  },
  legal: ["Terms", "Privacy Policy", "Disclaimer"],
};
