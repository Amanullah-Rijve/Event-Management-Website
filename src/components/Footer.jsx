// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-grayText py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Logo */}
        <div className=" space-y-3 text-lg font-semibold text-gray">
          <p>Creative Planners Of Bangladesh</p> 
          <p><i className="fa-solid fa-phone mr-2"></i> +6011-39638206</p>
          <p><i className="fa-solid fa-clock mr-2 "></i> Mon – Sat: 9:00 am – 5:00 pm,<br />
                            Sunday: CLOSED
           </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a href="https://www.linkedin.com/in/creativeplannersofbd?fbclid=IwY2xjawMaxtZleHRuA2FlbQIxMABicmlkETFuckUwZzM5VHVYZ25GOEE2AR4Xs9D4f33VDcb_GuF_tqfMZBJ-9RVZCHA_LXFM2HbKSHLOr4_9_xewyqIErg_aem__eQEl5gxulIHg4gUuBtALQ" target="_blank" className="hover:text-gold">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@creativeplannersofbd" target="_blank" className="hover:text-gold">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/creativeplannersofbd" target="_blank" className="hover:text-gold">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.pinterest.com/?show_error=true" target="_blank" className="hover:text-gold">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="https://www.facebook.com/creativeplannersofbd?mibextid=LQQJ4d" target="_blank" className="hover:text-gold">
            <i className="fab fa-facebook"></i>
          </a>
        </div>

        {/* Dynamic Year */}
        <div className="text-sm text-grayText">
          © {new Date().getFullYear()} CP Of BD. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
