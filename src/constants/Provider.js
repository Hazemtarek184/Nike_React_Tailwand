import { createContext, useContext } from "react";



export const myContext_Init = createContext(null);

export function TolpaContextV2() {
    const useContextInFunction = useContext(myContext_Init);

    if (useContextInFunction === undefined) {
        throw new Error(" use context must have vaalue");
    }

    return useContextInFunction;

}