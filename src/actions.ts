type NominalType = void;

export abstract class Action {
    public type: string;
    public payload: any;

    constructor() {
        // Actions need to include the type property when serialised to JSON, but JSON.stringify ignores
        // properties on prototypes, so the Action base class needs to copy the type property from the
        // prototype to the instance of the action
        this.type = this.type;
    }
}

function ReduxAction(target: any) {
    target.prototype.type = target.name;
}

@ReduxAction
export class DoLogin extends Action {
    // private _brand: NominalType;

    constructor(public username: string, public password: string) {
        super();
        this.payload = {username, password};
    }
}

export function isType<T extends Action>(action: Action, actionType: string): action is T {
    return action.type === actionType;
}
