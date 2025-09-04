import './home.css'

const HomePage = () => {
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
                                <span className="badge badge-secondary">Open Source</span>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="nav-links">
                            <a href="#features" className="nav-link">
                                Features
                            </a>
                            <a href="#benefits" className="nav-link">
                                Benefits
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
                                Star
                            </button>
                            <a href='/app' className="btn btn-primary btn-sm">Try it!</a>

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
                                Features
                            </a>
                            <a href="#benefits" className="mobile-menu-link">
                                Benefits
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
                                Open Source & Self-Hosted
                            </div>

                            <h1 className="hero-title">
                                Track Your Baby's
                                <span className="gradient-text"> Journey</span>
                            </h1>

                            <p className="hero-description">
                                The ultimate app designed to help you monitor and manage your little
                                one's daily activities with ease. Perfect for new parents who want
                                to stay organized and informed.
                            </p>

                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-lg">Get Started</button>
                                <button className="btn btn-outline btn-lg">View Features</button>
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
                                    Privacy First
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
                                    Made with Love
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
                                    <div className="dashboard-title">Today's Summary</div>
                                    <div className="dashboard-date">Dec 4, 2025</div>
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
                                            <div className="stat-unit">feeds</div>
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
                                            <div className="stat-unit">sleep</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="progress-indicator">
                                    <div className="progress-label">Daily Goals</div>
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                    <div className="progress-text">85% Complete</div>
                                </div>
                            </div>

                            {/* Feature Pills */}
                            <div className="feature-pills">
                                <div className="feature-pill">
                                    <span className="pill-icon">🍼</span>
                                    Smart Reminders
                                </div>
                                <div className="feature-pill">
                                    <span className="pill-icon">📊</span>
                                    Growth Charts
                                </div>
                                <div className="feature-pill">
                                    <span className="pill-icon">🔒</span>
                                    Privacy First
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
                            Everything You Need to
                            <span className="gradient-text"> Track & Care</span>
                        </h2>
                        <p className="section-description">
                            Comprehensive tools designed specifically for new parents to monitor,
                            understand, and care for their little ones.
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
                            <h3 className="feature-title">Feeding Tracking</h3>
                            <p className="feature-description">
                                Log and monitor your baby's feeding times and quantities with ease.
                                Track both breastfeeding and bottle feeding sessions.
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
                            <h3 className="feature-title">Diaper Tracking</h3>
                            <p className="feature-description">
                                Keep track of diaper changes to ensure your baby's comfort and
                                health. Monitor patterns and stay on top of hygiene.
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
                            <h3 className="feature-title">Sleep Tracking</h3>
                            <p className="feature-description">
                                Record sleep patterns to understand your baby's sleep routines.
                                Identify trends and optimize sleep schedules.
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
                            <h3 className="feature-title">Growth Monitoring</h3>
                            <p className="feature-description">
                                Track your baby's growth over time with detailed charts and stats.
                                Monitor weight, height, and development milestones.
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
                            <h3 className="feature-title">Historical Data</h3>
                            <p className="feature-description">
                                Access and review historical data to spot trends and patterns in
                                your baby's development and daily routines.
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
                            <h3 className="feature-title">Privacy & Security</h3>
                            <p className="feature-description">
                                Self-hosted solution means your data stays with you. Complete
                                control over your baby's sensitive information.
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
                            Open Source & Self-Hosted
                        </div>

                        <h2 className="section-title">
                            Built for Privacy &<span className="gradient-text"> Freedom</span>
                        </h2>

                        <p className="section-description">
                            Take control of your family's data with our open-source, self-hosted
                            solution. No vendor lock-in, no privacy concerns, just pure parenting
                            support.
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
                                <h3 className="benefit-title">Complete Control</h3>
                                <p className="benefit-description">
                                    Your data stays on your own server. No third-party access to
                                    your baby's sensitive information.
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
                                <h3 className="benefit-title">No Monthly Fees</h3>
                                <p className="benefit-description">
                                    One-time setup with no recurring subscription costs. Perfect for
                                    budget-conscious families.
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
                                <h3 className="benefit-title">Community Driven</h3>
                                <p className="benefit-description">
                                    Built by parents, for parents. Join a community that understands
                                    your needs and challenges.
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
                                <h3 className="benefit-title">Customizable</h3>
                                <p className="benefit-description">
                                    Open source means you can modify and extend the app to fit your
                                    unique parenting style.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="cta-container">
                        <div className="cta-card">
                            <div className="cta-content">
                                <h3 className="cta-title">Ready to Get Started?</h3>
                                <p className="cta-description">
                                    Download Baby Tracker today and start your journey to organized,
                                    stress-free parenting.
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
                                        View on GitHub
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
                                        Try it now!
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
                                    Free forever • No registration required
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
                            Open source baby tracking made with ❤️ for parents everywhere
                        </p>
                        <div className="footer-links">
                            <a href="https://github.com/LuisHCK/baby-tracker" className="footer-link">
                                GitHub
                            </a>
                            <a href="#" className="footer-link">
                                Documentation
                            </a>
                            <a href="#" className="footer-link">
                                Community
                            </a>
                        </div>
                        <p className="footer-copyright">
                            © 2024 Baby Tracker. Open source under MIT License.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default HomePage
