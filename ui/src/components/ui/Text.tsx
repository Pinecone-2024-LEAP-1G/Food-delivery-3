type TextType = {
  text: string;
};

export const Text = ({ text }: TextType) => {
  return <p>{text}</p>;
};
