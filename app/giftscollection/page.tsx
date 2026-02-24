import { redirect } from "next/navigation";
import React from "react";

const page = () => {
	redirect(
		"https://drive.google.com/file/d/1VNf3Wxr-q93L-Vn3sHXonOmtyN3e73D7/view?usp=drivesdk",
	);
	return <div>Gift Collections</div>;
};

export default page;
