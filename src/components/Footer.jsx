function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold text-purple-700 mb-6">
          zepto
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h2 className="font-bold mb-3">Company</h2>
            <p>About</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Press</p>
          </div>

          <div>
            <h2 className="font-bold mb-3">Help</h2>
            <p>Support</p>
            <p>FAQs</p>
            <p>Terms</p>
            <p>Privacy Policy</p>
          </div>

          <div>
            <h2 className="font-bold mb-3">Categories</h2>
            <p>Groceries</p>
            <p>Beauty</p>
            <p>Electronics</p>
            <p>Home</p>
          </div>

          <div>
            <h2 className="font-bold mb-3">Contact</h2>
            <p>📞 +91 9876543210</p>
            <p>📧 support@zepto.com</p>
            <p>📍 Lucknow, India</p>
          </div>

        </div>

        <hr className="my-8" />

        <p className="text-center text-gray-600">
          © 2026 Zepto Clone. Made with ❤️ using React & Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}

export default Footer;