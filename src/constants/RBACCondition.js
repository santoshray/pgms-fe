import AuthUtil from '../util/AuthUtil';

const userEditRoles = ['PG_MANAGER', 'PG_OWNER'];
const roomEditRoles = ['PG_MANAGER', 'PG_OWNER', 'PG_CARETAKER'];

const User = {
    canEdit: function () {
        debugger;
        const userRole = AuthUtil.getRole();
        if (userEditRoles.indexOf(userRole) > -1)
            return true;
        return false;
    }
}

const Room = {
    canEdit: function () {
        debugger;
        const userRole = AuthUtil.getRole();
        if (roomEditRoles.indexOf(userRole) > -1)
            return true;
        return false;
    }
}

export default {
    User:User,
    Room:Room
}