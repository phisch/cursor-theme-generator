import { type Static, Type } from "@sinclair/typebox";

// TODO: implement x and y (2 arguments) scaling and scale center point (3 arguments)
type Scale = Static<typeof Scale>;
export const Scale = Type.Object({
	name: Type.Literal("scale"),
	arguments: Type.Object({
		factor: Type.Number(),
	}),
});
