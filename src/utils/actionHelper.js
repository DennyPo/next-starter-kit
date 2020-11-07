

const actionHelper = (actionName, success, failure) => {
    if (success) return `${actionName}_SUCCESS`;
    else if (failure) return `${actionName}_FAILURE`;

    return `${actionName}_REQUEST`;
}

export default actionHelper;
