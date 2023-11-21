import Image from "next/image";
import { CreditCard, LogOut, GalleryHorizontalEnd } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import truncateString from "@/utilities/truncateString";
import { useDispatch } from "react-redux";
import { openModal } from "@/containers/modal-credit";
import { useRouter } from "next/navigation";

interface Props {
  image: string;
  user: IUser;
  logOut: () => void;
}

const UserInfo: React.FC<Props> = ({ user, logOut, image }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const openBuyCreditsModal = () => {
    dispatch(openModal());
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={image}
          alt="user photo"
          width={50}
          height={50}
          className="rounded-full cursor-pointer shadow-xl"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 rounded-xl border-slate-500 bg-gradient-to-br from-indigo-950 via-indigo-950 to-blue-950  text-white mr-6">
        <DropdownMenuLabel className=" px-3 py-2 flex flex-col">
          <p className="text-xl">{truncateString(user.name, 20)}</p>
          <p className="text-green-500 text-lg font-semibold">
            Balance: {user.balance}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-500" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="py-4 cursor-pointer"
            onClick={() => router.push("/icons")}
          >
            <GalleryHorizontalEnd className="mr-2 h-5 w-5" />
            <span className="text-xl px-2">My icons</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-4 cursor-pointer"
            onClick={openBuyCreditsModal}
          >
            <CreditCard className="mr-2 h-5 w-5" />
            <span className="text-xl px-2">Buy credits</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-slate-500" />
        <DropdownMenuItem
          className="py-4 cursor-pointer"
          onClick={() => logOut()}
        >
          <LogOut className="mr-2 h-5 w-5" />
          <span className="text-xl px-2">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfo;
