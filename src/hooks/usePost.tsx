export default function usePost () {

    const makePost = async (args: any) => {
        const {url, data} = args;
                
        const options: Object = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        const fetcher = async (url: any, options: any) => {
            const response = await fetch(url, options);
            const payload = await response.json();
            return payload;
        }

        await fetcher(url, options);
    }

    return makePost;    
}

