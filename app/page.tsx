export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Early-Stage Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate weekly<br />
          <span className="text-[#58a6ff]">investor update dashboards</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Stripe, Google Analytics, and your other startup tools. We automatically collect your metrics every week and deliver a polished snapshot dashboard your investors will love.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to start your free trial.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Connect Your Tools', body: 'Link Stripe, GA, and more in minutes with secure OAuth integrations.' },
            { title: 'Auto-Collect Metrics', body: 'Scheduled jobs pull your MRR, churn, traffic, and growth data every week.' },
            { title: 'Deliver to Investors', body: 'Share a live dashboard link or receive a formatted email update automatically.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#8b949e] mb-6">Everything you need to keep investors informed.</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Stripe & Google Analytics integration',
              'Weekly automated metric snapshots',
              'Shareable investor dashboard link',
              'Email delivery every Monday',
              'Up to 5 investor recipients',
              'Historical trend charts'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which integrations are supported?',
              a: 'We currently support Stripe for revenue metrics and Google Analytics for traffic data. More integrations are added regularly.'
            },
            {
              q: 'How does the weekly snapshot work?',
              a: 'Every Monday our scheduler pulls your latest data, computes key metrics, and emails a formatted report to you and your investor list — no manual work needed.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. Your dashboard remains accessible until the end of your billing period.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Startup Metrics Snapshot Scheduler. All rights reserved.
      </footer>
    </main>
  )
}
