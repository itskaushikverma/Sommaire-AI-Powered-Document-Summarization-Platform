import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getSubscriptionDetails, getLastPayment } from '@/lib/subscription';
import { currentUser } from '@clerk/nextjs/server';
import { CheckIcon } from 'lucide-react';
import { pricingPlans } from '@/utils/constants';
import CancelButton from '@/components/subscription/cancel-button';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function SubscriptionPage() {
  const user = await currentUser();

  if (!user?.id) {
    redirect('/sign-in');
  }

  const subscriptionDetails = await getSubscriptionDetails(user?.id);
  const lastPayment = await getLastPayment(user?.id);
  const status = subscriptionDetails?.status;

  return (
    <div className="container max-w-4xl py-10">
      <h1 className="mb-6 text-3xl font-bold">Subscription Management</h1>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>{status === 'subscribed' ? 'Pro' : 'Basic'} Plan</CardTitle>
              {status === 'subscribed' ? (
                <CardDescription>Billed monthly</CardDescription>
              ) : (
                <CardDescription>Free Plan</CardDescription>
              )}
            </div>
            <Badge className="bg-green-600">
              {status === 'subscribed' ? 'Subscribed' : 'Free'}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-muted-foreground">Billing cycle</span>
              <span className="font-medium">{status === 'subscribed' ? 'Monthly' : 'N/A'}</span>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-muted-foreground">Next billing date</span>
              <span className="font-medium">
                {status === 'subscribed' && subscriptionDetails?.nextBillingDate
                  ? subscriptionDetails.nextBillingDate.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'N/A'}
              </span>
            </div>
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-muted-foreground">Last Payment</span>
              <span className="font-medium">
                {lastPayment
                  ? new Date(lastPayment.updated_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'N/A'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-medium">₹ 200/month</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          {status === 'subscribed' ? (
            <CancelButton userId={user.id} />
          ) : (
            <Link href="/#pricing">
              <Button variant={'destructive'}>Subscribe</Button>
            </Link>
          )}
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Subscription Benefits</CardTitle>
          <CardDescription>What's included in your Premium Plan</CardDescription>
        </CardHeader>
        <CardContent>
          {pricingPlans[1].items.map((item, idx) => (
            <li className="flex items-center gap-2" key={idx}>
              <CheckIcon size={18} />
              <span>{item}</span>
            </li>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
