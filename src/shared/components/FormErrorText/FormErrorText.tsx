export interface FormErrorTextProps {
  errorMessage: string;
}

const FormErrorText: React.FC<FormErrorTextProps> = ({ errorMessage }) => {
  return <>{errorMessage && <p className="text-red-400">{errorMessage}</p>}</>;
};

export default FormErrorText;
