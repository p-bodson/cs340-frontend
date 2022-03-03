export default function usePost () {

    const makePost = (args: any) => {

        const {url, data} = args;
                
        const options: Object = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        console.log(data);

        const fetcher = async (url: any, options: any) => {
            const response = await fetch(url, options);
            const payload = await response.json();
            return payload;
        }

        fetcher(url, options);
    }

    return makePost;    
}

