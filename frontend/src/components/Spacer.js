import React from 'react';
import { View } from 'react-native';

export default Spacer = ({ size , spacerColor, spacerType}) =>{
    let style = {}
    if (spacerType == "columnSpacer") {
    style = {
        height: size
    }
}

    if (spacerType == "rowSpacer") {
    style = {
        width: size
    }
}
    return (
        <View style={[style, {color: spacerColor}]}></View>
    )
};
