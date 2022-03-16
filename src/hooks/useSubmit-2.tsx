
export default function useSubmit( 
  someFunction: Function, 
  someParameters: Object) {
    // someFunction: some function to perform on a submit button click
    // someParameters: object of someFunction arguments
    return async (e:any) => {
      e.preventDefault()
      await someFunction(someParameters);
    }
  }