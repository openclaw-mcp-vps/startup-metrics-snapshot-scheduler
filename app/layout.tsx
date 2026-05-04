import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Startup Metrics Snapshot Scheduler',
  description: 'Auto-generate weekly investor update dashboards. Connect Stripe, GA, and more to deliver polished metric snapshots to your investors every week.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b9061629-2f21-440e-a20c-8b65ad196f9d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
