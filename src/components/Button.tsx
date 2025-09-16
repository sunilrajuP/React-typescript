import { ComponentPropsWithoutRef } from "react";

type ButtonProps= ComponentPropsWithoutRef<'button'> & {
    href?:never
};
type AnchorProps= ComponentPropsWithoutRef<'a'>&{
    href?:string
}
function isAnchor(props:ButtonProps|AnchorProps):props is AnchorProps{
    return 'href' in props;
}
export default function Button(props:ButtonProps|AnchorProps){

   if(isAnchor(props)){
    return <a {...props} className="button"></a>
   }
   return <button {...props} className="button"></button>


}