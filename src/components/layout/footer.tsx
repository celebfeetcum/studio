import Link from 'next/link';

const Footer = () => (
  <footer className="w-full py-6 px-4 md:px-6 border-t border-border bg-card">
    <div className="container mx-auto text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex flex-col items-center md:items-start">
        <span>&copy; {new Date().getFullYear()} MobileSecurity.site Hub. All rights reserved.</span>
        <span className="mt-1">W.N.H.-Executive Admin</span>
      </div>
      <div className="text-center md:text-right">
        <p className="mb-1">Check out our partner:</p>
        <Link href="https://hoxt.site" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary underline transition-colors">
          hoxt.site: Free web-hosting, premium add-ons, domain registration. Bring your own domain FREE!
        </Link>
        <p className="text-xs mt-1">(Use nameservers: ns1.hoxt.site, ns2.hoxt.site)</p>
      </div>
    </div>
  </footer>
);

export default Footer;
