const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-inter text-sm">
            © 2026 Lalith Kishore J. Built with passion and purpose.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground font-inter">
              Designed & Developed by LKJ
            </span>
            <span className="text-2xl gradient-text font-bold">LKJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
