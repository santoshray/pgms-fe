import React from 'react';
import Labels from '../../constants/Labels';
import ResidentService from '../../services/ResidentService';
import JSONUtil from '../../util/JSONUtil';
import { withRouter } from 'react-router-dom';
import ResidentProfileView from './ResidentProfileView';
import ResidentProfileConfig from './ResidentProfileConfig';

class ResidentProfile extends React.Component {
    constructor(props) {
        super(props);        

        this.state={
            resident:{},
            formtype:Labels.RESIDENT_FORMS.BASIC_INFO,
            formCompleteStatus:Labels.RESIDENT_FORM_STATUS.INCOMPLETE,
        }
    }

    /* Forms will be displayed in the order of navTitles defined in ResidentFormNavBar.js 
     const navTitles = ["Basic Info","Mail Address","Permanent Address","Company Info",
    "Identity Proof","Emergency Contact","Preference"]; */


    residentProfileView(){
        const resident  = ResidentProfileConfig;
        return(<ResidentProfileView submitHandler={null}
            resident = {resident} highlight={Labels.RESIDENT_FORMS.PREFERENCES} />)
   }


    render() {
            return (<>{this.residentProfileView()}</>)
        /*TO DO : If Labels.RESIDENT_FORM_STATUS.COMPLETE  then show Message As Registration Complete */
    }

}

//export default withRouter(withViewOnly(UserForm,!RBACCondition.User.canEdit()));
export default withRouter(ResidentProfile);