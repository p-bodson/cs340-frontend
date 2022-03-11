import {useRouter} from 'next/router';


export default function useSubmit(destination: string, 
  someFunction: Function, 
  someParameters: Object) {
    // destination: string of route to move to after submission
    // someFunction: some function to perform on a submit button click
    // someParameters: object of someFunction arguments

    const router = useRouter();

    return async (e:any) => {
      e.preventDefault()
      await someFunction(someParameters);
      router.push(destination);
      if (Object.keys(someParameters).length == 2){
        location.reload();
      }
    }
  }

