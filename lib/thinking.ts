export interface ThinkingConcept {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  type: "boring" | "famous";
  attribution: string;
  summary: string;
  deepDive: {
    psychologicalMechanism: string;
    whySafeFails: string;
    studioApplication: string;
    speculativeCaseRef?: {
      slug: string;
      title: string;
      clientName: string;
      quote: string;
    };
    takeaways: string[];
  };
  visualSchema: "purple-cow" | "curiosity-gap" | "social-currency" | "pattern-interrupt" | "von-restorff" | "emotional-positioning" | "salt-in-tea" | "honest-error";
}

export interface HonestErrorExample {
  id: number;
  category: string;
  name: string;
  originalError: string;
  admission: string;
  campaign: string;
  whyItCouldWork: string;
  lesson: string;
  disclaimer?: string;
}

export interface SaltInTeaExample {
  id: number;
  brand: string;
  campaign: string;
  badge: string;
  normalRecipe: string;
  theSalt: string;
  whyItWorked: string;
  lesson: string;
  adLink: string;
  sourceLabel: string;
  image: string;
}

export const SALT_IN_TEA_EXAMPLES: SaltInTeaExample[] = [
  {
    id: 1,
    brand: "Burger King",
    campaign: "The Moldy Whopper",
    badge: "Product truth × visual shock",
    normalRecipe: "Make burgers look juicy, fresh, hyper-saturated, and irresistible.",
    theSalt: "Show the signature Whopper visibly decomposing and rotting with fuzzy green mold over 35 real days.",
    whyItWorked: "The disturbing visual proved a dramatic product claim about removing artificial preservatives. The campaign generated 8.4 billion organic impressions, a 14% sales increase, and swept Cannes Lions.",
    lesson: "Sometimes showing the exact opposite of what customers expect is the strongest way to communicate an authentic product benefit.",
    adLink: "https://www.youtube.com/watch?v=oSDC4c3H34E",
    sourceLabel: "WPP / INGO / Cannes Grand Prix",
    image: "/images/moldy_whopper.jpg",
  },
  {
    id: 2,
    brand: "Old Spice",
    campaign: "The Man Your Man Could Smell Like",
    badge: "Absurdity × brand reinvention",
    normalRecipe: "Show a handsome model in a bathroom, generic shower splashing, and clean masculine lifestyle imagery.",
    theSalt: "An impossibly confident, deadpan spokesperson moves through continuous, absurd, single-take scene changes (shower to yacht to horse) while maintaining hypnotic eye contact.",
    whyItWorked: "Old Spice turned a tired grandfather hygiene brand into appointment comedy entertainment. It became one of the most culturally viral advertising reinventions in internet history.",
    lesson: "Don't just advertise the product. Create an absurd, magnetic world and personality that people actively choose to rewatch and share.",
    adLink: "https://www.youtube.com/watch?v=owGykVbfgUE",
    sourceLabel: "Wieden+Kennedy",
    image: "/images/old_spice.jpg",
  },
  {
    id: 3,
    brand: "Dove",
    campaign: "Campaign for Real Beauty",
    badge: "Category rebellion × emotional truth",
    normalRecipe: "Hire 19-year-old supermodels with airbrushed skin and promote impossible, aspirational beauty standards.",
    theSalt: "Feature real, unretouched women across diverse ages, body types, and ethnic backgrounds, openly challenging the cosmetics industry's toxic visual conventions.",
    whyItWorked: "Dove established an emotionally resonant position rooted in authentic self-worth. In its inaugural year alone, brand sales reportedly jumped 20% and fundamentally reshaped female marketing.",
    lesson: "A powerful risk can come from courageously challenging the unspoken, cynical assumptions your entire industry takes for granted.",
    adLink: "https://www.youtube.com/watch?v=iYhCn0mk464",
    sourceLabel: "Ogilvy / WARC Case Study",
    image: "/images/dove_beauty.jpg",
  },
  {
    id: 4,
    brand: "Liquid Death",
    campaign: "Water with a Rebellious Identity",
    badge: "Unexpected identity × ordinary product",
    normalRecipe: "Peaceful blue plastic bottles, serene snow-capped mountains, purity claims, and soft wellness whispering.",
    theSalt: "Package pure alpine spring water in 500ml tallboy beer cans, branded like an underground 80s heavy-metal band under the slogan 'Murder Your Thirst'.",
    whyItWorked: "Gives the most ordinary, commoditized staple on earth a rebellious, cult-like personality, propelling the company to a $1.4B valuation entirely through provocative creative packaging.",
    lesson: "You don't always need to invent a brand new product. You can radically change the cultural universe through which people perceive an existing one.",
    adLink: "https://www.youtube.com/watch?v=d_k8qG5rFmI",
    sourceLabel: "Marketing Dive / Fast Company",
    image: "/images/liquid_death.jpg",
  },
  {
    id: 5,
    brand: "Oatly",
    campaign: "Unconventional Brand Voice",
    badge: "Anti-corporate copy × personality",
    normalRecipe: "List nutritional tables, vitamin percentages, and corporate sustainability metrics in bland corporate speak.",
    theSalt: "Use chatty, self-deprecating, irreverent typography on cartons that directly mocks traditional advertising ('Don't buy this', 'It tastes like oats. Wow.') and features the CEO singing in a field.",
    whyItWorked: "The package itself transformed into a witty, readable zine. Shoppers paused in grocery aisles to read entire paragraphs, sparking organic word of mouth.",
    lesson: "Your brand's unfiltered tone of voice can be the single most disruptive ingredient in an otherwise boring product category.",
    adLink: "https://www.youtube.com/watch?v=pM9mXh13j6M",
    sourceLabel: "Oatly Creative Dept / Super Bowl",
    image: "/images/oatly.jpg",
  },
  {
    id: 6,
    brand: "India's Got Latent",
    campaign: "Samay Raina's Unscripted Format",
    badge: "Format disruption × creator personality",
    normalRecipe: "Predictable, staged television talent-show scripts, artificial sob stories, and heavily edited family melodrama.",
    theSalt: "Raw comedy club setting, brutal red buzzers, dark self-deprecating audience banter, unfiltered internet personalities, and complete unpredictability.",
    whyItWorked: "Broke through mainstream broadcast fatigue to capture massive Gen Z cultural obsession by delivering unvarnished, authentic comedic jeopardy that television would never dare air.",
    lesson: "Unfiltered creativity can command immense attention, but risk requires thoughtful boundaries. Creative freedom without strategic guardrails can trigger regulatory and commercial fallout.",
    adLink: "https://www.youtube.com/@SamayRainaOfficial",
    sourceLabel: "India Today & Digital Pop Culture",
    image: "/images/latent_show.jpg",
  },
  {
    id: 7,
    brand: "Amul Macho",
    campaign: "Suggestive Humour (Yeh Toh Bada Toing Hai)",
    badge: "Provocation × category convention",
    normalRecipe: "Show athletes in gyms, discuss cotton weave counts, and showcase bland functional comfort bullet points.",
    theSalt: "Deploy cheeky, suggestive terrace laundry humour featuring mischievous Bollywood-inspired cinematic timing and the infectious catchphrase 'Yeh Toh Bada Toing Hai'.",
    whyItWorked: "Created an instant pop-culture sensation across Indian households, transforming an awkward commodity purchase into high-recall brand swagger.",
    lesson: "A bold, provocative creative choice must be organically rooted in entertainment and self-aware charm rather than shock value alone.",
    adLink: "https://www.youtube.com/results?search_query=amul+macho+bada+toing+ad",
    sourceLabel: "Impact Magazine Archive",
    image: "/images/amul_macho.jpg",
  },
  {
    id: 8,
    brand: "Dot & Key",
    campaign: "The Fake Podcast Ad",
    badge: "Format hijacking × humour",
    normalRecipe: "Polished studio dermatologists in lab coats reciting chemical sunscreen SPF factors and hydration charts.",
    theSalt: "Hijack the format of a messy, candid creator podcast featuring Samay Raina and Bharti Singh, allowing the sunscreen to enter casually through organic comedic sparring.",
    whyItWorked: "Viewers didn't skip because they felt they were enjoying a funny, unscripted clip rather than enduring a commercial interruption.",
    lesson: "Sometimes the strategic breakthrough isn't what you claim; it's the cultural format through which the conversation takes place.",
    adLink: "https://www.youtube.com/results?search_query=dot+and+key+samay+raina+bharti+singh+sunscreen",
    sourceLabel: "Impact Magazine / Digital Media",
    image: "/images/dot_and_key.jpg",
  },
];

