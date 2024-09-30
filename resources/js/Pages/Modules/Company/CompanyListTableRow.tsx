import { LabelHTMLAttributes } from 'react';

export default function CompanyListTableRow ({..props}){
    const td = props.td;
    console.log(td);
    return(
        <div {...props} >
            {td}
        </div>
    )
}