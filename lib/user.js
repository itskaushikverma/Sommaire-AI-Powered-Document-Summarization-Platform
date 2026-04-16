import { getDbConnection } from './db';
import { getUsersUploadCount } from './summaries';
import { pricingPlans } from '@/utils/constants';

export async function getPriceId(userId) {
  const sql = await getDbConnection();
  const query = await sql`SELECT price_id FROM users WHERE user_id = ${userId}`;
  return query?.[0]?.price_id;
}

export async function hasReachedUploadLimit(userId) {
  const uploadCount = await getUsersUploadCount(userId);
  const priceId = await getPriceId(userId);

  const plan = pricingPlans.find((plan) => plan.priceId === priceId)?.id === 'pro';

  const uploadLimit = plan ? 10 : 5;

  return uploadCount >= uploadLimit;
}
