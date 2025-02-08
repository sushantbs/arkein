"use client";

import { Suspense } from "react";
import { Verifier } from "./verifier";

export default function VerifyEmailPage() {
  return (
    <Suspense>
      <Verifier />
    </Suspense>
  );
}
