import useSWR from 'swr';

export default function useData (url: string) {

    const FETCH_OPTIONS: Object = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      }
    };

    const fetcher = async (url: any, options: any) => {
        const response = await fetch(url, options)
        return await response.json();
    }

    const {data, error } = useSWR([url, 
        FETCH_OPTIONS], fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}