"use client";

import { useRouter } from "next/navigation"; // Correct import for App Router
import { Button } from "./button";
import { useTransition } from "react";
import { createNewDocument } from "@/action/actions";
function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleCreateNewDocument = () => {
    startTransition(async () => {
        const { docId } = await createNewDocument();
        router.push(`/doc/${docId}`);
      
    });
  };

  return (
    <Button
      className="flex col m-2"
      onClick={handleCreateNewDocument}
      disabled={isPending} // Disable button while the transition is pending
    >
      {isPending ? "Loading..." : " New Document"}
    </Button>
  );
}

export default NewDocumentButton;
