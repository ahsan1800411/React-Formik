import Input from './Input';
import TextArea from './TextArea';

export default function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <TextArea {...rest} />;
    case 'checkbox':
    case 'select':
    case 'radio':
    case 'date':

    default:
      return null;
  }
}
