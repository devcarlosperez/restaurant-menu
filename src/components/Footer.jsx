function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Demo Restaurant — Built with React and TheMealDB</p>
        <p className="footer-contact">
          Contact: <a href="mailto:info@example.com">info@example.com</a> · <a href="https://www.themealdb.com" target="_blank" rel="noreferrer">TheMealDB</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer;