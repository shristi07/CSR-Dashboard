import React, { useCallback, useEffect, useState } from "react";

const TableWrapper = ({table})=>{
return(
<table>
<tr>
  {table.headers.map(value=><th>{value}</th>)}
</tr>
{table.data.map((val, key) => {
  return (
    <tr key={key}>
      <td>{val.category}</td>
      <td>{val.requested_on}</td>
      <td>{val.status}</td>
      <td>{val.score_earned}</td> 
      <td>{val.comment}</td> 
      <td>{val.action}</td> 
    </tr>
  )
})}
</table>
)
}
export default TableWrapper

