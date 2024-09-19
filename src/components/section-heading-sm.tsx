import { ReactNode } from "react";

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeadingSmall = ({ heading, content }: TProps) => {
  return (
    <div className="mb-10 pt-0 text-center">
      <h2 className="text-xl font-medium tracking-tighter">{heading}</h2>
      {content && (
        <p className="text-muted-foreground mt-2 text-sm">{content}</p>
      )}
    </div>
  );
};
