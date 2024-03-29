import { type Static, Type } from "@sinclair/typebox";

// TODO: support ellipses (which take 2 arguments)
type Radius = Static<typeof Radius>;
export const Radius = Type.Object({
	name: Type.Literal("radius"),
	arguments: Type.Object({
		radius: Type.Number(),
	}),
});
