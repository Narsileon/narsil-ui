import { createRoot } from "react-dom/client";

interface Props {
	layout: (path: string) => void;
}

export const getInertiaAppOptions = ({ layout }: Props) => {
	return {
		progress: {
			color: "var(--primary)",
		},
		resolve: async (name: string) => {
			const [vendor, path] = name.includes("::") ? name.split("::") : [null, name];

			const pages = vendor
				? import.meta.glob("@/../../vendor/narsil/**/resources/js/Pages/**/*.tsx", { eager: true })
				: import.meta.glob("@/Pages/**/*.tsx", { eager: true });

			let page: any =
				pages[vendor ? `/vendor/${vendor}/resources/js/Pages/${path}.tsx` : `/resources/js/Pages/${path}.tsx`];

			page.default.layout = page.default.layout || layout(path);

			return page;
		},
		setup({ el, App, props }: { el: any; App: any; props: any }) {
			return createRoot(el).render(<App {...props} />);
		},
	};
};
