import { Fragment, type ReactNode } from "react";

/** Divide um título em linhas para a animação de entrada por máscara. */
export function SplitLines({ lines }: { lines: ReactNode[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          <span className="split-line">
            <span>{line}</span>
          </span>
        </Fragment>
      ))}
    </>
  );
}
