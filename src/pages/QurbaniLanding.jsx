import React from 'react';
import './QurbaniLanding.css';

/* ── Tiny helper SVGs ── */

const CowSVG = () => (
  <svg viewBox="0 0 220 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="qp-cow-silhouette">
    {/* body */}
    <ellipse cx="110" cy="60" rx="70" ry="34" fill="#795548" />
    {/* head */}
    <ellipse cx="175" cy="46" rx="22" ry="18" fill="#6d4c41" />
    {/* ear */}
    <ellipse cx="188" cy="33" rx="7" ry="10" fill="#a1887f" transform="rotate(-10 188 33)" />
    {/* horns */}
    <line x1="183" y1="32" x2="196" y2="18" stroke="#f0d080" strokeWidth="3" strokeLinecap="round" />
    <line x1="190" y1="30" x2="200" y2="20" stroke="#f0d080" strokeWidth="2" strokeLinecap="round" />
    {/* eye */}
    <circle cx="183" cy="43" r="4" fill="#212121" />
    <circle cx="184" cy="42" r="1.5" fill="#fff" />
    {/* snout */}
    <ellipse cx="193" cy="54" rx="9" ry="7" fill="#a1887f" />
    <ellipse cx="190" cy="54" rx="2" ry="2.5" fill="#5d4037" />
    <ellipse cx="196" cy="54" rx="2" ry="2.5" fill="#5d4037" />
    {/* tail */}
    <path d="M42 60 Q20 50 26 72" stroke="#5d4037" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle cx="26" cy="74" r="5" fill="#5d4037" />
    {/* legs */}
    <rect x="75" y="90" width="12" height="24" rx="4" fill="#6d4c41" />
    <rect x="100" y="92" width="12" height="22" rx="4" fill="#6d4c41" />
    <rect x="125" y="92" width="12" height="22" rx="4" fill="#6d4c41" />
    <rect x="150" y="90" width="12" height="24" rx="4" fill="#6d4c41" />
    {/* cut zone labels */}
    <rect x="65" y="44" width="34" height="12" rx="3" fill="rgba(244,67,54,.55)" />
    <text x="82" y="54" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">রান</text>
    <rect x="100" y="38" width="34" height="12" rx="3" fill="rgba(33,150,243,.55)" />
    <text x="117" y="48" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">পিঠ</text>
    <rect x="134" y="44" width="30" height="12" rx="3" fill="rgba(76,175,80,.55)" />
    <text x="149" y="54" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">কাঁধ</text>
  </svg>
);

