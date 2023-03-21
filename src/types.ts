import { ReactNode } from "react";

export interface ContainerProps {
  children: any;
}

export interface LabelProps {
  className?: string;
  color?:
    | "primary"
    | "black"
    | "secondary"
    | "error"
    | "warning"
    | "success"
    | "info";
  children?: ReactNode;
}

export interface TitledComponentProps {
  xs: number;
  title: string;
  children: any;
  minHeight?: string;
}

export interface GraphProps {
  data: number[];
  chartName: string;
  subtitle: string;
}

export interface MissionProps {
    avatarBgColor: string;
    avatarShadowColor: string;
    seeReferrals: boolean;
    icon: any;
    title: string;
    subtitle: string;
  }

  export enum CommitOrder {
    A ="A",
    B="B",
    C="C"
  }
  export enum CommitNumber {
    ONE ="1",
    TWO="2",
    THREE="3"
  }
  export interface CommitProps {
    commitNumber: CommitNumber;
    subtitle: string;
    commitOrder: CommitOrder;
    secondSubtitle: string;
  }
