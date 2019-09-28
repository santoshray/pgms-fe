const ResidentFormConfig ={
     navTitles: ["Basic Info","Mail Address","Permanent Address","Company Info",
    "Identity Proof","Emergency Contact","Preference"],

    basicInfo:{
        firstName:{
            name:"firstName",
            title:"First Name",
            default:"",
            placeholder:"Enter First Name",
            hide:"false",
            readonly:false,
            comment:""
        },
        middleName:{
            name:"middleName",
            title:"Middle Name",
            default:"",
            placeholder:"Enter Middle Name",
            hide:"false",
            readonly:false,
            comment:""
        },
        lastName:{
            name:"lastName",
            title:"Last Name",
            default:"",
            placeholder:"Enter Last Name",
            hide:"false",
            readonly:false,
            comment:""
        },
        email:{
            name:"email",
            title:"Email Address",
            default:"",
            placeholder:"Enter Email Address ",
            hide:"false",
            readonly:false,
            comment:""
        },  
        mobileNumber:{
            name:"mobile",
            title:"Mobile Number",
            default:"",
            placeholder:"Enter Mobile Number  ",
            hide:"false",
            readonly:false,
            comment:""
        },
        role:{
            name:"roleCode",
            title:"Role",
            default:"",
            placeholder:"Enter Role ",
            hide:"true",
            readonly:"false",
            comment:""
        }
    }


}

export default ResidentFormConfig;