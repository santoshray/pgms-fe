import React from 'react';
import Labels from '../../constants/Labels';
import ResidentService from '../../services/ResidentService';
import JSONUtil from '../../util/JSONUtil';
import { withRouter } from 'react-router-dom';
import BasicInfoForm from './BasicInfoForm';
import ResidentFormConfig from './ResidentFormConfig';
import AddressFormConfig from './AddressFormConfig';
import AddressForm from './AddressForm';
import IdFormConfig from './IdFormConfig';
import IdForm from './IdForm';
import EmergencyContactForm from './EmergencyContactForm';
import CompanyInfoForm from './CompanyInfoForm';
import PreferenceFormConfig from './PreferenceFormConfig';
import PreferenceForm from './PreferenceForm';

class CreateResidentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleBasicInfoForm = this.handleBasicInfoForm.bind(this);
        this.residentBasicInfoview = this.residentBasicInfoview.bind(this);
        this.handleMailAddresForm = this.handleMailAddresForm.bind(this);
        this.handlePermanentAddresForm = this.handlePermanentAddresForm.bind(this);
        this.handleCompanyInfoForm = this.handleCompanyInfoForm.bind(this);
        this.handleIdForm = this.handleIdForm.bind(this);
        this.handleEmergencyForm = this.handleEmergencyForm.bind(this);
        this.handlePreferenceForm = this.handlePreferenceForm.bind(this);
        
        this.readOnlyCondition=this.readOnlyCondition.bind(this);

        this.state={
            resident:{},
            formtype:Labels.RESIDENT_FORMS.BASIC_INFO,
            formCompleteStatus:Labels.RESIDENT_FORM_STATUS.INCOMPLETE,
            user:{},
        }
    }


    readOnlyCondition(){
        return true;
    }

    componentWillMount(){
        if (this.readOnlyCondition())
           this.setState({...this.state,isReadOnly:true}) 
    }
    async componentDidMount(){
        if (!this.props.location.state)
            return;
        const resident=this.props.location.state.record;
        
        if (resident.residentId) {
            const response =await ResidentService.getResidentProfile(resident.residentId);
            debugger;
            this.setState({resident:response.data});
        }
    }
    /* Forms will be displayed in the order of navTitles defined in ResidentFormNavBar.js 
     const navTitles = ["Basic Info","Mail Address","Permanent Address","Company Info",
    "Identity Proof","Emergency Contact","Preference"]; */

    async handleBasicInfoForm(event) {
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        console.log(data);
        const resident = await ResidentService.registerResident(data);
       
        console.log(resident);
//        this.props.history.push(Routes.RESIDENTS);
//        this.setState({formtype:Labels.RESIDENT_FORMS.MAIL_ADDRESS});
        this.setState({formtype:Labels.RESIDENT_FORMS.COMPANY_INFO});
        

        // set the basicInfo
        this.setState({...this.state,user:{userId:resident.data.userId,pgId:resident.data.pgId}});
    }

    async handleMailAddresForm(event){
        event.preventDefault();
        let  data = JSONUtil.formToJson(event.target);
        let  payload = {};
        console.log(data);
        data = JSON.parse(data);
        payload.mailAddress = data;
 
        payload.userId = this.state.user.userId;
        payload.pgId = this.state.user.pgId;
        data = JSON.stringify(payload);
        const resident = await ResidentService.updateResidentInfo(data);

        this.setState({formtype:Labels.RESIDENT_FORMS.PERMANENT_ADDRESS});
    }

    async handlePermanentAddresForm(event){
        event.preventDefault();
        let  data = JSONUtil.formToJson(event.target);
        let  payload = {};
        console.log(data);
        data = JSON.parse(data);
        payload.permanentAddress = data;
 
        payload.userId = this.state.user.userId;
        payload.pgId = this.state.user.pgId;
        data = JSON.stringify(payload);
        const resident = await ResidentService.updateResidentInfo(data);

        this.setState({formtype:Labels.RESIDENT_FORMS.COMPANY_INFO});
    }


    async handleCompanyInfoForm(event){
        event.preventDefault();
        let  data = JSONUtil.formToJson(event.target);
        let  payload = {};
        let address ={};
        let companyInfo ={};
        data = JSON.parse(data);
        address.line1   = data.line1;
        address.line2   = data.line2;
        address.city    = data.city;
        address.state   = data.state;
        address.country = data.country;
        companyInfo.name = data.name; 
        companyInfo.companyPhoneNumber = data.companyPhoneNumber;
        companyInfo.address = address;
        payload.companyInfo = companyInfo;
        payload.userId = this.state.user.userId;
        payload.pgId = this.state.user.pgId;
        data = {};
        data = JSON.stringify(payload);
        console.log(data);
        debugger;
        const resident = await ResidentService.updateResidentInfo(data);
//        this.props.history.push(Routes.RESIDENTS);
        this.setState({formtype:Labels.RESIDENT_FORMS.IDENTITY_PROOF});
    }



    async handleIdForm(event){
        event.preventDefault();
        let  data = JSONUtil.formToJson(event.target);
        let  payload = {};
        console.log(data);
        data = JSON.parse(data);
        payload.identification = data;
 
        payload.userId = this.state.user.userId;
        payload.pgId = this.state.user.pgId;
        data = JSON.stringify(payload);
        const resident = await ResidentService.updateResidentInfo(data);
        this.setState({formtype:Labels.RESIDENT_FORMS.EMERGENCY_CONTACT});

    }

    async handleEmergencyForm(event){
        event.preventDefault();
        let  data = JSONUtil.formToJson(event.target);
        let  payload = {};
        let address ={};
        let emergencyContact = {}
        console.log(data);
        data = JSON.parse(data);
        payload.emergencyContact = data;
        address.line1   = data.line1;
        address.line2   = data.line2;
        address.city    = data.city;
        address.state   = data.state;
        address.country = data.country;
        
        emergencyContact.firstName = data.firstName;
        emergencyContact.middleName = data.middleName;
        emergencyContact.lastName = data.lastName;
        emergencyContact.address = address;
        emergencyContact.homePhoneNumber = "11111111";
        emergencyContact.mobilePhoneNumber = "888888888";
        payload.emergencyContact = emergencyContact;
        
 
        payload.userId = this.state.user.userId;
        payload.pgId = this.state.user.pgId;
        
        data = JSON.stringify(payload);
        debugger;
        const resident = await ResidentService.updateResidentInfo(data);
        this.setState({formtype:Labels.RESIDENT_FORMS.PREFERENCES});

    }

    async handlePreferenceForm(event){
        event.preventDefault();
        let  data = JSONUtil.formToJson(event.target);
        let  payload = {};
        console.log(data);
        data = JSON.parse(data);
        payload.preference = data;
 
        payload.userId = this.state.user.userId;
        payload.pgId = this.state.user.pgId;
        data = JSON.stringify(payload);
        debugger;
        const resident = await ResidentService.updateResidentInfo(data);
        this.setState({formCompleteStatus:Labels.RESIDENT_FORM_STATUS.COMPLETE});
        this.setState({formtype:Labels.RESIDENT_FORMS.REGISTRATION_COMPLETE});

    }
    


    residentBasicInfoview() {

        const basicInfo = ResidentFormConfig.basicInfo;
        return (
            <BasicInfoForm submitHandler = {this.handleBasicInfoForm}
              basicInfo = {basicInfo} highlight={Labels.RESIDENT_FORMS.BASIC_INFO} />
        )
    }

    residentMailingAddressFormView(){
        const address = AddressFormConfig.address;
        return(<AddressForm submitHandler = {this.handleMailAddresForm}
              address = {address} highlight={Labels.RESIDENT_FORMS.MAIL_ADDRESS} />)
    }

    residentPermanentAddressFormView(){
        const address = AddressFormConfig.address;
        return(<AddressForm submitHandler = {this.handlePermanentAddresForm}
              address = {address} highlight={Labels.RESIDENT_FORMS.PERMANENT_ADDRESS} />)
    }

    residentCompanyInfoFormView(){
        const address = AddressFormConfig.address;
        return(<CompanyInfoForm submitHandler = {this.handleCompanyInfoForm}
              address = {address} highlight={Labels.RESIDENT_FORMS.COMPANY_INFO} />)

    }


    residentIdentityFormView(){
        const idinfo = IdFormConfig;
        return(<IdForm submitHandler={this.handleIdForm} idinfo ={idinfo} 
            highlight={Labels.RESIDENT_FORMS.IDENTITY_PROOF} />)
    }

    residentEmergencyFormView(){
        const basicInfo = ResidentFormConfig.basicInfo;
        const address = AddressFormConfig.address;
        return(<EmergencyContactForm submitHandler={this.handleEmergencyForm}
             basicInfo = {basicInfo} address = {address} highlight={Labels.RESIDENT_FORMS.EMERGENCY_CONTACT} />)
    }

    residentPreferenceFormView(){
        const prefs = PreferenceFormConfig;
        return(<PreferenceForm submitHandler={this.handlePreferenceForm}
            prefs = {prefs} highlight={Labels.RESIDENT_FORMS.PREFERENCES} />)
   }
    
    residentRegistrationCompleteView(){
    	return(<><h1>Registration Complete </h1> </>)
    }


    render() {
        if (this.state.formtype === Labels.RESIDENT_FORMS.BASIC_INFO)
            return (<>{this.residentBasicInfoview()}</>)
        else if (this.state.formtype === Labels.RESIDENT_FORMS.MAIL_ADDRESS)
            return(<>{this.residentMailingAddressFormView()} </>)
        else if (this.state.formtype === Labels.RESIDENT_FORMS.PERMANENT_ADDRESS)
            return(<>{this.residentPermanentAddressFormView()} </>)
        else if (this.state.formtype === Labels.RESIDENT_FORMS.COMPANY_INFO)
            return(<>{this.residentCompanyInfoFormView()} </>)
        else if (this.state.formtype === Labels.RESIDENT_FORMS.IDENTITY_PROOF)
            return(<>{this.residentIdentityFormView()} </>)
        else if (this.state.formtype === Labels.RESIDENT_FORMS.EMERGENCY_CONTACT)
            return(<>{this.residentEmergencyFormView()} </>)
        else if (this.state.formtype === Labels.RESIDENT_FORMS.PREFERENCES)
            return(<>{this.residentPreferenceFormView()} </>)
        else if (this.state.formtype === Labels.RESIDENT_FORMS.REGISTRATION_COMPLETE)
            return(<>{this.residentRegistrationCompleteView()} </>)

            
        else
            return(<>{this.residentBasicInfoview()}</>) 
        
        /*TO DO : If Labels.RESIDENT_FORM_STATUS.COMPLETE  then show Message As Registration Complete */
        

    }

}

//export default withRouter(withViewOnly(UserForm,!RBACCondition.User.canEdit()));
export default withRouter(CreateResidentForm);