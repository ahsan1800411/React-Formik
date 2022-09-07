import Input from './Input';

export default function FormikControl({ control, ...rest }) {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
    case 'checkbox':
    case 'select':
    case 'radio':
    case 'date':

    default:
      return null;
  }
}
