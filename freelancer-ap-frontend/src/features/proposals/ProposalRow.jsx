import Table from "../../ui/Table";

import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

function ProposalRow({index,proposal}) {
    const { status, description, duration, price } = proposal;
    console.log(proposal);
    return ( 
        <Table.Row>
      
        <td>{index + 1}</td>
        <td>{truncateText(description, 60)}</td>
        <td> {duration}</td>
        <td>{toPersianNumbersWithComma(price)}</td>
       
        <td>...</td>
     
   
      </Table.Row>
     );
}

export default ProposalRow;