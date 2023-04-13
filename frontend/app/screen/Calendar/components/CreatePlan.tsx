import React from 'react';
import { Box, Button, Row } from 'native-base';
import DrForm from '@sb/components/DrForm';
import DrFormControl from '@sb/components/DrFormControl';
import { useFormik } from 'formik';

const initValue = {
  title: '',
};

export default function CreatePlan({ onSubmt, onClose }) {
  const { handleSubmit, handleChange, isSubmitting, values, errors } = useFormik({
    initialValues: initValue,
    onSubmit: values => onSubmt(values),
  });

  return (
    <>
      <Box px={1}>
        <DrForm>
          <Row justifyContent="space-between" my={1}>
            <Button onPress={onClose}>Close</Button>
            <Button isDisabled={isSubmitting} onPress={(e: any) => handleSubmit(e)}>
              Save
            </Button>
          </Row>
          <DrFormControl
            label="Title"
            onChangeText={handleChange('title')}
            defaultValue={values.title}
            isRequired
            error={errors['title']}
          />
        </DrForm>
      </Box>
    </>
  );
}
