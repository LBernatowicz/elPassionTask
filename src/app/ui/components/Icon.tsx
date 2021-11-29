import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconStyle } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
    name: IconProp ;
    size?: 18 | 20 | 22 | 26 | 30 | 34 | 38 | 42 | 46 | 50;
    color: string;
    style?: FontAwesomeIconStyle;
};

const Icon = ({name, size = 20, color, style}: Props) => {
    return <FontAwesomeIcon icon={name} size={size} color={color} style={style}/>
}
export default Icon;