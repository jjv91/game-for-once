import { useState, useEffect } from "react";
import axios, { CancelTokenSource } from "axios";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

type NewType = Platform;

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    let cancelTokenSource: CancelTokenSource = axios.CancelToken.source();
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { cancelToken: cancelTokenSource.token })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setLoading(false);
      });

    // Clean up function
    return () => {
      cancelTokenSource.cancel();
    };
  }, []);

  return { games, error, isLoading };
};

export default useGames;
