"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Verifier() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const email = searchParams.get("email");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    async function verifyEmail() {
      if (!token) {
        setStatus("error");
        return;
      }

      try {
        const response = await fetch(
          `/api/verify-email?token=${token}&email=${email}`,
          {
            method: "GET",
          }
        );

        if (response.ok) {
          setStatus("success");
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Verification failed:", error);
        setStatus("error");
      }
    }

    verifyEmail();
  }, [token, email]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        {status === "loading" && <p>Verifying your email...</p>}
        {status === "success" && (
          <>
            <h2 className="text-green-600 font-bold text-lg">
              Email Verified Successfully!
            </h2>
            <p>
              You can now close this page or go to the{" "}
              <a className="link" href="/" target="_self">
                home page.
              </a>
            </p>
          </>
        )}
        {status === "error" && (
          <>
            <h2 className="text-red-600 font-bold text-lg">
              Email Verification Failed
            </h2>
            <p>The verification link is invalid or has expired.</p>
          </>
        )}
      </div>
    </div>
  );
}
