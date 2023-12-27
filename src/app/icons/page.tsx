"use client";

import CardsPagination from "@/components/cards-pagination";
import { StoreType } from "@/containers/store";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Footer from "@/components/footer";
import Lottie from "lottie-react";
import Loading from "@/utilities/loading-animation.json";

const Icons: React.FC = () => {
  const searchParams = useSearchParams();
  const generationId = searchParams.get("generationId");

  const [icons, setIcons] = useState<Icon[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //redux
  const user = useSelector((store: StoreType) => store.user.value);

  //pagination
  const iconsPerPage = 10;
  const totalPages = Math.ceil(icons.length / iconsPerPage);

  const paginatedIcons = icons.slice(
    (currentPage - 1) * iconsPerPage,
    currentPage * iconsPerPage
  );

  //Get Info icons
  useEffect(() => {
    if (user?.id) {
      const basePath = `/api/icons/${user.id}`;
      const path = generationId
        ? `${basePath}?generationId=${generationId}`
        : basePath;
      const fetchIcons = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(path);

          const result = await res.json();
          setIcons(result.data);
        } catch (e) {
          console.log(e);
        }
        setIsLoading(false);
      };
      fetchIcons();
    } else {
      setIcons([]);
    }
  }, [user, generationId]);

  return (
    <section className="h-full w-full overflow-auto">
      <div className="min-h-[100vh] w-full flex flex-col items-center gap-2 overflow-hidden py-12 px-8 md:px-16 lg:px-20">
        <h2 className="w-full text-white text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-medium pb-2 border-b border-slate-600 ">
          My Icons
        </h2>
        <div className="flex-1 flex w-full overflow-hidden py-4">
          {isLoading ? (
            <div className="flex-1 w-full flex items-center justify-center">
              <Lottie
                animationData={Loading}
                loop={true}
                style={{ height: 100 }}
              />
            </div>
          ) : paginatedIcons.length > 0 ? (
            <CardsPagination icons={paginatedIcons} />
          ) : (
            <div className="flex-1 w-full flex items-center justify-center">
              <p className="text-2xl text-slate-300 font-medium">
                No icons to show
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-center gap-1 p-2">
          {totalPages > 1
            ? Array.from({ length: totalPages }).map((_, index) => (
                <button
                  onClick={() => {
                    setCurrentPage(index + 1);
                  }}
                  key={index}
                  className={clsx(
                    "border shadow-2xl text-white h-8 w-8 rounded-md",
                    index + 1 === currentPage
                      ? "border-slate-400 bg-gray-700/70"
                      : "bg-slate-900/70  border-slate-700"
                  )}
                >
                  {index + 1}
                </button>
              ))
            : null}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Icons;
