import React, { useState } from "react"
import { IDataService, Job } from '../common/types'

import { SectionGroup } from "../components/section/SectionGroup"
import { DataService } from "../service/DataService"

import "./QuestionOne.css"

export const QuestionOne: React.FC<{ service: IDataService }> = () => {
  const [getData, setData] = useState<Pick<Job, "name" | "start" | "end">[]>([]);

  const InputLogic = (val:any) => {
    if(val.target.value.length >= 3) {
      DataService.getJobsWithSearchTerm(val.target.value).then((data) => { 
        setData(data)
      });
    }
    else {
      setData([])
    }
  }

  return (
    <div>
      <b>Search:</b>
      <input type="text" name="Search" aria-label="Search" onChange={InputLogic} />
      <SectionGroup data={getData} />
    </div>
  )
}
