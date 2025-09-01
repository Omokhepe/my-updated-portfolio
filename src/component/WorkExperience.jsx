import React, {useState} from 'react';
import Collapsible from "react-collapsible";
import {ChevronDown, ChevronUp} from "lucide-react";
import './WorkWxperien.css'

const WorkExperience = ({job}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpening={() => setIsOpen(true)}
            onClosing={() => setIsOpen(false)}
            trigger={
                <div className="job-header">
                    <div className="job-header-left">

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
                </div>
            }
        >
            <ul className="job-highlights textPreset1Med">
                {job.highlights.map((point) => (
                    <li key={point.id}>{point.text}</li>
                ))}
            </ul>
        </Collapsible>
    );
};

export default WorkExperience;