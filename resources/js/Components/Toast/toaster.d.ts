type ToastActionType = typeof import("./use-toast").actionTypes;

type ToastType = ToastProps & {
	action?: React.ReactElement<typeof import("./ToastAction")>;
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
