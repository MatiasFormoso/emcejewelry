'use client';

import SimpleToastContainer, { useSimpleToast } from "@/components/SimpleToast";

export default function ToastContainer() {
  const { toasts, removeToast } = useSimpleToast();
  return <SimpleToastContainer toasts={toasts} onRemove={removeToast} />;
}
