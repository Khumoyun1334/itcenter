import { FiMail, FiMapPin, FiPhone, FiExternalLink, FiClock } from "react-icons/fi"
import { useLanguage } from "../../context/LanguageContext"
import SectionHeader from "../common/SectionHeader"

export default function Map() {
  const { t } = useLanguage()

  const details = [
    { icon: FiMapPin, label: t("contact.addressLabel"), value: t("contact.addressValue") },
    { icon: FiPhone, label: t("contact.phoneLabel"), value: "+998 55 812 70 00", href: "tel:+998558127000" },
    { icon: FiMail, label: t("contact.emailLabel"), value: "info@rishtonit.uz", href: "mailto:info@rishtonit.uz" },
    { icon: FiClock, label: t("contact.hoursLabel"), value: t("contact.hoursValue") }
  ]

  return (
    <section id="contact" className="section-space bg-[#eaf3ed]/60">
      <div className="site-container">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <div className="mt-12 grid overflow-hidden rounded-[2.2rem] border border-line/90 bg-white shadow-[0_24px_70px_rgba(7,21,15,0.08)] lg:grid-cols-[.78fr_1.22fr]">
          <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary">
                {t("contact.cardTitle")}
              </p>
              
              <div className="mt-7 space-y-6">
                {details.map((item) => {
                  const Icon = item.icon
                  const content = (
                    <>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e9f8f0] text-primary shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <span className="block text-[11px] font-bold uppercase tracking-wider text-muted">{item.label}</span>
                        <span className="mt-0.5 block text-sm font-bold text-ink leading-snug">{item.value}</span>
                      </div>
                    </>
                  )
                  return item.href ? (
                    <a key={item.label} href={item.href} className="flex gap-4 transition-transform hover:translate-x-1">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="flex gap-4">{content}</div>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-line/80">
              <a
                href="https://maps.google.com/?q=Rishton+IT+Park"
                target="_blank"
                rel="noreferrer"
                className="button-dark w-full justify-center !min-h-11 text-xs"
              >
                <span>{t("contact.openMaps")}</span> <FiExternalLink className="text-sm" />
              </a>
            </div>
          </div>

          <div className="min-h-[420px] border-t border-line lg:border-l lg:border-t-0 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.8151362832436!2d71.28095012819544!3d40.349267157611635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbaa25c3127873%3A0xa5ffcab5527e1367!2z0KDQuNGI0YLQvtC9INCh0LDQvdC-0LDRgiDQutC-0LvQu9C10LTQttC4!5e0!3m2!1sru!2s!4v1777462194587!5m2!1sru!2s"
              title="IT Park Rishtan manzili"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

