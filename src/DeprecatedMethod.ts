import { logDeprecated } from "./logDeprecated";

export function DeprecatedMethod() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var oldFunc = target[propertyKey];
        descriptor.value = function(...args: any[]) {
            logDeprecated(target.constructor.name + '.' + propertyKey);
            return oldFunc.apply(this, args);
        }
    };
}