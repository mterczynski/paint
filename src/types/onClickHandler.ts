import * as React from 'react';
export type ReactOnClickHandler<T = Element> = ((event: React.MouseEvent<T, MouseEvent>) => void) | undefined;
