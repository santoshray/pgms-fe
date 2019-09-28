const AddressFormConfig = {
    address:{
        line1:{
            name:"line1",
            title:" Address Line 1",
            default:"",
            placeholder:" house # , street name",
            hide:false,
            readonly:false,
            comment:"" 
        },
        line2:{
            name:"line2",
            title:" Address Line 2",
            default:"",
            placeholder:" other details",
            hide:false,
            readonly:false,
            comment:"" 
        },
        city:{
            name:"city",
            title:"City",
            default:"",
            placeholder:" Enter City",
            hide:false,
            readonly:false,
            comment:"" 
        },
        state:{
            name:"state",
            title:"State",
            default:"",
            placeholder:" Enter State",
            hide:false,
            readonly:false,
            comment:"" 
        },
        country:{
            name:"country",
            title:"Country",
            default:"",
            placeholder:" Enter Country",
            hide:false,
            readonly:false,
            comment:"" 
        },
        pincode:{
            name:"pincode",
            title:"PIN / ZIP code",
            default:"",
            placeholder:" Enter PIN / ZIP code ",
            hide:false,
            readonly:false,
            comment:"" 
        }
    }
}

export default AddressFormConfig;