export const SALT_IN_TEA_RULES = [
  {
    number: "01",
    title: "KNOW THE ORIGINAL RECIPE.",
    description: "Understand intimately what every competitor does and what the audience expects before daring to challenge it. You cannot break rules effectively if you don't know why they were established.",
  },
  {
    number: "02",
    title: "INTRODUCE ONE UNEXPECTED INGREDIENT.",
    description: "Use a provocative truth, unusual visual, unconventional format, unexpected collaboration, or distinctive personality. Introduce one sharp anomaly, not ten competing distractions.",
  },
  {
    number: "03",
    title: "MAKE THE RISK MEAN SOMETHING.",
    description: "The unusual element must organically strengthen the core product truth or communicate a genuine audience insight. Bizarre for the sake of bizarre is merely annoying.",
  },
  {
    number: "04",
    title: "TEST BEFORE YOU BET THE BRAND.",
    description: "Pressure-test radical headlines, creative concepts, and audience reactions in controlled sandboxes. Start agile and iterate before committing full-scale media capital.",
  },
  {
    number: "05",
    title: "MEASURE MORE THAN ATTENTION.",
    description: "Look beyond cheap vanity impressions: track aided brand recall, qualified engagement, conversion lift, sentiment, and commercial impact. Controversy without revenue is bankruptcy.",
  },
];

