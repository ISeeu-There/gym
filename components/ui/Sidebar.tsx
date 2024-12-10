import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import { Button } from "./button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  

function Sidebar() {
  const MenuOption=(
  <>
  <NewDocumentButton/>
  </>
)
    
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
      <div>
      {MenuOption}
    </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
        <div className="hidden md:inline">
    {MenuOption}
</div>

        
    </div>
    

  )
}

export default Sidebar