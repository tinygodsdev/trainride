import React from "react";

export default function SurveyItem({ title, value }) {
    return <p className="mb-2">
        <span className='font-bold'>{title}:</span>&nbsp;
        <span>{value}</span>
    </p>;
}
