import { Message } from "@copilotkit/shared";

export interface ButtonProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface WindowProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  clickOutsideToClose: boolean;
  hitEscapeToClose: boolean;
  shortcut: string;
  children?: React.ReactNode;
}

export interface HeaderProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface SuggestionsProps {
  title: string;
  message: string;
  partial?: boolean;
  className?: string;
  onClick: (message: string) => void;
}

export interface MessagesProps {
  messages: Message[];
  inProgress: boolean;
  children?: React.ReactNode;
}

export interface InputProps {
  inProgress: boolean;
  onSend: (text: string) => Promise<Message>;
  isVisible?: boolean;
}

export interface ResponseButtonProps {
  onClick: () => void;
  inProgress: boolean;
}
