const IdFormConfig = {
    type:{
        name:"IdentificationType",
        title: "Identification Type",
        default:"",
        placeholder:"Enter the type of Identification Document",
        hide:false,
        readonly:false,
        options:["PASSPORT","ADHAR CARD","DRIVING LICENSE","OTHERS"],
        comment:""
    },
    number:{
        name:"number",
        title: "Identity Proof Document Number",
        default:"",
        placeholder:"Enter Document Number",
        hide:false,
        readonly:false,
        comment:""
    },
    file:{
        name:"identificationDocument",
        title: "Id Proof Document",
        default:"",
        placeholder:"upload Document for ID proof ",
        hide:false,
        readonly:false,
        comment:""
    }
}
export default IdFormConfig;