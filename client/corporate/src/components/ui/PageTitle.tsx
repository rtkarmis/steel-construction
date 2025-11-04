interface PageTitleProps {
  text: string;
  color?: string;
}

export default function PageTitle({ text, color }: PageTitleProps) {
  return (
    <h1
      className={`text-3xl md:text-4xl font-bold text-center mb-10 ${
        color ? color : "text-text"
      }`}
    >
      {text}
    </h1>
  );
}
