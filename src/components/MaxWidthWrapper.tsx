import { cn } from "@/lib/utils"
import { ReactNode } from "react"
//im importing the cn helper function from our utils file inside lib which came from installing  shadcn-ui@latest init 
 //cn is a helper function that takes in a className and children as props
const MaxWidthWrapper = ({ className, children, }:{
    //I created a custom component called MaxWidthWrapper that takes in a className and children as props
    //import reactNode from react becasue we are using reactNode as a type for children
    //ReactNode is a type that represents anything that can be rendered as children of a React component
    className?:string 
    children:ReactNode}) => {

    return (
       
        <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
          {children}
        </div>
    )
}
export default MaxWidthWrapper