const handleInputChange = (el, setState, state) => {
    setState({ ...state, [el.target.name]: el.target.value });
};

export default handleInputChange;
