

import { BILL_COLLECTION } from "../icon/dimaIcon/ICON_COLLECTION";
import type { IBillIconProps, TBillsIconName } from "../type";

interface IProps extends IBillIconProps {
    name: TBillsIconName;
}

const DimaBillIcon: React.FC<IProps> = (props) => {
    const { name, ...rest } = props;
    let ICON = BILL_COLLECTION[name as TBillsIconName]
    if (!ICON) {
        return null
    }
    return <ICON  {...rest} />;
}

export default DimaBillIcon