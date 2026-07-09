import { useState } from "react";
import {
  CheckCircle2,
  Copy,
  Home,
  Mail,
  Receipt,
  ShieldCheck,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);

  const transactionId = searchParams.get("transactionId");
  const message = searchParams.get("message");

  const handleCopy = async () => {
    if (!transactionId) return;

    await navigator.clipboard.writeText(transactionId);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">

      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <Card className="relative w-full max-w-2xl border border-green-500/20 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
        <CardContent className="p-8">

          <div className="flex flex-col items-center text-center">

            {/* Success Icon */}
            <div className="mb-6">
              <div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-green-500/15">
                <CheckCircle2 className="h-14 w-14 text-green-500" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Payment Successful 🎉
            </h1>

            <p className="mt-3 text-slate-400 max-w-md">
              {message ||
                "Your payment has been completed successfully."}
            </p>

            {/* Invoice Email */}
            <div className="mt-6 flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-300">
              <Mail className="h-5 w-5" />
              Invoice has been sent to your registered email.
            </div>

            {/* Payment Details */}
            <div className="mt-8 w-full rounded-xl border border-slate-700 bg-slate-800/60 p-6 space-y-5">

              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-slate-400">
                  <Receipt className="h-4 w-4" />
                  Transaction ID
                </span>

                <div className="flex items-center gap-2">
                  <span className="max-w-[180px] truncate text-green-400">
                    {transactionId || "N/A"}
                  </span>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCopy}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                <span className="text-slate-400">
                  Payment Status
                </span>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                  Paid
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-700 pt-4">
                <span className="text-slate-400">
                  Security
                </span>

                <span className="flex items-center gap-1 text-green-400">
                  <ShieldCheck className="h-4 w-4" />
                  Verified
                </span>
              </div>

            </div>

            {copied && (
              <p className="mt-4 text-sm text-green-400">
                Transaction ID copied!
              </p>
            )}

            {/* Button */}
            <div className="mt-8 w-full">
              <Button asChild className="w-full h-11">
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-slate-500">
              Thank you for your purchase.
              <br />
              Please check your Inbox or Spam folder for your invoice.
            </p>

          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;