import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-brand">Company Name</p>
          <p className="footer-blurb">
            A studio for projects and partnerships built to last.
          </p>
        </div>
        <div className="footer-col">
          <span className="eyebrow">Navigate</span>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/services">Services</a>
        </div>
        <div className="footer-col">
          <span className="eyebrow">Contact</span>
          <a href="mailto:hello@company.com">hello@company.com</a>
          <span>123 Business Street, City</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</span>
      </div>
    </footer>
  );
}
