"use client";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOPen = useStoreModal((state) => state.onOpen);
  const isOPen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if(!isOPen){
      onOPen();
    }
  }, [isOPen, onOPen]);

  return (
    <div className="p-4">
      Root Page
    </div>
  );
}
export default SetupPage;