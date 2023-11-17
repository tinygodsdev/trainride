import { Tooltip } from '@nextui-org/react';
import React from 'react';
import { MdOutlineTranslate } from "react-icons/md";

function TranslationTooltip({ data }) {
  return (
    <Tooltip className="dark" placement="right" content={
      <div className="px-1 py-2">
        <div className="font-nomumu text-small font-bold">{data.text}</div>
        <div className="font-raleway text-tiny">{data.transcription}</div>
        <div className="font-raleway text-tiny italic">{data.translation}</div>
      </div>
    }>
      <span>
        &nbsp;<MdOutlineTranslate className="inline-block" />
      </span>
    </Tooltip>
  );
}

export default TranslationTooltip;
