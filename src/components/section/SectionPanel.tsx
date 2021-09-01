import React from "react"
import { Job } from "../../common/types"

export const SectionPanel:React.FC<{data: Job}> = (props) => {
  return (
    <div className="col animated fadeIn">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary border-primary">
                <h6>{props.data.name}</h6>
            </div>
            <div className="card-body">
                <p><b>Contact ID: </b><span>{props.data.contactId}</span></p>
                <p><b>Start: </b><span>{props.data.start.split("T").join(" ").slice(0, -1)}</span></p>
                <p><b>End: </b>{props.data.end.split("T").join(" ").slice(0, -1)}</p>
            </div>
        </div>
    </div>
  )
}
