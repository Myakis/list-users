import styled from 'styled-components';

interface InputType {
  disabled?: boolean;
  // value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const FormUI = styled.form``;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<InputType>`
  max-width: 211px;
  padding: 5px 10px;
  font-size: 10px;
  line-height: 12px;

  border: 1px solid #d8d8d8;
  border-radius: 5px;
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.4);
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.3);
  }
`;

interface TextAreaType {
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const Textarea = styled.textarea<any>`
  padding: 5px 10px;
  font-size: 10px;
  line-height: 12px;
  border: 1px solid #d8d8d8;
  border-radius: 5px;
  height: 55px;
  resize: none;
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.4);
  }
  &:disabled {
    color: rgba(0, 0, 0, 0.3);
  }
`;
