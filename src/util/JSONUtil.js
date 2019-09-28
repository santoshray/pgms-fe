const formToJson=(formData)=>{
    return JSON.stringify(Object.fromEntries(new FormData(formData)));
}

export default {
    formToJson:formToJson
}