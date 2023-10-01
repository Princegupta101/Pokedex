function useDebounce(cb, delay=2000){
    let timerId;
    return(...argus)=>{
        // console.log(...argus)
        clearTimeout(timerId)
        timerId=setTimeout(()=>{
            cb(...argus)
        },delay)
    }
}
export default useDebounce;