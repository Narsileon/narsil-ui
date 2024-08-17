import "vendor/narsil/ui/resources/css/app.scss";
import { createRoot } from "react-dom/client";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import * as React from "react";

interface Props {
	layout: React.ReactNode;
}

export const getInertiaAppOptions = ({ layout }: Props) => {
	return {
		progress: {
			color: "var(--primary)",
		},
		resolve: async (name: string) => {
			const [vendor, path] = name.includes("::") ? name.split("::") : [null, name];

			const pages = import.meta.glob(
				vendor ? `../../vendor/${vendor}/resources/js/Pages/${path}.tsx` : "./Pages/**/*.tsx",
				{ eager: true }
			);

			return resolvePageComponent(path, pages as any).then((module: any) => {
				module.default.layout = module.default.layout || layout;

				return module;
			});
		},
		setup({ el, App, props }: { el: any; App: any; props: any }) {
			return createRoot(el).render(<App {...props} />);
		},
	};
};
