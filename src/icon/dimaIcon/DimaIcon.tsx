
import type { IIconProps, TIconName } from "../../type"
import { ICON_COLLECTION } from "./ICON_COLLECTION";

interface IProps extends IIconProps {
    name: TIconName;
}

const DimaIcon: React.FC<IProps> = (props) => {
    const { name, ...rest } = props;
    let ICON = ICON_COLLECTION[name as TIconName]
    // if (!ICON) {
    //     ICON = BILL_COLLECTION[name as TBillsIconName]
    // }
    if (!ICON) {
        return null
    }
    return <ICON {...rest} />;
}

export default DimaIcon