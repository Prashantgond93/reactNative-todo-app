import React from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';

interface TextInputProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChangeText,
}) => {
  return (
    <RNTextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default TextInput;
