"use client";
import Button from "@/components/ui/button";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";
import UserInfo from "./user-info";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserInfo, setUserInfo } from "@/containers/user-reducer";
import { StoreType, AppDispatch } from "@/containers/store";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  const { status, data: session } = useSession();

  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((store: StoreType) => store.user.value);

  useEffect(() => {
    const userMail = session?.user?.email;
    if (status === "authenticated" && userMail) {
      dispatch(fetchUserInfo(userMail));
    } else {
      dispatch(setUserInfo(null));
    }
  }, [status, session, dispatch]);

  const logOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="w-full flex justify-between items-center px-10 py-2 border-b border-slate-100">
      <Link href="/">
        <p className="font-semibold text-slate-900 cursor-pointer text-xl">
          A
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-fuchsia-500">
            Icon
          </span>
          Generator
        </p>
      </Link>
      {user !== null ? (
        <UserInfo
          user={user}
          image={session?.user?.image ?? ""}
          logOut={logOut}
        />
      ) : (
        <Button onClick={() => signIn("google")}>SIGN IN</Button>
      )}
    </nav>
  );
};

export default Navbar;
