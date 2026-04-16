import BgGradient from '@/components/common/bg-gradient';
import { MotionDiv, MotionH1, MotionP } from '@/components/common/motion-wrapper';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import { containerVariants, itemVariants } from '@/utils/constants';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <BgGradient className="from-cyan-200 via-teal-200 to-emerald-200" />
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <MotionH1
              variants={itemVariants}
              viewport={{ once: true }}
              className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl"
            >
              Get in Touch
            </MotionH1>
            <MotionP
              viewport={{ once: true }}
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              Have questions or feedback? We'd love to hear from you.
            </MotionP>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <MotionDiv
              variants={itemVariants}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <ContactInfo />
            </MotionDiv>
            <MotionDiv
              variants={itemVariants}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <ContactForm />
            </MotionDiv>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
