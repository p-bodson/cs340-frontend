import {useRouter} from 'next/router';


export default function useSubmit(destination: string, 
  someFunction: Function, 
  someParameters: Object) {
    // destination: string of route to move to after submission
    // someFunction: some function to perform on a submit button click
    // someParameters: object of someFunction arguments

    const router = useRouter();

    return (e:any) => {
      e.preventDefault()
      someFunction(someParameters);
      router.push(destination)
    }
  }

