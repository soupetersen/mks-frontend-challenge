"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { CartContextProvider } from "./contexts/CartContext";

export function Providers(props: { children: React.ReactNode }) {
	const [queryClient] = React.useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 1000,
					},
				},
			}),
	);

	return (
		<CartContextProvider>
			<QueryClientProvider client={queryClient}>
				<ReactQueryStreamedHydration>
					<StyledComponentsRegistry>
						<GlobalStyles />
						<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
					</StyledComponentsRegistry>
				</ReactQueryStreamedHydration>
				{<ReactQueryDevtools initialIsOpen={false} />}
			</QueryClientProvider>
		</CartContextProvider>
	);
}
