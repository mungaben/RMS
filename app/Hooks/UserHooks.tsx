import useSWR from "swr";

// fetcher

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const { isLoading, data, error, mutate } = useSWR("/api/Users", fetcher);

export { isLoading, data, error, mutate };
