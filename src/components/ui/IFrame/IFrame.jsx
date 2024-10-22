import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useIFrame from "../../../hooks/useIFrame";

const IFrameScore = ({ score, betType, setBetType }) => {
  const { eventId, eventTypeId } = useParams();
  const { iFrameUrl, refetchIFrameUrl } = useIFrame(eventTypeId, eventId);
  const [iframeVideo, setIframeVideo] = useState("");

  useEffect(() => {
    if (betType === "tracker") {
      setIframeVideo(score?.tracker);
    } else if (betType === "video") {
      setIframeVideo(iFrameUrl?.url);
    } else {
      setIframeVideo("");
    }
  }, [betType, score, iFrameUrl]);

  useEffect(() => {
    refetchIFrameUrl();
  }, [eventId, eventTypeId, refetchIFrameUrl]);

  useEffect(() => {
    if (betType === "video") {
      if (!score?.hasVideo) {
        setBetType("live");
      }
    }
  }, [eventId, eventTypeId, score, betType, setBetType]);

  return (
    <>
      {betType === "video" || betType === "tracker" ? (
        <div className=" col-span-1 ">
          <div className=" relative w-full h-auto overflow-hidden bg-transparent ">
            <div
              draggable="false"
              className="
                      w-full flex items-center justify-center overflow-y-auto bg-transparent relative z-10 transition-all ease-in-out duration-100"
            >
              <div
                onClick={() => setBetType("live")}
                className="absolute top-1 right-1 z-10 active:scale-90 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <svg
                  height="24"
                  width="24"
                  fill="var(--color-quaternary)"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fad"
                  data-icon="circle-xmark"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g className="fa-duotone-group">
                    <path
                      fill="currentColor"
                      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                    ></path>
                    <path
                      fill="white"
                      d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="w-full overflow-hidden h-[125px]">
                {score && score?.tracker !== null && betType === "tracker" && (
                  <iframe
                    id="videoComponent"
                    className="w-full h-auto relative overflow-hidden   bg-transparent"
                    src={iframeVideo}
                    width="100%"
                    allowfullscreen=""
                  ></iframe>
                )}
              </div>
              {score &&
                iFrameUrl?.url &&
                betType === "video" &&
                score?.hasVideo && (
                  <iframe
                    id="videoComponent"
                    className="w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px] relative overflow-hidden h-[55vw] md:h-[58vw] bg-transparent"
                    src={iframeVideo}
                    width="100%"
                    allowfullscreen=""
                  ></iframe>
                )}
            </div>
            {/* <div className=" absolute top-0 w-full max-h-[309px] sm:max-h-[144px] lg:max-h-[309px]  overflow-hidden h-[55vw] md:h-[58vw] bg-transparent z-0"></div> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default IFrameScore;