export const SALT_VS_PURPLE_COW = [
  {
    dimension: "The Strategic Goal",
    purpleCow: "Be intrinsically remarkable.",
    saltInTea: "The creative move: introduce a deliberate, meaningful unexpected element.",
  },
  {
    dimension: "Core Focus",
    purpleCow: "Focuses on differentiation from competitors.",
    saltInTea: "Focuses on controlled experimentation, creative tension, and calculated risk.",
  },
  {
    dimension: "Origin of the Idea",
    purpleCow: "Frequently originates inside the product design itself.",
    saltInTea: "Can be applied to the product, campaign angle, copy tone, format, or distribution.",
  },
  {
    dimension: "Theoretical Nature",
    purpleCow: "Established marketing theory (Seth Godin, 2003).",
    saltInTea: "The Boring Ads (By Daksh) studio proprietary creative philosophy & playbook.",
  },
];

export const HONEST_ERROR_EXAMPLES: HonestErrorExample[] = [
  {
    id: 1,
    category: "Coffee",
    name: "The Spelling Mistake",
    originalError: "A coffee brand's packaging reads 'Definately Awake' instead of 'Definitely Awake.'",
    admission: "“We checked the coffee. We forgot to check the spelling.”",
    campaign: "“Our team clearly needed a cup before the final proofread. Drink our coffee. Stay awake. Spell correctly.”",
    whyItCouldWork: "The spelling error connects directly to the product's association with alertness. The joke is understandable without a long explanation.",
    lesson: "Make the mistake relevant to what you sell.",
  },
  {
    id: 2,
    category: "Bakery",
    name: "The Crooked Croissant",
    originalError: "A batch of croissants comes out uneven and crooked, but remains safe to eat and meets the bakery's quality standards.",
    admission: "“Our baker failed geometry. Passed breakfast.”",
    campaign: "“They aren't winning beauty contests. They're winning the plate-cleaning competition.”",
    whyItCouldWork: "The campaign challenges the expectation that every pastry must look perfect while keeping the focus on the actual product.",
    lesson: "A harmless visual imperfection can become a brand personality when quality is still protected.",
  },
  {
    id: 3,
    category: "Fashion",
    name: "The Upside-Down Print",
    originalError: "A shirt features a deliberately inverted graphic.",
    admission: "“Our printer turned the design upside down. We tried turning the business around. Then we tried the shirt on.”",
    campaign: "“Some things look better when you stop looking at them the usual way.”",
    whyItCouldWork: "The error becomes a distinctive design choice rather than an undisclosed manufacturing defect.",
    lesson: "A flaw can become a feature when it creates genuine product value.",
  },
  {
    id: 4,
    category: "Skincare",
    name: "The Wrong Sentence",
    originalError: "A campaign mock-up for a moisturiser says 'For dry days' instead of 'For dry skin.'",
    admission: "“Our copywriter moisturised the sentence. Not the meaning.”",
    campaign: "“Fortunately, the formula knows what it is for.”",
    whyItCouldWork: "The wordplay connects the copywriting mistake to the product category.",
    lesson: "Wordplay works best when the product is part of the punchline.",
    disclaimer: "The actual product label and directions must remain accurate.",
  },
  {
    id: 5,
    category: "Toothpaste",
    name: "The Missing Letter",
    originalError: "A fictional campaign poster reads 'Save your breth.'",
    admission: "“We told you to take care of your mouth. Then forgot how to spell.”",
    campaign: "“Our copy needs brushing. Yours needs toothpaste.”",
    whyItCouldWork: "The mistake creates a simple, self-aware joke that connects directly to oral care.",
    lesson: "The strongest admission often comes from the contradiction between the mistake and the brand's message.",
  },
  {
    id: 6,
    category: "Restaurant",
    name: "The Menu Typo",
    originalError: "A restaurant's campaign artwork describes its chef's special as 'unforgetable.'",
    admission: "“We made the word forgettable. The food is working on the opposite problem.”",
    campaign: "“Judge our cooking, not our double letters.”",
    whyItCouldWork: "The campaign uses self-deprecating humour to redirect attention towards the dining experience.",
    lesson: "Own the small creative error, then give the audience a reason to evaluate the actual product.",
  },
  {
    id: 7,
    category: "Technology",
    name: "The Missing Instructions",
    originalError: "A mock advertisement for wireless headphones omits the instructions from the creative.",
    admission: "“We forgot to explain how to connect them. The headphones didn't.”",
    campaign: "“Some things should just work.”",
    whyItCouldWork: "The omission creates a concise demonstration of the brand's intended simplicity.",
    lesson: "A mistake can reinforce a product promise when the product genuinely delivers on it.",
  },
  {
    id: 8,
    category: "E-commerce",
    name: "The Pricing Error",
    originalError: "A brand deliberately stages a clearly disclosed campaign concept in which a product normally listed at ₹399 appears with a ₹1 selling price.",
    admission: "“Someone on our pricing team entered ₹1 instead of ₹399. We checked the number. Then we checked it again.”",
    campaign: "“We could have written another discount ad. Instead, we decided to make the price the story.”",
    whyItCouldWork: "A striking price contrast gives people a concrete reason to stop and investigate the brand.",
    lesson: "Price can become the creative hook, but transparency is what protects credibility.",
    disclaimer: "A fictional pricing incident must never be represented as a real internal error. If honoring ₹1, terms must clearly disclose qualifying products and taxes.",
  },
];

