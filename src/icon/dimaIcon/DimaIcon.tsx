
import type { IIconProps, TIconName } from "../type"
import { ICON_COLLECTION } from "./ICON_COLLECTION";

interface IProps extends IIconProps{
    name:TIconName;
}

const DimaIcon:React.FC<IProps> = (props)=>{
    const {name,...rest} = props;
    const ICON = ICON_COLLECTION[name];

    return <ICON {...rest} />;
}

export default DimaIcon