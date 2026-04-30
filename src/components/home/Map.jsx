import { motion } from "framer-motion"

export default function Map() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Bizni qayerdan topasiz?
          </h2>
          <p className="text-gray-600">Rishton tumani 1-son texnikumi ( Eski sanoat kolejji ) hududida</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.8151362832436!2d71.28095012819544!3d40.349267157611635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbaa25c3127873%3A0xa5ffcab5527e1367!2z0KDQuNGI0YLQvtC9INCh0LDQvdC-0LDRgiDQutC-0LvQu9C10LTQttC4!5e0!3m2!1sru!2s!4v1777462194587!5m2!1sru!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen   
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Rishton IT Center Location"
            className="w-full"
          ></iframe>
          
        </motion.div>
      </div>
    </section>
  )
}