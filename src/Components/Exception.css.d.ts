declare namespace ExceptionCssNamespace {
	export interface IExceptionCss {
		customMessage: string;
		exception: string;
		exceptionRow: string;
		message: string;
		previous: string;
		trace: string;
	}
}

declare const ExceptionCssModule: ExceptionCssNamespace.IExceptionCss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: ExceptionCssNamespace.IExceptionCss;
};

export = ExceptionCssModule;
