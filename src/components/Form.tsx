import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react"

type FormProps=ComponentPropsWithoutRef<'form'>&{
    onSave:(value:unknown)=>void
}

export type  FormHandle={
    clear:()=>void
}

const Form= forwardRef<FormHandle,FormProps>(function Form(props:FormProps,ref){
    const form=useRef<HTMLFormElement>(null);

    useImperativeHandle(ref,()=>{
        return {
            clear(){
                console.log("clean")
                form.current?.reset()
            }
        }
    });

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();

        const formData=new FormData(event.currentTarget);
        const data=Object.fromEntries(formData);
        props.onSave(data);
        form.current?.reset();
    }

    return( <form onSubmit={handleSubmit}{...props} ref={form}>
        {props.children}
    </form>);

});

export default Form;

