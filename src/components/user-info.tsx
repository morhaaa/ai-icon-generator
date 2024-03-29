import Image from "next/image";
import {
  CreditCard,
  LogOut,
  GalleryHorizontalEnd,
  ImagePlus,
} from "lucide-react";
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
          width={40}
          height={40}
          className="rounded-full cursor-pointer shadow-xl"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 rounded-xl border-slate-200 bg-gradient-to-b from-transparent via-fuchsia-100/20 to-fuchsia-100/60   text-slate-900 mr-6">
        <DropdownMenuLabel className=" px-3 py-2 flex flex-col">
          <p className="text-lg">{truncateString(user.name, 20)}</p>
          <p className="text-fuchsia-500 font-semibold">
            Balance: {user.balance}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-300" />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="py-2 cursor-pointer hover:bg-slate-200"
            onClick={() => router.push("/generator")}
          >
            <ImagePlus className="mr-2 h-5 w-5" />
            <span className="text-lg px-2">Generate</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-2 cursor-pointer"
            onClick={() => router.push("/icons")}
          >
            <GalleryHorizontalEnd className="mr-2 h-5 w-5" />
            <span className="text-lg px-2">My icons</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-3 cursor-pointer"
            onClick={openBuyCreditsModal}
          >
            <CreditCard className="mr-2 h-5 w-5" />
            <span className="text-lg px-2">Buy credits</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-slate-300" />
        <DropdownMenuItem
          className="py-2 cursor-pointer"
          onClick={() => logOut()}
        >
          <LogOut className="mr-2 h-5 w-5" />
          <span className="text-lg px-2">Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfo;
