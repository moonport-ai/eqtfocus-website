import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { VENDORS, VendorCategory } from "@/data/vendors";

export const metadata: Metadata = {
  title: "Preferred Vendors | EQT Focus",
  description:
    "Explore our network of trusted real estate professionals including lenders, attorneys, inspectors, and title companies.",
};

const CATEGORIES: VendorCategory[] = [
  "Conventional Lenders",
  "Investment Lenders",
  "Attorneys",
  "Inspectors",
  "Title",
];

const CATEGORY_META: Record<
  VendorCategory,
  { icon: React.ReactNode; badge: string }
> = {
  "Conventional Lenders": {
    badge: "Mortgage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 21h18M3 7l9-4 9 4M4 7v14M20 7v14M9 21V12h6v9" />
      </svg>
    ),
  },
  "Investment Lenders": {
    badge: "Investment",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  Attorneys: {
    badge: "Legal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  Inspectors: {
    badge: "Inspection",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
  Title: {
    badge: "Title",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
};

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.81 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.92 1.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.02z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0 mt-0.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function VendorsPage() {
  return (
    <>
      <style>{`
        .vendor-card {
          background: #ffffff;
          border: 1px solid #e8e8e8;
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .vendor-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(0,0,0,0.015) 0%, transparent 60%);
          pointer-events: none;
        }
        .vendor-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.12);
          border-color: rgba(0,0,0,0.18);
        }
        .vendor-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          background: rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 20px;
          padding: 4px 10px;
          margin-bottom: 1.25rem;
          width: fit-content;
        }
        .vendor-name {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: #000000;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .vendor-title {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          margin-top: 0.35rem;
        }
        .vendor-company {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: rgba(0,0,0,0.65);
          margin-top: 0.6rem;
        }
        .vendor-nmls {
          font-size: 11px;
          color: rgba(0,0,0,0.35);
          margin-top: 0.25rem;
          letter-spacing: 0.04em;
        }
        .vendor-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 100%);
          margin: 1.25rem 0;
        }
        .vendor-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .vendor-contact-row:last-child {
          margin-bottom: 0;
        }
        .vendor-contact-icon {
          color: #000000;
          flex-shrink: 0;
          margin-top: 1px;
          opacity: 0.55;
        }
        .vendor-contact-text {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(0,0,0,0.65);
        }
        .vendor-contact-text .label {
          color: rgba(0,0,0,0.38);
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }
        .vendor-link {
          color: rgba(0,0,0,0.65);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .vendor-link:hover {
          color: #000;
          text-decoration: underline;
        }
        .vendor-profile-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #000;
          margin-top: auto;
          padding-top: 1.25rem;
          text-decoration: none;
          transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .vendor-profile-link:hover { gap: 10px; opacity: 0.6; }

        .section-header {
          margin-bottom: 2.5rem;
        }
        .section-category-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #000;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
          opacity: 0.5;
        }
        .section-title {
          font-family: var(--font-heading);
          font-size: clamp(1.75rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #000;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }
        .section-description {
          margin-top: 1rem;
          font-size: 14px;
          line-height: 1.8;
          color: rgba(0,0,0,0.5);
          max-width: 680px;
        }
        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(0,0,0,0.15) 0%, transparent 100%);
          margin-bottom: 2.5rem;
        }

        .vendors-page-bg {
          background-color: #f7f7f7;
          min-height: 100vh;
        }
        .vendors-hero {
          background: #000;
          padding: 5rem 0 3.5rem;
          padding-top: 8rem;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          position: relative;
          overflow: hidden;
        }
        .vendors-hero::before {
          content: '';
          position: absolute;
          top: -40%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .vendors-hero-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          margin-bottom: 1rem;
        }
        .vendors-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }
        .vendors-hero-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.4);
          margin-top: 1.25rem;
          max-width: 520px;
          line-height: 1.7;
          margin-left: auto;
          margin-right: auto;
        }

        /* Category nav pills */
        .cat-nav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 2.5rem;
          justify-content: center;
        }
        .cat-nav-pill {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 6px 16px;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .cat-nav-pill:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.07);
        }

        /* CTA block */
        .vendor-cta-block {
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 16px;
          padding: 3rem 2rem;
          text-align: center;
          background: #fff;
          margin-top: 4rem;
        }
        .vendor-cta-title {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          color: #000;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .vendor-cta-desc {
          font-size: 14px;
          color: rgba(0,0,0,0.5);
          margin-top: 0.75rem;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }
        .vendor-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 1.75rem;
          border: 1px solid rgba(0,0,0,0.8);
          color: #000;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 12px 28px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .vendor-cta-btn:hover {
          background: #000;
          color: #fff;
        }
      `}</style>

      {/* Page Hero */}
      <section className="vendors-hero">
        <Container className="text-center relative z-10">
          <p className="vendors-hero-eyebrow">Preferred Professionals</p>
          <h1 className="vendors-hero-title">Trusted Vendors</h1>
          <p className="vendors-hero-sub">
            Our hand-picked network of real estate professionals, selected for their expertise, integrity, and results.
          </p>

          {/* Quick-jump nav */}
          <nav className="cat-nav" aria-label="Jump to category">
            {CATEGORIES.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/ /g, "-")}`}
                className="cat-nav-pill"
              >
                {cat}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* Main Content */}
      <section className="vendors-page-bg py-20 pb-32">
        <Container>
          <div className="max-w-5xl mx-auto space-y-24">
            {CATEGORIES.map((category) => {
              const categoryVendors = VENDORS.filter(
                (v) => v.category === category
              );
              if (categoryVendors.length === 0) return null;

              const meta = CATEGORY_META[category];

              return (
                <div
                  key={category}
                  id={category.toLowerCase().replace(/ /g, "-")}
                  className="scroll-mt-32"
                >
                  {/* Section Header */}
                  <div className="section-header">
                    <div className="section-category-tag">
                      <span className="text-[#d4af37]">{meta.icon}</span>
                      {meta.badge}
                    </div>
                    <h2 className="section-title">{category}</h2>

                    {category === "Conventional Lenders" && (
                      <p className="section-description">
                        Before you begin searching for a home, it&apos;s important to understand how much you can comfortably afford. Speaking with a mortgage lender early in the process helps determine your purchasing power and ensures you are financially prepared. You may work with a lender of your choice, or select from one of the trusted professionals below.
                      </p>
                    )}
                    {category === "Investment Lenders" && (
                      <p className="section-description">
                        Before you begin evaluating investment opportunities, it&apos;s important to understand how much capital you can comfortably deploy. An investment lender will review your income, assets, and investment goals to provide pre-approval and an appropriate funding plan. You may work with a lender of your choice, or select from one of the trusted professionals below.
                      </p>
                    )}
                    {category === "Attorneys" && (
                      <p className="section-description">
                        Once your offer has been accepted, a real estate attorney will carefully review the contract to ensure your rights are fully protected before the transaction moves forward. You may choose any attorney you prefer, or contact one of the trusted professionals recommended below.
                      </p>
                    )}
                    {category === "Inspectors" && (
                      <p className="section-description">
                        Once attorney review is complete, schedule a home inspection to ensure all major components of the property are in proper working condition. Attending the inspection is highly recommended — it allows you to learn valuable information and ask questions directly.
                      </p>
                    )}
                    {category === "Title" && (
                      <p className="section-description">
                        Before closing on a property, a trusted title company will review records, verify ownership, and handle all necessary documentation to provide clear title and peace of mind. You can work with a title company of your choice or connect with a trusted professional below.
                      </p>
                    )}
                  </div>

                  <div className="section-divider" />

                  {/* Vendor Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {categoryVendors.map((vendor) => (
                      <div key={vendor.id} className="vendor-card">
                        {/* Badge */}
                        <div className="vendor-card-badge">
                          {meta.icon}
                          {meta.badge}
                        </div>

                        {/* Identity */}
                        <h3 className="vendor-name">{vendor.name}</h3>
                        {vendor.title && (
                          <p className="vendor-title">{vendor.title}</p>
                        )}
                        <p className="vendor-company">{vendor.company}</p>
                        {vendor.nmls && (
                          <p className="vendor-nmls">NMLS #{vendor.nmls}</p>
                        )}

                        <div className="vendor-divider" />

                        {/* Contact Details */}
                        <div className="flex flex-col gap-3">
                          {vendor.address && (
                            <div className="vendor-contact-row">
                              <span className="vendor-contact-icon">
                                <MapPinIcon />
                              </span>
                              <div className="vendor-contact-text">
                                <span className="label">Address</span>
                                {vendor.address.map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))}
                              </div>
                            </div>
                          )}

                          {vendor.phones && vendor.phones.length > 0 && (
                            <div className="vendor-contact-row">
                              <span className="vendor-contact-icon">
                                <PhoneIcon />
                              </span>
                              <div className="vendor-contact-text">
                                <span className="label">Phone</span>
                                {vendor.phones.map((phone, i) => (
                                  <div key={i} style={{ display: "flex", gap: "4px", alignItems: "baseline" }}>
                                    <span style={{ color: "rgba(0,0,0,0.38)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.04em", flexShrink: 0 }}>
                                      {phone.label}:
                                    </span>
                                    <span>{phone.number}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {vendor.emails && vendor.emails.length > 0 && (
                            <div className="vendor-contact-row">
                              <span className="vendor-contact-icon">
                                <MailIcon />
                              </span>
                              <div className="vendor-contact-text">
                                <span className="label">Email</span>
                                {vendor.emails.map((email, i) => (
                                  <div key={i}>
                                    <a
                                      href={`mailto:${email}`}
                                      className="vendor-link"
                                    >
                                      {email}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {(vendor.website || vendor.profileUrl) && (
                            <div className="vendor-contact-row">
                              <span className="vendor-contact-icon">
                                <GlobeIcon />
                              </span>
                              <div className="vendor-contact-text">
                                <span className="label">Web</span>
                                {vendor.website && (
                                  <div>
                                    <a
                                      href={
                                        vendor.website.startsWith("http")
                                          ? vendor.website
                                          : `https://${vendor.website}`
                                      }
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="vendor-link"
                                    >
                                      {vendor.website.replace(/^https?:\/\//, "")}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {vendor.profileUrl && (
                          <a
                            href={vendor.profileUrl}
                            className="vendor-profile-link"
                          >
                            View Profile <ArrowIcon />
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="vendor-cta-block">
              <h3 className="vendor-cta-title">Seeking a Recommendation?</h3>
              <p className="vendor-cta-desc">
                If you need an introduction to trusted Real Estate Attorneys, Property Inspectors, Title Companies, or other local professionals, please reach out directly.
              </p>
              <a href="/contact" className="vendor-cta-btn">
                Contact Us <ArrowIcon />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
