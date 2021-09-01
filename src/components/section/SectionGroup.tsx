import React from "react"
import { Job } from "../../common/types"
import { SectionPanel } from "./SectionPanel"

export const SectionGroup:React.FC<{data: Pick<Job, "name" | "start" | "end">[]}> = (props) =>  {
  return (
  <div className="container py-3">
    {props.data.map((sample:any, index:any) => {
      return <SectionPanel key={index} data={sample} />
    })}
  </div>
  )
}
