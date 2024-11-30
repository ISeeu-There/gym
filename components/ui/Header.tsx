"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

function Header() {
  const { user } = useUser();
  return (
    <div className="flex justify-between m-2">
      {user && (
        <h1 className="text-2xl ">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}

      {/* signin and signout */}

      <div>
        <SignedIn>
            <UserButton/>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
