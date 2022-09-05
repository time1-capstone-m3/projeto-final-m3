import FormDiv from "./style";
import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
}

const FormContainer = ({ children }: FormProps) => {
  return <FormDiv className="bg-white shadow">{children}</FormDiv>;
};

export default FormContainer;
