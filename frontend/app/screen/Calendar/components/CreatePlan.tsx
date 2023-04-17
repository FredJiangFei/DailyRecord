import React from 'react';
import { Box, Button, IconButton, Row } from 'native-base';
import DrForm from '@sb/components/DrForm';
import DrFormControl from '@sb/components/DrFormControl';
import { useFormik } from 'formik';
import { AntDesign } from "@expo/vector-icons";

const initValue = {
  title: '',
  units: ''
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
           <IconButton size={8}  onPress={onClose}  variant="solid" borderRadius={50} _icon={{
              as: AntDesign,
              name: "close"
            }}/>
            <Button isDisabled={isSubmitting} onPress={(e: any) => handleSubmit(e)}>
              保存
            </Button>
          </Row>
          <DrFormControl
            label="Title"
            onChangeText={handleChange('title')}
            defaultValue={values.title}
            isRequired
            error={errors['title']}
          />
          <DrFormControl
            label="Units"
            onChangeText={handleChange('units')}
            defaultValue={values.units}
            isRequired
            error={errors['units']}
          />
        </DrForm>
      </Box>
    </>
  );
}
