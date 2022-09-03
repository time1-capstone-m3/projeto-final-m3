import {FormContainer, FormContent} from "./style"
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode,
}

const Form = ({children}:FormProps) => {
  return (
    <FormContainer className="bg-white shadow">
      <FormContent>
        {children}
      </FormContent>
    </FormContainer>
  )
}

export default Form