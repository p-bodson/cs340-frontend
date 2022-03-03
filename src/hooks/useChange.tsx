export default function useChange(state: Object, setState: Function) {

    function handleChange(e: any) {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
    
        setState({
            ...state,
            [name]: value
        })
    }

    return handleChange;
}
