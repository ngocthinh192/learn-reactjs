import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short').max(20, 'title is too long'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" lable="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
