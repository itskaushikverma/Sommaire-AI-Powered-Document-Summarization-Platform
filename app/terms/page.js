import BgGradient from '@/components/common/bg-gradient';
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from '@/components/common/motion-wrapper';
import { containerVariants, itemVariants } from '@/utils/constants';
import { Card, CardContent } from '@/components/ui/card';
import {
  Gavel,
  Shield,
  FileText,
  Globe,
  Users,
  AlertTriangle,
} from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="relative min-h-screen">
      <BgGradient className="from-amber-100 via-orange-50 to-rose-100" />
      <MotionDiv
        viewport={{ once: true }}
        variants={containerVariants}
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
              Terms & Conditions
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
                className="mb-6 text-gray-700"
              >
                For the purpose of these Terms and Conditions, the terms{' '}
                <strong>"we", "us", "our"</strong> refer to{' '}
                <strong>KAUSHIK VERMA</strong>, whose registered/operational
                office is KIIT University, Bhubaneswar, ODISHA 751024. The terms{' '}
                <strong>"you", "your", "user", "visitor"</strong> refer to any
                natural or legal person who is visiting our website and/or
                agreed to purchase from us.
              </MotionP>

              <MotionP
                viewport={{ once: true }}
                variants={itemVariants}
                className="mb-6 text-gray-700"
              >
                Your use of the website and/or purchases from us are governed by
                the following Terms and Conditions:
              </MotionP>

              <div className="space-y-8">
                <TermsSection
                  icon={<Globe className="h-6 w-6 text-rose-500" />}
                  title="Website Content"
                  items={[
                    'The content of the pages of this website is subject to change without notice.',
                    'We and any third parties do not provide any warranty or guarantee regarding the accuracy, timeliness, performance, completeness, or suitability of the information and materials on this website.',
                    'You acknowledge that such information may contain inaccuracies or errors, and we expressly exclude liability to the fullest extent permitted by law.',
                  ]}
                />

                <TermsSection
                  icon={<Users className="h-6 w-6 text-rose-500" />}
                  title="User Responsibilities"
                  items={[
                    'Your use of any information or materials on this website is entirely at your own risk. It is your responsibility to ensure that any products, services, or information meet your specific requirements.',
                    'Unauthorized use of the content may give rise to a claim for damages and/or be a criminal offense.',
                  ]}
                />

                <TermsSection
                  icon={<FileText className="h-6 w-6 text-rose-500" />}
                  title="Intellectual Property"
                  items={[
                    'This website contains material which is owned by or licensed to us. This includes the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice.',
                    'All trademarks reproduced that are not the property of, or licensed to, us are acknowledged on the website.',
                    'You may not create a link to our website from another website or document without prior written consent from  VERMA.',
                  ]}
                />

                <TermsSection
                  icon={<Shield className="h-6 w-6 text-rose-500" />}
                  title="Liability & Disputes"
                  items={[
                    'Any disputes arising from use of the website or any purchase are subject to the laws of India.',
                    'We are not liable for any transaction failure due to the cardholder exceeding preset limits agreed between us and our acquiring bank.',
                  ]}
                />

                <TermsSection
                  icon={<AlertTriangle className="h-6 w-6 text-rose-500" />}
                  title="External Links"
                  items={[
                    'We may include links to external websites for your convenience. These links do not signify our endorsement and we are not responsible for their content.',
                  ]}
                />
              </div>

              <div className="mt-10 rounded-lg bg-gray-50 p-6">
                <div className="flex items-center gap-3">
                  <Gavel className="h-6 w-6 text-rose-500" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Legal Notice
                  </h3>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  These terms and conditions are subject to change without prior
                  notice. By using our website, you agree to be bound by the
                  current version of these Terms and Conditions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </MotionDiv>
    </div>
  );
}

function TermsSection({ icon, title, items }) {
  return (
    <MotionDiv
      viewport={{ once: true }}
      variants={itemVariants}
      className="space-y-3"
    >
      <div className="flex items-center gap-3">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="ml-10 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-700">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
}
