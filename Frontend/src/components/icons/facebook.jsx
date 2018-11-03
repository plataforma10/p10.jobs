import React, { PureComponent } from 'react';
import CustomIcon from './socialIcon';
import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
    icon:{
        color: "#3B5998"
    }
}

@withStyles(styles)
class Facebook extends PureComponent {
    render() {
        const { className, classes, ...rest } = this.props;

        return (
            <CustomIcon className={`${classes.icon} ${className}`} {...rest}>
                <svg viewBox="0 0 24 24">
                    <rect x="5" y="5" fill="#FFF" width="14.3" height="15.9"/>
                    <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z"/>
                </svg>
            </CustomIcon>
        )
    }
}

export default Facebook;