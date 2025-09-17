import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Users, Shield, Clock, Star, Route } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function AboutSection() {
  type DataPoint = {
    value: number;
  };

  const data: DataPoint[] = [
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 50 },
    { value: 70 },
  ];

  const features = [
    { icon: Users, title: "فريق محترف" },
    { icon: Shield, title: "أمان مضمون" },
    { icon: Clock, title: "خدمة سريعة" },
    { icon: Star, title: "تقييم عالي" },
  ];

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5, ease: "easeOut" },
    },
  };

  const featureVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  };

  return (
    <section id="about" className="py-20 mt-80" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text and Icons Section */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-right"
          >
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300/50 mb-8 shadow-sm"
            >
              <span className="text-sm text-green-700 tracking-wide font-medium">
                من نحن
              </span>
            </motion.div>
            <motion.h2
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[38px] font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              نقل موثوق وسريع لجميع العملاء
            </motion.h2>
            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              الشيلة هي منصة النقل الرائدة في المنطقة، نوفر خدمات نقل آمنة وموثوقة وسريعة. نهدف إلى تسهيل التنقل وتوفير
              تجربة استثنائية لعملائنا من خلال التكنولوجيا المتطورة والخدمة المتميزة.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={featureVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center justify-center p-4 rounded-2xl bg-gray-50 hover:bg-[#33CC33]/5 transition-colors duration-300"
                >
                  <feature.icon className="w-6 h-6 text-[#33CC33] ml-2" />
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="lg:w-1/3 relative hidden sm:block">
            <motion.div
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.img
                src="/map.png"
                alt="منصة الشيلة"
                className="w-[90%] h-[500px] object-cover rounded-lg mx-auto"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              />

              {/* Top-right card */}
              <motion.div
                className="absolute w-[250px] -top-10 -right-10 p-4 bg-[#010f05]/60 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 2.6 } },
                }}
              >
                <div className="absolute top-40 left-[-120px] translate-x-1/2 w-16 h-16 bg-[#2D5016]/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center p-4 z-10
                  before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-[20px] before:border-l-transparent before:border-r-[20px] before:border-r-transparent before:border-t-[30px] before:border-t-[#2D5016]/80 before:backdrop-blur-sm before:bottom-[-30px]"
                >
                  <img src="/car2.png" alt="Icône maison" className="w-10 h-10 rounded-full" />
                </div>

                <div className="w-full rounded-lg bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center mb-3">
                  <motion.img
                    src="/car.png"
                    alt="car"
                    className="w-40 h-40"
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
                    }}
                  />
                </div>

                <motion.p
                  className="text-base font-semibold mb-4 text-center text-white"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                  }}
                >
                  سائق بارع وعمل ممتاز
                </motion.p>

                <motion.div
                  className="flex justify-between w-full px-4 text-white"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-white" fill="currentColor" />
                      <span className="font-semibold text-lg">5</span>
                    </div>
                    <span className="text-sm mt-1">تقييم عالي</span>
                  </div>

                  <span className="w-px h-12 bg-gray-300"></span>

                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <Route className="w-5 h-5 text-white" />
                      <span className="font-semibold text-lg">50+</span>
                    </div>
                    <span className="text-sm mt-1">توصيلة ناجحة</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom-left chart div */}
              <motion.div
                className="absolute w-[300px] -bottom-10 -left-10 p-4 bg-white rounded-xl shadow-lg flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
              >
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  عملاء راضون في تزايد
                </p>

                <div className="w-full h-20 mb-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#22c55e"
                        fill="#22c55e40"
                        strokeWidth={2}
                        isAnimationActive={true}
                        animationBegin={300}
                        animationDuration={2000}
                        animationEasing="ease"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src="/user1.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/user2.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/user3.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/user4.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                    <img src="/user5.jpg" className="w-8 h-8 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-sm text-gray-600">+ اخرون</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
