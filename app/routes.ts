import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./routes/_layout.tsx", [
        index("./routes/index.tsx"),
        route("/privacy-policy", "./routes/privacy-policy/index.tsx"),
        route("/terms-and-conditions", "./routes/terms-and-conditions/index.tsx"),
    ])
] satisfies RouteConfig;