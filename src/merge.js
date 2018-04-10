
const merge = (a, b) => {
    console.log(a);
    return{
        ...a,
        ...b
    }
};
export default merge;