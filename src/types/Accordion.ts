export type AccordionHeaderProps = {
  heading: string
  isOpen: boolean
  onToggle: () => void
};

export type AccordionProps = {
  heading: string
  expanded: boolean
  children: JSX.Element
};
