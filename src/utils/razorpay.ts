import { loadScript } from './loadScript';

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

export async function initializeRazorpay(options: RazorpayOptions): Promise<void> {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

  if (!res) {
    throw new Error('Razorpay SDK failed to load');
  }

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
}

const RAZORPAY_KEY = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_key';

export const DEFAULT_RAZORPAY_OPTIONS: Pick<RazorpayOptions, 'key' | 'currency' | 'name' | 'theme'> = {
  key: RAZORPAY_KEY,
  currency: 'INR',
  name: 'Growthvalley LLP',
  theme: {
    color: '#FACC15',
  },
};
