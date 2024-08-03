type SectionState = {
	isFullscreen: boolean;
};

type SectionAction = {
	toggleFullscreen: () => void;
};

type SectionType = SectionState & SectionAction;

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}
