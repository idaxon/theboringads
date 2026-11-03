export interface Deliverables {
  script: {
    title: string;
    duration: string;
    content: { time: string; visual: string; audio: string }[];
  };
  storyboard: { scene: number; desc: string; punchline: string }[];
  keyVisual: { headline: string; subhead: string; artDirection: string };
  social: string[];
  outdoor: { headline: string; location: string };
  fifteenSec: string;
  sixSec: string;
}

export interface Campaign {
  slug: string;
  number: string;
  title: string;
  clientName: string;
  category: string;
  punchline: string;
  summary: string;
  image?: string;
  layout: "full-bleed" | "typography-only" | "split-screen";
  colorTheme: "black" | "acid" | "cream";
  brief: string;
  insight: string;
  theIdea: string;
  deliverables: Deliverables;
}

export const CAMPAIGNS: Campaign[] = [
  {
    slug: "bald-again-shampoo",
    number: "01",
    title: "THE LAST SHAMPOO",
    clientName: "BaldAgain Shampoo",
    category: "MEN'S GROOMING & REGRET",
    punchline: "“This isn't shampoo anymore. This is my regret.”",
    summary:
      "A completely bald man performs an absurdly serious morning puja ceremony around his last shampoo bottle. Don't wait until it's too late.",
    image: "/images/bald_again_shampoo.jpg",
    layout: "full-bleed",
    colorTheme: "black",
    brief:
      "BaldAgain needed a hair loss prevention campaign that cuts through the snake-oil clinical before-and-after promises with brutal honesty and unforgettable deadpan humor.",
    insight:
      "“Men don't worry about balding until they're already wearing baseball caps to weddings. By the time they accept it, their shampoo bottle is just an expensive bathroom ornament.”",
    theIdea:
      "The Shrine of Regret. Instead of showing miraculous regrowth, we show a completely bald man treating an ordinary bottle of BaldAgain Shampoo like a sacred deity—complete with a fresh marigold garland, folded hands in prayer, and a heartfelt monologue about what could have been.",
    deliverables: {
      script: {
        title: "THIS IS MY REGRET",
        duration: ":30 TVC & Web",
        content: [
          {
            time: "0:00 - 0:08",
            visual:
              "A completely bald man in his late 30s wakes up and walks into a moody, dramatically lit modern bathroom. Dawn light reflects softly off his head. Opens bathroom cabinet, gently retrieves an amber shampoo bottle.",
            audio:
              "A quiet, solemn sitar and tanpura drone humming softly in the background. Complete morning stillness.",
          },
          {
            time: "0:08 - 0:18",
            visual:
              "He places the shampoo bottle on the marble sink. Takes a fresh orange and yellow marigold garland and drapes it carefully around the bottle like a religious idol. Folds his hands in deep prayer.",
            audio:
              "Soft temple bell chime (deadpan). Sound of gentle prayer breath.",
          },
          {
            time: "0:18 - 0:30",
            visual:
              "He turns his head slowly, looking straight down the camera lens with profound, heartfelt sorrow. Holds the shampoo bottle close.",
            audio:
              "Protagonist (deadpan, sincere): 'You all must be wondering why I'm using shampoo when I don't have a single hair left.' (Pauses). 'This isn't shampoo anymore. This is my regret. Use it before it's too late.'",
          },
        ],
      },
      storyboard: [
        {
          scene: 1,
          desc: "Moody bathroom. Dawn light shines on a completely hairless scalp.",
          punchline: "Follicle count: 0. Regret level: Maximum.",
        },
        {
          scene: 2,
          desc: "Marigold garland lovingly draped over the shampoo pump.",
          punchline: "From bathroom cosmetic to sacred deity.",
        },
        {
          scene: 3,
          desc: "Folded hands, bowed head, moment of profound existential reflection.",
          punchline: "Prayers cannot revive dead roots.",
        },
        {
          scene: 4,
          desc: "Stark black screen with bottle lockup and headline.",
          punchline: "Don't wait until it's too late. Baldness is permanent.",
        },
      ],
      keyVisual: {
        headline: "DON'T WAIT UNTIL IT'S TOO LATE.",
        subhead: "Baldness is permanent. Regret is optional. BaldAgain Shampoo.",
        artDirection:
          "Cinematic bathroom chiaroscuro photography, completely bald man with hands folded in reverent prayer around a marigold-garlanded shampoo idol.",
      },
      social: [
        "Your scalp called. It wants you to take this seriously before you start searching for flights to Istanbul.",
        "Tag a friend who still parts his hair like it's 2014. Save a life.",
        "The 5 stages of male pattern baldness: Denial, Anger, Baseball Caps, Regret, BaldAgain.",
      ],
      outdoor: {
        headline: "THIS BILLBOARD HAS MORE COVERAGE THAN YOUR CROWN. USE BALDAGAIN.",
        location: "Mumbai Bandra-Worli Sea Link & Metro Pillars",
      },
      fifteenSec:
        "Bald man stares into camera for 11 seconds holding a shampoo bottle with marigolds. 'Too late for me. Not for you.' BaldAgain.",
      sixSec:
        "A marigold garland drops onto a shampoo pump. 'Don't wait.' BaldAgain.",
    },
  },
  {
    slug: "gripx-tyres",
    number: "02",
    title: "SUPERSTITION NEEDS A BREAK",
    clientName: "GripX Tyres",
    category: "AUTOMOTIVE & ROAD SAFETY",
    punchline: "“Superstitions aren't the problem. Your tyres are.”",
    summary:
      "A black cat crosses the road. Rider 1 with cheap tyres skids into a garbage pile; Rider 2 on GripX tyres stops effortlessly with an inch to spare. Even bad luck deserves good grip.",
    image: "/images/gripx_tyres.jpg",
    layout: "typography-only",
    colorTheme: "acid",
    brief:
      "GripX Tyres wanted to tackle monsoon and road safety without showing gruesome crashes or finger-wagging public service announcements that riders immediately tune out.",
    insight:
      "“Every rider blames bad luck, auspicious planetary timing, or a black cat for road skids, while conveniently ignoring that their front tyre has less tread than a wet mango peel.”",
    theIdea:
      "Superstitions Need a Break. Turn a classic cultural superstition—the crossing black cat—into an objective performance benchmark. If your tyres grip, bad luck has nothing on you.",
    deliverables: {
      script: {
        title: "THE CROSSING CAT",
        duration: ":30 Cinema & Digital",
        content: [
          {
            time: "0:00 - 0:08",
            visual:
              "Two motorcycles riding side-by-side along a quiet asphalt road on a bright Indian afternoon. Both riders in good spirits.",
            audio:
              "Throaty exhaust rumble. Birds chirping. Gentle ambient road breeze.",
          },
          {
            time: "0:08 - 0:18",
            visual:
              "A sleek black cat saunters out from behind a tea stall and crosses the road. Rider 1 on ordinary tyres panics, stomps his brakes—the rear wheel locks, bike fish-tails uncontrollably, and crashes directly into a municipal garbage heap.",
            audio:
              "Ear-splitting tyre screech! Dramatic panic honk! Splat into garbage heap.",
          },
          {
            time: "0:18 - 0:30",
            visual:
              "Rider 2 on GripX tyres brakes firmly. The tyre bites the asphalt and halts smoothly exactly 2 inches from the cat. The rider looks down, gives the cat an appreciative smile. The cat meows calmly and continues walking. Rider accelerates away.",
            audio:
              "Crisp, precise ABS tyre bite. Cat: 'Meow.' Voiceover (dry, confident): 'Superstitions aren't the problem. Your tyres are. GripX Tyres. Even bad luck deserves good grip.'",
          },
        ],
      },
      storyboard: [
        {
          scene: 1,
          desc: "Two riders cruising on a quiet suburban road.",
          punchline: "Smooth sailing. For now.",
        },
        {
          scene: 2,
          desc: "A black cat casually strolls into the lane with royal confidence.",
          punchline: "The ultimate cultural test.",
        },
        {
          scene: 3,
          desc: "Rider 1 buried in roadside garbage; Rider 2 stationary in front of the cat.",
          punchline: "Outcome determined by rubber, not astrology.",
        },
        {
          scene: 4,
          desc: "Bold acid-yellow typography: GripX Tyres.",
          punchline: "Superstitions need a break. Your brakes shouldn't.",
        },
      ],
      keyVisual: {
        headline: "SUPERSTITIONS AREN'T THE PROBLEM. YOUR TYRES ARE.",
        subhead: "Even bad luck deserves good grip. Superstitions need a break. Your brakes shouldn't.",
        artDirection:
          "Massive acid-yellow #DFFF00 poster typography, brutalist tyre tread motifs, ultra-black Space Grotesk type.",
      },
      social: [
        "Blaming a black cat for bald tyres is like blaming the rain for leaving your umbrella at home.",
        "Your horoscope didn't ruin your rim. Your 4-year-old budget tyre did.",
        "Cats have 9 lives. With GripX tyres, you won't need to borrow any of them.",
      ],
      outdoor: {
        headline: "BLACK CATS DIDN'T SKID ON THIS HIGHWAY. BALD TYRES DID.",
        location: "Western Express Highway & Bangalore Electronic City Flyover",
      },
      fifteenSec:
        "Black cat steps onto asphalt. Bike stops 2 inches away in total silence. Rider waves. 'GripX. Stop when you want to.'",
      sixSec:
        "Cat stares into camera. Tyre stops with clean grip. Text: 'Superstitions need a break. Your brakes shouldn't. GripX.'",
    },
  },
  {
    slug: "dancing-cow-oatmilk",
    number: "03",
    title: "LET HER SCROLL",
    clientName: "Dancing Cow Oat Milk",
    category: "PLANT-BASED DAIRY & ENTERTAINMENT",
    punchline: "“She's busy. You're thirsty. Let her scroll.”",
    summary:
      "A macro shot of someone scrolling through Instagram Reels pulls back to reveal a content cow lounging comfortably on hay bales holding a smartphone. Even cows need some downtime.",
    image: "/images/dancing_cow_oatmilk.jpg",
    layout: "split-screen",
    colorTheme: "cream",
    brief:
      "Dancing Cow wanted an oat milk campaign that doesn't lecture consumers about climate doom, methane emissions, or moral superiority.",
    insight:
      "“Guilt-trip marketing makes consumers defensively crave real milk. Humor that humanizes cows as creatures who also just want to chill and scroll doom-reels makes oat milk irresistible.”",
    theIdea:
      "Let Her Scroll. Frame choosing oat milk not as a sacrifice, but as a polite act of courtesy to give cows a day off so they can watch mindless video content on cozy hay bales.",
    deliverables: {
      script: {
        title: "THE DOOMSCROLLING COW",
        duration: ":30 Digital & OTT",
        content: [
          {
            time: "0:00 - 0:08",
            visual:
              "Extreme macro close-up of a smartphone screen showing someone thumb-scrolling through viral dance reels, cooking hacks, and capybara videos.",
            audio:
              "Upbeat viral social audio snippets switching rapidly with each finger swipe. Classic dopamine scroll tempo.",
          },
          {
            time: "0:08 - 0:20",
            visual:
              "Camera slowly zooms out. The limb holding the phone isn't a human hand—it's a cloven hoof! Zoom out further to reveal a happy Jersey cow reclining comfortably on a plush pile of golden hay in a sunlit rustic barn, thoroughly engrossed in reels.",
            audio:
              "A soft, contented cow sigh. Distant barn sparrows. Phone audio continues quietly.",
          },
          {
            time: "0:20 - 0:30",
            visual:
              "Cut to a cold glass of rich, frothy Dancing Cow Oat Milk being poured. A person takes a satisfying sip with a smile. Split to product lockup.",
            audio:
              "Smooth pouring sound. Voiceover (warm, deadpan): 'She's busy. You're thirsty. Let her scroll. You drink oat milk. Dancing Cow. Even cows need some downtime.'",
          },
        ],
      },
      storyboard: [
        {
          scene: 1,
          desc: "Macro shot of phone screen swiping rapidly through Instagram reels.",
          punchline: "Average screen time: 6 hours/day.",
        },
        {
          scene: 2,
          desc: "Reveal: The smartphone is held between the hooves of a cow.",
          punchline: "Plot twist: It's Lakshmi.",
        },
        {
          scene: 3,
          desc: "Cow lies comfortably on hay bale, bathed in warm afternoon sunlight.",
          punchline: "Zero intention of producing dairy today.",
        },
        {
          scene: 4,
          desc: "Cold creamy oat milk poured into a glass beside the carton.",
          punchline: "Let her scroll. You drink oat milk.",
        },
      ],
      keyVisual: {
        headline: "SHE'S BUSY. YOU'RE THIRSTY.",
        subhead: "Let her scroll. You drink oat milk. Even cows need some downtime.",
        artDirection:
          "50/50 split screen. Cozy, photorealistic sunlit barn visual on the right, bold editorial black typography on warm cream on the left.",
      },
      social: [
        "She's 42 reels deep into interior design tips. Don't disturb her with your morning latte.",
        "Cows deserve screen time too. Switch to Dancing Cow Oat Milk.",
        "Your coffee doesn't need to bother a bovine. Oats don't have Instagram accounts anyway.",
      ],
      outdoor: {
        headline: "SHE'S ON HER LUNCH BREAK. DRINK OAT MILK.",
        location: "Indiranagar 100ft Road Bangalore & Bandra Bandstand",
      },
      fifteenSec:
        "Cow swipes through three viral dance videos. Pull back to chilled oat milk carton. 'She's busy. You're thirsty. Dancing Cow Oat Milk.'",
      sixSec:
        "Cow looks up from smartphone: 'Moo.' Text: 'Busy. Drink Oat Milk. Dancing Cow.'",
    },
  },
];
