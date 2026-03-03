import Link from 'next/link'
import Image from 'next/image'
import { GlassCard } from './glass-card'
import { Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <GlassCard className="!rounded-none m-0 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12">

          {/* TOP SECTION */}
          <div className="grid gap-10 md:grid-cols-4">

            {/* BRAND */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/zorrow-logo.png" alt="Zorrow" width={36} height={36}/>
                <span className="text-xl font-bold text-white">
                  ZORROW <span className="text-white/60">Impact</span>
                </span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                Technology empowering humanity.  
                Connecting donors with verified NGOs and tracking real-world impact.
              </p>

              {/* Social icons */}
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-white/60 hover:text-cyan-400">
                  <Twitter size={20}/>
                </a>
                <a href="#" className="text-white/60 hover:text-cyan-400">
                  <Instagram size={20}/>
                </a>
                <a href="#" className="text-white/60 hover:text-cyan-400">
                  <Linkedin size={20}/>
                </a>
              </div>
            </div>

            {/* PLATFORM */}
            <div>
              <h3 className="font-semibold text-white mb-4">Platform</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/causes" className="text-white/60 hover:text-white">Explore Causes</Link></li>
                <li><Link href="/donate" className="text-white/60 hover:text-white">Donate</Link></li>
                <li><Link href="/" className="text-white/60 hover:text-white">How It Works</Link></li>
              </ul>
            </div>

            {/* NGOs */}
            <div>
              <h3 className="font-semibold text-white mb-4">For NGOs</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/for-ngos" className="text-white/60 hover:text-white">Join as NGO</Link></li>
                <li><a href="#" className="text-white/60 hover:text-white">Fundraising Tools</a></li>
                <li><a href="#" className="text-white/60 hover:text-white">Resources</a></li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-white/60 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-white/60 hover:text-white">Contact</a></li>
              </ul>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-10"/>

          {/* BOTTOM BAR */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center text-sm text-white/60 text-center md:text-left">
            <p>© 2026 Zorrow Impact. All rights reserved.</p>
            <p>Built with transparency & trust 💙</p>
          </div>

        </div>
      </GlassCard>
    </footer>
  )
}