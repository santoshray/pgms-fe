import React from 'react';

const withViewOnly = (Component,isReadOnly) => {
    class withViewOnly extends React.Component {
        render(){
            return (
                <Component {...this.props} isReadOnly={isReadOnly}/>
            )
        }
    }
    return withViewOnly;
}

export default withViewOnly;