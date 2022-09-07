export default function FormikControl({ control }) {
  switch (control) {
    case 'input':
    case 'textarea':
    case 'checkbox':
    case 'select':
    case 'radio':
    case 'date':
      break;
    default:
      return null;
  }
}
