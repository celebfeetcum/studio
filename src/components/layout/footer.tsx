const Footer = () => (
  <footer className="w-full py-6 px-4 md:px-6 border-t border-border bg-card">
    <div className="container mx-auto text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center">
      <span>&copy; {new Date().getFullYear()} MobileSecurity.site Hub. All rights reserved.</span>
      <span className="mt-2 md:mt-0">W.N.H.-Executive Admin</span> {/* Added text */}
    </div>
  </footer>
);

export default Footer;
