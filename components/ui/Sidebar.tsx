"use client";

import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  collectionGroup,
  DocumentData,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/firebase";
import { Button } from "./button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import SidebarOption from "./SidebarOption";

interface RoomDocument extends DocumentData {
  userId: String;
  role: "owner" | "editor";
  createdAt: String;
  roomId: String;
}

function Sidebar() {
  const { user } = useUser();
  const [groupedData, setGroupedData] = useState<{
    owner: RoomDocument[];
    editor: RoomDocument[];
  }>({
    owner: [],
    editor: [],
  });
  const [data, loading, error] = useCollection(
    user && query(
      collectionGroup(db, "rooms"),
      where("userId", "==", user.emailAddresses[0]?.toString())
    )
  );
  

  useEffect(() => {
    if (!data) return;
    const grouped = data.docs.reduce<{
      owner: RoomDocument[];
      editor: RoomDocument[];
    }>(
      (acc, curr) => {
        const roomData = curr.data() as RoomDocument;
        if (roomData.role === "owner") {
          acc.owner.push({
            id: curr.id,
            ...roomData,
          });
        } else {
          acc.editor.push({
            id: curr.id,
            ...roomData,
          });
        }
        return acc;
      },
      {
        owner: [],
        editor: [],
      }
    );
    setGroupedData(grouped);
  }, [data]);
  const MenuOption = (
    <>
      <NewDocumentButton />
<div className="flex py-4 flex-col space-y-4 md:max-w-36">
      {/* my documents */}
      {groupedData.owner.length === 0 ? (
        <h2 className="text-gray-500 font-semibold text-sm">
          No Documents Found
        </h2>
      ) : (
        <>
          <h2 className="text-gray-500 font-semibold text-sm">
            My Documents
          </h2>
          {groupedData.owner.map((doc) => (
          <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
          ))
          }
        </>
      )
      }
      </div>
      {/* list... */}

      {/* shared with me */}
      {/* list... */}
    </>
  );

  return (
    <div className="p-2 md:p-5 bg-gray-100 relative">
      <div className="md:hidden ">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="hover:opacity-30" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div>{MenuOption}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{MenuOption}</div>
    </div>
  );
}

export default Sidebar;
