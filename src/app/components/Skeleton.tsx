"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonLoading = () => {
	const skeletonAmount = 8;

	return (
		<>
			{Array.from(Array(skeletonAmount).keys()).map((value) => (
				<Skeleton
					key={value}
					inline={false}
					count={5}
					containerClassName="skeleton"
					width="218px"
					height="10px"
					style={{ gap: "2rem", padding: "0.8rem" }}
				/>
			))}
		</>
	);
};
