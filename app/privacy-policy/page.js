import BgGradient from '@/components/common/bg-gradient';
import { MotionDiv, MotionH1, MotionP, MotionH2 } from '@/components/common/motion-wrapper';
import { containerVariants, itemVariants } from '@/utils/constants';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Database, Cookie, UserCheck, Mail } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen">
      <BgGradient className="from-blue-100 via-indigo-50 to-purple-100" />
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <MotionH1
              variants={itemVariants}
              viewport={{ once: true }}
              className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl"
            >
              Privacy Policy
            </MotionH1>
            <MotionP
              viewport={{ once: true }}
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600"
            >
              Effective Date: May 1, 2025
            </MotionP>
          </div>

          <Card className="overflow-hidden border-rose-100/30 bg-white/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-2xl">
            <CardContent className="p-6 sm:p-8">
              <MotionP
                viewport={{ once: true }}
                variants={itemVariants}
                className="mb-8 leading-relaxed text-gray-700"
              >
                This Privacy Policy outlines how <strong>Kaushik Verma</strong> collects, uses, and
                protects any information that you provide when using this website:{' '}
                <a href="https://sommaire-kv.vercel.app" className="text-rose-600 hover:underline">
                  https://sommaire-kv.vercel.app
                </a>
                .
              </MotionP>

              <MotionP
                viewport={{ once: true }}
                variants={itemVariants}
                className="mb-8 leading-relaxed text-gray-700"
              >
                Kaushik Verma is committed to ensuring your privacy is protected. Should we ask you
                to provide information by which you can be identified while using this site, rest
                assured it will only be used in accordance with this policy.
              </MotionP>

              <div className="space-y-10">
                <PrivacySection
                  icon={<Database className="h-8 w-8 text-rose-500" />}
                  title="Information We Collect"
                  content={
                    <ul className="ml-6 list-disc space-y-2">
                      <li>Full name</li>
                      <li>Contact details, including email address</li>
                      <li>
                        Demographic data such as postcode, preferences, and interests (if required)
                      </li>
                      <li>
                        Other relevant information for surveys, feedback, or promotional offers
                      </li>
                    </ul>
                  }
                />

                <PrivacySection
                  icon={<UserCheck className="h-8 w-8 text-rose-500" />}
                  title="How We Use Your Information"
                  content={
                    <ul className="ml-6 list-disc space-y-2">
                      <li>Internal record-keeping</li>
                      <li>Improving our products, content, and services</li>
                      <li>Sending promotional emails about updates, offers, or relevant content</li>
                      <li>Conducting market research via email, phone, or other means</li>
                      <li>Personalizing website experience based on your preferences</li>
                    </ul>
                  }
                />

                <PrivacySection
                  icon={<Cookie className="h-8 w-8 text-rose-500" />}
                  title="Cookies and Tracking"
                  content={
                    <>
                      <p className="mb-4 text-gray-700">
                        We use cookies to enhance your browsing experience. A cookie is a small text
                        file placed on your device to analyze web traffic and remember user
                        preferences.
                      </p>
                      <ul className="ml-6 list-disc space-y-2">
                        <li>Track which pages are visited most frequently</li>
                        <li>Improve website usability and performance</li>
                      </ul>
                      <p className="mt-4 text-gray-700">
                        Cookies do <strong>not</strong> provide access to your computer or any
                        personal information unless you choose to share it. You can decline cookies
                        in your browser settings, although this may affect website functionality.
                      </p>
                    </>
                  }
                />

                <PrivacySection
                  icon={<Shield className="h-8 w-8 text-rose-500" />}
                  title="Controlling Your Information"
                  content={
                    <>
                      <ul className="ml-6 list-disc space-y-2">
                        <li>Opt out on forms where personal data is collected</li>
                        <li>Contact us to withdraw consent at any time</li>
                      </ul>
                      <p className="mt-4 text-gray-700">
                        We <strong>do not</strong> sell, lease, or distribute your personal
                        information to third parties without your permission, except when legally
                        required.
                      </p>
                    </>
                  }
                />
              </div>

              <div className="mt-10 rounded-lg bg-gray-50 p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-rose-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Contact Details</h3>
                </div>
                <p className="mt-3 mb-4 text-gray-600">
                  If you have questions, concerns, or wish to update your personal information,
                  please contact:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Kaushik Verma</strong>
                  </p>
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:kauhsikverma321@gmail.com"
                      className="text-rose-600 hover:underline"
                    >
                      kauhsikverma321@gmail.com
                    </a>
                  </p>
                  <p>Phone: +91 70617 61587</p>
                  <p>Address: KIIT University, Bhubaneswar, Odisha - 751024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </MotionDiv>
    </div>
  );
}

function PrivacySection({ icon, title, content }) {
  return (
    <MotionDiv viewport={{ once: true }} variants={itemVariants} className="space-y-4">
      <div className="flex items-center gap-3">
        {icon}
        <MotionH2 className="text-xl font-semibold text-gray-900">{title}</MotionH2>
      </div>
      <div className="ml-11">{content}</div>
    </MotionDiv>
  );
}
