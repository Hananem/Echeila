import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Car, Truck, Package, MapPin } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Car, title: "نقل الأشخاص", description: "خدمة نقل مريحة وآمنة للأفراد والعائلات" },
    { icon: Package, title: "توصيل الطلبات", description: "توصيل سريع وآمن للطعام والمشتريات" },
    { icon: Truck, title: "نقل البضائع", description: "حلول نقل متخصصة للشركات والأعمال" },
    { icon: MapPin, title: "رحلات مجدولة", description: "خدمة النقل للمطارات والرحلات الطويلة" },
  ];

  // Parent container for stagger
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // أبطأ شوي بين العناصر
      },
    },
  };

  // Smooth + Slow + More Movement
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 80 }, // يتحرك أكثر لأسفل
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // أبطأ
        ease: [0.22, 1, 0.36, 1], // cubic-bezier smooth
      },
    },
  };

  return (
    <section
      id="services"
      className="sm:py-30 relative min-h-screen flex items-center justify-center mt-80"
      dir="rtl"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat"></div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/80"></div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* النص */}
          <motion.div variants={containerVariants} className="lg:w-1/3 text-center lg:text-right">
            <motion.div
              variants={fadeUp}
              className=" inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300/50 mb-8 shadow-sm"
            >
              <span className="text-sm text-green-700 tracking-wide font-medium">خدماتنا</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[38px] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              عروضنا المخصصة لك
            </motion.h2>

            <motion.p variants={fadeUp} className="text-xl leading-relaxed">
              نقدم مجموعة شاملة من خدمات النقل والتوصيل لتلبية جميع احتياجاتك اليومية
            </motion.p>
          </motion.div>

          {/* الكروت */}
          <motion.div
            variants={containerVariants}
            className="lg:w-[550px] grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`w-full rounded-2xl p-8 hover:shadow-xl transition-transform duration-300
                  ${
                    index === 0
                      ? "bg-gradient-to-r from-[#2D5016] to-[#4AE54A] text-white rotate-[6deg]"
                      : "bg-gray-200 text-gray-900"
                  }`}
              >
                <div className="flex flex-col items-start gap-6">
                  <service.icon
                    className={`w-8 h-8 ${index === 0 ? "text-white" : "text-green-500"}`}
                  />
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-3 ${
                        index === 0 ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`mb-6 leading-relaxed ${
                        index === 0 ? "text-white/90" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

