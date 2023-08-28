/* eslint "@typescript-eslint/explicit-function-return-type": 2 */
// default configuration includes allowTypedFunctionExpressions: true

import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ConcreteButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Home(): ReactNode {
  // correctly not inferrable for allowTypedFunctionExpressions
  const weakButtonProps = {
    onClick: (e: unknown) => {
      console.log(e);
    },
  };

  // correctly inferrable for allowTypedFunctionExpressions
  const concreteButtonProps: ConcreteButtonProps = {
    onClick: (e) => {
      console.log(e);
    },
  };

  return (
    <div className="App">
      <button {...weakButtonProps} />
      <button {...concreteButtonProps} />
      <button
        // incorrectly not inferrable for allowTypedFunctionExpressions
        onClick={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}
