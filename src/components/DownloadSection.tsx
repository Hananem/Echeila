import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function DownloadSection() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } },
  };

 

  return (
   <section id="download" className="py-20 mt-80  mb-20" dir="rtl">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center justify-center ">
      {/* النص */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:w-1/2 text-center lg:text-right"
      >
        <h2 className="text-[38px] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600"
        style={{ fontFamily: "Pacifico, cursive" }}>
          حمّل تطبيق الشيلة الآن
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          استمتع بخدمة نقل ذكية وسريعة مع تطبيق الشيلة. احجز رحلتك في ثوانٍ، تتبع سائقك مباشرة، وادفع بأمان.
        </p>
        <div className="flex justify-center lg:justify-start items-center gap-2 mx-auto lg:mx-0">
          <img
            src="/apple.png"
            alt="هاتف يعرض تطبيق الشيلة"
            className="w-[130px] h-[50px] object-cover"
          />
          <img
            src="/google.png"
            alt="هاتف يعرض تطبيق الشيلة"
            className="w-[130px] h-[50px] object-cover"
          />
        </div>
      </motion.div>

      {/* الصورة */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:w-1/2 flex justify-center"
      >
        <img
          src="/Splash.png"
          alt="هاتف يعرض تطبيق الشيلة"
          className="w-[260px] h-[550px]"
        />
      </motion.div>
    </div>
  </div>
</section>

  );
}