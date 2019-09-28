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
//       const resident = await ResidentService.updateResident(data);
//        this.props.history.push(Routes.RESIDENTS);
        this.setState({formtype:Labels.RESIDENT_FORMS.MAIL_ADDRESS});
        // set the Resdident ID
        //this.setState({residentId:response.data.residentId});
    }

    async handleMailAddresForm(event){
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        console.log(data);
//       const resident = await ResidentService.registerResident(data);
//        this.props.history.push(Routes.RESIDENTS);
        this.setState({formtype:Labels.RESIDENT_FORMS.PERMANENT_ADDRESS});
    }

    async handlePermanentAddresForm(event){
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        console.log(data);
//       const resident = await ResidentService.registerResident(data);
//       this.props.history.push(Routes.RESIDENTS);

        this.setState({formtype:Labels.RESIDENT_FORMS.COMPANY_INFO});
    }


    async handleCompanyInfoForm(event){
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        console.log(data);
 //       const resident = await ResidentService.registerResident(data);
//        this.props.history.push(Routes.RESIDENTS);
        this.setState({formtype:Labels.RESIDENT_FORMS.IDENTITY_PROOF});
    }



    async handleIdForm(event){
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        console.log(data);
 //       const resident = await ResidentService.updateResident(data);
//        this.props.history.push(Routes.RESIDENTS);
        this.setState({formtype:Labels.RESIDENT_FORMS.EMERGENCY_CONTACT});
        // set the Resdident ID
        //this.setState({residentId:response.data.residentId});

    }

    async handleEmergencyForm(event){
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        console.log(data);
 //       const resident = await ResidentService.registerResident(data);
//        this.props.history.push(Routes.RESIDENTS);
        this.setState({formtype:Labels.RESIDENT_FORMS.PREFERENCES});

    }

    async handlePreferenceForm(event){
        event.preventDefault();
        const data = JSONUtil.formToJson(event.target);
        console.log(data);
 //       const resident = await ResidentService.registerResident(data);
//        this.props.history.push(Routes.RESIDENTS);
        this.setState({formCompleteStatus:Labels.RESIDENT_FORM_STATUS.COMPLETE});

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
        else
            return(<>{this.residentBasicInfoview()}</>) 
        
        /*TO DO : If Labels.RESIDENT_FORM_STATUS.COMPLETE  then show Message As Registration Complete */
        

    }

}

//export default withRouter(withViewOnly(UserForm,!RBACCondition.User.canEdit()));
export default withRouter(CreateResidentForm);