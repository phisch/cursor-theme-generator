import { Type, Static } from '@sinclair/typebox'

type CY = Static<typeof CY>;
export const CY = Type.Object({
    name: Type.Literal("cy"),
    arguments: Type.Tuple([
        Type.Number()
    ])
});
