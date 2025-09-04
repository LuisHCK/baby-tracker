import './home.css'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
    const { t } = useTranslation()
    return (
        <main className="d-flex flex-center flex-column">
            {/* Navigation */}
            <nav className="nav">
                <div className="container">
                    <div className="nav-content">
                        {/* Logo */}
                        <div className="nav-logo">
                            <div className="logo-icon">
                                <svg
                                    className="icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M9 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
                                    <path d="M9 12V6.5a2.5 2.5 0 0 1 5 0" />
                                    <path d="M4 12h2" />
                                    <path d="M18 12h2" />
                                </svg>
                            </div>
                            <div className="logo-text">
                                <span className="logo-title">Baby Tracker</span>
                                <span className="badge badge-secondary">{t('home.openSource')}</span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="nav-links">
                            <a href="#features" className="nav-link">
                                {t('home.features')}
                            </a>
                            <a href="#benefits" className="nav-link">
                                {t('home.benefits')}
                            </a>
                            <a href="https://github.com/LuisHCK/baby-tracker" className="nav-link">
                                GitHub
                            </a>
                        </div>

                        {/* Actions */}
                        <div className="nav-actions">
                            <button className="btn btn-ghost btn-sm">
                                <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                {t('home.star')}
                            </button>
                            <a href='/app' className="btn btn-primary btn-sm">{t('home.tryIt')}</a>

                            {/* Mobile Menu Button */}
                            <button
                                className="btn btn-ghost btn-sm mobile-menu-btn"
                                id="mobileMenuBtn"
                            >
                                <svg
                                    className="icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line x1="4" x2="20" y1="6" y2="6" />
                                    <line x1="4" x2="20" y1="12" y2="12" />
                                    <line x1="4" x2="20" y1="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className="mobile-menu" id="mobileMenu">
                        <div className="mobile-menu-content">
                            <a href="#features" className="mobile-menu-link">
                                {t('home.features')}
                            </a>
                            <a href="#benefits" className="mobile-menu-link">
                                {t('home.benefits')}
                            </a>
                            <a
                                href="https://github.com/LuisHCK/baby-tracker"
                                className="mobile-menu-link"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        {/* Left Content */}
                        <div className="hero-text">
                            <div className="hero-badge">
                                <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                {t('home.hero.openSourceSelfHosted')}
                            </div>

                            <h1 className="hero-title">
                                {t('home.hero.title.trackYourBabys')}
                                <span className="gradient-text"> {t('home.hero.title.journey')}</span>
                            </h1>

                            <p className="hero-description">
                                {t('home.hero.description')}
                            </p>

                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-lg">{t('home.hero.getStarted')}</button>
                                <button className="btn btn-outline btn-lg">{t('home.hero.viewFeatures')}</button>
                            </div>

                            <div className="hero-features">
                                <div className="hero-feature">
                                    <svg
                                        className="icon-sm"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                    </svg>
                                    {t('home.hero.privacyFirst')}
                                </div>
                                <div className="hero-feature">
                                    <svg
                                        className="icon-sm"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" />
                                    </svg>
                                    {t('home.hero.madeWithLove')}
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Modern Image Layout */}
                        <div className="hero-image-modern">
                            {/* Main Image with Modern Frame */}
                            <div className="main-image-wrapper">
                                <div className="image-frame">
                                    <img
                                        src="hero-baby-tracker.jpg"
                                        alt="Peaceful baby in modern nursery - Baby Tracker App"
                                        className="main-image"
                                    />
                                </div>

                                {/* Decorative Elements */}
                                <div className="deco-circle deco-circle-1"></div>
                                <div className="deco-circle deco-circle-2"></div>
                                <div className="deco-square"></div>
                            </div>

                            {/* Modern Stats Dashboard */}
                            <div className="stats-dashboard">
                                <div className="dashboard-header">
                                    <div className="dashboard-title">{t('home.hero.dashboard.todaysSummary')}</div>
                                    <div className="dashboard-date">{t('home.hero.dashboard.date')}</div>
                                </div>

                                <div className="stats-grid">
                                    <div className="stat-item">
                                        <div className="stat-icon">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M9 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
                                                <path d="M9 12V6.5a2.5 2.5 0 0 1 5 0" />
                                            </svg>
                                        </div>
                                        <div className="stat-content">
                                            <div className="stat-value">8</div>
                                            <div className="stat-unit">{t('home.hero.dashboard.feeds')}</div>
                                        </div>
                                    </div>

                                    <div className="stat-item">
                                        <div className="stat-icon">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12,6 12,12 16,14" />
                                            </svg>
                                        </div>
                                        <div className="stat-content">
                                            <div className="stat-value">14h</div>
                                            <div className="stat-unit">{t('home.hero.dashboard.sleep')}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-indicator">
                                    <div className="progress-label">{t('home.hero.dashboard.dailyGoals')}</div>
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                    <div className="progress-text">{t('home.hero.dashboard.progressComplete')}</div>
                                </div>
                            </div>

                            {/* Feature Pills */}
                            <div className="feature-pills">
                                <div className="feature-pill">
                                    <span className="pill-icon">🍼</span>
                                    {t('home.hero.pills.smartReminders')}
                                </div>
                                <div className="feature-pill">
                                    <span className="pill-icon">📊</span>
                                    {t('home.hero.pills.growthCharts')}
                                </div>
                                <div className="feature-pill">
                                    <span className="pill-icon">🔒</span>
                                    {t('home.hero.pills.privacyFirst')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            {t('home.featuresSection.title.everythingYouNeed')}
                            <span className="gradient-text"> {t('home.featuresSection.title.trackAndCare')}</span>
                        </h2>
                        <p className="section-description">
                            {t('home.featuresSection.description')}
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon gradient-feature">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M9 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0" />
                                    <path d="M9 12V6.5a2.5 2.5 0 0 1 5 0" />
                                    <path d="M4 12h2" />
                                    <path d="M18 12h2" />
                                </svg>
                            </div>
                            <h3 className="feature-title">{t('home.featuresSection.cards.feedingTracking.title')}</h3>
                            <p className="feature-description">
                                {t('home.featuresSection.cards.feedingTracking.description')}
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon gradient-hero">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12,6 12,12 16,14" />
                                </svg>
                            </div>
                            <h3 className="feature-title">{t('home.featuresSection.cards.diaperTracking.title')}</h3>
                            <p className="feature-description">
                                {t('home.featuresSection.cards.diaperTracking.description')}
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon bg-secondary">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 3v18h18" />
                                    <path d="m19 9-5 5-4-4-3 3" />
                                </svg>
                            </div>
                            <h3 className="feature-title">{t('home.featuresSection.cards.sleepTracking.title')}</h3>
                            <p className="feature-description">
                                {t('home.featuresSection.cards.sleepTracking.description')}
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon bg-accent">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
                                </svg>
                            </div>
                            <h3 className="feature-title">{t('home.featuresSection.cards.growthMonitoring.title')}</h3>
                            <p className="feature-description">
                                {t('home.featuresSection.cards.growthMonitoring.description')}
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon gradient-feature">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                                    <path d="m3 5 9 9 9-9" />
                                    <path d="m3 12 9 9 9-9" />
                                    <path d="m3 5v14c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V5" />
                                </svg>
                            </div>
                            <h3 className="feature-title">{t('home.featuresSection.cards.historicalData.title')}</h3>
                            <p className="feature-description">
                                {t('home.featuresSection.cards.historicalData.description')}
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon gradient-hero">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                </svg>
                            </div>
                            <h3 className="feature-title">{t('home.featuresSection.cards.privacyAndSecurity.title')}</h3>
                            <p className="feature-description">
                                {t('home.featuresSection.cards.privacyAndSecurity.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Source Section */}
            <section id="benefits" className="opensource">
                <div className="container">
                    <div className="section-header">
                        <div className="badge badge-secondary">
                            <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            {t('home.openSourceSection.badge')}
                        </div>

                        <h2 className="section-title">
                            {t('home.openSourceSection.title.builtForPrivacy')}
                            <span className="gradient-text"> {t('home.openSourceSection.title.freedom')}</span>
                        </h2>

                        <p className="section-description">
                            {t('home.openSourceSection.description')}
                        </p>
                    </div>

                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                                    <line x1="6" x2="6.01" y1="6" y2="6" />
                                    <line x1="6" x2="6.01" y1="18" y2="18" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h3 className="benefit-title">{t('home.openSourceSection.benefits.completeControl.title')}</h3>
                                <p className="benefit-description">
                                    {t('home.openSourceSection.benefits.completeControl.description')}
                                </p>
                            </div>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7,10 12,15 17,10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h3 className="benefit-title">{t('home.openSourceSection.benefits.noMonthlyFees.title')}</h3>
                                <p className="benefit-description">
                                    {t('home.openSourceSection.benefits.noMonthlyFees.description')}
                                </p>
                            </div>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="m22 21-3-3m0 0a4 4 0 1 0-4-4 4 4 0 0 0 4 4" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h3 className="benefit-title">{t('home.openSourceSection.benefits.communityDriven.title')}</h3>
                                <p className="benefit-description">
                                    {t('home.openSourceSection.benefits.communityDriven.description')}
                                </p>
                            </div>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <polyline points="16,18 22,12 16,6" />
                                    <polyline points="8,6 2,12 8,18" />
                                </svg>
                            </div>
                            <div className="benefit-content">
                                <h3 className="benefit-title">{t('home.openSourceSection.benefits.customizable.title')}</h3>
                                <p className="benefit-description">
                                    {t('home.openSourceSection.benefits.customizable.description')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="cta-container">
                        <div className="cta-card">
                            <div className="cta-content">
                                <h3 className="cta-title">{t('home.cta.title')}</h3>
                                <p className="cta-description">
                                    {t('home.cta.description')}
                                </p>

                                <div className="cta-buttons">
                                    <a
                                        className="btn btn-primary btn-lg"
                                        href="https://github.com/LuisHCK/baby-tracker"
                                    >
                                        <svg
                                            className="icon-sm"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        {t('home.cta.viewOnGitHub')}
                                    </a>
                                    <a href='/app' className="btn btn-outline btn-lg">
                                        <svg
                                            className="icon-sm"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7,10 12,15 17,10" />
                                            <line x1="12" x2="12" y1="15" y2="3" />
                                        </svg>
                                        {t('home.cta.tryItNow')}
                                    </a>
                                </div>

                                <div className="cta-footer">
                                    <svg
                                        className="icon-sm"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z" />
                                    </svg>
                                    {t('home.cta.footer')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <h3 className="footer-title">Baby Tracker</h3>
                        <p className="footer-description">
                            {t('home.footer.description')}
                        </p>
                        <div className="footer-links">
                            <a href="https://github.com/LuisHCK/baby-tracker" className="footer-link">
                                GitHub
                            </a>
                            <a href="#" className="footer-link">
                                {t('home.footer.documentation')}
                            </a>
                            <a href="#" className="footer-link">
                                {t('home.footer.community')}
                            </a>
                        </div>
                        <p className="footer-copyright">
                            {t('home.footer.copyright')}
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default HomePage