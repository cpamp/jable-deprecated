

import { DeprecatedClass } from "../DeprecatedClass";
import { DeprecatedMethod } from "../DeprecatedMethod";

@DeprecatedClass()
export class Deprecated {
    @DeprecatedMethod()
    public test() {

    }
}

var t = new Deprecated();
t.test();