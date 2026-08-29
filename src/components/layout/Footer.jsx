import { Link } from "react-router-dom"
import { FaInstagram, FaTelegram } from "react-icons/fa"
import { FiMail, FiMapPin, FiPhone, FiArrowUp } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"
import { directionsData } from "../../data/directionsData"
import logo from "../../assets/itparklogo.png"

export default function Footer() {
  const { t } = useLanguage()

  const contactItems = [
    { icon: FiMapPin, label: t("contact.addressValue") },
    { icon: FiPhone, label: "+998 55 812 70 00", href: "tel:+998558127000" },
    { icon: FiMail, label: "info@rishtonit.uz", href: "mailto:info@rishtonit.uz" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden bg-[#040e0a] pt-16 text-white border-t border-white/10">
      <div className="grid-surface absolute inset-0 opacity-40" />
      <div className="site-container relative">
        <div className="grid gap-8 lg:gap-12 border-b border-white/10 pb-14 pt-4 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.9fr_1.2fr_1.2fr]">
          {/* Col 1: Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1.5 shadow-md">
                <img src={logo} alt="" width="48" height="48" className="h-full w-full object-contain" />
              </span>
              <span>
                <strong className="font-display block text-lg font-bold tracking-tight">IT PARK RISHTAN</strong>
                <span className="text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-emerald-400">{t("nav.tagline")}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {t("footer.desc")}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://t.me/itparkrishton_uz"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
              >
                <FaTelegram className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/itpark_rishtan/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/></svg>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition-all hover:border-emerald-500 hover:bg-emerald-600 hover:text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-400">{t("footer.navTitle")}</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><Link className="transition-colors hover:text-emerald-300" to="/#about">{t("nav.about")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/#courses">{t("nav.courses")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/#teachers">{t("nav.teachers")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/onlinedarslar">{t("nav.onlineLessons")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/portfolio">{t("nav.portfolio")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/gallery">{t("nav.gallery")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/events">{t("nav.events")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/career-quiz">{t("nav.quiz")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/certificate-verify">Certificate Verify</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/#news">{t("nav.news")}</Link></li>
              <li><Link className="transition-colors hover:text-emerald-300" to="/admission">{t("nav.apply")}</Link></li>
            </ul>
          </div>

          {/* Col 3: Courses */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-400">{t("footer.coursesTitle")}</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {directionsData.slice(0, 5).map((item) => (
                <li key={item.id}>
                  <Link className="transition-colors hover:text-emerald-300" to={"/directions/" + item.id}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-400">{t("footer.contactTitle")}</h2>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{item.label}</span>
                  </>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="flex items-start gap-3 transition-colors hover:text-white">
                        {content}
                      </a>
                    ) : (
                      <span className="flex items-start gap-3">{content}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-400">Obuna Bo'lish</h2>
            <p className="mt-5 text-sm text-white/60 mb-4">Eng so'nggi yangiliklardan xabardor bo'ling.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email manzil..." className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none" />
              <button type="submit" className="button-primary !py-2.5 !min-h-0 text-sm">Obuna bo'lish</button>
            </form>
            <div className="mt-6 rounded-xl bg-emerald-900/30 border border-emerald-500/20 p-3">
              <p className="text-xs text-emerald-300 font-bold">🎯 "Kelajak kasblari" loyihasi ishtirokchisi</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col gap-4 py-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.copyright")}</p>
          <div className="flex items-center gap-6">
            <span>START LOCAL &amp; GO GLOBAL</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-emerald-600 hover:text-white"
              aria-label={t("footer.backToTop")}
              title={t("footer.backToTop")}
            >
              <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
