"use client";

import { CodeHighlight, HighlightProvider } from "@mantine/code-highlight-lite";
import hljs from "highlight.js/lib/core";
hljs.registerLanguage(
  "plaintext",
  require("highlight.js/lib/languages/plaintext")
);
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage(
  "typescript",
  require("highlight.js/lib/languages/typescript")
);

const exampleCode = `
// VisuallyHidden component source code
import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  Factory,
} from '../../core';
import classes from './VisuallyHidden.module.css';

export type VisuallyHiddenStylesNames = 'root';

export interface VisuallyHiddenProps
  extends BoxProps,
    StylesApiProps<VisuallyHiddenFactory>,
    ElementProps<'div'> {}

export type VisuallyHiddenFactory = Factory<{
  props: VisuallyHiddenProps;
  ref: HTMLDivElement;
  stylesNames: VisuallyHiddenStylesNames;
}>;

const defaultProps: Partial<VisuallyHiddenProps> = {};

export const VisuallyHidden = factory<VisuallyHiddenFactory>((_props, ref) => {
  const props = useProps('VisuallyHidden', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;

  const getStyles = useStyles<VisuallyHiddenFactory>({
    name: 'VisuallyHidden',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  return <Box component="span" ref={ref} {...getStyles('root')} {...others} />;
});

VisuallyHidden.classes = classes;
VisuallyHidden.displayName = '@mantine/core/VisuallyHidden';
`;

export default function Home() {
  return (
    <HighlightProvider highlightInstance={hljs}>
      <div style={{ maxWidth: 1000, padding: 10 }}>
        aaaaaa
        <CodeHighlight code={exampleCode} language="typescript" />
      </div>
    </HighlightProvider>
  );
}
