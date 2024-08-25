import { ToastProps } from "./Toast";
import * as React from "react";
import ToastAction from "./ToastAction";

export const actionTypes = {
	ADD_TOAST: "ADD_TOAST",
	UPDATE_TOAST: "UPDATE_TOAST",
	DISMISS_TOAST: "DISMISS_TOAST",
	REMOVE_TOAST: "REMOVE_TOAST",
} as const;

type ToastActionType = typeof actionTypes;

type ToastType = ToastProps & {
	action?: React.ReactElement<typeof ToastAction>;
	description?: React.ReactNode;
	id: string;
};

type ToastAction =
	| {
			type: ToastActionType["ADD_TOAST"];
			toast: ToastType;
	  }
	| {
			type: ToastActionType["UPDATE_TOAST"];
			toast: Partial<ToastType>;
	  }
	| {
			type: ToastActionType["DISMISS_TOAST"];
			toastId?: ToastType["id"];
	  }
	| {
			type: ToastActionType["REMOVE_TOAST"];
			toastId?: ToastType["id"];
	  };

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
	count = (count + 1) % Number.MAX_SAFE_INTEGER;
	return count.toString();
}

interface State {
	toasts: ToastType[];
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
	if (toastTimeouts.has(toastId)) {
		return;
	}

	const timeout = setTimeout(() => {
		toastTimeouts.delete(toastId);
		dispatch({
			type: "REMOVE_TOAST",
			toastId: toastId,
		});
	}, TOAST_REMOVE_DELAY);

	toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: ToastAction): State => {
	switch (action.type) {
		case "ADD_TOAST":
			return {
				...state,
				toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
			};

		case "UPDATE_TOAST":
			return {
				...state,
				toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
			};

		case "DISMISS_TOAST": {
			const { toastId } = action;

			// ! Side effects ! - This could be extracted into a dismissToast() action,
			// but I'll keep it here for simplicity
			if (toastId) {
				addToRemoveQueue(toastId);
			} else {
				state.toasts.forEach((toast) => {
					addToRemoveQueue(toast.id);
				});
			}

			return {
				...state,
				toasts: state.toasts.map((toast) =>
					toast.id === toastId || toastId === undefined
						? {
								...toast,
								open: false,
							}
						: toast
				),
			};
		}
		case "REMOVE_TOAST":
			if (action.toastId === undefined) {
				return {
					...state,
					toasts: [],
				};
			}
			return {
				...state,
				toasts: state.toasts.filter((t) => t.id !== action.toastId),
			};
	}
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

function dispatch(action: ToastAction) {
	memoryState = reducer(memoryState, action);
	listeners.forEach((listener) => {
		listener(memoryState);
	});
}

type Toast = Omit<ToastType, "id">;

function toast({ ...props }: Toast) {
	const id = genId();

	const update = (props: ToastType) =>
		dispatch({
			type: "UPDATE_TOAST",
			toast: { ...props, id },
		});
	const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

	dispatch({
		type: "ADD_TOAST",
		toast: {
			...props,
			id,
			open: true,
			onOpenChange: (open) => {
				if (!open) dismiss();
			},
		},
	});

	return {
		id: id,
		dismiss,
		update,
	};
}

function useToast() {
	const [state, setState] = React.useState<State>(memoryState);

	React.useEffect(() => {
		listeners.push(setState);
		return () => {
			const index = listeners.indexOf(setState);
			if (index > -1) {
				listeners.splice(index, 1);
			}
		};
	}, [state]);

	return {
		...state,
		toast,
		dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
	};
}

export { toast, useToast };
