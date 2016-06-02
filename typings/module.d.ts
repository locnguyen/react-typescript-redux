interface IModule {
    exports?:any;
}

interface IHotModule extends IModule {
    hot?: {
        accept: (path?: string, callback?: () => void) => void
    }
}

interface IProcess {
    env:any
}

/* tslint:disable */
declare const process:IProcess;

declare const module:IHotModule;
/* tslint:enable */