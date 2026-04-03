# Razorpay Payment Integration Setup

This project includes Razorpay payment gateway integration for processing payments on TheUrbanBreeze e-commerce website.

## 🔑 Getting Your Razorpay API Keys

### Step 1: Create a Razorpay Account
1. Go to [https://razorpay.com](https://razorpay.com)
2. Sign up for a free account
3. Complete the verification process

### Step 2: Get Your API Keys
1. Log in to your Razorpay Dashboard
2. Navigate to **Settings** → **API Keys**
3. Generate your **Test Keys** (for development)
4. Later, generate **Live Keys** (for production)

### Step 3: Configure the Keys

#### For Test Mode (Development)
Open `/src/app/hooks/useRazorpay.ts` and replace the test key:

```typescript
const options = {
  key: 'rzp_test_YOUR_TEST_KEY_HERE', // Replace with your test key
  // ... rest of options
};
```

#### For Production
Replace the test key with your live key:

```typescript
const options = {
  key: 'rzp_live_YOUR_LIVE_KEY_HERE', // Replace with your live key
  // ... rest of options
};
```

## 🧪 Testing the Integration

Razorpay provides test card details for testing:

### Test Card Numbers
- **Success**: `4111 1111 1111 1111`
- **CVV**: Any 3 digits (e.g., `123`)
- **Expiry**: Any future date (e.g., `12/25`)
- **Name**: Any name

### Test UPI ID
- `success@razorpay`

### Test Net Banking
- Select any bank and use the test credentials provided by Razorpay

## 📋 Current Implementation

### Features Included:
✅ Customer details collection (Name, Email, Phone)
✅ Dynamic amount calculation based on quantity
✅ Razorpay checkout modal integration
✅ Payment success/failure notifications
✅ Prefilled customer information
✅ Custom theme color (cyan)
✅ Order notes with product details

### Payment Flow:
1. User selects quantity
2. Clicks "Proceed to Checkout"
3. Enters customer details (name, email, phone)
4. Clicks "Pay Now"
5. Razorpay modal opens
6. User completes payment
7. Success notification shows payment ID

## ⚠️ Important Notes

### Security Considerations:
- **Never expose your API Secret Key** in frontend code
- The current implementation is **frontend-only** and suitable for development/testing
- For production, you should:
  1. Create orders on your backend server
  2. Verify payment signatures on the backend
  3. Store order details in a database
  4. Never trust the frontend payment response alone

### Backend Integration (Recommended for Production):
```javascript
// Backend: Create order
app.post('/create-order', (req, res) => {
  const options = {
    amount: req.body.amount,
    currency: 'INR',
    receipt: 'order_rcptid_' + Date.now()
  };
  
  razorpay.orders.create(options, (err, order) => {
    res.json(order);
  });
});

// Backend: Verify payment
app.post('/verify-payment', (req, res) => {
  const crypto = require('crypto');
  const shasum = crypto.createHmac('sha256', 'YOUR_KEY_SECRET');
  shasum.update(req.body.razorpay_order_id + '|' + req.body.razorpay_payment_id);
  const digest = shasum.digest('hex');
  
  if (digest === req.body.razorpay_signature) {
    // Payment verified
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});
```

## 🔗 Useful Links

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Checkout Integration](https://razorpay.com/docs/payments/payment-gateway/web-integration/)
- [Test Credentials](https://razorpay.com/docs/payments/payments/test-card-details/)
- [Webhook Documentation](https://razorpay.com/docs/webhooks/)

## 💡 Next Steps for Production

1. **Set up a backend server** (Node.js, Python, etc.)
2. **Create order endpoint** to generate Razorpay order_id
3. **Implement payment verification** using Razorpay signature
4. **Set up webhooks** to handle payment events
5. **Store order data** in a database
6. **Implement email notifications** for order confirmation
7. **Add shipping and inventory management**
8. **Enable Razorpay live mode** with proper KYC

## 📞 Support

For Razorpay integration issues:
- Email: support@razorpay.com
- Documentation: https://razorpay.com/docs/

For code-related questions:
- Check the implementation in `/src/app/components/Pricing.tsx`
- Review the hook in `/src/app/hooks/useRazorpay.ts`
