import BgGradient from '@/components/common/bg-gradient';
import { MotionDiv, MotionH1, MotionP } from '@/components/common/motion-wrapper';
import { containerVariants, itemVariants } from '@/utils/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Ban, AlertCircle, HelpCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function RefundPolicyPage() {
  return (
    <div className="relative min-h-screen">
      <BgGradient className="from-rose-100 via-red-50 to-orange-100" />
      <MotionDiv
        variants={containerVariants}
        viewport={{ once: true }}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <MotionH1
              viewport={{ once: true }}
              variants={itemVariants}
              className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl"
            >
              Cancellation & Refund Policy
            </MotionH1>
            <MotionP
              viewport={{ once: true }}
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              Last updated: May 1, 2025
            </MotionP>
          </div>

          <Card className="overflow-hidden border-rose-100/30 bg-white/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-2xl">
            <CardContent className="p-6 sm:p-8">
              <MotionP
                viewport={{ once: true }}
                variants={itemVariants}
                className="mb-8 leading-relaxed text-gray-700"
              >
                At <strong>KAUSHIK VERMA</strong>, we value transparency and strive to offer
                high-quality digital content and services through our platform. However, please note
                the following:
              </MotionP>

              <div className="space-y-8">
                <PolicySection
                  icon={<Ban className="h-10 w-10 text-rose-500" />}
                  title="Cancellation Policy"
                  description="You can cancel your subscription at any time. Please note that all purchases are final and non-refundable.Once you cancel your subscription, it will be deactivated immediately, and access to premium features will be removed right away."
                  cancellation="Click here to Cancel Subscription"
                />

                <PolicySection
                  icon={<AlertCircle className="h-10 w-10 text-rose-500" />}
                  title="No Refunds"
                  description="Due to the nature of our digital offerings and immediate delivery/consumption of content, we do not offer any refunds after a purchase has been completed."
                />

                <PolicySection
                  icon={<HelpCircle className="h-10 w-10 text-rose-500" />}
                  title="Recommendations"
                  description="We strongly recommend reviewing all product/service details before making a purchase. If you face any technical issues or have any concerns, feel free to contact us and we'll do our best to support you."
                />
              </div>

              <div className="mt-10 rounded-lg bg-gray-50 p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-rose-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                </div>
                <p className="mt-3 text-gray-600">
                  If you have any questions about our Cancellation & Refund Policy, please contact
                  us at:
                </p>
                <a
                  href="mailto:kauhsikverma321@gmail.com"
                  className="mt-2 inline-block text-rose-600 hover:underline"
                >
                  kauhsikverma321@gmail.com
                </a>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                <p>
                  This policy is subject to change without prior notice. Please review this page
                  periodically for any updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </MotionDiv>
    </div>
  );
}

function PolicySection({ icon, title, description, cancellation }) {
  return (
    <MotionDiv viewport={{ once: true }} variants={itemVariants} className="flex gap-6">
      <div className="shrink-0">{icon}</div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700">
          {description}{' '}
          <Link className="text-blue-500 underline" href="">
            {' '}
            {cancellation}
          </Link>
        </p>
      </div>
    </MotionDiv>
  );
}
