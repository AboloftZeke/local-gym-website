
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Dumbbell,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const facilities = [
  {
    number: "01",
    title: "STRENGTH EQUIPMENT",
    description:
      "Build your foundation with dependable equipment for every stage of your training.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    alt: "Strength training equipment in a gym",
  },
  {
    number: "02",
    title: "FREE WEIGHTS",
    description:
      "From your first dumbbell to your next personal best, train at your own pace.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete training with free weights",
  },
  {
    number: "03",
    title: "FUNCTIONAL TRAINING",
    description:
      "Make room for movement, conditioning, and workouts that challenge you.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    alt: "Modern gym training floor",
  },
];

const benefits = [
  {
    number: "01",
    title: "EQUIPMENT THAT WORKS",
    description:
      "A practical training space equipped to support your fitness goals.",
  },
  {
    number: "02",
    title: "YOUR PACE, YOUR PROGRESS",
    description:
      "Whether you're starting out or leveling up, there's room to grow.",
  },
  {
    number: "03",
    title: "A COMMUNITY THAT SHOWS UP",
    description:
      "Train alongside people who value consistency, effort, and progress.",
  },
];

const plans = [
  {
    name: "ESSENTIAL",
    price: "1,490",
    description: "Your foundation starts here.",
    features: ["Gym floor access", "Strength equipment", "Free weights"],
    featured: false,
  },
  {
    name: "PERFORMANCE",
    price: "2,290",
    description: "More room to reach your goals.",
    features: [
      "Everything in Essential",
      "Functional training area",
      "Priority program inquiries",
    ],
    featured: true,
  },
  {
    name: "UNLIMITED",
    price: "3,490",
    description: "For those ready to go all in.",
    features: [
      "Everything in Performance",
      "Flexible training sessions",
      "Additional member benefits",
    ],
    featured: false,
  },
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=900&q=85",
    alt: "Athlete working out in a gym",
    className: "gallery-tall",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    alt: "Gym strength equipment",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019603454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    alt: "Fitness training session",
    className: "",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    alt: "Gym interior",
    className: "gallery-wide",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="wordmark" aria-label="IRONLINE home">
          IRON<span>LINE</span>
          <span className="wordmark-period">.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className="nav-link active" href="/">
            Home
          </Link>
          <Link className="nav-link" href="#facilities">
            Facilities
          </Link>
          <Link className="nav-link" href="#membership">
            Membership
          </Link>
          <Link className="nav-link" href="#contact">
            Contact
          </Link>
        </nav>

        <Link href="/inquire" className="button button-lime nav-cta">
          JOIN NOW <ArrowUpRight size={16} />
        </Link>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <Menu size={24} />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <Link href="#facilities">Facilities</Link>
            <Link href="#membership">Membership</Link>
            <Link href="#contact">Contact</Link>
            <Link href="/inquire">Join Now ↗</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="wordmark">
              IRON<span>LINE</span>
              <span className="wordmark-period">.</span>
            </Link>
            <p>
              BUILT BY EFFORT.
              <br />
              DEFINED BY PROGRESS.
            </p>
          </div>

          <div className="footer-column">
            <h3>EXPLORE</h3>
            <Link href="/">Home</Link>
            <Link href="#facilities">Facilities</Link>
            <Link href="#membership">Membership</Link>
            <Link href="/inquire">Inquire</Link>
          </div>

          <div className="footer-column">
            <h3>FIND US</h3>
            <p>
              <MapPin size={15} /> Your gym address goes here
            </p>
            <p>
              <Clock3 size={15} /> Opening hours to be announced
            </p>
            <p>Contact details to be announced</p>
          </div>

          <div className="footer-column">
            <h3>FOLLOW ALONG</h3>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <span className="instagram-mark" aria-hidden="true">◎</span> Instagram <ArrowUpRight size={14} />
            </a>
            <p>Social media links are placeholders.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 IRONLINE. PLACEHOLDER BRAND.</span>
          <span>SHOW UP. PUT IN THE WORK.</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR TRAINING. YOUR STANDARD.
            </p>

            <h1>
              BUILT
              <br />
              BY <span>EFFORT.</span>
              <br />
              DEFINED
              <br />
              BY <span>YOU.</span>
            </h1>

            <p className="hero-description">
              A place to put in the work, build your strength, and become a
              little better every day. Your next chapter starts here.
            </p>

            <div className="hero-actions">
              <Link href="#membership" className="button button-lime">
                EXPLORE MEMBERSHIPS <ArrowUpRight size={17} />
              </Link>
              <Link href="#facilities" className="text-link">
                EXPLORE THE GYM <ArrowDownRight size={16} />
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-line" />
              <span>NO SHORTCUTS. JUST SHOWING UP.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-image"
              role="img"
              aria-label="Athlete training in a dark, modern gym"
            />
            <div className="image-label">
              <span className="image-label-icon">
                <Dumbbell size={19} />
              </span>
              <span>
                <strong>MADE FOR THE WORK</strong>
                <small>YOUR SPACE TO GET STRONGER</small>
              </span>
              <ArrowUpRight size={19} />
            </div>
            <div className="hero-index">01 / SHOW UP</div>
          </div>

          <div className="hero-side-label">STRENGTH · DISCIPLINE · PROGRESS</div>
        </section>

        <section className="proof-strip" aria-label="Our approach">
          <div className="container proof-grid">
            <div>
              <Zap size={20} />
              <span>TRAIN WITH PURPOSE</span>
            </div>
            <div>
              <Dumbbell size={20} />
              <span>BUILT FOR EVERY LEVEL</span>
            </div>
            <div>
              <ShieldCheck size={20} />
              <span>PROGRESS OVER PERFECTION</span>
            </div>
            <div>
              <Sparkles size={20} />
              <span>YOUR NEXT REP STARTS HERE</span>
            </div>
          </div>
        </section>

        <section className="section container" id="facilities">
          <div className="section-topline">
            <SectionHeading
              eyebrow="INSIDE IRONLINE"
              title={"ROOM TO MOVE.\nSPACE TO GROW."}
              description="A focused training environment with space to challenge yourself, learn, and keep moving forward."
            />
            <Link href="/facilities" className="text-link section-link">
              VIEW ALL FACILITIES <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="facility-grid">
            {facilities.map((facility) => (
              <article className="facility-card" key={facility.number}>
                <div className="facility-image-wrap">
                  <div
                    className="facility-image"
                    role="img"
                    aria-label={facility.alt}
                    style={{ backgroundImage: `url("${facility.image}")` }}
                  />
                  <span className="facility-number">{facility.number}</span>
                  <span className="facility-arrow">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
                <div className="facility-copy">
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="why-section">
          <div className="container why-grid">
            <div className="why-visual">
              <div
                className="why-image"
                role="img"
                aria-label="Strength training in a gym"
              />
              <div className="why-stamp">
                <Dumbbell size={25} />
                <span>EFFORT</span>
                <span>OVER</span>
                <span>EXCUSES.</span>
              </div>
              <span className="why-image-caption">THE WORK SPEAKS.</span>
            </div>

            <div className="why-content">
              <SectionHeading
                eyebrow="WHY IRONLINE"
                title={"MORE THAN\nA WORKOUT."}
                description="The right environment can change how you approach every session. We're here to help you make each one count."
              />

              <div className="benefit-list">
                {benefits.map((benefit) => (
                  <article className="benefit-item" key={benefit.number}>
                    <span>{benefit.number}</span>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                    <ArrowUpRight size={18} />
                  </article>
                ))}
              </div>

              <Link href="/facilities" className="text-link">
                GET TO KNOW THE GYM <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="section container" id="membership">
          <div className="section-topline membership-heading">
            <SectionHeading
              eyebrow="FIND YOUR FIT"
              title={"YOUR GOALS.\nYOUR MEMBERSHIP."}
              description="Choose a starting point that works for you. These sample plans and prices can be adjusted to match the actual gym."
            />
            <span className="price-note">SAMPLE PRICES · PHP / MONTH</span>
          </div>

          <div className="plans-grid">
            {plans.map((plan) => (
              <article
                className={`plan-card${plan.featured ? " plan-featured" : ""}`}
                key={plan.name}
              >
                {plan.featured && (
                  <div className="plan-ribbon">MOST POPULAR</div>
                )}
                <div className="plan-top">
                  <span className="plan-name">{plan.name}</span>
                  <span className="plan-symbol">
                    {plan.featured ? (
                      <Zap size={20} />
                    ) : (
                      <Dumbbell size={20} />
                    )}
                  </span>
                </div>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span>₱</span>
                  {plan.price}
                  <small>/ MO</small>
                </div>
                <div className="plan-divider" />
                <p className="plan-includes">WHAT&apos;S INCLUDED</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/inquire?plan=${plan.name.toLowerCase()}`}
                  className={`button ${plan.featured ? "button-dark" : "button-outline"}`}
                >
                  INQUIRE NOW <ArrowUpRight size={16} />
                </Link>
              </article>
            ))}
          </div>
          <p className="plans-disclaimer">
            Membership details, availability, and prices are illustrative
            placeholders and will need confirmation.
          </p>
        </section>

        <section className="gallery-section">
          <div className="container">
            <div className="section-topline">
              <SectionHeading
                eyebrow="THE IRONLINE ENVIRONMENT"
                title={"PUT IN THE WORK.\nOWN THE PROGRESS."}
                description="A first look at the kind of space where your next personal best begins."
              />
              <Link href="/facilities" className="text-link section-link">
                EXPLORE OUR SPACE <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="gallery-grid">
              {gallery.map((item, index) => (
                <div
                  className={`gallery-item ${item.className}`}
                  key={item.alt}
                >
                  <div
                    className="gallery-image"
                    role="img"
                    aria-label={item.alt}
                    style={{ backgroundImage: `url("${item.image}")` }}
                  />
                  <span className="gallery-index">
                    0{index + 1} / 0{gallery.length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <p className="eyebrow">THE FIRST STEP IS YOURS</p>
              <h2>
                READY TO
                <br />
                <span>SHOW UP?</span>
              </h2>
              <p>
                Have questions about membership? Let&apos;s get your training
                journey started.
              </p>
            </div>
            <Link href="/inquire" className="button button-dark cta-button">
              LET&apos;S GET STARTED <ArrowUpRight size={18} />
            </Link>
            <span className="cta-decoration" aria-hidden="true">
              IRON
            </span>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
