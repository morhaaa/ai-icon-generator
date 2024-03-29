"use client";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "@/containers/store";
import { Coins, GemIcon, Landmark, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { plans } from "@/utilities/constant";
import { useState } from "react";
import clsx from "clsx";
import { closeModal } from "@/containers/modal-credit";
import CheckOutButton from "./checkout-button";
import { motion, AnimatePresence } from "framer-motion";
import NeonBorder from "./neon-border";

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((store: StoreType) => store.modal.value);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(plans[1]);

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          className="absolute bg-slate-700/20 backdrop-blur h-screen w-screen z-[9999] flex items-center justify-center"
        >
          <Card
            className={
              "flex flex-col border py-2 lg:py-4 border-slate-300 bg-white xl:w-[450px] xl:h-[580px] lg:w-[420px] lg:h-[530px] md:w-[400px] md:h-[520px] w-[320px] h-[480px] rounded-2xl drop-shadow-2xl"
            }
          >
            <CardHeader className="flex flex-col gap-1">
              <X
                color="#e2e8f0"
                className="self-end cursor-pointer"
                onClick={close}
              />
              <CardTitle className="text-slate-900 text-2xl lg:text-3xl">
                Buy new credits
              </CardTitle>
              <CardDescription className="lg:text-lg text-slate-600">
                Choose your pack
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex py-2 lg:py-4">
              <div className="flex-1 flex flex-col">
                <div className="flex-1 flex flex-col gap-2 lg:gap-4">
                  {plans.map((plan, index) => (
                    <NeonBorder
                      key={index}
                      disabled={!(selectedPlan.id === plan.id)}
                    >
                      <div
                        onClick={() => setSelectedPlan(plan)}
                        className={clsx(
                          "flex items-center space-x-4 rounded-lg  border py-2 lg:py-2 px-4 cursor-pointer",
                          selectedPlan.id === plan.id
                            ? " bg-gradient-to-br bg-slate-300/80 drop-shadow-lg shadow-lg border-violet-200/60 "
                            : " bg-gradient-to-tr from-slate-200/20 to-slate-200/10 border-slate-300 "
                        )}
                      >
                        {index === 0 && (
                          <Coins
                            strokeWidth={2.25}
                            size={30}
                            color={
                              selectedPlan.id === plan.id
                                ? "#000000"
                                : "#0f172a"
                            }
                          />
                        )}
                        {index === 1 && (
                          <GemIcon
                            strokeWidth={2.25}
                            size={30}
                            color={
                              selectedPlan.id === plan.id
                                ? "#000000"
                                : "#0f172a"
                            }
                          />
                        )}
                        {index === 2 && (
                          <Landmark
                            strokeWidth={2.25}
                            size={30}
                            color={
                              selectedPlan.id === plan.id
                                ? "#000000"
                                : "#0f172a"
                            }
                          />
                        )}
                        <div className="flex items-center justify-between flex-1">
                          <div className="flex flex-col">
                            <p
                              className={clsx(
                                "font-semibold md:text-lg leading-none",
                                selectedPlan.id === plan.id
                                  ? ""
                                  : "text-slate-900"
                              )}
                            >
                              {plan.credits} credits
                            </p>
                            <p className="text-muted-foreground">
                              {plan.description}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p
                            className={clsx(
                              "font-semibold text-xl md:text-2xl",
                              selectedPlan.id === plan.id
                                ? ""
                                : "text-slate-900"
                            )}
                          >
                            {plan.price}$
                          </p>
                        </div>
                      </div>
                    </NeonBorder>
                  ))}
                </div>
                <CheckOutButton plan={selectedPlan} />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
