import React from "react";

export interface MetaProps {
  keeplive?: boolean;
  title: string;
  key?: string;
  requiresAuth?: boolean;
}

export interface RouteObject {
  path?: string;
  element?: React.ReactNode;
  caseSensitive?: boolean;
  index?: boolean;
  meta?: MetaProps;
  isLink?: boolean;
  children?: RouteObject[];
}