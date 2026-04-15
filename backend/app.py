from flask import Flask, request, jsonify
import razorpay
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)

# ✅ FIXED CORS (important)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

client = razorpay.Client(auth=(
    os.getenv("RAZORPAY_KEY_ID"),
    os.getenv("RAZORPAY_KEY_SECRET")
))

# ✅ Create Order API
@app.route("/create-order", methods=["POST", "OPTIONS"])
def create_order():

    # 🔥 HANDLE PREFLIGHT REQUEST
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    data = request.get_json()
    amount = data.get("amount")

    try:
        order = client.order.create({
            "amount": amount,
            "currency": "INR",
            "payment_capture": 1
        })
        return jsonify(order)

    except Exception as e:
        print("Order Error:", e)
        return jsonify({"error": "Order creation failed"}), 500


# ✅ Verify Payment API
@app.route("/verify-payment", methods=["POST", "OPTIONS"])
def verify_payment():

    # 🔥 HANDLE PREFLIGHT REQUEST
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    data = request.get_json()

    params = {
        'razorpay_order_id': data.get('razorpay_order_id'),
        'razorpay_payment_id': data.get('razorpay_payment_id'),
        'razorpay_signature': data.get('razorpay_signature')
    }

    try:
        client.utility.verify_payment_signature(params)
        return jsonify({"status": "success"})

    except Exception as e:
        print("Verification Error:", e)
        return jsonify({"status": "failed"}), 400


# ✅ Health Check
@app.route("/")
def home():
    return "Razorpay Backend Running ✅"


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)