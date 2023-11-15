"use client";

import Button from "@/components/ui/button";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { signIn, signOut, useSession } from "next-auth/react";
import UserInfo from "./user-info";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserInfo } from "@/containers/user-reducer";
import { StoreType } from "@/containers/store";

const monserrat = Montserrat({ subsets: ["latin"] });

const Navbar: React.FC = () => {
  const { status, data: session } = useSession();

  const dispatch = useDispatch();
  const user = useSelector((store: StoreType) => store.user.value);

  useEffect(() => {
    if (status === "authenticated") {
      const fetchUserData = async () => {
        const userData = await fetch(`/api/getUser/${session.user?.email}`);

        if (userData) {
          const response = (await userData.json()).data;
          const userInfo: IUser = {
            name: response.name,
            email: response.email,
            balance: response.balance,
            image: session.user?.image ?? "",
          };
          dispatch(setUserInfo(userInfo));
        }
      };
      fetchUserData();
    } else {
      dispatch(setUserInfo(null));
    }
  }, [status, session, dispatch]);

  const logOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="w-full flex justify-between items-center px-5 py-3 shadow-2xl">
      <div className={monserrat.className}>
        <Link href="/">
          <p className="font-semibold text-white text-2xl cursor-pointer">
            AIconGenerator
          </p>
        </Link>
      </div>
      {user !== null ? (
        <UserInfo user={user} logOut={logOut} />
      ) : (
        <Button onClick={() => signIn("google")}>SIGN IN</Button>
      )}
    </nav>
  );
};

export default Navbar;
