import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosInstance } from "../lib/AxiosInstance";

/* go casino api(aura) */
const useCardGames = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["cardGames"],

    queryFn: async () => {
      const res = await AxiosInstance.post(API.auraWolf, {
        gameList: "All",
        product: "All",
        isHome: true,
      });
      const result = res?.data;
      if (result?.status === "success") {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useCardGames;
