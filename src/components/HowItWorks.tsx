import { useState } from "react";
import { motion} from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Variants } from "framer-motion"

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "كيف أقوم بتحميل التطبيق؟",
      answer:
        "يمكنك تحميل تطبيق الشيلة مباشرة من متجر App Store أو Google Play بضغطة زر.",
    },
    {
      question: "كيف أقوم بحجز خدمة النقل؟",
      answer:
        "افتح التطبيق، اختر نوع الخدمة (أشخاص، بضائع، طلبات)، وحدد وجهتك ثم أكد الحجز.",
    },
    {
      question: "هل أستطيع تتبع السائق؟",
      answer:
        "نعم، يمكنك متابعة السائق لحظة بلحظة عبر الخريطة المدمجة في التطبيق.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "نوفر لك الدفع النقدي، البطاقات البنكية، والمحفظة الإلكترونية داخل التطبيق.",
    },
  ];

  // Parent container for stagger
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4, // تأخير بين العناصر
      },
    },
  };

  // Smooth fade-up animation
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut", // smooth easing compatible with TS
      },
    },
  };

  return (
    <section id="howitworks" className="py-20 mt-80" dir="rtl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* FAQ Section */}
        <motion.div variants={fadeUp}>
          <h2
            className="text-[38px] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            كيف يعمل التطبيق؟
          </h2>

          <motion.div variants={containerVariants} className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="border border-gray-200 rounded-xl bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full px-6 py-4 text-right"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-green-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="px-6 pb-4 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          variants={fadeUp}
           className="hidden sm:flex justify-center lg:justify-end gap-4 rotate-[9deg]"
          whileHover={{ rotate: 0 }}
        >
          <motion.img
            src="/app1.png"
            alt="صورة التطبيق 1"
            className="w-[170px] h-[370px] rounded-2xl shadow-lg"
            variants={fadeUp}
          />
          <motion.img
            src="/app2.png"
            alt="صورة التطبيق 2"
            className="w-[170px] h-[370px] rounded-2xl shadow-lg"
            variants={fadeUp}
          />
          <motion.img
            src="/app3.png"
            alt="صورة التطبيق 3"
            className="w-[170px] h-[370px] rounded-2xl shadow-lg"
            variants={fadeUp}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
