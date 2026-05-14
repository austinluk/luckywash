/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Droplet,
  Globe,
  Mail,
  Quote as QuoteIcon,
  Star,
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-glacier-100/50">
    <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
      <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-2xl font-bold tracking-tighter text-gray-900 hover:text-secondary transition-colors"
        href="#"
      >
        Lucky Wash
      </motion.a>
      <div className="hidden md:flex items-center gap-10">
        {["Services", "Portfolio", "Process"].map((item, i) => (
          <motion.a
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="font-medium text-sm text-gray-600 hover:text-secondary transition-colors"
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </motion.a>
        ))}
      </div>
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-glacier-200 text-glacier-900 px-6 py-2 text-sm rounded-md hover:bg-glacier-300 transition-all shadow-sm font-semibold"
      >
        Book
      </motion.button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-glacier-50 to-surface">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:col-span-5 z-10"
      >
        <span className="inline-block text-secondary font-semibold text-xs uppercase tracking-[0.2em] mb-4">
          The Standard of Clean
        </span>
        <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 text-gray-900 tracking-tight">
          Your Home, <br />
          <span className="italic font-normal text-secondary">Reimagined.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
          Premium exterior restoration. We combine technical precision with an
          aesthetic eye to revitalize your most valuable asset.
        </p>
        <div className="flex items-center gap-6">
          <button className="bg-secondary text-white px-8 py-4 font-semibold text-sm hover:brightness-110 rounded-md transition-all shadow-lg">
            Instant Quote
          </button>
          <button className="border-b-2 border-glacier-200 hover:border-secondary pb-1 px-2 font-semibold text-sm text-gray-800 transition-all">
            View Gallery
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="md:col-span-7 relative h-[60vh] md:h-[80vh]"
      >
        <div className="absolute inset-0 bg-gray-100 hero-img-mask overflow-hidden rounded-xl shadow-2xl">
          <img
            alt="Clean modern home exterior"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUTV2eQTe07iIO95uCPjUEMiLkrxaBMoP9R7IzgjZ8Q4_a31EpErBH2aF4R0iBOgkrfhxaN82FTNQmZQZ5F7l_VkAvaLhWoiNak2I722AiDOb7BCXpJY7DHJNGeIW4_wYksAC_O4zJA-bzHLmohZ_nmHzQfdfx9VVJ4YnOBVO4tuNVJyImTOzq7AXLCQdIjG4fdMfaU2tfjmdgInJ63zGEwO47ZjmgmcMjjeUTL51x04Wp70dyVvNfHDFYtKt3gQNKbRGzrevFZ2Q"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 vertical-text text-secondary/30 font-bold text-[10px] tracking-[0.5em] uppercase">
          Established 2024 &nbsp; • &nbsp; Quality Assured
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustMetrics = () => {
  const metrics = [
    {
      label: "Top Rated",
      value: "5★",
      desc: "Trusted by 500+ homeowners across the region.",
    },
    {
      label: "Insured",
      value: "100%",
      desc: "Full liability coverage for your peace of mind.",
    },
    {
      label: "Friendly",
      value: "Eco",
      desc: "Biodegradable solutions that protect your landscape.",
    },
    {
      label: "Guarantee",
      value: "01",
      desc: "We return until the result is flawless.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-glacier-100">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 ${i !== metrics.length - 1 ? "border-r border-glacier-100" : ""} hover:bg-glacier-50 transition-colors group`}
            >
              <div className="text-5xl font-light text-secondary mb-3 group-hover:scale-110 transition-transform origin-left">
                {m.value}
              </div>
              <div className="font-bold text-xs uppercase tracking-widest text-gray-900">
                {m.label}
              </div>
              <p className="text-gray-500 text-sm mt-6 leading-relaxed">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section
    id="services"
    className="py-32 bg-gradient-to-b from-glacier-50/50 to-white"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-20 max-w-2xl">
        <h2 className="text-5xl font-bold mb-6 text-gray-900 tracking-tight">
          Curated <span className="text-secondary">Services</span>
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed">
          We specialize in a focused suite of restoration services designed to
          maintain structural integrity and aesthetic value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 group cursor-pointer"
        >
          <div className="aspect-[16/9] overflow-hidden mb-8 rounded-xl shadow-xl border border-glacier-100">
            <img
              alt="House Wash"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Q2pKowgpt4Dk--MOlDudPBu2_0fyrN8yDfXImzl1a9x1xZkzJPBDYn4XnkSsd_w_vVTlqxFfcFf_jC19cOIPzY-HblX_s16jSYj9fk6ElYi4jYiwnBZuHtVT1uj9LwvAlEkDO1Omcyl7usLf-9b1wC4hDERa6xRKYDu_47P5X9qn-XvmS_qHyxQHoJ-7e3VqdiEj1PJwcjCQShTrzQN7dKWNwAL_sn1S-OC3Da5NfP5Ebayvnlp-iJ5-UmXBdrOLcWgLH0_bxG4"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-secondary transition-colors">
                Architectural House Wash
              </h3>
              <p className="text-gray-500 max-w-sm leading-relaxed">
                A soft-touch approach that restores siding, brick, and stone to
                its original luster.
              </p>
            </div>
            <div className="text-right">
              <span className="block font-bold text-secondary">From $249</span>
              <ArrowUpRight className="ml-auto mt-2 text-secondary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </motion.div>

        <div className="md:col-span-4 space-y-16">
          {[
            {
              title: "Roof Restoration",
              price: "From $399",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjYfd6RQBL9PpygIUADSZN1S-fKDEm55blVIoggxjmByYeC7rl3VZ-jCJ-Q9H31Ah1Q_RyjM9O5pINzuh_dVy0Exfx9BSCQSa36iFZuPk6idIkSHFYgQBX_tYRlQvUSumlHcVN7vcFM0FP3PGVVda6hsdi0RYB0uVURszgoGLOCERq87vcg-cklRIGxmyze5bJYGKXAXqUCMbZBINorigMUjKHdbPxf75xjeWzsxJiVsaa7m9y4UtzOVll0Ds6qEsbXNk48H_MQpw",
            },
            {
              title: "Gutter Systems",
              price: "From $149",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxMPP_ytWIOX_eZeG8zH4ErwyTyf0AyqN12UUWiRovI6HFpIs7-VQYUxnm-6UjYXr2GGHyxte2EQ6x75kHs5Xv_hCh_06zzI4jpl-7uxi4iEx5a0aRG3Z2oxPz9vIAUUw2-31ISKjNmWoDO2tFUqSMtMPLaBSNbpxa6pPvv9KRUX-T25TOTQ6TjrNvdh8dgxaP8ocm0ZQrdPo78xm94q3_MpNeqnGBP49vdBmVtez4BP70QavKPcscif2QxqqAgKmJabK8E-ErfaI",
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square overflow-hidden mb-6 rounded-xl shadow-lg border border-glacier-100">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src={service.img}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="font-bold text-sm uppercase tracking-widest mb-1 text-gray-900 group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-secondary font-bold">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Booking = () => (
  <section className="bg-gradient-to-tr from-glacier-100/50 to-surface py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="pr-12">
        <h2 className="text-5xl font-bold mb-10 leading-tight text-gray-900">
          Ready to <br />
          <span className="text-secondary italic font-normal">refresh?</span>
        </h2>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Our streamlined 60-second booking process respects your time. Select
          your service, choose a date, and let us handle the rest.
        </p>
        <div className="space-y-6">
          <div className="flex items-center gap-4 group">
            <span className="w-12 h-[2px] bg-glacier-200 group-hover:w-20 transition-all duration-500"></span>
            <span className="font-bold text-xs uppercase tracking-widest text-secondary">
              Instant Quotes
            </span>
          </div>
          <div className="flex items-center gap-4 group">
            <span className="w-12 h-[2px] bg-glacier-200 group-hover:w-20 transition-all duration-500"></span>
            <span className="font-bold text-xs uppercase tracking-widest text-secondary">
              Secure Payments
            </span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, rotateY: 15 }}
        whileInView={{ opacity: 1, rotateY: 0 }}
        viewport={{ once: true }}
        className="glass p-12 rounded-2xl shadow-2xl"
      >
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-8">
            <div className="border-b border-glacier-200 focus-within:border-secondary transition-all pb-3">
              <label className="block text-[10px] uppercase font-bold tracking-widest mb-3 text-secondary">
                Service Type
              </label>
              <select className="w-full bg-transparent border-none focus:ring-0 p-0 text-base font-medium text-gray-900 outline-none">
                <option>House Wash</option>
                <option>Roof Restoration</option>
                <option>Full Detail</option>
              </select>
            </div>
            <div className="border-b border-glacier-200 focus-within:border-secondary transition-all pb-3">
              <label className="block text-[10px] uppercase font-bold tracking-widest mb-3 text-secondary">
                Full Name
              </label>
              <input
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-base text-gray-900 placeholder:text-gray-300 outline-none"
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="border-b border-glacier-200 focus-within:border-secondary transition-all pb-3">
              <label className="block text-[10px] uppercase font-bold tracking-widest mb-3 text-secondary">
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-base text-gray-900 placeholder:text-gray-300 outline-none"
                placeholder="email@address.com"
                type="email"
              />
            </div>
          </div>
          <button className="w-full bg-secondary text-white py-5 mt-10 font-bold text-sm rounded-xl hover:brightness-110 transition-all shadow-xl uppercase tracking-widest">
            Submit Request
          </button>
        </form>
      </motion.div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="font-bold text-xs uppercase tracking-[0.3em] text-secondary mb-24 text-center">
        Voices of Satisfaction
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            text: "Incredible service. Our driveway looks brand new. The team was punctual and very thorough.",
            author: "Sarah Mitchell",
            location: "Greenwich",
          },
          {
            text: "Booking was as easy as they said. 60 seconds and I had a quote. The results are night and day.",
            author: "James Rodriguez",
            location: "Austin",
          },
          {
            text: "Exceptional quality for our commercial storefront. They worked around our business hours perfectly.",
            author: "David Chen",
            location: "Oakland",
          },
        ].map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative glass p-10 rounded-2xl group hover:border-glacier-200 transition-all shadow-sm"
          >
            <QuoteIcon
              className="absolute -top-6 -left-2 w-16 h-16 text-glacier-100 opacity-50 z-0"
              strokeWidth={1}
            />
            <p className="text-lg text-gray-800 mb-10 relative z-10 leading-relaxed italic">
              "{t.text}"
            </p>
            <div className="font-bold text-sm tracking-widest text-gray-900">
              {t.author} —{" "}
              <span className="font-medium text-secondary">{t.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-glacier-50/50 py-24 border-t border-glacier-100">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-sm">
          <div className="text-3xl font-bold tracking-tighter mb-8 text-gray-900">
            Lucky <span className="text-secondary">Wash</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-10">
            Redefining property maintenance through technical excellence and a
            minimalist aesthetic.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <Globe size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-20 md:gap-40">
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-secondary">
              Direct
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-gray-600">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Quote
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest mb-8 text-secondary">
              Contact
            </h4>
            <ul className="space-y-4 text-sm font-semibold text-gray-600">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Inquiries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 pt-10 border-t border-glacier-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
          © 2024 Lucky Wash. Handcrafted Quality.
        </p>
        <div className="flex items-center gap-2">
          <CheckCircle2 size={12} className="text-secondary" />
          <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-secondary">
            All Systems Functional
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <TrustMetrics />
        <Services />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
