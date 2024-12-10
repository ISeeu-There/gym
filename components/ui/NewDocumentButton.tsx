"use client";


import { useRouter } from "next/router";
import { Button } from "./button"
import { useTransition } from "react";

function NewDocumentButton() {
const [isPending, startTransition] = useTransition();
const router = useRouter();

const handleCreateNewDocument = {} =>{
  startTransition(async () => {
    const {docId} = await createNewDocument();
    router.push(`/doc/${docId}`);
  });
}

  return (
    <Button className="flex col m-2 ">Side bar</Button>
  )
}

export default NewDocumentButton