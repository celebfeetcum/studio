import Link from 'next/link';

const Footer = () => (
  <footer className="w-full py-8 px-4 md:px-6 border-t border-border/40 bg-card"> {/* Increased padding */}
    <div className="container mx-auto text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-6"> {/* Increased gap */}
      <div className="flex flex-col items-center md:items-start">
        <span>&copy; {new Date().getFullYear()} MobileSecurity.site Hub. All rights reserved.</span>
        <span className="mt-1 text-xs">W.N.H.-Executive Admin</span> {/* Adjusted size */}
      </div>
      <div className="text-center md:text-right max-w-md"> {/* Added max-width */}
        <p className="mb-2">Explore our free hosting solutions:</p> {/* Updated text, increased margin */}
        {/* Enhanced link styling */}
        <Link href="http://hoxt.site" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary font-medium underline transition-colors">
          hoxt.site: Free web-hosting, premium add-ons, domain registration. Bring your own domain FREE!
        </Link>
        <p className="text-xs mt-2">(Use nameservers: ns1.hoxt.site, ns2.hoxt.site)</p> {/* Increased margin */}
      </div>
    </div>
  </footer>
);

export default Footer;
