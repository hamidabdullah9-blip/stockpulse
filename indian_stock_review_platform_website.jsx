export default function IndianStockReviewWebsite() {
  const features = [
    {
      title: 'AI Stock Recommendations',
      desc: 'Get Buy, Hold, and Sell predictions powered by AI analytics and market trends.'
    },
    {
      title: 'Real-Time NSE/BSE Data',
      desc: 'Track Indian stocks with live market charts, insights, and watchlists.'
    },
    {
      title: 'Portfolio Tracking',
      desc: 'Monitor your investments with profit/loss analysis and smart portfolio insights.'
    },
    {
      title: 'Admin Dashboard',
      desc: 'Manage users, subscriptions, stock feeds, AI reports, and analytics.'
    },
    {
      title: 'Dark Fintech UI',
      desc: 'Modern finance-inspired interface optimized for mobile and desktop.'
    },
    {
      title: 'AI News Sentiment',
      desc: 'Analyze stock news sentiment using AI-driven market intelligence.'
    }
  ]

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      features: ['Basic stock tracking', 'Watchlist', 'Limited AI insights']
    },
    {
      name: 'Pro',
      price: '₹499/mo',
      features: ['Advanced AI signals', 'Portfolio analysis', 'Premium alerts']
    },
    {
      name: 'Elite',
      price: '₹1499/mo',
      features: ['AI trading assistant', 'Advanced analytics', 'Priority support']
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-green-500 flex items-center justify-center text-black font-bold text-lg">
            ₹
          </div>
          <div>
            <h1 className="text-xl font-bold">StockPulse AI</h1>
            <p className="text-xs text-gray-400">Indian Stock Review Platform</p>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#tech" className="hover:text-white transition">Architecture</a>
        </div>

        <button className="bg-green-500 hover:bg-green-400 transition text-black px-5 py-2 rounded-xl font-semibold">
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 border border-green-500/20 px-4 py-2 rounded-full mb-6 text-sm">
            AI Powered Indian Stock Analysis Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
            Smart Investing for the Indian Market
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
            Analyze NSE & BSE stocks using AI recommendations, real-time charts, portfolio tracking, and advanced financial insights.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-green-500 hover:bg-green-400 text-black px-7 py-4 rounded-2xl font-bold transition">
              Get Started
            </button>

            <button className="border border-gray-700 hover:border-gray-500 px-7 py-4 rounded-2xl transition">
              View Demo
            </button>
          </div>

          <div className="flex gap-8 mt-10 text-sm text-gray-400">
            <div>
              <p className="text-3xl font-bold text-white">1M+</p>
              <p>Market Data Points</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">98%</p>
              <p>AI Accuracy Score</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p>Live Monitoring</p>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Market Dashboard</h2>
              <p className="text-gray-400 text-sm">AI-based market insights</p>
            </div>

            <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm">
              Market Open
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">NIFTY 50</p>
              <h3 className="text-3xl font-bold">24,850</h3>
              <p className="text-green-400 mt-2">+1.8%</p>
            </div>

            <div className="bg-black/40 border border-gray-800 rounded-2xl p-5">
              <p className="text-gray-400 text-sm mb-2">SENSEX</p>
              <h3 className="text-3xl font-bold">81,220</h3>
              <p className="text-green-400 mt-2">+2.1%</p>
            </div>
          </div>

          <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 mb-6">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">AI Recommendation</span>
              <span className="text-green-400">Strong Buy</span>
            </div>

            <div className="h-40 rounded-2xl bg-gradient-to-r from-green-500/20 to-green-500/5 flex items-end p-4 gap-2 overflow-hidden">
              {[50, 80, 60, 100, 120, 90, 150, 180, 160, 220].map((h, i) => (
                <div
                  key={i}
                  className="bg-green-400 rounded-t-xl flex-1"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-black/40 rounded-2xl p-4 border border-gray-800">
              <p className="text-xl font-bold">87%</p>
              <p className="text-xs text-gray-400">AI Confidence</p>
            </div>
            <div className="bg-black/40 rounded-2xl p-4 border border-gray-800">
              <p className="text-xl font-bold">+12%</p>
              <p className="text-xs text-gray-400">Monthly Return</p>
            </div>
            <div className="bg-black/40 rounded-2xl p-4 border border-gray-800">
              <p className="text-xl font-bold">Low</p>
              <p className="text-xs text-gray-400">Risk Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 font-semibold mb-3">PLATFORM FEATURES</p>
            <h2 className="text-4xl font-black mb-4">Everything You Need for Smart Investing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built for modern Indian investors with AI-driven stock analysis and fintech-grade performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-green-500/40 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl mb-6">
                  📈
                </div>

                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="px-8 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-green-400 font-semibold mb-3">TECH ARCHITECTURE</p>
            <h2 className="text-5xl font-black mb-6">
              Scalable Fintech Infrastructure
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Designed using Flutter, React Native, Node.js, PostgreSQL, AI microservices, and real-time financial APIs.
            </p>

            <div className="space-y-5">
              {[
                'Flutter + React Native mobile ecosystem',
                'Node.js backend with scalable APIs',
                'PostgreSQL database architecture',
                'AI recommendation engine using Python',
                'Admin dashboard for analytics and control'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-black text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8">
            <div className="grid grid-cols-2 gap-6">
              {[
                'Flutter',
                'React Native',
                'Node.js',
                'PostgreSQL',
                'TensorFlow',
                'Firebase',
                'Redis',
                'AI Analytics'
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-black border border-gray-800 rounded-2xl p-6 text-center font-semibold hover:border-green-500/30 transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-8 py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-400 font-semibold mb-3">MONETIZATION</p>
            <h2 className="text-5xl font-black mb-4">Subscription Plans</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Scale your investing experience with AI-powered premium tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 border ${
                  index === 1
                    ? 'bg-green-500 text-black border-green-500 scale-105'
                    : 'bg-black border-gray-800 text-white'
                }`}
              >
                <h3 className="text-3xl font-black mb-3">{plan.name}</h3>
                <p className="text-5xl font-black mb-6">{plan.price}</p>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-xs">
                        ✓
                      </div>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-4 rounded-2xl font-bold transition ${
                    index === 1
                      ? 'bg-black text-white hover:bg-gray-900'
                      : 'bg-green-500 text-black hover:bg-green-400'
                  }`}
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-500 to-green-400 rounded-[40px] p-14 text-black text-center">
          <h2 className="text-5xl font-black mb-6">
            Launch Your AI Stock Platform
          </h2>

          <p className="text-xl mb-10 opacity-80 max-w-3xl mx-auto">
            Complete fintech solution with AI recommendations, mobile apps, admin panel, real-time APIs, and scalable backend architecture.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-900 transition">
              Start Building
            </button>

            <button className="border border-black px-8 py-4 rounded-2xl font-bold hover:bg-black hover:text-white transition">
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-8 py-10 text-center text-gray-500 text-sm">
        © 2026 StockPulse AI • Indian Stock Review Platform • Built with AI & Fintech Innovation
      </footer>
    </div>
  )
}
