"use server";

import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument(){
    auth().protect();
    const {sessionClains} = await auth();

    const docCollectionRef= adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Document"
    })
    await adminDb.collection('users').doc(sessionClains?.email)
}