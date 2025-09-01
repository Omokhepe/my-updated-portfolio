import React, {useState} from 'react';
import * as Collapsible from "@radix-ui/react-collapsible";
import {ChevronDown, ChevronUp} from "lucide-react";
import './WorkWxperien.css'
// import Collapsible from "react-collapsible";

const WorkExperience = ({job}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <Collapsible
        //     open={isOpen}
        //     onOpening={() => setIsOpen(true)}
        //     onClosing={() => setIsOpen(false)}
        //     trigger={
        //         <div className="job-header">
        //             <div className="job-header-left">
        //
        //                 <h3 className="job-title textPresetBold">
        //                     {job.role} | {job.company}
        //                 </h3>
        //                 {
        //                     isOpen ? (<ChevronUp/>): <ChevronDown/>
        //                 }
        //             </div>
        //             <span className="job-meta textPreset1Med">
        //     {job.period} • {job.location}
        //   </span>
        //         </div>
        //     }
        // >
        //     <ul className="job-highlights textPreset1Med">
        //         {job.highlights.map((point) => (
        //             <li key={point.id}>{point.text}</li>
        //         ))}
        //     </ul>
        // </Collapsible>

        <Collapsible.Root open={isOpen} onOpenChange={setIsOpen} className="job">
            <Collapsible.Trigger className="job-header">
                <div className="job-header-left">
                    {/*<ChevronDown className={`chevron ${open ? "rotate" : ""}`} />*/}
                    <h3 className="job-title textPresetBold">
                        {job.role} | {job.company}
                    </h3>
                    {
                        isOpen ? (<ChevronUp/>): <ChevronDown/>
                    }
                </div>
                <span className="job-meta textPreset1Med">
          {job.period} • {job.location}
        </span>
            </Collapsible.Trigger>

            <Collapsible.Content className="job-content">
                <ul className="job-highlights textPreset1Med">
                    {job.highlights.map((point) => (
                        <li key={point.id}>{point.text}</li>
                    ))}
                </ul>
            </Collapsible.Content>
        </Collapsible.Root>
    );
};

export default WorkExperience;