export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-black py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Emanuele Buda</h3>
            <p className="text-sm text-gray-600 mb-4">
              GRC & Technical Program Manager specializing in AI Act compliance automation for high-risk AI systems.
            </p>
            <div className="space-y-1 text-sm">
              <div className="font-mono">CISM | ISO 27001 | PMP</div>
              <div className="text-gray-600">M.Sc. Computer Science (110/110)</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#assessment" className="animated-underline hover:font-bold transition-all">
                  Free Risk Assessment
                </a>
              </li>
              <li>
                <a href="#consultation" className="animated-underline hover:font-bold transition-all">
                  Book Consultation
                </a>
              </li>
              <li>
                <a href="#pricing" className="animated-underline hover:font-bold transition-all">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/blog" className="animated-underline hover:font-bold transition-all">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:emanuele@aiactcompliance.eu"
                  className="animated-underline hover:font-bold transition-all"
                >
                  emanuele@aiactcompliance.eu
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/emanuelebuda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-underline hover:font-bold transition-all"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-black pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2025 Emanuele Buda. All rights reserved.
          </div>
          <div className="text-sm font-mono">
            EU AI ACT COMPLIANCE SPECIALIST
          </div>
        </div>
      </div>
    </footer>
  );
}
