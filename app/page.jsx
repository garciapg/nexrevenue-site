import Logo from "./components/Logo";
import InquiryForm from "./components/InquiryForm";

const Icon = ({ d }) => (
  <div className="icon">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#13A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  </div>
);

const PHONE = "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z";
const TRANSFER = "M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3";
const LEAD = "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM19 8v6M22 11h-6";

export default function Home() {
  return (
    <>
      {/* 1. Nav */}
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#top" className="logo" aria-label="NexRevenue home">
            <Logo /> <span className="wordmark">Nex<span>Revenue</span></span>
          </a>
          <nav className="nav-links" aria-label="Main">
            <a className="link" href="#products">Products</a>
            <a className="link" href="#how">How it works</a>
            <a className="link" href="#why">Why us</a>
            <a className="link" href="#faq">FAQ</a>
            <a className="btn btn-primary btn-small" href="#start">Start a test</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* 2. Hero */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">Final expense · Direct publisher</span>
              <h1>
                Final expense calls from people who <em>know what they called about.</em>
              </h1>
              <p className="hero-sub">
                We run our own ads and funnels, so every call, transfer and lead comes straight from us. Exclusive to
                you. No fake free-benefit hooks. We start with a test, then scale what works.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#start">Start a test batch</a>
                <a className="btn btn-ghost" href="#how">See how it works</a>
              </div>
              <div className="hero-chips">
                <span className="chip">Exclusive, never resold</span>
                <span className="chip">Product-specific ads</span>
                <span className="chip">Consent captured</span>
                <span className="chip">Test before you scale</span>
              </div>
            </div>

            <div className="callcard" aria-label="Example of a delivered call">
              <div className="callcard-top">
                <span className="live"><i /> Incoming to your agents</span>
                <span>Example</span>
              </div>
              <div className="callrow">
                <b>Inbound call · Final expense</b><span className="tag">Live</span>
                <small>Clicked a burial insurance ad, called from the quiz page</small>
              </div>
              <div className="callrow">
                <b>Live transfer · Screened</b><span className="tag">Transfer</span>
                <small>Age, state and interest confirmed before the handoff</small>
              </div>
              <div className="callrow">
                <b>Exclusive lead · Posted to CRM</b><span className="tag alt">Lead</span>
                <small>Sent to one agency only, with consent record</small>
              </div>
              <p className="callcard-note">Illustration of the three delivery formats. Not live data.</p>
            </div>
          </div>
        </section>

        {/* 3. Products */}
        <section className="section" id="products">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What we deliver</span>
              <h2>Three ways to get final expense prospects on the phone.</h2>
              <p>Pick one or mix them. Every format is exclusive and comes from our own traffic.</p>
            </div>
            <div className="cards3">
              <article className="card">
                <Icon d={PHONE} />
                <h3>Inbound calls</h3>
                <p>The consumer sees our final expense ad and dials your agents directly.</p>
                <ul>
                  <li>Caller started the conversation</li>
                  <li>Routed by state and your hours</li>
                  <li>Billed on agreed call length</li>
                </ul>
              </article>
              <article className="card">
                <Icon d={TRANSFER} />
                <h3>Live transfers</h3>
                <p>We screen the caller first, then warm-transfer them to your agent.</p>
                <ul>
                  <li>Age, state and interest confirmed</li>
                  <li>Your criteria, agreed up front</li>
                  <li>Agents only take ready conversations</li>
                </ul>
              </article>
              <article className="card">
                <Icon d={LEAD} />
                <h3>Exclusive leads</h3>
                <p>Form leads from our funnels, posted to your CRM or dialer in real time.</p>
                <ul>
                  <li>Sold to one agency only</li>
                  <li>Consent captured on the form</li>
                  <li>Delivered by API or webhook</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* 4. How the traffic works */}
        <section className="section section-dark" id="how">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How the traffic works</span>
              <h2>We own the whole path, from ad to agent.</h2>
              <p>No middlemen buying and reselling. The people who build the ads are the people who route your calls.</p>
            </div>
            <div className="flow">
              <div className="flow-col">
                <div className="flow-node">Meta ads<small>Product-specific final expense creative</small></div>
                <div className="flow-node">Quiz and call pages<small>Our own funnels, built in-house</small></div>
                <div className="flow-node">Consent capture<small>Recorded on every form</small></div>
              </div>
              <div className="flow-arrow" aria-hidden="true" />
              <div className="flow-engine">
                <h3>NexRevenue engine</h3>
                <ol>
                  <li>Screen for age, state and interest</li>
                  <li>Check consent and your criteria</li>
                  <li>Match to an agent with open capacity</li>
                  <li>Track every call to the ad that made it</li>
                </ol>
              </div>
              <div className="flow-arrow" aria-hidden="true" />
              <div className="flow-col">
                <div className="flow-node">Your agents<small>Live calls and transfers</small></div>
                <div className="flow-node">Your CRM or dialer<small>Exclusive leads, real time</small></div>
                <div className="flow-node">Your reporting<small>What each batch produced</small></div>
              </div>
            </div>
            <p className="flow-caption">
              Because we run the ads ourselves, we can see which ads bring callers who buy, and spend more on those.
            </p>
          </div>
        </section>

        {/* 5. Pipeline */}
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">The pipeline</span>
              <h2>Four steps, every single day.</h2>
            </div>
            <div className="steps">
              <div className="step"><span className="num">01</span><h3>Create demand</h3><p>Ads that say final expense insurance. The consumer knows what they're responding to.</p></div>
              <div className="step"><span className="num">02</span><h3>Screen</h3><p>Age, state, interest and consent checked against the criteria we agree with you.</p></div>
              <div className="step"><span className="num">03</span><h3>Deliver</h3><p>Live to your agents, or posted to your CRM or dialer with source tracking.</p></div>
              <div className="step"><span className="num">04</span><h3>Reinvest</h3><p>We put more budget behind the ads and audiences that write policies for you.</p></div>
            </div>
          </div>
        </section>

        {/* 6. Pillars */}
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How we partner</span>
              <h2>Test. Optimize. Scale together.</h2>
              <p>We don't push a big package on day one. We prove it works for your team first.</p>
            </div>
            <div className="pillars">
              <div className="pillar">
                <span className="label">Pillar 1</span>
                <h3>Attract real demand</h3>
                <p>Honest, product-specific campaigns on our own platforms bring in consumers who understand what's being offered.</p>
                <p className="goal"><b>Goal:</b> a base of genuine interest, not curiosity clicks.</p>
              </div>
              <div className="pillar">
                <span className="label">Pillar 2</span>
                <h3>Deliver qualified calls and leads</h3>
                <p>Exclusive calls, transfers and leads that match the criteria and consent rules we set together.</p>
                <p className="goal"><b>Goal:</b> your agents always have someone real to talk to.</p>
              </div>
              <div className="pillar">
                <span className="label">Pillar 3</span>
                <h3>Test, optimize, scale</h3>
                <p>Start with a test batch. Review quality and sales together. Fix what's off. Grow volume when the numbers work.</p>
                <p className="goal"><b>Goal:</b> a pipeline that grows with your agency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Why NexRevenue */}
        <section className="section section-dark" id="why">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Why NexRevenue</span>
              <h2>Built for agencies tired of recycled leads.</h2>
            </div>
            <div className="why">
              <div className="why-item"><h3>Direct publisher</h3><p>Our ads, our funnels, our traffic. We don't resell other vendors' inventory.</p></div>
              <div className="why-item"><h3>Ethical marketing</h3><p>Clear final expense ads. No fake government programs or "free benefit" bait.</p></div>
              <div className="why-item"><h3>Exclusive</h3><p>Every call, transfer and lead goes to one agency. Never shared, never resold.</p></div>
              <div className="why-item"><h3>Test first</h3><p>Prove fit and performance with a small batch before you commit to volume.</p></div>
              <div className="why-item"><h3>Growth partner</h3><p>We tune targeting and criteria with you as your team and goals change.</p></div>
              <div className="why-item"><h3>Flexible delivery</h3><p>Calls, transfers or leads. Your hours, your states, your CRM.</p></div>
            </div>
          </div>
        </section>

        {/* Compliance and standards */}
        <section className="section section-alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Our standards</span>
              <h2>How we market matters to your license.</h2>
              <p>Bad ads make angry callers and compliance risk. Here's what we will and won't run.</p>
            </div>
            <div className="standards">
              <div className="std">
                <h3>What we do</h3>
                <ul>
                  <li>Ads that name the product: final expense life insurance</li>
                  <li>Capture and store consent on every form</li>
                  <li>Screen against the criteria we agree with you</li>
                  <li>Track every call back to the ad that produced it</li>
                </ul>
              </div>
              <div className="std no">
                <h3>What we don't do</h3>
                <ul>
                  <li>"Free benefit" or fake state-program hooks</li>
                  <li>Resold, shared or aged lead lists</li>
                  <li>Fake urgency or made-up deadlines</li>
                  <li>Promises of guaranteed coverage or pricing</li>
                </ul>
              </div>
            </div>
            <p className="disclaimer">
              We build and improve the flow of inbound opportunities. We don't guarantee policy sales. Results depend on
              agent skill, follow-up, underwriting, pricing and your acquisition economics.
            </p>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="section" id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">FAQ</span>
              <h2>Straight answers.</h2>
            </div>
            <div className="faq">
              <details>
                <summary>Are the calls and leads really exclusive?</summary>
                <p>Yes. Each call, transfer or lead goes to one agency. We don't resell or share it with anyone else.</p>
              </details>
              <details>
                <summary>Where does the traffic come from?</summary>
                <p>From our own ads and funnels, mainly Meta. We build the creative, the quiz pages and the call pages ourselves. We don't buy from other lead vendors and pass it on.</p>
              </details>
              <details>
                <summary>How does the test batch work?</summary>
                <p>We agree on your criteria, states, hours and volume. We run a small batch, then review call quality and sales with you before scaling up.</p>
              </details>
              <details>
                <summary>How is consent handled?</summary>
                <p>Consumers give consent on our forms before anyone contacts them, and we keep a record of it. We set the details of your consent requirements during setup.</p>
              </details>
              <details>
                <summary>What happens with a call that doesn't qualify?</summary>
                <p>Before the test starts, we agree in writing on what counts as a billable call or transfer and how non-qualifying ones are handled.</p>
              </details>
              <details>
                <summary>How is pricing set?</summary>
                <p>It depends on the format, your states, your hours and volume. Tell us what you need in the form and we'll send pricing for your test.</p>
              </details>
              <details>
                <summary>Do you guarantee sales?</summary>
                <p>No, and you should be careful with anyone who does. We guarantee our process: real demand, exclusive delivery and honest marketing. Closing is up to your team.</p>
              </details>
            </div>
          </div>
        </section>

        {/* 9. Form */}
        <section className="section section-dark" id="start">
          <div className="wrap form-grid">
            <div className="form-side">
              <span className="eyebrow">Start a test</span>
              <h2>Ready to test us?</h2>
              <p>Tell us how your agency works. We'll come back with a test plan and pricing within one business day.</p>
              <ul>
                <li>Small test batch first, no big commitment</li>
                <li>Your criteria, your states, your hours</li>
                <li>A real person on our team replies, not a bot</li>
              </ul>
            </div>
            <InquiryForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <a href="#top" className="logo" aria-label="NexRevenue home"><Logo size={26} /> <span className="wordmark">Nex<span>Revenue</span></span></a>
            <small>Exclusive final expense inbound calls, live transfers and leads for U.S. insurance agencies.</small>
            <small>© {new Date().getFullYear()} NexRevenue. All rights reserved.</small>
          </div>
          <div className="footer-links">
            <a href="#products">Products</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="mailto:pablo@nexrevenue.com">pablo@nexrevenue.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
