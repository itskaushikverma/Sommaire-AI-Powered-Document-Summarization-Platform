import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-rose-100/30 bg-white/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-2xl">
        <CardContent className="p-6">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <Mail className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Email</p>
                <a
                  href="mailto:kauhsikverma321@gmail.com"
                  className="mt-1 block text-sm text-gray-600 hover:text-rose-600"
                >
                  kauhsikverma321@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <Phone className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Phone</p>
                <a
                  href="tel:+917061761587"
                  className="mt-1 block text-sm text-gray-600 hover:text-rose-600"
                >
                  +91 70617 61587
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Address</p>
                <p className="mt-1 text-sm text-gray-600">
                  KIIT University
                  <br />
                  Bhubaneswar, Odisha - 751024
                  <br />
                  India
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-rose-100/30 bg-white/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-2xl">
        <CardContent className="p-6">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">Frequently Asked Questions</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-base font-medium text-gray-900">
                How quickly will I receive a response?
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                We typically respond to all inquiries within 24-48 hours during business days.
              </p>
            </div>

            <div>
              <h4 className="text-base font-medium text-gray-900">
                Do you offer custom solutions?
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Yes! Contact us with your specific requirements, and we'll work with you to create a
                tailored solution.
              </p>
            </div>

            <div>
              <h4 className="text-base font-medium text-gray-900">
                How can I request technical support?
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                For technical issues, please include your account details and a description of the
                problem in your message.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
