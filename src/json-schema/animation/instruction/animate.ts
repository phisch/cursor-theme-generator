import { JSONSchemaType } from "ajv";
import { Animate } from "../../../models/animation/instruction/animate";

export const animateSchema: JSONSchemaType<Animate> = {
    type: "object",
    properties: {
        name: {
            type: "string",
            const: "animate"
        },
        arguments: {
            type: "array",
            items: [
                {
                    type: "number",
                    default: 1000,
                    description: "Duration in milliseconds."
                },
                {
                    type: "number",
                    default: 0,
                    description: "Delay in milliseconds."
                },
                {
                    type: "string",
                    enum: ["now", "absolute", "relative", "last"],
                    default: "now",
                    description: "Specifies the start point of an animation. https://svgjs.dev/docs/3.0/animating/#animate"
                }
            ],
            minItems: 3,
            additionalItems: false
        }
    },
    required: ["name", "arguments"],
}