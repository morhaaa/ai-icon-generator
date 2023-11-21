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
    <nav className="w-full flex justify-between items-center px-5 py-2 shadow-2xl">
      <div className={monserrat.className}>
        <Link href="/">
          <p className="font-semibold text-white text-xl cursor-pointer">
            AIconGenerator
          </p>
        </Link>
      </div>
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
