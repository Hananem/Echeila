
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { Zap } from 'lucide-react';
interface ElegantShapeProps {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}

function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-gray-400/20",
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-sm border-2 border-gray-300/30 shadow-lg`}
          style={{
            background: `linear-gradient(to right, ${
              gradient.includes("indigo")
                ? "rgba(99, 102, 241, 0.2)"
                : gradient.includes("rose")
                  ? "rgba(244, 63, 94, 0.2)"
                  : gradient.includes("violet")
                    ? "rgba(139, 92, 246, 0.2)"
                    : gradient.includes("amber")
                      ? "rgba(245, 158, 11, 0.2)"
                      : gradient.includes("cyan")
                        ? "rgba(6, 182, 212, 0.2)"
                        : gradient.includes("green")
                          ? "rgba(34, 197, 94, 0.2)"
                          : gradient.includes("emerald")
                            ? "rgba(52, 211, 153, 0.2)"
                            : "rgba(156, 163, 175, 0.2)"
            }, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  )
}

interface HeroGeometricProps {
  badge?: string
  title1?: string
  title2?: string
}

export default function HeroGeometric({
  badge ="تشيلك وتشيل عليك",
  title1 = "انطلق مع",
  title2 = "الشيلة",
}: HeroGeometricProps) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div
    id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-100"
      dir="rtl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 via-transparent to-emerald-200/30 blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-green-500/20"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-emerald-500/20"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-green-400/20"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-lime-500/20"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-emerald-400/20"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
  custom={0}
  variants={fadeUpVariants}
  initial="hidden"
  animate="visible"
  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300/50 mb-8 md:mb-12 shadow-sm"
>
  <Zap className="w-4 h-4 text-green-500" /> 
  <span className="text-sm text-green-700 tracking-wide font-medium">{badge}</span>
</motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-gray-600">{title1}</span>
              <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 mt-2 text-5xl sm:text-7xl md:text-9xl"
                style={{ fontFamily: "Pacifico, cursive" }}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              خدمة نقل ذكية وسريعة تربطك بوجهتك في أقل وقت ممكن. احجز رحلتك الآن واستمتع بتجربة نقل مريحة وآمنة
            </p>
          </motion.div>

          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                احجز رحلتك الآن
              </button>
              <button className="border-2 border-green-500 text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all duration-300">
                كن سائقاً معنا
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-transparent to-gray-100/60 pointer-events-none" />
    </div>
  )
}