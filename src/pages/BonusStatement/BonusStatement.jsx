import { useSelector } from "react-redux";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import useBonusStatement from "../../hooks/useBonusStatement";

const BonusStatement = () => {
  const { data } = useBonusStatement();
  const { showAppPopUp } = useSelector((state) => state.state);

  return (
    <div
      className={`flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 ${
        showAppPopUp ? "pt-[160px]" : "pt-[90px]"
      }`}
    >
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="flex flex-col h-full">
            {data?.length > 0 ? (
              data?.map((item, i) => {
                return (
                  <div
                    key={i}
                    title="Profit &amp; Loss Statement"
                    className="w-full px-1 my-1.5 cursor-pointer"
                  >
                    <div
                      title="Cricket - 1.232257782-3066645.FY"
                      className="w-full flex active:scale-95 transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 bg-bg_Quaternary my-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    >
                      <div className="w-full bg-bg_Quaternary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                        <span className="text-text_Ternary w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                          <span>Amount:</span>
                          <span className="font-semibold text-text_Success">
                            ₹ {item?.amount}
                          </span>
                        </span>
                        <span className="text-text_Ternary w-1/2 flex items-center justify-end gap-x-1">
                          <span>Wagering Amount:</span>
                          <span
                            className={`font-semibold ${
                              item?.wagering_amount > 0
                                ? "text-text_Success"
                                : "text-text_Danger"
                            }`}
                          >
                            ₹ {item?.wagering_amount}
                          </span>
                        </span>
                      </div>
                      <div className="w-full bg-bg_Quaternary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                        <span className="text-text_Ternary w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                          <span>Wagering Complete Amount:</span>
                          <span className="font-semibold">
                            ₹ {item?.wagering_complete_amount}
                          </span>
                        </span>
                        <span className="text-text_Ternary w-1/2 flex items-center justify-end gap-x-1">
                          <span>Date Added:</span>
                          <span className={`font-semibold `}>
                            {item?.date_added}
                          </span>
                        </span>
                      </div>
                      <div className="w-full bg-bg_Quaternary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                        <span className="text-text_Ternary w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                          <span>Expirity Date:</span>
                          <span className="font-semibold">
                            {item?.expirity_date}
                          </span>
                        </span>
                        <span className="text-text_Ternary w-1/2 flex items-center justify-end gap-x-1">
                          <span></span>
                          <span className={`font-semibold `}>
                            {item?.s_wagering_complete == 1 &&
                            item?.is_claimed == 0 ? (
                              <button>Claim</button>
                            ) : (
                              <span className="text-text_Success">
                                Already Claimed
                              </span>
                            )}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center w-full pt-20">
                <h2 className="text-base ">No bonus statement yet!</h2>
              </div>
            )}
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default BonusStatement;
