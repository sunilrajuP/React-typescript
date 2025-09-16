import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

//polymorphic component is component that wraps any kinds of componenets (we don't in advance that what kind of component we will wrap)
type ContainerProps<T extends ElementType>={
 as?:T     // ElementType should be valid identifier of a component
 children:ReactNode
}& ComponentPropsWithoutRef<T>;
export default function  Container<C extends ElementType>({as,children,...props}:ContainerProps<C>){
    const Component =as||"div";

    return(
        <Component {...props}>{children}</Component>
    );
}