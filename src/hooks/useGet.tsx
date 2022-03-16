export default function useGet () {

    const makeGet = async (args: any) => {
        const {url} = args;
                
        const options: Object = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const fetcher = async (url: any, options: any) => {
            const response = await fetch(url, options);
            const payload = await response.json();
            return payload;
        }

        const value = await fetcher(url, options);
        return value;
    }

    return makeGet;    
}

