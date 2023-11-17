import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Link, Image, Card, ScrollShadow, Tooltip } from "@nextui-org/react";
import TranslationTooltip from "./TranslationTooltip";

export default function PopoverCard({ triggerText, data, theme }) {
  return (
    <Popover backdrop={"blur"} className={`${theme} text-foreground bg-background`} >
      <PopoverTrigger>
        <Link className="font-bold text-xl font-raleway">{triggerText}</Link>
      </PopoverTrigger>
      <PopoverContent className="px-5 pt-6 pb-3" >
        <ScrollShadow hideScrollBar size={5} className="w-[450px] h-[500px] mb-2">
          {data.title && (
            <h3 className='font-bold text-xl font-gabriela text-center'>
              {data.title}
              {data.nomumu && (<TranslationTooltip data={data.nomumu} />)}
            </h3>
          )}
          {data.subtitle && <p className="text-sm mb-4 text-center">{data.subtitle}</p>}
          {data.imageUrl && <Image className="object-cover mb-5 rounded-xl" src={data.imageUrl} />}
          {data.content && <div className="mb-8 font-raleway text-lg">{data.content}</div>}
          {data.footerText && <h3 className='font-marck text-center text-xl'>{data.footerText}</h3>}
        </ScrollShadow>
        {data.source && (
          <div className="font-raleway mt-2 mb-0">
            <div className='text-sm text-center'>
              {data.source.title && <span>
                <span className="font-bold">
                  {data.source.title}
                  {data.source.author && <span className="text-sm">, {data.source.author}</span>}
                </span>
              </span>}
              {data.source.url && <p><Link className="text-sm" isExternal showAnchorIcon href={data.source.url}>Подробнее</Link></p>}
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}