/* ── Star Rating ── */
const Stars = ({ count = 5 }) => '★'.repeat(count);

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export default function QurbaniLanding() {
  return (
    <div className="qurbani-page">

      {/* ── 1. HEADER ── */}
      <header className="qp-header">
        <div className="qp-header__inner">
          <a href="#hero" className="qp-logo">
            <div className="qp-logo__icon">প্র</div>
            <div className="qp-logo__text">
              <span className="qp-logo__bn">প্রজ্ঞা</span>
              <span className="qp-logo__en">Progga</span>
            </div>
          </a>
          <a href="#offer" className="qp-btn qp-btn--nav">এখনই কিনুন →</a>
        </div>
      </header>

      {/* ── 2. HERO ── */}
      <section className="qp-hero" id="hero">
        <div className="qp-hero__inner">

          {/* Left: Text Content */}
          <div className="qp-hero__content">
            <div className="qp-hero__eyebrow">
              <span className="qp-badge qp-badge--green">📗 বাংলাদেশের প্রথম ভিজ্যুয়াল কুরবানি গাইড</span>
              <span className="qp-badge qp-badge--blue">🏆 ২০২৬ সালের সেরা পছন্দ</span>
            </div>
            <h1 className="qp-hero__headline">
              সহিহ কুরবানির <span>পূর্ণাঙ্গ গাইডলাইন</span> — মাসয়ালা থেকে গোশত প্রসেসিং!
            </h1>
            <p className="qp-hero__sub">
              ১০০+ প্রশ্নোত্তর, চার্ট এবং ইনফোগ্রাফিকে সাজানো বাংলাদেশের প্রথম ভিজ্যুয়াল কুরবানি গাইড।
              পড়তে সহজ, বুঝতে আরও সহজ।
            </p>
            <div className="qp-hero__stats">
              <div className="qp-stat">
                <span className="qp-stat__num">১০০+</span>
                <span className="qp-stat__label">প্রশ্নোত্তর</span>
              </div>
              <div className="qp-stat">
                <span className="qp-stat__num">৪০+</span>
                <span className="qp-stat__label">ইনফোগ্রাফিক</span>
              </div>
              <div className="qp-stat">
                <span className="qp-stat__num">১৫+</span>
                <span className="qp-stat__label">চার্ট ও টেবিল</span>
              </div>
            </div>
            <a href="#offer" className="qp-btn qp-btn--primary qp-btn--hero">
              📖 বইটি সংগ্রহ করুন — মাত্র ১৪৯ টাকা
            </a>
            <p style={{ marginTop: '14px', fontSize: '.82rem', color: '#666' }}>
              🔒 নিরাপদ পেমেন্ট · তাৎক্ষণিক ডাউনলোড · PDF ফরম্যাট
            </p>
          </div>

          {/* Right: 3D Book Mockup */}
          <div className="qp-hero__visual">
            <div className="qp-book-scene">
              <div className="qp-book">
                <div className="qp-book__spine" />
                <div className="qp-book__front">
                  <div className="qp-book__brand">প্রজ্ঞা • Progga</div>
                  <div className="qp-book__title-ar">সহিহ কুরবানির<br />পূর্ণাঙ্গ গাইডলাইন</div>
                  {/* Mini preview of content */}
                  <div className="qp-book__preview">
                    <div className="qp-book__preview-row">
                      <div className="qp-book__preview-cell accent" />
                      <div className="qp-book__preview-cell" />
                      <div className="qp-book__preview-cell" />
                    </div>
                    <div className="qp-book__preview-row">
                      <div className="qp-book__preview-cell" />
                      <div className="qp-book__preview-cell accent" />
                      <div className="qp-book__preview-cell" />
                    </div>
                    <div className="qp-book__preview-row">
                      <div className="qp-book__preview-cell" />
                      <div className="qp-book__preview-cell" />
                      <div className="qp-book__preview-cell accent" />
                    </div>
                  </div>
                  <div className="qp-book__badge">ভিজ্যুয়াল গাইড ২০২৬</div>
                </div>
              </div>
              {/* Floating chips */}
              <div className="qp-floating qp-floating--1">
                <span>🦷</span>
                <span>দাঁত চার্ট</span>
                <div className="qp-floating__bar" />
              </div>
              <div className="qp-floating qp-floating--2">
                <span>⚖️</span>
                <span>ওজন ক্যালকুলেটর</span>
              </div>
              <div className="qp-floating qp-floating--3">
                <span>🥩</span>
                <span>গোশত ম্যাপ</span>
              </div>
              <div className="qp-floating qp-floating--4">
                <span>✅</span>
                <span>মাসয়ালা চেকলিস্ট</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. PAIN POINTS ── */}
      <section className="qp-pain" id="pain">
        <div className="qp-section-header">
          <div className="qp-section-header__eyebrow">
            <span className="qp-badge qp-badge--green">⚠️ সমস্যা চিহ্নিত করুন</span>
          </div>
          <h2 className="qp-section-header__title">কুরবানি নিয়ে চিন্তিত?</h2>
          <p className="qp-section-header__sub">
            প্রতি বছর লাখো মানুষ এই তিনটি সমস্যায় পড়েন। আপনিও কি একই চিন্তায় আছেন?
          </p>
        </div>

        <div className="qp-pain__grid">
          <div className="qp-pain-card">
            <div className="qp-pain-card__visual qp-pain-card__visual--red">
              <span>🐄</span>
              <div className="qp-pain-card__overlay qp-pain-card__overlay--cross">✕</div>
            </div>
            <h3 className="qp-pain-card__title">স্টেরয়েড গরু কিনে ঠকার ভয়?</h3>
            <p className="qp-pain-card__desc">
              বাজারে অসুস্থ বা স্টেরয়েড-খাওয়া গরু চেনা কঠিন। ঠকে যাওয়ার আশঙ্কায় সবসময় মাথায় থাকে।
            </p>
          </div>
          <div className="qp-pain-card">
            <div className="qp-pain-card__visual qp-pain-card__visual--amber">
              <span>🥩</span>
              <div className="qp-pain-card__overlay qp-pain-card__overlay--warn">?</div>
            </div>
            <h3 className="qp-pain-card__title">গোশতের স্বাদ নষ্ট হওয়ার চিন্তা?</h3>
            <p className="qp-pain-card__desc">
              সঠিকভাবে কাটা ও সংরক্ষণ না করলে গোশতের স্বাদ নষ্ট হয়ে যায়। সঠিক পদ্ধতি জানেন কি?
            </p>
          </div>
          <div className="qp-pain-card">
            <div className="qp-pain-card__visual qp-pain-card__visual--blue">
              <span>📋</span>
              <div className="qp-pain-card__overlay qp-pain-card__overlay--question">!</div>
            </div>
            <h3 className="qp-pain-card__title">ভুল মাসয়ালার ভয়?</h3>
            <p className="qp-pain-card__desc">
              কুরবানির অনেক মাসয়ালা আছে যা না জানলে কুরবানি সহিহ নাও হতে পারে। নিশ্চিত থাকুন।
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. BENTO GRID — SNEAK PEEK ── */}
      <section className="qp-bento" id="preview">
        <div className="qp-section-header">
          <div className="qp-section-header__eyebrow">
            <span className="qp-badge qp-badge--green">📊 বইয়ের ভেতরে</span>
          </div>
          <h2 className="qp-section-header__title">গাইডের ভেতরে কী আছে? এক নজরে দেখে নিন!</h2>
          <p className="qp-section-header__sub">
            শুধু পড়ার বই নয় — প্রতিটি পাতায় চার্ট, টেবিল ও ইনফোগ্রাফিক।
          </p>
        </div>

        <div className="qp-bento__grid">

          {/* A — Teeth Age Chart (BIG) */}
          <div className="qp-bento-item qp-bento-item--a">
            <div className="qp-bento-item__inner">
              <div className="qp-bento-label">🦷 অধ্যায় ০১ — বয়স নির্ণয়</div>
              <div className="qp-bento-title">দাঁত দেখে বয়স নির্ণয়ের চার্ট</div>
              <div className="qp-teeth-chart">
                {/* Header */}
                <div className="qp-teeth-row">
                  <div className="qp-teeth-age" style={{ color: 'rgba(255,255,255,.6)', fontSize: '.68rem' }}>বয়স</div>
                  <div className="qp-teeth-visual" style={{ gap: '2px' }}>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} style={{ flex: 1, height: '14px', borderRadius: '2px', background: 'rgba(255,255,255,.25)', border: '1px solid rgba(255,255,255,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '6px', color: 'rgba(255,255,255,.6)' }}>{i + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="qp-teeth-note">অবস্থা</div>
                </div>
                {/* Rows */}
                {[
                  { age: '< ২ বছর', teeth: [0,0,0,0,0,0,0,0], note: '❌ অযোগ্য' },
                  { age: '২ বছর',   teeth: [1,1,0,0,0,0,0,0], note: '✅ যোগ্য'  },
                  { age: '৩ বছর',   teeth: [1,1,1,1,0,0,0,0], note: '✅ ভালো'   },
                  { age: '৪ বছর',   teeth: [1,1,1,1,1,1,0,0], note: '⭐ উত্তম'  },
                  { age: '৫+ বছর',  teeth: [1,1,1,1,1,1,1,1], note: '⭐ সেরা'   },
                ].map(({ age, teeth, note }) => (
                  <div className="qp-teeth-row" key={age}>
                    <div className="qp-teeth-age">{age}</div>
                    <div className="qp-teeth-visual">
                      {teeth.map((t, i) => (
                        <div
                          key={i}
                          className={`qp-tooth ${t === 1 ? 'qp-tooth--perm' : 'qp-tooth--milk'}`}
                        />
                      ))}
                    </div>
                    <div className="qp-teeth-note">{note}</div>
                  </div>
                ))}
                {/* Legend */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '.65rem', color: 'rgba(255,255,255,.7)' }}>
                    <div style={{ width: '12px', height: '8px', borderRadius: '2px', background: 'rgba(255,214,0,.8)' }} />
                    স্থায়ী দাঁত
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '.65rem', color: 'rgba(255,255,255,.7)' }}>
                    <div style={{ width: '12px', height: '8px', borderRadius: '2px', background: 'rgba(255,255,255,.85)' }} />
                    দুধ দাঁত
                  </div>
                </div>
              </div>
              <div className="qp-bento-badge">বইয়ে সম্পূর্ণ চার্ট আছে</div>
            </div>
          </div>

          {/* B — Healthy vs Steroid Cow Comparison Table */}
          <div className="qp-bento-item qp-bento-item--b">
            <div className="qp-bento-item__inner">
              <div className="qp-bento-label" style={{ color: '#2e7d32' }}>🐄 অধ্যায় ০২</div>
              <div className="qp-bento-title" style={{ color: '#1a1a2e' }}>সুস্থ বনাম স্টেরয়েড গরু চেনার উপায়</div>
              <div className="qp-compare-table">
                <div className="qp-compare-row">
                  <div className="qp-compare-cell header">বৈশিষ্ট্য</div>
                  <div className="qp-compare-cell header">✅ সুস্থ</div>
                  <div className="qp-compare-cell header">❌ স্টেরয়েড</div>
                </div>
                {[
                  ['চোখ', 'উজ্জ্বল', 'নিস্তেজ'],
                  ['চামড়া', 'মসৃণ', 'ফোলা'],
                  ['নাক', 'ভেজা', 'শুকনো'],
                  ['হাঁটা', 'স্বাভাবিক', 'কষ্ট'],
                  ['পায়খানা', 'স্বাভাবিক', 'তরল'],
                ].map(([feat, good, bad]) => (
                  <div className="qp-compare-row" key={feat}>
                    <div className="qp-compare-cell">{feat}</div>
                    <div className="qp-compare-cell good">{good}</div>
                    <div className="qp-compare-cell bad">{bad}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* C — Shaeffer's Formula Calculator */}
          <div className="qp-bento-item qp-bento-item--c">
            <div className="qp-bento-item__inner">
              <div className="qp-bento-label" style={{ color: 'rgba(255,255,255,.7)' }}>⚖️ অধ্যায় ০৩</div>
              <div className="qp-bento-title">শ্যাফারস ফর্মুলা — গোশত হিসাব</div>
              <div className="qp-calc">
                <div className="qp-calc__field">
                  <span>গরুর ওজন</span>
                  <span className="qp-calc__field-val">৩৫০ কেজি</span>
                </div>
                <div className="qp-calc__field">
                  <span>হাড় ও চামড়া বাদ</span>
                  <span className="qp-calc__field-val">৩৫%</span>
                </div>
                <div className="qp-calc__field">
                  <span>বোন-ইন মাংস</span>
                  <span className="qp-calc__field-val">৬৫%</span>
                </div>
                <div className="qp-calc__result">
                  <span>প্রাপ্য গোশত ≈</span>
                  <span>~১৫৩ কেজি</span>
                </div>
                <div style={{
                  fontSize: '.68rem', color: 'rgba(255,255,255,.55)',
                  textAlign: 'center', marginTop: '4px'
                }}>
                  * বইয়ে সম্পূর্ণ ফর্মুলা ও চার্ট আছে
                </div>
              </div>
            </div>
          </div>

          {/* D — Meat Cut Map */}
          <div className="qp-bento-item qp-bento-item--d">
            <div className="qp-bento-item__inner">
              <div className="qp-bento-label" style={{ color: '#f57f17' }}>🗺️ অধ্যায় ০৪</div>
              <div className="qp-bento-title" style={{ color: '#1a1a2e' }}>গোশত কাটার ম্যাপ</div>
              <div className="qp-cut-map">
                <CowSVG />
              </div>
            </div>
          </div>

          {/* E — Emergency First Aid */}
          <div className="qp-bento-item qp-bento-item--e">
            <div className="qp-bento-item__inner">
              <div className="qp-bento-label" style={{ color: '#c62828' }}>🩺 অধ্যায় ০৫</div>
              <div className="qp-bento-title" style={{ color: '#1a1a2e' }}>জরুরি ফার্স্ট এইড</div>
              <div className="qp-firstaid">
                {[
                  { icon: '🩹', text: 'হাত কেটে গেলে — প্রাথমিক ব্যবস্থা' },
                  { icon: '🩸', text: 'রক্ত বন্ধ করার সঠিক পদ্ধতি' },
                  { icon: '🧤', text: 'হাইজিন মেনে কাজ করার নিয়ম' },
                  { icon: '🚑', text: 'কখন ডাক্তার ডাকবেন — লক্ষণ সমূহ' },
                ].map(({ icon, text }) => (
                  <div className="qp-firstaid__item" key={text}>
                    <span>{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. OFFER / PRICING ── */}
      <section className="qp-offer" id="offer">
        <div className="qp-section-header">
          <div className="qp-section-header__eyebrow">
            <span className="qp-badge qp-badge--green">⏰ সীমিত সময়ের অফার</span>
          </div>
          <h2 className="qp-section-header__title">আজই সংগ্রহ করুন — বিশেষ ছাড়ে!</h2>
        </div>

        <div className="qp-offer__card">
          <div className="qp-discount-tag">
            🔥 সীমিত সময়ের জন্য ৫০% ডিসকাউন্ট!
          </div>
          <div className="qp-offer__title">
            সহিহ কুরবানির পূর্ণাঙ্গ গাইডলাইন<br />
            <span style={{ color: '#2e7d32' }}>(ডিজিটাল PDF)</span>
          </div>

          <div className="qp-price-block">
            <div className="qp-price-original">
              <span style={{ fontSize: '1rem' }}>৳</span>২৯৮
            </div>
            <div className="qp-price-arrow">→</div>
            <div className="qp-price-current">
              <span className="qp-price-currency">৳</span>১৪৯
            </div>
          </div>

          <div className="qp-offer__features">
            {[
              '📗 ১০০+ প্রশ্নোত্তর সহ পূর্ণাঙ্গ কুরবানি গাইড',
              '📊 ৪০+ ইনফোগ্রাফিক, চার্ট ও টেবিল',
              '🦷 দাঁত দেখে বয়স নির্ণয়ের সম্পূর্ণ চার্ট',
              '🐄 সুস্থ গরু চেনার বিস্তারিত তুলনামূলক গাইড',
              '🥩 গোশত কাটা ও সংরক্ষণের ম্যাপ',
              '📱 মোবাইল ও প্রিন্টযোগ্য PDF ফরম্যাট',
              '🎁 ফ্রি বোনাস: কুরবানির দোয়ার প্রিন্টেবল কার্ড',
            ].map((f) => (
              <div className="qp-offer__feature" key={f}>
                <span className="qp-offer__feature-icon">✔</span>
                <span>{f}</span>
              </div>
            ))}
          </div>

          <a href="#" className="qp-btn qp-btn--primary qp-btn--hero">
            🛒 এখনই কিনুন — মাত্র ১৪৯ টাকায়
          </a>

          <div className="qp-offer__urgency">
            <span>⏳</span>
            <span>অফার শেষ হওয়ার আগেই নিশ্চিত করুন!</span>
          </div>
        </div>
      </section>

      {/* ── 6. BONUSES & GUARANTEE ── */}
      <section className="qp-bonus" id="bonus">
        <div className="qp-section-header">
          <div className="qp-section-header__eyebrow">
            <span className="qp-badge qp-badge--blue">🎁 বোনাস ও গ্যারান্টি</span>
          </div>
          <h2 className="qp-section-header__title">কোনো ঝুঁকি নেই, শুধু ফায়দা!</h2>
        </div>

        <div className="qp-bonus__grid">

          {/* Guarantee */}
          <div className="qp-guarantee">
            <div className="qp-guarantee__icon">🛡️</div>
            <h3 className="qp-guarantee__title">১০০% সন্তুষ্টির গ্যারান্টি</h3>
            <p className="qp-guarantee__text">
              যদি আপনি বইটি পড়ে সন্তুষ্ট না হন, তাহলে ৭ দিনের মধ্যে সম্পূর্ণ টাকা ফেরত পাবেন।
              কোনো প্রশ্ন ছাড়াই। আমরা আপনার বিশ্বাসে আস্থা রাখি।
            </p>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
              {['✅ ৭ দিন মানি-ব্যাক', '🔒 নিরাপদ পেমেন্ট', '📥 তাৎক্ষণিক ডাউনলোড'].map((b) => (
                <span key={b} className="qp-badge qp-badge--green">{b}</span>
              ))}
            </div>
          </div>

          {/* Bonus card */}
          <div className="qp-bonus-card">
            <div className="qp-bonus-card__label">বিশেষ উপহার — সম্পূর্ণ বিনামূল্যে</div>
            <div className="qp-bonus-card__title">
              🎁 ফ্রি বোনাস: কুরবানির দোয়ার প্রিন্টেবল কার্ড
            </div>
            <div className="qp-dua-card">
              <div className="qp-dua-card__title">কুরবানির দোয়া — প্রিন্টেবল কার্ড</div>
              <div className="qp-dua-card__arabic">
                بِسْمِ اللَّهِ، اللَّهُ أَكْبَر
              </div>
              <div className="qp-dua-card__bn">
                বিসমিল্লাহি আল্লাহু আকবার<br />
                (কুরবানির সময় পড়তে হয়)
              </div>
              <div className="qp-dua-card__cut">
                <div className="qp-dua-card__cut-line" />
                <div className="qp-dua-card__cut-icon">✂</div>
                <div className="qp-dua-card__cut-line" />
              </div>
            </div>
            <div style={{ marginTop: '16px', fontSize: '.82rem', color: 'rgba(255,255,255,.7)' }}>
              A4 সাইজে প্রিন্ট করুন এবং দেয়ালে ঝুলিয়ে রাখুন!
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. SOCIAL PROOF ── */}
      <section className="qp-social" id="reviews">
        <div className="qp-section-header">
          <div className="qp-section-header__eyebrow">
            <span className="qp-badge qp-badge--green">⭐ পাঠকদের মতামত</span>
          </div>
          <h2 className="qp-section-header__title">পাঠকরা কী বলছেন?</h2>
          <p className="qp-section-header__sub">
            হাজারো মানুষ ইতিমধ্যে এই গাইড থেকে উপকৃত হয়েছেন।
          </p>
        </div>

        <div className="qp-testimonials">

          <div className="qp-testi-card">
            <div className="qp-testi-verified">✓ যাচাইকৃত ক্রেতা</div>
            <div className="qp-testi-card__quote">"</div>
            <div className="qp-testi-card__stars"><Stars /></div>
            <p className="qp-testi-card__text">
              "গাইডটি পড়ে এবার নিজেই বুঝলাম কীভাবে সুস্থ গরু চেনা যায়। দাঁতের চার্টটি অসাধারণ!
              এত সহজে বোঝানো কোথাও দেখিনি।"
            </p>
            <div className="qp-testi-card__author">
              <div className="qp-testi-avatar qp-testi-avatar--a">রা</div>
              <div>
                <div className="qp-testi-name">রাহাত হোসেন</div>
                <div className="qp-testi-role">ব্যবসায়ী, ঢাকা</div>
              </div>
            </div>
          </div>

          <div className="qp-testi-card">
            <div className="qp-testi-verified">✓ যাচাইকৃত ক্রেতা</div>
            <div className="qp-testi-card__quote">"</div>
            <div className="qp-testi-card__stars"><Stars /></div>
            <p className="qp-testi-card__text">
              "মাসয়ালার বিষয়গুলো এত স্পষ্টভাবে লেখা যে আলেম জিজ্ঞেস না করলেও বোঝা যায়।
              ইনফোগ্রাফিকগুলো সত্যিই অনন্য।"
            </p>
            <div className="qp-testi-card__author">
              <div className="qp-testi-avatar qp-testi-avatar--b">ফা</div>
              <div>
                <div className="qp-testi-name">ফারহানা আক্তার</div>
                <div className="qp-testi-role">শিক্ষিকা, চট্টগ্রাম</div>
              </div>
            </div>
          </div>

          <div className="qp-testi-card">
            <div className="qp-testi-verified">✓ যাচাইকৃত ক্রেতা</div>
            <div className="qp-testi-card__quote">"</div>
            <div className="qp-testi-card__stars"><Stars /></div>
            <p className="qp-testi-card__text">
              "শ্যাফারস ফর্মুলা ব্যবহার করে এবার নিজেই হিসাব করলাম। কতটুকু গোশত পাবো সেটা আগে থেকেই জানলাম।
              দারুণ গাইড!"
            </p>
            <div className="qp-testi-card__author">
              <div className="qp-testi-avatar qp-testi-avatar--c">মো</div>
              <div>
                <div className="qp-testi-name">মো. আরিফুল ইসলাম</div>
                <div className="qp-testi-role">কৃষক, রাজশাহী</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 8. FINAL CTA & FOOTER ── */}
      <section className="qp-final-cta" id="buy">
        <div className="qp-final-cta__inner">
          <h2 className="qp-final-cta__title">
            এখনই সিদ্ধান্ত নিন!<br />
            ভুল মাসয়ালা, অসুস্থ গরু এবং নষ্ট গোশতের চিন্তা চিরতরে শেষ করুন।
          </h2>
          <p className="qp-final-cta__sub">
            মাত্র ১৪৯ টাকায় পান বাংলাদেশের সবচেয়ে বিস্তারিত ভিজ্যুয়াল কুরবানি গাইড।
            অফার সীমিত সময়ের জন্য।
          </p>
          <a href="#" className="qp-btn qp-btn--primary qp-btn--final">
            🛒 অফারটি লুফে নিন — মাত্র ১৪৯ টাকায়
          </a>

          <div className="qp-payment-badges">
            <div className="qp-payment-badge qp-payment-badge--bkash">
              <div className="qp-payment-badge__dot" />
              bKash
            </div>
            <div className="qp-payment-badge qp-payment-badge--nagad">
              <div className="qp-payment-badge__dot" />
              Nagad
            </div>
            <div className="qp-payment-badge qp-payment-badge--ssl">
              <div className="qp-payment-badge__dot" />
              SSL Commerz
            </div>
          </div>

          <div className="qp-final-cta__secure">
            🔒 ১০০% নিরাপদ পেমেন্ট · ৭ দিন মানি-ব্যাক গ্যারান্টি · তাৎক্ষণিক ডাউনলোড
          </div>
        </div>
      </section>

      <footer className="qp-footer">
        <div className="qp-footer__logo">
          <div className="qp-footer__logo-icon">প্র</div>
          <span className="qp-footer__logo-text">প্রজ্ঞা — Progga</span>
        </div>
        <p className="qp-footer__copy">
          © ২০২৬ প্রজ্ঞা (Progga). সর্বস্বত্ব সংরক্ষিত।
        </p>
        <div className="qp-footer__links">
          <a href="#">গোপনীয়তা নীতি</a>
          <a href="#">শর্তাবলী</a>
          <a href="#">যোগাযোগ</a>
          <a href="#">রিফান্ড নীতি</a>
        </div>
      </footer>

    </div>
  );
}
