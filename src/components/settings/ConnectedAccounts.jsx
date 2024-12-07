import { useState } from "react";
import SettingSection from "./SettingSection";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
					<path
						fill="#FFC107"
						d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
					<path
						fill="#FF3D00"
						d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
					></path>
					<path
						fill="#4CAF50"
						d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
					></path>
					<path
						fill="#1976D2"
						d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
					></path>
				</svg>
			),
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
					<path
						fill="#1877F2"
						d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"
					></path>
					<path
						fill="#fff"
						d="M31.48 24.1h-5.39v17.96h-6.44v-17.96h-3.77V18.64h3.77v-4.73c0-3.7 2.19-5.99 5.61-5.99 1.63 0 3.27.12 3.83.17v5.01h-2.7c-2.11 0-2.72 1.01-2.72 2.55v3.12h5.42l-.69 5.46z"
					></path>
				</svg>
			),
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
					<path
						fill="#1DA1F2"
						d="M48 9.533c-1.77.786-3.67 1.317-5.66 1.555 2.03-1.22 3.595-3.152 4.32-5.446-1.9 1.12-4.01 1.918-6.26 2.355-1.79-1.91-4.36-3.115-7.19-3.115-5.44 0-9.87 4.437-9.87 9.87 0 .77.09 1.52.26 2.24C11.28 17.49 5.85 14.94 2.35 11.07c-.83 1.42-1.3 3.07-1.3 4.83 0 3.34 1.7 6.29 4.28 8.02-1.58-.05-3.07-.48-4.38-1.19v.12c0 4.66 3.31 8.56 7.7 9.43-1.5 1.12-3.39 1.79-5.44 1.79-1.28 0-2.53-.12-3.76-.36 2.54 7.94 9.9 13.68 18.6 13.68 22.35 0 34.6-18.53 34.6-34.6 0-.53-.01-1.05-.04-1.57 2.37-1.71 4.41-3.86 6.03-6.34z"
					></path>
				</svg>
			),
		},
	]);

	return (
		<SettingSection icon={HelpCircle} title={"Connected Accounts"}>
			{connectedAccounts.map((account) => (
				<div key={account.id} className="flex items-center justify-between py-3">
					<div className="flex gap-1 items-center">
						<div className="w-6 h-6">{account.icon}</div>
						<span className="text-gray-300">{account.name}</span>
					</div>
					<button
						className={`px-3 py-1 rounded ${
							account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
						} transition duration-200`}
						onClick={() => {
							setConnectedAccounts(
								connectedAccounts.map((acc) => {
									if (acc.id === account.id) {
										return {
											...acc,
											connected: !acc.connected,
										};
									}
									return acc;
								})
							);
						}}
					>
						{account.connected ? "Connected" : "Connect"}
					</button>
				</div>
			))}
			<button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
				<Plus size={18} className="mr-2" /> Add Account
			</button>
		</SettingSection>
	);
};

export default ConnectedAccounts;
