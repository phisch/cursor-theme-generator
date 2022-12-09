import { Type, Static } from '@sinclair/typebox'

type Skew = Static<typeof Skew>;
export const Skew = Type.Object({
    name: Type.Literal("skew"),
    arguments: Type.Tuple([
        Type.Number(),
        Type.Number()
    ])
});
