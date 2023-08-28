/* eslint "@typescript-eslint/explicit-function-return-type": ["error", {allowTypedFunctionExpressions: true}] */
// https://typescript-eslint.io/rules/explicit-function-return-type/#allowtypedfunctionexpressions

import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ConcreteButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function Example(): ReactNode {
  // 1. correctly not inferrable for allowTypedFunctionExpressions
  const weakButtonProps = {
    onClick: (e: unknown) => {
      console.log(e);
    },
  };

  // 2. correctly inferrable for allowTypedFunctionExpressions
  const concreteButtonProps: ConcreteButtonProps = {
    onClick: (e) => {
      console.log(e);
    },
  };

  return (
    <div>
      <button {...weakButtonProps} />
      <button {...concreteButtonProps} />
      <button
        // 3. incorrectly not inferrable for allowTypedFunctionExpressions
        onClick={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}
