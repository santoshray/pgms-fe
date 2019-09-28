
const FormLabels={

    User:{
        firstName:'First Name',
        midddleName:'Middle Name',
        lastName:'Last Name',
        email:'Email address',
        mobilePhoneNumber:'Mobile number',
        role:'Role'
    },
    Room:{
        number:"Number",
        sharingCapacity:"Sharing Capacity",
        occupied:"Occupied",
        tv:'TV',
        attachedBathroom:'Attached Bathroom',
        geyser:'Geyser',
        bed:'Bed',
        mattress:'Mattress',
        almirah:'Almirah'
    },   

    Resident:{
        basicInfo:{
            firstName:'First Name',
            midddleName:'Middle Name',
            lastName:'Last Name',
            email:'Email address',
            mobilePhoneNumber:'Mobile number',
            role:'Role'
        },
        identityInfo:{
            idType:'Id Verification Document Type',
            idNumber:'Id Document Number',
            idFile:'Picture of Id '
        },
//        mailingAddress: Address,
//        permanentAddress:Address,
        companyInfo:{
            name:'Company /Institution Name',
            profession:' Profession ',
//            companyAddress:Address,
            phone:"Phone number"
        },
        enrollmentInfo:{
            startdate:"Start Date",
            enddate: "End Date",
            advanceAmount:"Advance payment Amount",
            roomNumber: "Room Number",
            foodService: " Veg / Non-Veg / None",
            comments: " Special Comments"
        }
    }
}

export default FormLabels;