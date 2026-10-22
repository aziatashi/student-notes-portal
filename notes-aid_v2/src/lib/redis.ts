import Redis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL || '';

// Don't fail `next build` (page-data collection imports routes); still fail at runtime
if (!REDIS_URL && process.env.NEXT_PHASE !== 'phase-production-build') {
  throw new Error('Please define the REDIS_URL environment variable inside .env.local');
}

let redis: Redis | null = null;

declare global {
  var redis: Redis | undefined;
}

// Cast the global object to include our redis property
const globalWithRedis = global;

if (!globalWithRedis.redis) {
  globalWithRedis.redis = new Redis(REDIS_URL, { lazyConnect: !REDIS_URL });
}
redis = globalWithRedis.redis;

export default redis;