export const HONEST_ERROR_RULES = [
  {
    number: "01",
    title: "KEEP THE ERROR HARMLESS",
    description: "Choose a typo, creative inconsistency, harmless visual imperfection or staged campaign detail. Never compromise safety, product integrity or material customer information.",
  },
  {
    number: "02",
    title: "OWN IT BEFORE YOU EXPLAIN IT",
    description: "Use a direct admission. Avoid defensive language, elaborate excuses and fake behind-the-scenes stories.",
  },
  {
    number: "03",
    title: "CONNECT THE ERROR TO THE PRODUCT",
    description: "A coffee typo should relate to coffee. A crooked croissant should relate to baking. A design error should relate to the design philosophy. If the joke works the same for any brand, rethink it.",
  },
  {
    number: "04",
    title: "MAKE THE EXECUTION HONEST",
    description: "Distinguish between a genuine error and a deliberately staged creative idea. Do not invent employees, incidents, production failures or fake customer reactions and present them as facts.",
  },
  {
    number: "05",
    title: "MEASURE MORE THAN ATTENTION",
    description: "Track qualified reach, brand recall, message comprehension, sentiment, trust, conversion, and contribution margin. A viral mistake is not automatically a successful campaign.",
  },
];

export const HONEST_ERROR_VS_SALT_IN_TEA = [
  {
    dimension: "Strategic Goal",
    honestError: "Turn an error into a memorable brand story.",
    saltInTea: "Challenge a familiar category convention.",
  },
  {
    dimension: "Core Mechanism",
    honestError: "Admission, self-awareness, and relevant humour.",
    saltInTea: "An unexpected element with meaningful execution.",
  },
  {
    dimension: "Starting Point",
    honestError: "A harmless genuine or clearly staged error.",
    saltInTea: "A familiar brand, product or marketing formula.",
  },
  {
    dimension: "Creative Question",
    honestError: "“How can we own this mistake?”",
    saltInTea: "“What unexpected ingredient would make this remarkable?”",
  },
  {
    dimension: "Typical Execution",
    honestError: "Acknowledging a typo or visual imperfection.",
    saltInTea: "Introducing a distinctive tone, format or product idea.",
  },
  {
    dimension: "Main Risk",
    honestError: "Looking careless or dishonest.",
    saltInTea: "Being different without being relevant.",
  },
  {
    dimension: "Best Outcome",
    honestError: "The mistake reinforces authentic brand personality.",
    saltInTea: "The unexpected element strengthens brand differentiation.",
  },
];

export const THINKING_CONCEPTS: ThinkingConcept[] = [
  {
    id: "000",
    slug: "the-salt-in-tea-technique",
    number: "TECH-01",
    title: "THE SALT IN TEA TECHNIQUE™",
    tagline: "Don't follow the recipe. Question it.",
    category: "STUDIO PHILOSOPHY",
    type: "boring",
    attribution: "A proprietary creative philosophy developed by Daksh at The Boring Ads studio.",
    summary:
      "Deliberately introducing a risky, unconventional element into a familiar product, format, message, or experience to discover something people have never seen before.",
    deepDive: {
      psychologicalMechanism:
        "When everyone in a market adds more sugar, sweetness becomes the sensory default. Introducing a pinch of unexpected mineral salt creates sensory tension that shocks the cognitive palate into heightened alertness.",
      whySafeFails:
        "Most brands compete by incrementally polishing the same recipe: slightly better features, higher budget, safer slogans. This guarantees invisible parity and maximal media expenditure for minimal recall.",
      studioApplication:
        "THE FORMULA: Familiarity + Unexpected Element + Meaningful Execution. The familiar provides context. The unexpected earns attention. The execution determines whether that attention becomes reverence or rejection.",
      speculativeCaseRef: {
        slug: "bald-again-shampoo",
        title: "THE LAST SHAMPOO",
        clientName: "BaldAgain Shampoo",
        quote: "“This isn't shampoo anymore. This is my regret. Use it before it's too late.”",
      },
      takeaways: [
        "Rule 01: Know the original recipe inside-out before challenging it.",
        "Rule 02: Introduce one unexpected ingredient — not ten.",
        "Rule 03: Make the risk mean something that elevates the real product benefit.",
        "Rule 04: Test before you bet the whole brand.",
        "Rule 05: Measure recall and commercial impact, not just views or controversy.",
      ],
    },
    visualSchema: "salt-in-tea",
  },
  {
    id: "000-B",
    slug: "the-honest-error",
    number: "TECH-02",
    title: "THE HONEST ERROR™",
    tagline: "Make the mistake. Own the mistake. Make it the message.",
    category: "CREATIVE PSYCHOLOGY",
    type: "boring",
    attribution: "Original proposed creative framework developed by Daksh at The Boring Ads studio.",
    summary:
      "Turning harmless imperfection into creative value — acknowledge an unexpected flaw, own it with self-awareness, and connect it directly to the product truth.",
    deepDive: {
      psychologicalMechanism:
        "Expectation violation meets self-aware resolution. Audiences tuned out by polished corporate perfection stop when they spot an error. When the brand disarmingly owns it with humour, it registers as authentic humanity rather than deceptive salesmanship.",
      whySafeFails:
        "Many brands attempt to look flawless, resulting in identical airbrushed claims and zero personality. Hiding every harmless imperfection guarantees invisible uniformity, whereas owning a flaw demonstrates unshakeable confidence in the actual product.",
      studioApplication:
        "THE PROCESS: Create/Identify the Error → Own the Error → Turn It Into the Message. The error earns attention. The admission establishes personality. The product connection makes the story relevant.",
      speculativeCaseRef: {
        slug: "gripx-tyres",
        title: "SUPERSTITION NEEDS A BREAK",
        clientName: "GripX Tyres",
        quote: "“Superstitions aren't the problem. Your tyres are.”",
      },
      takeaways: [
        "Rule 01: Keep the error harmless — never compromise safety or customer trust.",
        "Rule 02: Own it before you explain it — skip defensive corporate jargon.",
        "Rule 03: Connect the error directly to what the product actually does.",
        "Rule 04: Make the execution honest — never fabricate fake scandals.",
        "Rule 05: Measure sentiment, recall, and revenue — not just viral noise.",
      ],
    },
    visualSchema: "honest-error",
  },
  {
    id: "001",
    slug: "purple-cow",
    number: "001",
    title: "PURPLE COW",
    tagline: "Remarkable beats ordinary.",
    category: "DIFFERENTIATION",
    type: "famous",
    attribution: "Concept articulated by Seth Godin (2003, *Purple Cow*).",
    summary:
      "In a crowded category, competent and safe advertising is invisible. Distinctive products and ideas generate attention and organic word of mouth because ordinary brown cows blend into background noise.",
    deepDive: {
      psychologicalMechanism:
        "The human visual cortex ignores homogenous visual input to conserve cognitive energy. When every brand in a category uses identical corporate smiles, blue palettes, and generic lifestyle footage, the brain categorises them as environmental wallpaper.",
      whySafeFails:
        "Playing it safe is the highest-risk strategy in modern media. Safe creative work guarantees you pay full algorithmic tax to force people to watch ads they will forget three seconds later.",
      studioApplication:
        "When an offering seems inherently ordinary, we don't disguise it with fake excitement. We reframe the mundane truth with extreme, deadpan clarity so that the honesty itself stands out like a purple cow.",
      speculativeCaseRef: {
        slug: "bald-again-shampoo",
        title: "THE LAST SHAMPOO",
        clientName: "BaldAgain Shampoo",
        quote: "“Baldness is permanent. Regret is optional.”",
      },
      takeaways: [
        "Remarkable means 'worth making a remark about' — not just louder.",
        "If a competitor could slap their logo on your ad without anyone noticing, scrap it.",
        "Extreme specificity beats broad appeal every time.",
      ],
    },
    visualSchema: "purple-cow",
  },
  {
    id: "002",
    slug: "the-curiosity-gap",
    number: "002",
    title: "THE CURIOSITY GAP",
    tagline: "Leave something worth discovering.",
    category: "COGNITIVE TENSION",
    type: "famous",
    attribution: "Information-Gap Theory formulated by George Loewenstein (1994, Carnegie Mellon).",
    summary:
      "An acute cognitive discomfort occurs when people perceive a void between what they already know and what they want to know. Leaving an intriguing puzzle motivates deeper audience engagement.",
    deepDive: {
      psychologicalMechanism:
        "Curiosity functions like mental hunger: when an information gap is opened, the brain produces an uncomfortable anticipation that drives exploratory behaviour until the gap is resolved.",
      whySafeFails:
        "Most commercial advertising rushes to explain everything immediately in the headline, eliminating any incentive for the viewer to stay engaged or think critically.",
      studioApplication:
        "We construct headlines and scripts that withhold the immediate punchline for two seconds. By prompting the audience to connect the dots themselves, their mental investment makes the brand unforgettable.",
      speculativeCaseRef: {
        slug: "dancing-cow-oatmilk",
        title: "LET HER SCROLL",
        clientName: "Dancing Cow Oat Milk",
        quote: "“She's busy. You're thirsty. Let her scroll.”",
      },
      takeaways: [
        "Curiosity requires enough context to trigger intrigue, without giving away the finish.",
        "Never confuse an intelligent gap with frustrating ambiguity.",
        "When the audience solves the riddle, they feel clever — and credit your brand.",
      ],
    },
    visualSchema: "curiosity-gap",
  },
  {
    id: "003",
    slug: "social-currency",
    number: "003",
    title: "SOCIAL CURRENCY",
    tagline: "Give people something to share.",
    category: "TRANSMISSION MECHANICS",
    type: "famous",
    attribution: "Social transmission framework outlined by Dr. Jonah Berger (2013, Wharton School).",
    summary:
      "People do not share ads to promote a business; they share ideas that reflect well on themselves. Creative that entertains, signals insider status, or expresses shared identity spreads naturally.",
    deepDive: {
      psychologicalMechanism:
        "Human communication is fundamentally driven by identity signalling and social bonding. Forwarding a witty observation or self-deprecating satire acts as social currency that enhances the sender's standing among peers.",
      whySafeFails:
        "Broadcast advertising that merely repeats product features gives the consumer zero personal motivation to pass it along into private DMs or Slack channels.",
      studioApplication:
        "We pressure-test every concept against the 'Group Chat Filter': would a real human being voluntarily send this to a colleague with the caption 'this is so painfully accurate'?",
      speculativeCaseRef: {
        slug: "gripx-tyres",
        title: "SUPERSTITION NEEDS A BREAK",
        clientName: "GripX Tyres",
        quote: "“Even bad luck deserves good grip.”",
      },
      takeaways: [
        "Group chats are where real culture and buying opinions are formed.",
        "Self-awareness and irony make brand messages shareable rather than cringe.",
        "Design for the sender, not just the receiver.",
      ],
    },
    visualSchema: "social-currency",
  },
  {
    id: "004",
    slug: "pattern-interrupt",
    number: "004",
    title: "PATTERN INTERRUPT",
    tagline: "Break the expected.",
    category: "ATTENTION DESIGN",
    type: "famous",
    attribution: "Derived from behavioural psychology and cognitive heuristics (Milton Erickson / cognitive psychology).",
    summary:
      "People scroll through media feeds in a hypnotic routine. An unexpected visual cadence, contrasting silence, or counter-intuitive headline jolts the brain out of autopilot.",
    deepDive: {
      psychologicalMechanism:
        "The brain's reticular activating system (RAS) filters out predictable stimuli to prevent sensory overload. When an incoming stimulus violates the expected sequence, the RAS immediately directs conscious focus.",
      whySafeFails:
        "Matching category conventions (e.g. happy smiling actors holding products) ensures your content triggers the brain's auto-filter and is ignored before processing occurs.",
      studioApplication:
        "If a category is dominated by loud 3D animations and upbeat music, we deploy deadpan quiet typography and documentary realism. The stark difference forces an instinctive halt.",
      speculativeCaseRef: {
        slug: "bald-again-shampoo",
        title: "THE LAST SHAMPOO",
        clientName: "BaldAgain Shampoo",
        quote: "“A deadpan morning worship ceremony around a shampoo bottle.”",
      },
      takeaways: [
        "Contrast is the currency of attention.",
        "A 3-second silence can be louder than a shouting voiceover.",
        "Identify category clichés, then systematically execute their mirror opposite.",
      ],
    },
    visualSchema: "pattern-interrupt",
  },
  {
    id: "005",
    slug: "the-von-restorff-effect",
    number: "005",
    title: "THE VON RESTORFF EFFECT",
    tagline: "Make the difference impossible to miss.",
    category: "MEMORY ENCODING",
    type: "famous",
    attribution: "Empirically discovered by Hedwig von Restorff (1933, University of Berlin).",
    summary:
      "Also known as the Isolation Effect: when multiple similar items are presented simultaneously, the one that stands out structurally or visually is significantly more likely to be remembered.",
    deepDive: {
      psychologicalMechanism:
        "Working memory retains isolated items with higher fidelity because they experience less retroactive and proactive interference from surrounding homogeneous items during memory consolidation.",
      whySafeFails:
        "When ten competitor websites all use identical rounded cards, pastel gradients, and generic hero illustrations, consumers mentally merge them into a single indistinguishable blur.",
      studioApplication:
        "We build creative systems with stark monochromatic structures, harsh sharp corners, and deliberate acid accents — ensuring that in a sea of modern generic minimalism, our clients remain the isolated benchmark.",
      speculativeCaseRef: {
        slug: "gripx-tyres",
        title: "SUPERSTITION NEEDS A BREAK",
        clientName: "GripX Tyres",
        quote: "“A pure acid-yellow typographic attack: Superstitions aren't the problem. Your tyres are.”",
      },
      takeaways: [
        "Memory favors the anomaly.",
        "Consistency within your work matters, but contrast against competitors matters more.",
        "Sharp edges cut through round feeds.",
      ],
    },
    visualSchema: "von-restorff",
  },
  {
    id: "006",
    slug: "emotional-positioning",
    number: "006",
    title: "EMOTIONAL POSITIONING",
    tagline: "Sell the feeling, not just the feature.",
    category: "HUMAN INSIGHT",
    type: "famous",
    attribution: "Core principle in modern brand positioning and behavioural economics.",
    summary:
      "People make purchasing decisions based on intuitive emotional tensions and rationalize them with functional features afterwards. Tapping into an unsaid human truth builds genuine resonance.",
    deepDive: {
      psychologicalMechanism:
        "Neurological studies show that emotional processing in the limbic system precedes and strongly guides rational decision-making in the prefrontal cortex. Logic justifies, but emotion commits.",
      whySafeFails:
        "Listing technical specifications or operational bullet points appeals only to the rational mind, failing to evoke the somatic markers required for strong recall or brand affection.",
      studioApplication:
        "We look for the unspoken anxiety, secret vanity, or communal frustration at the core of the category. Rather than promising unrealistic bliss, we validate the audience's real emotional state.",
      speculativeCaseRef: {
        slug: "dancing-cow-oatmilk",
        title: "LET HER SCROLL",
        clientName: "Dancing Cow Oat Milk",
        quote: "“Even cows need some downtime. Let her scroll. You drink oat milk.”",
      },
      takeaways: [
        "Speak to how the user actually feels, not how your marketing team wishes they felt.",
        "Humour and vulnerability build trust faster than perfection.",
        "A feature is what it does; an insight is how it changes their day.",
      ],
    },
    visualSchema: "emotional-positioning",
  },
];

export interface StudioProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  output: string;
}

export const STUDIO_PROCESS: StudioProcessStage[] = [
  {
    number: "01",
    title: "OBSERVE",
    subtitle: "UNCOVER THE FRICTION",
    description: "Find the overlooked behaviour, frustration, contradiction, or desire that the category conveniently ignores.",
    output: "Raw human observation",
  },
  {
    number: "02",
    title: "REFRAME",
    subtitle: "FLIP THE PERSPECTIVE",
    description: "Challenge the obvious way a product or category is usually presented. Invert the cliché to find the sharp angle.",
    output: "Strategic creative tension",
  },
  {
    number: "03",
    title: "CREATE",
    subtitle: "CRAFT THE ARTEFACT",
    description: "Turn the insight into a memorable headline, visual concept, campaign script, or creative execution with zero bloat.",
    output: "Tested spec campaigns & scripts",
  },
  {
    number: "04",
    title: "MAKE IT MATTER",
    subtitle: "ALIGN WITH PURPOSE",
    description: "Explain how the idea could connect with the intended audience and support the brand's long-term business objectives.",
    output: "Production-ready concept package",
  },
];
